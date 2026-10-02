import * as THREE from 'three';
import { CONFIG, PALETTE } from './config.js';
import { clamp, damp, lerp, resolveCollisions, approachAngle } from './utils.js';

/**
 * Entrada do jogador: teclado, mouse (pointer lock com fallback de arrastar)
 * e roda do mouse. Expõe "wasPressed" para acoes de um toque (E, R).
 */
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.mouseDelta = { x: 0, y: 0 };
    this.wheelDelta = 0;
    this.pointerLocked = false;
    this.dragging = false;

    this.onKeyDown = (event) => {
      if (!this.keys.has(event.code)) this.pressed.add(event.code);
      this.keys.add(event.code);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
        event.preventDefault();
      }
    };
    this.onKeyUp = (event) => this.keys.delete(event.code);
    this.onBlur = () => this.keys.clear();

    this.onMouseMove = (event) => {
      if (this.pointerLocked || this.dragging) {
        this.mouseDelta.x += event.movementX || 0;
        this.mouseDelta.y += event.movementY || 0;
      }
    };
    this.onMouseDown = (event) => {
      if (event.button === 2) {
        if (document.exitPointerLock) document.exitPointerLock();
        return;
      }
      this.dragging = true;
      this.canvas.style.cursor = 'grabbing';
    };
    this.onMouseUp = () => {
      this.dragging = false;
      this.canvas.style.cursor = 'default';
    };
    this.onWheel = (event) => {
      this.wheelDelta += event.deltaY;
      event.preventDefault();
    };
    this.onContextMenu = (event) => event.preventDefault();
    this.onPointerLockChange = () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
    };
    this.onCanvasClick = () => {
      if (this.pointerLocked) return;
      try {
        const request = this.canvas.requestPointerLock?.();
        if (request && typeof request.catch === 'function') request.catch(() => {});
      } catch (error) {
        // pointer lock indisponivel: o jogador ainda pode girar arrastando o mouse
      }
    };

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('pointerlockchange', this.onPointerLockChange);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    canvas.addEventListener('contextmenu', this.onContextMenu);
    canvas.addEventListener('click', this.onCanvasClick);
  }

  isDown(code) {
    return this.keys.has(code);
  }

  wasPressed(code) {
    return this.pressed.has(code);
  }

  consumeMouseDelta() {
    const delta = { x: this.mouseDelta.x, y: this.mouseDelta.y };
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
    return delta;
  }

  consumeWheel() {
    const value = this.wheelDelta;
    this.wheelDelta = 0;
    return value;
  }

  /** Limpa teclas "pressionadas neste frame". */
  endFrame() {
    this.pressed.clear();
  }

  dispose() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('pointerlockchange', this.onPointerLockChange);
    this.canvas.removeEventListener('wheel', this.onWheel);
    this.canvas.removeEventListener('contextmenu', this.onContextMenu);
    this.canvas.removeEventListener('click', this.onCanvasClick);
  }
}

/**
 * Jogador: um "NPC" como os outros, mas com controle proprio.
 * WASD para andar, corpo gira suavemente, colisao simples e bob ao caminhar.
 */
export class Player {
  constructor({ scene, world }) {
    this.world = world;
    this.object = new THREE.Group();
    this.object.name = 'player';
    this.moveSpeed = 0;
    this.bobPhase = 0;
    this.facing = 0;

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.36, 0.95, 6, 14),
      new THREE.MeshStandardMaterial({ color: PALETTE.playerBody, roughness: 0.6 }),
    );
    body.position.y = 0.9;
    body.castShadow = true;
    this.object.add(body);
    this.body = body;

    const accent = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.5, 0.24),
      new THREE.MeshStandardMaterial({ color: PALETTE.playerAccent, roughness: 0.5 }),
    );
    accent.position.set(0, 1.05, -0.32);
    accent.castShadow = true;
    this.object.add(accent);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 16, 12),
      new THREE.MeshStandardMaterial({ color: PALETTE.npcSkin, roughness: 0.7 }),
    );
    head.position.y = 1.72;
    head.castShadow = true;
    this.object.add(head);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.72, 24),
      new THREE.MeshBasicMaterial({
        color: PALETTE.playerAccent, transparent: true, opacity: 0.4, side: THREE.DoubleSide,
      }),
    );
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = 0.06;
    this.object.add(halo);
    this.halo = halo;

    // materiais que ficam translucidos nos poderes (invisibilidade / parede)
    this.ghostMaterials = [body.material, accent.material, head.material];
    this.ghostLevel = 0;

    this.reset();
    scene.add(this.object);
  }

  /** O jogador esta andando? (usado pelo som dos passos) */
  get isMoving() {
    return this.moveSpeed > 0.8;
  }

  /**
   * Visual dos poderes: 0 = normal; 1 = bem translucido.
   * `tint` (hex) colore o corpo enquanto o poder esta ligado.
   */
  setGhost(level, tint = null, time = 0) {
    const value = Math.max(0, Math.min(1, level));
    if (value === 0 && this.ghostLevel === 0) return;
    this.ghostLevel = value;
    const flicker = value > 0 ? 0.65 + 0.35 * Math.sin(time * 38) * Math.sin(time * 11) : 1;
    const opacity = value > 0 ? Math.max(0.12, (1 - value * 0.78) * flicker) : 1;
    for (let i = 0; i < this.ghostMaterials.length; i += 1) {
      const mat = this.ghostMaterials[i];
      mat.transparent = value > 0;
      mat.opacity = opacity;
      mat.depthWrite = value === 0;
      mat.emissive.setHex(value > 0 && tint !== null ? tint : 0x000000);
      mat.emissiveIntensity = value > 0 ? 0.55 : 0;
      mat.needsUpdate = false;
    }
  }

  /** Tira o jogador de dentro de paredes (fim do poder de atravessar). */
  pushOutOfWalls() {
    for (let i = 0; i < 3; i += 1) {
      resolveCollisions(
        this.object.position,
        CONFIG.player.radius,
        this.world.rects,
        this.world.circles,
        CONFIG.world.bounds,
      );
    }
  }

  get position() {
    return this.object.position;
  }

  reset() {
    this.object.position.set(CONFIG.player.spawn.x, 0, CONFIG.player.spawn.z);
    this.facing = 0;
    this.object.rotation.y = 0;
    this.moveSpeed = 0;
  }

  teleport(x, z) {
    this.object.position.set(x, 0, z);
  }

  update(dt, input, cameraYaw, skipHouseId = null) {
    const forward = { x: -Math.sin(cameraYaw), z: -Math.cos(cameraYaw) };
    const right = { x: -forward.z, z: forward.x };

    let ax = 0;
    let az = 0;
    if (input.isDown('KeyW') || input.isDown('ArrowUp')) { ax += forward.x; az += forward.z; }
    if (input.isDown('KeyS') || input.isDown('ArrowDown')) { ax -= forward.x; az -= forward.z; }
    if (input.isDown('KeyD') || input.isDown('ArrowRight')) { ax += right.x; az += right.z; }
    if (input.isDown('KeyA') || input.isDown('ArrowLeft')) { ax -= right.x; az -= right.z; }

    const isRunning = input.isDown('ShiftLeft') || input.isDown('ShiftRight');
    const speed = CONFIG.player.walkSpeed * (isRunning ? CONFIG.player.runMultiplier : 1);
    const length = Math.hypot(ax, az);
    const moving = length > 0.001;

    if (moving) {
      ax /= length;
      az /= length;
      this.object.position.x += ax * speed * dt;
      this.object.position.z += az * speed * dt;
      this.facing = approachAngle(this.facing, Math.atan2(ax, az), 9 * dt);
      this.moveSpeed = damp(this.moveSpeed, speed, 10, dt);
    } else {
      this.moveSpeed = damp(this.moveSpeed, 0, 10, dt);
    }

    resolveCollisions(
      this.object.position,
      CONFIG.player.radius,
      this.world.rects,
      this.world.circles,
      CONFIG.world.bounds,
      skipHouseId,
    );

    this.object.rotation.y = this.facing;

    this.bobPhase += dt * (2.2 + this.moveSpeed * 1.5) * (moving ? 1 : 0.25);
    const bobAmount = moving ? 0.05 : 0.015;
    this.body.position.y = 0.9 + Math.sin(this.bobPhase * 2) * bobAmount;
    this.halo.rotation.z += dt * 0.6;
    this.halo.material.opacity = 0.28 + Math.sin(this.bobPhase * 2) * 0.08;
  }
}

/** Camera em terceira pessoa: orbita o jogador com o mouse e evita paredes. */
export class ThirdPersonCamera {
  constructor(camera) {
    this.camera = camera;
    this.yaw = 0;
    this.pitch = 0.3;
    this.distance = CONFIG.camera.distance;
    this.currentDistance = CONFIG.camera.distance;
    this.shake = new THREE.Vector3();
    this.lookTarget = new THREE.Vector3();
    this.desired = new THREE.Vector3();
  }

  reset() {
    this.yaw = 0;
    this.pitch = 0.3;
    this.distance = CONFIG.camera.distance;
    this.currentDistance = CONFIG.camera.distance;
    this.shake.set(0, 0, 0);
  }

  applyInput(input) {
    const delta = input.consumeMouseDelta();
    if (delta.x !== 0 || delta.y !== 0) {
      this.yaw -= delta.x * CONFIG.camera.sensitivity;
      this.pitch = clamp(
        this.pitch + delta.y * CONFIG.camera.sensitivity,
        CONFIG.camera.minPitch,
        CONFIG.camera.maxPitch,
      );
    }

    const wheel = input.consumeWheel();
    if (wheel !== 0) {
      this.distance = clamp(
        this.distance + wheel * 0.01,
        CONFIG.camera.minDistance,
        CONFIG.camera.maxDistance,
      );
    }
  }

  update(dt, playerPosition, world) {
    const cosPitch = Math.cos(this.pitch);
    const sinPitch = Math.sin(this.pitch);
    const lookHeight = CONFIG.camera.lookHeight;

    this.lookTarget.set(playerPosition.x, playerPosition.y + lookHeight, playerPosition.z);

    // distancia efetiva: encurta se houver predio/obstaculo entre camera e jogador
    let allowed = this.distance;
    const steps = 8;
    const offsetX = Math.sin(this.yaw) * this.distance * cosPitch;
    const offsetY = this.distance * sinPitch + 0.6;
    const offsetZ = Math.cos(this.yaw) * this.distance * cosPitch;

    for (let i = 3; i <= steps; i += 1) {
      const t = i / steps;
      const x = this.lookTarget.x + offsetX * t;
      const y = this.lookTarget.y + offsetY * t;
      const z = this.lookTarget.z + offsetZ * t;
      if (world.isSolid(x, y, z)) {
        allowed = this.distance * ((i - 1) / steps);
        break;
      }
    }

    this.currentDistance = damp(this.currentDistance, allowed, CONFIG.camera.followLambda, dt);
    const dist = Math.max(this.currentDistance, 1.2);

    this.desired.set(
      this.lookTarget.x + Math.sin(this.yaw) * dist * cosPitch,
      Math.max(0.7, this.lookTarget.y + dist * sinPitch + 0.6),
      this.lookTarget.z + Math.cos(this.yaw) * dist * cosPitch,
    );

    this.camera.position.copy(this.desired).add(this.shake);
    this.camera.lookAt(this.lookTarget);
  }
}

