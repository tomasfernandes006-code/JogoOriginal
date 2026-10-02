import * as THREE from 'three';
import { CONFIG, PALETTE } from './config.js';
import { approachAngle, distance2D } from './utils.js';

/**
 * Guia do objetivo atual (duas partes):
 *  A) seta 3D no chao, perto do jogador, girando para o alvo e flutuando;
 *  B) marcador no alvo (anel + pilar de luz) e, quando o alvo esta fora da
 *     tela, uma seta na borda com a distancia em metros.
 * Tudo e geometria basica gerada por codigo: sem assets externos.
 * A seta e o marcador somem quando o passo nao tem alvo ou quando o
 * jogador chega perto (CONFIG.guide.hideDistance).
 */

/** Seta achatada apontando para +Z (mesma convencao de yaw dos modelos). */
function createArrow() {
  const group = new THREE.Group();
  group.name = 'guide-arrow';

  const material = new THREE.MeshStandardMaterial({
    color: PALETTE.guideArrow,
    emissive: PALETTE.guideArrow,
    emissiveIntensity: 0.55,
    roughness: 0.4,
  });

  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.07, 1.0), material);
  shaft.position.z = -0.25;
  group.add(shaft);

  // o cone nasce apontando para +Y; girando em X a ponta vai para +Z
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.7, 4), material);
  head.rotation.x = Math.PI / 2;
  head.position.z = 0.62;
  group.add(head);

  const halo = new THREE.Mesh(
    new THREE.CircleGeometry(0.72, 20),
    new THREE.MeshBasicMaterial({
      color: PALETTE.guideArrow,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = -0.05;
  group.add(halo);

  return group;
}

/** Marcador do alvo: anel no chao + pilar de luz translucido. */
function createMarker() {
  const group = new THREE.Group();
  group.name = 'guide-marker';
  const c = CONFIG.guide.marker;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(c.ringInner, c.ringOuter, 40),
    new THREE.MeshBasicMaterial({
      color: PALETTE.guideBeam,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  group.add(ring);

  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(c.pillarTopRadius, c.pillarBottomRadius, c.pillarHeight, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: PALETTE.guideBeam,
      transparent: true,
      opacity: c.pillarOpacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  pillar.position.y = c.pillarHeight / 2;
  group.add(pillar);

  const light = new THREE.PointLight(PALETTE.guideBeam, c.lightIntensity, c.lightDistance, 2);
  light.position.y = 1.2;
  group.add(light);

  return { group, ring, pillar };
}


export class GuideSystem {
  constructor({ scene, camera }) {
    this.camera = camera;
    this.arrow = createArrow();
    this.marker = createMarker();
    scene.add(this.arrow);
    scene.add(this.marker.group);

    this.arrowYaw = 0;
    this.elapsed = 0;
    this.visible = false;

    this.screen = new THREE.Vector3();

    this.edgeEl = document.getElementById('guide-edge');
    this.edgeArrowEl = document.getElementById('guide-edge-arrow');
    this.edgeDistanceEl = document.getElementById('guide-edge-distance');

    this.hide();
  }

  hide() {
    this.visible = false;
    this.arrow.visible = false;
    this.marker.group.visible = false;
    this.hideEdgeArrow();
  }

  hideEdgeArrow() {
    if (this.edgeEl && !this.edgeEl.classList.contains('hidden')) {
      this.edgeEl.classList.add('hidden');
    }
  }

  /**
   * Atualiza o guia.
   * ctx: { playerPosition, target } - target e { x, z } ou null.
   */
  update(dt, ctx) {
    this.elapsed += dt;
    const target = ctx.target;

    if (!target) {
      this.hide();
      return;
    }

    const player = ctx.playerPosition;
    const distance = distance2D(player.x, player.z, target.x, target.z);
    if (distance <= CONFIG.guide.hideDistance) {
      this.hide();
      return;
    }

    this.visible = true;
    this.arrow.visible = true;
    this.marker.group.visible = true;

    this.updateArrow(dt, player, target);
    this.updateMarker(target);
    this.updateEdgeArrow(target, distance);
  }

  /** (A) seta 3D no chao, a frente do jogador, apontando para o alvo. */
  updateArrow(dt, player, target) {
    const c = CONFIG.guide.arrow;
    const dx = target.x - player.x;
    const dz = target.z - player.z;
    const length = Math.hypot(dx, dz) || 1;

    // fica entre o jogador e o alvo, sobre o chao
    this.arrow.position.set(
      player.x + (dx / length) * c.distance,
      0.18 + Math.sin(this.elapsed * c.bobSpeed) * c.bobAmplitude,
      player.z + (dz / length) * c.distance,
    );

    const desiredYaw = Math.atan2(dx, dz);
    this.arrowYaw = approachAngle(this.arrowYaw, desiredYaw, c.turnLambda * dt);
    this.arrow.rotation.y = this.arrowYaw;
  }

  /** (B) anel + pilar de luz no alvo, com pulso suave. */
  updateMarker(target) {
    const c = CONFIG.guide.marker;
    const pulse = Math.sin(this.elapsed * c.pulseSpeed);
    this.marker.group.position.set(target.x, 0, target.z);
    this.marker.ring.scale.setScalar(1 + pulse * c.ringPulse);
    this.marker.pillar.material.opacity = c.pillarOpacity * (0.75 + pulse * 0.25);
  }

  /**
   * (B) Seta na borda da tela quando o alvo esta fora do campo de visao,
   * com a distancia em metros. Se o alvo esta visivel, esconde.
   */
  updateEdgeArrow(target, distance) {
    if (!this.edgeEl || !this.edgeArrowEl || !this.edgeDistanceEl) return;

    const c = CONFIG.guide;
    this.screen.set(target.x, c.arrow.headHeight, target.z).project(this.camera);

    // atras da camera: o ponto projetado vira, e preciso espelhar x/y
    const behind = this.screen.z > 1;
    let x = this.screen.x;
    let y = this.screen.y;
    if (behind) {
      x = -x;
      y = -y;
    }

    const onScreen = !behind && Math.abs(x) <= 1 && Math.abs(y) <= 1;
    if (onScreen) {
      this.hideEdgeArrow();
      return;
    }

    // direcao da borda: normaliza e projeta na moldura util da tela
    const length = Math.hypot(x, y) || 1;
    const dirX = x / length;
    const dirY = y / length;

    const halfW = Math.max(1, window.innerWidth / 2 - c.edge.margin);
    const halfH = Math.max(1, window.innerHeight / 2 - c.edge.margin);
    const border = Math.min(halfW / Math.max(Math.abs(dirX), 1e-4), halfH / Math.max(Math.abs(dirY), 1e-4));

    const left = window.innerWidth / 2 + dirX * border;
    const top = window.innerHeight / 2 - dirY * border;
    const angle = Math.atan2(-dirY, dirX);

    this.edgeEl.classList.remove('hidden');
    this.edgeEl.style.left = `${left.toFixed(1)}px`;
    this.edgeEl.style.top = `${top.toFixed(1)}px`;
    // CSS gira em sentido horario: o angulo do mundo precisa ser invertido
    this.edgeArrowEl.style.transform = `rotate(${(-angle * 180 / Math.PI).toFixed(1)}deg)`;

    const label = `${Math.round(distance)} m`;
    if (this.edgeDistanceEl.textContent !== label) this.edgeDistanceEl.textContent = label;
  }

  reset() {
    this.arrowYaw = 0;
    this.hide();
  }
}

