import * as THREE from 'three';
import { CONFIG, PALETTE, NPC_COLORS } from './config.js';
import {
  approachAngle, clamp, distance2D, randomPick, randomRange, resolveCollisions, yawTo,
} from './utils.js';
import { getLine } from './dialogues.js';

/**
 * Elenco fixo de NPCs. Cada um tem casa, horarios proprios e uma rotina
 * (casa -> trabalho -> praca -> casa) que nunca sai do script.
 */
const ROSTER = [
  { name: 'Bruno', home: 'homeA', wake: 6.0, lunch: 12.0, leaveWork: 17.0, homeTime: 20.0 },
  { name: 'Celia', home: 'homeB', wake: 6.5, lunch: 12.5, leaveWork: 17.5, homeTime: 20.5 },
  { name: 'Dora', home: 'homeC', wake: 8.5, lunch: 13.0, leaveWork: 18.0, homeTime: 21.0 },
  { name: 'Enzo', home: 'homeA', wake: 7.2, lunch: 12.2, leaveWork: 16.8, homeTime: 19.5 },
  { name: 'Fabi', home: 'homeB', wake: 9.0, lunch: 13.2, leaveWork: 18.2, homeTime: 21.2 },
  { name: 'Guto', home: 'homeC', wake: 6.2, lunch: 11.8, leaveWork: 16.5, homeTime: 19.0 },
];

const PLAZA_ACTIVITIES = [
  'Conversando com alguem',
  'Sentado no banco',
  'Observando a praca',
  'Comendo um lanche',
  'Cumprimentando quem passa',
];

function buildSchedule(def) {
  return [
    { until: def.wake, place: 'home', activity: 'Em casa' },
    { until: def.lunch, place: 'work', activity: 'Trabalhando' },
    { until: def.lunch + 1, place: 'plaza', activity: 'Almoco na praca' },
    { until: def.leaveWork, place: 'work', activity: 'Trabalhando' },
    { until: def.homeTime, place: 'plaza', activity: 'Descansando na praca' },
    { until: 24, place: 'home', activity: 'Em casa' },
  ];
}

/**
 * Um NPC: corpo simples, rotina por horario, label com nome/atividade
 * e balao de fala. Nunca entra na area proibida.
 */
class NPC {
  constructor({ scene, world, ui, def, index }) {
    this.scene = scene;
    this.world = world;
    this.ui = ui;
    this.name = def.name;
    this.color = NPC_COLORS[index % NPC_COLORS.length];
    this.home = world.homeById(def.home);
    this.schedule = buildSchedule(def);
    this.speed = CONFIG.npc.baseSpeed + randomRange(-CONFIG.npc.speedVariance, CONFIG.npc.speedVariance);
    this.radius = CONFIG.npc.radius;

    this.position = new THREE.Vector3();
    this.yaw = 0;
    this.state = 'inside';
    this.place = 'home';
    this.insidePlace = 'home';
    this.activity = 'Em casa';
    this.path = [];
    this.pathIndex = 0;
    this.wanderTarget = null;
    this.idleTimer = 0;
    this.enterTimer = 0;
    this.leaveTimer = 0;
    this.reactTimer = 0;
    this.bubbleTimer = 0;
    this.walkPhase = 0;
    this.walking = false;
    this.blockedByForbidden = false;
    this.alert = null;
    this.markKind = null;

    // contexto das falas (hora, suspeita, glitch), atualizado a cada frame
    this.lineCtx = { hour: 12, suspicion: 0, glitch: false };
    this.talkCount = 0;

    // aliada (src/ally.js): nunca encara, segue nem persegue o jogador
    this.ally = false;
    this.assistTimer = 0;      // > 0: corre ate o jogador para ajudar
    this.distractTimer = 0;    // > 0: distraido (olhando para outro ponto)
    this.distractPoint = { x: 0, z: 0 };

    // final de caos: o NPC entra em glitch
    this.chaos = false;
    this.chaosPhase = Math.random() * 10;

    // reacao ao nivel de suspeita (src/heat.js)
    this.heat = 'none';
    this.murmurEnabled = false;   // nivel 2: quem segue tambem murmura
    this.stareTimer = 0;
    this.murmurTimer = 0;
    this.chasePath = [];
    this.chasePathIndex = 0;
    this.chaseRepathTimer = 0;

    this.buildBody();
    this.buildLabel();
    this.reset();
  }

  buildBody() {
    this.body = new THREE.Group();
    this.body.name = `npc-${this.name}`;

    this.meshRoot = new THREE.Group();
    this.body.add(this.meshRoot);

    const torsoMat = new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.7 });
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.33, 0.8, 6, 12), torsoMat);
    torso.position.y = 0.95;
    torso.castShadow = true;
    this.meshRoot.add(torso);

    const legMat = new THREE.MeshStandardMaterial({ color: 0x33363f, roughness: 0.8 });
    for (const x of [-0.15, 0.15]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.6, 0.19), legMat);
      leg.position.set(x, 0.3, 0);
      leg.castShadow = true;
      this.meshRoot.add(leg);
    }

    for (const x of [-0.42, 0.42]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.14), torsoMat);
      arm.position.set(x, 0.95, 0);
      arm.castShadow = true;
      this.meshRoot.add(arm);
    }

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.27, 14, 10),
      new THREE.MeshStandardMaterial({ color: PALETTE.npcSkin, roughness: 0.75 }),
    );
    head.position.y = 1.62;
    head.castShadow = true;
    this.meshRoot.add(head);

    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.8),
      new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.8 }),
    );
    hair.position.y = 1.68;
    this.meshRoot.add(hair);

    this.scene.add(this.body);
  }

  buildLabel() {
    this.anchor = new THREE.Object3D();
    this.scene.add(this.anchor);

    const label = this.ui.createLabel(
      'npc-label',
      `<span class="npc-name">${this.name}</span><span class="npc-activity"></span>`,
    );
    this.labelElement = label.element;
    this.activityEl = label.element.querySelector('.npc-activity');
    this.anchor.add(label.object);
    this.labelObject = label.object;

    const bubble = this.ui.createLabel('npc-bubble', '');
    this.bubbleElement = bubble.element;
    bubble.object.position.set(0, 1.15, 0);
    this.anchor.add(bubble.object);
    this.bubbleObject = bubble.object;

    // marca de desconfianca: o "?" que aparece acima da cabeca
    const mark = this.ui.createLabel('npc-mark', '?');
    this.markElement = mark.element;
    mark.object.position.set(0, 0.62, 0);
    this.anchor.add(mark.object);
    this.markObject = mark.object;
  }

  get isPresent() {
    return this.state !== 'inside';
  }

  get doorPoint() {
    return this.insidePlace === 'work' ? this.world.places.work.door : this.home.door;
  }

  reset() {
    this.state = 'inside';
    this.place = 'home';
    this.insidePlace = 'home';
    this.alert = null;
    this.heat = 'none';
    this.assistTimer = 0;
    this.distractTimer = 0;
    this.setChaos(false);
    this.stareTimer = 0;
    this.murmurTimer = 0;
    this.chasePath = [];
    this.chasePathIndex = 0;
    this.chaseRepathTimer = 0;
    this.path = [];
    this.pathIndex = 0;
    this.wanderTarget = null;
    this.reactTimer = 0;
    this.bubbleTimer = 0;
    this.walking = false;
    this.yaw = 0;
    this.position.set(this.home.inside.x, 0, this.home.inside.z);
    this.setActivity('Em casa');
    this.bubbleElement.textContent = '';
    this.syncVisuals();
  }

  setActivity(text) {
    if (this.activity === text) return;
    this.activity = text;
    this.activityEl.textContent = text;
  }

  /** Fala de personalidade (src/dialogues.js) para o tipo e o contexto atuais. */
  line(kind) {
    return getLine(this.name, kind, this.lineCtx);
  }

  /** Final de caos: corpo e nome entram em glitch. */
  setChaos(on) {
    if (this.chaos === on) return;
    this.chaos = on;
    if (this.labelElement) this.labelElement.classList.toggle('chaos', on);
    if (!on && this.meshRoot) {
      this.meshRoot.scale.set(1, 1, 1);
      this.meshRoot.rotation.set(0, 0, 0);
    }
    if (on) {
      this.activityEl.textContent = 'ERRO';
      this.activity = 'ERRO';
    }
  }

  /** Fica olhando para um ponto por alguns segundos (distracao da aliada). */
  distract(seconds, point) {
    this.distractTimer = seconds;
    this.distractPoint.x = point.x;
    this.distractPoint.z = point.z;
  }

  say(text, duration = 3) {
    this.bubbleElement.textContent = text;
    this.bubbleTimer = text ? duration : 0;
  }

  updateBubble(dt) {
    if (this.bubbleTimer > 0) {
      this.bubbleTimer -= dt;
      if (this.bubbleTimer <= 0) this.bubbleElement.textContent = '';
    }
  }

  /** Posiciona corpo e labels (o label fica na porta quando o NPC esta dentro). */
  syncVisuals(cameraPosition) {
    const hidden = this.state === 'inside';
    this.body.visible = !hidden;

    if (hidden) {
      const door = this.doorPoint;
      this.anchor.position.set(door.x, 2.7, door.z);
    } else {
      const bob = this.walking ? Math.abs(Math.sin(this.walkPhase)) * 0.08 : 0;
      this.body.position.set(this.position.x, 0, this.position.z);
      this.body.rotation.y = this.yaw;
      this.meshRoot.position.y = bob;
      this.anchor.position.set(this.position.x, 2.45 + bob, this.position.z);
    }

    if (cameraPosition) {
      const dist = distance2D(this.position.x, this.position.z, cameraPosition.x, cameraPosition.z);
      const inRange = dist <= CONFIG.npc.labelMaxDistance;
      this.labelObject.visible = inRange;
      this.bubbleObject.visible = inRange;
      this.markObject.visible = inRange;
    }

    const suspicious = this.heat === 'stare' || this.heat === 'chase' || Boolean(this.alert);
    this.labelElement.classList.toggle('alert', suspicious);
    this.bubbleElement.classList.toggle('visible', this.bubbleTimer > 0);

    // marca animada acima da cabeca: "?" quando estranha/encara, "!" quando
    // te viu na area proibida ou persegue
    const markKind = this.ally || this.state === 'inside' ? null
      : this.heat === 'chase' ? '!'
        : this.alert ? '!'
          : this.heat === 'stare' ? '?' : null;
    if (markKind !== this.markKind) {
      this.markKind = markKind;
      if (markKind) this.markElement.textContent = markKind;
      this.markElement.classList.toggle('visible', markKind !== null);
      this.markElement.classList.toggle('chase', markKind === '!');
    }

    if (this.chaos && !hidden) {
      this.chaosPhase += 0.45;
      const j = Math.sin(this.chaosPhase * 3.1);
      this.meshRoot.scale.set(1 + j * 0.18, 1 + Math.sin(this.chaosPhase * 2.3) * 0.22, 1 - j * 0.12);
      this.meshRoot.rotation.z = Math.sin(this.chaosPhase * 1.7) * 0.18;
    }
  }

  /* ---------------- movimento ---------------- */

  faceTarget(x, z, dt, speedMultiplier = 1) {
    const target = yawTo(this.position.x, this.position.z, x, z);
    this.yaw = approachAngle(this.yaw, target, CONFIG.npc.turnSpeed * speedMultiplier * dt);
  }

  /** Anda em direcao ao alvo. Nunca cruza a area proibida (regra do mundo). */
  moveToward(targetX, targetZ, speed, dt, { stopAt = 0 } = {}) {
    const dx = targetX - this.position.x;
    const dz = targetZ - this.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist <= Math.max(stopAt, 1e-4)) {
      this.faceTarget(targetX, targetZ, dt);
      return dist;
    }

    const step = Math.min(dist - stopAt, speed * dt);
    const nextX = this.position.x + (dx / dist) * step;
    const nextZ = this.position.z + (dz / dist) * step;

    if (this.world.isInsideForbidden(nextX, nextZ)) {
      this.blockedByForbidden = true;
      this.faceTarget(targetX, targetZ, dt);
      return dist;
    }

    this.blockedByForbidden = false;
    this.position.x = nextX;
    this.position.z = nextZ;
    resolveCollisions(this.position, this.radius, this.world.rects, this.world.circles, CONFIG.world.bounds);
    this.faceTarget(targetX, targetZ, dt);
    this.walkPhase += dt * 9;
    this.walking = true;
    return Math.hypot(targetX - this.position.x, targetZ - this.position.z);
  }

  canSee(targetX, targetZ, range = CONFIG.npc.visionRange, fov = CONFIG.npc.visionFov) {
    if (this.state === 'inside') return false;
    const dist = distance2D(this.position.x, this.position.z, targetX, targetZ);
    if (dist > range) return false;

    // muito perto: a presenca estranha mesmo fora do cone de visao
    if (dist > CONFIG.npc.peripheralRange) {
      const dirX = Math.sin(this.yaw);
      const dirZ = Math.cos(this.yaw);
      const toX = dist > 1e-4 ? (targetX - this.position.x) / dist : 0;
      const toZ = dist > 1e-4 ? (targetZ - this.position.z) / dist : 1;
      if (Math.acos(clamp(dirX * toX + dirZ * toZ, -1, 1)) > fov / 2) return false;
    }

    return this.world.lineOfSight(this.position.x, this.position.z, targetX, targetZ);
  }

  /* ---------------- rotina ---------------- */

  desiredEntry(hour) {
    for (const entry of this.schedule) {
      if (hour < entry.until) return entry;
    }
    return this.schedule[this.schedule.length - 1];
  }

  get insidePoint() {
    return this.insidePlace === 'work' ? this.world.places.work.inside : this.home.inside;
  }

  setRoute(targetNodeId) {
    const startId = this.world.nav.nearest(this.position.x, this.position.z);
    this.path = this.world.nav.path(startId, targetNodeId)
      .map((id) => this.world.nav.positionOf(id))
      .filter(Boolean);
    this.pathIndex = 0;
  }

  goToPlace(place, { leaving = false } = {}) {
    this.place = place;
    this.wanderTarget = null;

    if (place === 'plaza') {
      this.setRoute(randomPick(this.world.places.plaza.nodes));
      this.setActivity(leaving ? 'Saindo' : 'Indo para a praca');
    } else if (place === 'home') {
      this.setRoute(this.home.nodeId);
      this.setActivity(leaving ? 'Saindo de casa' : 'Voltando para casa');
    } else {
      this.setRoute(this.world.places.work.nodeId);
      this.setActivity(leaving ? 'Saindo do trabalho' : 'Indo trabalhar');
    }

    if (leaving) {
      this.state = 'leaving';
      this.leaveTimer = 0.7;
      this.position.set(this.doorPoint.x, 0, this.doorPoint.z);
      this.yaw = yawTo(this.position.x, this.position.z, 0, 0);
    } else {
      this.state = 'walking';
    }
  }

  arriveAtDestination() {
    this.walking = false;

    if (this.place === 'home' || this.place === 'work') {
      this.insidePlace = this.place;
      this.state = 'entering';
      this.enterTimer = CONFIG.npc.enterTime;
      this.setActivity(this.place === 'home' ? 'Entrando em casa' : 'Entrando no trabalho');
      return;
    }

    this.state = 'idle';
    this.idleTimer = randomRange(CONFIG.npc.idleMin, CONFIG.npc.idleMax);
    this.setActivity(randomPick(PLAZA_ACTIVITIES));
  }

  updateWalk(dt) {
    const target = this.path[this.pathIndex];
    if (!target) {
      this.arriveAtDestination();
      return;
    }
    const remaining = this.moveToward(target.x, target.z, this.speed, dt);
    if (remaining < 0.5) {
      this.pathIndex += 1;
      if (this.pathIndex >= this.path.length) this.arriveAtDestination();
    }
  }

  updateIdle(dt) {
    if (this.wanderTarget) {
      const remaining = this.moveToward(this.wanderTarget.x, this.wanderTarget.z, this.speed * 0.65, dt);
      this.setActivity('Andando pela praca');
      if (remaining < 0.4) {
        this.wanderTarget = null;
        this.idleTimer = randomRange(CONFIG.npc.idleMin, CONFIG.npc.idleMax);
        this.setActivity(randomPick(PLAZA_ACTIVITIES));
      }
      return;
    }

    this.idleTimer -= dt;
    if (this.idleTimer <= 0) this.wanderTarget = randomPick(this.world.places.plaza.wander);
  }

  /* ---------------- estado geral ---------------- */

  update(dt, hour, ctx) {
    this.updateBubble(dt);
    this.lineCtx.hour = hour;
    if (ctx.suspicion !== undefined) this.lineCtx.suspicion = ctx.suspicion;
    if (ctx.glitch !== undefined) this.lineCtx.glitch = ctx.glitch;
    this.lineCtx.ally = this.ally;

    // tempo quebrado: o NPC para e nao ve nada. So o jogador se move.
    if (ctx.frozen) {
      this.walking = false;
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    this.walking = false;

    // distraido pela aliada: para e olha para o outro ponto
    if (this.distractTimer > 0) {
      this.distractTimer -= dt;
      this.faceTarget(this.distractPoint.x, this.distractPoint.z, dt, 1.6);
      this.setActivity('Distraido');
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    // aliada correndo ate o jogador para ajudar
    if (this.assistTimer > 0 && this.isPresent) {
      this.assistTimer -= dt;
      const dist = distance2D(this.position.x, this.position.z, ctx.playerPosition.x, ctx.playerPosition.z);
      if (dist > 5) {
        this.moveToward(ctx.playerPosition.x, ctx.playerPosition.z, CONFIG.heat.chaseSpeed * 0.75, dt, { stopAt: 4 });
      } else {
        this.faceTarget(ctx.playerPosition.x, ctx.playerPosition.z, dt);
      }
      this.setActivity('Te ajudando');
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    // o nivel de suspeita tem prioridade sobre a rotina
    if (this.heat === 'chase') {
      // o retorno precisa ser repassado: e ele que avisa que o NPC alcanca o jogador
      const caught = this.updateChase(dt, ctx);
      this.syncVisuals(ctx.cameraPosition);
      return caught;
    }

    if (this.heat === 'stare') {
      this.updateStare(dt, ctx);
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    if (this.alert) {
      this.updateAlert(dt, ctx);
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    if (this.reactTimer > 0) {
      this.reactTimer -= dt;
      this.faceTarget(ctx.playerPosition.x, ctx.playerPosition.z, dt, 1.4);
      this.syncVisuals(ctx.cameraPosition);
      return;
    }

    const desired = this.desiredEntry(hour);
    if (this.place !== desired.place) {
      const leaving = this.state === 'inside' || this.state === 'entering';
      this.goToPlace(desired.place, { leaving });
    }

    switch (this.state) {
      case 'walking':
        this.updateWalk(dt);
        break;
      case 'leaving':
        this.leaveTimer -= dt;
        if (this.leaveTimer <= 0) this.state = 'walking';
        break;
      case 'entering':
        this.enterTimer -= dt;
        if (this.enterTimer <= 0) {
          this.state = 'inside';
          this.position.set(this.insidePoint.x, 0, this.insidePoint.z);
          this.setActivity(this.insidePlace === 'home' ? 'Em casa' : 'Trabalhando');
        }
        break;
      case 'idle':
        this.updateIdle(dt);
        break;
      default:
        break;
    }

    this.syncVisuals(ctx.cameraPosition);
  }

  /* ---------------- quebra de regra ---------------- */

  /** Viu o jogador na area proibida: interrompe a rotina e passa a observa-lo. */
  noticePlayer(playerPosition) {
    if (this.state === 'inside' || this.alert) return false;
    this.alert = { phase: 'notice', timer: 2.4, speakTimer: randomRange(10, 16), awayTimer: 0 };
    this.place = null;
    this.wanderTarget = null;
    this.walking = false;
    this.setActivity('Interrompeu a rotina');
    this.say(this.line('notice'), 3.6);
    this.faceTarget(playerPosition.x, playerPosition.z, 1);
    return true;
  }

  /** Reacao curta depois do glitch: para, encara e comenta rapidinho. */
  reactShort(playerPosition) {
    if (this.state === 'inside' || this.alert || this.reactTimer > 0) return false;
    this.reactTimer = 2.4;
    this.walking = false;
    this.setActivity('Olhando para voce');
    this.say(this.line('glitch'), 2.8);
    this.faceTarget(playerPosition.x, playerPosition.z, 1);
    return true;
  }

  updateAlert(dt, ctx) {
    const player = ctx.playerPosition;
    const dist = distance2D(this.position.x, this.position.z, player.x, player.z);

    if (this.alert.phase === 'notice') {
      this.alert.timer -= dt;
      this.faceTarget(player.x, player.z, dt, 1.6);
      if (this.alert.timer <= 0) this.alert.phase = 'follow';
      return;
    }

    this.alert.speakTimer -= dt;
    if (this.alert.speakTimer <= 0) {
      this.alert.speakTimer = randomRange(12, 20);
      this.say(this.line('follow'), 3.2);
    }

    // nivel 2: por cima do texto de seguir, vem o murmurio desconfiado
    if (this.murmurEnabled) this.murmur(player, dt);

    if (dist > CONFIG.npc.followDistance) {
      this.moveToward(player.x, player.z, CONFIG.npc.followSpeed, dt, { stopAt: CONFIG.npc.followDistance });
      this.setActivity(this.blockedByForbidden ? 'Parado na borda' : 'Seguindo voce');
    } else {
      this.walking = false;
      this.faceTarget(player.x, player.z, dt);
      this.setActivity('Te encarando');
    }

    if (ctx.playerInForbidden) {
      this.alert.awayTimer = 0;
    } else {
      this.alert.awayTimer += dt;
      if (this.alert.awayTimer > 8) {
        this.alert = null;
        this.say('...', 2);
        this.resumeRoutine(ctx.hour);
      }
    }
  }

  /* ---------------- nivel de suspeita (src/heat.js) ---------------- */

  /** Nivel 1: para, vira para o jogador e fica encarando (com "?"). */
  startStare(playerPosition) {
    if (this.heat === 'chase') return false;
    const first = this.heat !== 'stare';
    this.heat = 'stare';
    this.walking = false;
    if (first) {
      this.stareTimer = 0;
      this.setActivity('Te encarando');
    }
    this.faceTarget(playerPosition.x, playerPosition.z, 1);
    return first;
  }

  /** Nivel 2: quem esta em alerta passa a murmurar frases desconfiadas. */
  murmur(playerPosition, dt) {
    this.murmurTimer -= dt;
    if (this.murmurTimer > 0) return;
    this.murmurTimer = randomRange(CONFIG.heat.murmurMinSeconds, CONFIG.heat.murmurMaxSeconds);
    this.say(this.line('murmur'), 3.2);
    this.faceTarget(playerPosition.x, playerPosition.z, 1);
  }

  /** Nivel 3: corre atras do jogador usando o grafo de navegacao. */
  startChase(playerPosition) {
    const first = this.heat !== 'chase';
    this.heat = 'chase';
    this.alert = null;
    this.place = null;
    this.wanderTarget = null;
    if (first) {
      this.chasePath = [];
      this.chasePathIndex = 0;
      this.chaseRepathTimer = 0;
      this.murmurTimer = randomRange(1.5, 4);
      this.setActivity('Perseguindo voce');
      this.say(this.line('chase'), 2.4);
    }
    return first;
  }

  /** Sai do modo de reacao e volta ao script. */
  stopHeat() {
    if (this.heat === 'none') return;
    this.heat = 'none';
    this.stareTimer = 0;
    this.murmurTimer = 0;
    this.chasePath = [];
    this.chasePathIndex = 0;
  }

  updateStare(dt, ctx) {
    const player = ctx.playerPosition;
    const dist = distance2D(this.position.x, this.position.z, player.x, player.z);
    this.walking = false;
    this.faceTarget(player.x, player.z, dt, 1.6);
    this.setActivity('Te encarando');

    if (dist > CONFIG.heat.stareRadius) this.stareTimer = 0;
    else this.stareTimer += dt;
  }

  /** Recalcula a rota do grafo de navegacao ate o no mais proximo do jogador. */
  repathChase(playerPosition) {
    const from = this.world.nav.nearest(this.position.x, this.position.z);
    const to = this.world.nav.nearest(playerPosition.x, playerPosition.z);
    // path() inclui o no de origem: o primeiro ponto e onde o NPC ja esta,
    // entao ele e descartado. Sem isso o NPC ficaria oscilando no mesmo no,
    // porque a rota e recalculada a cada chaseRepathSeconds.
    this.chasePath = this.world.nav.path(from, to)
      .map((id) => this.world.nav.positionOf(id))
      .filter(Boolean)
      .slice(1);
    this.chasePathIndex = 0;
    this.chaseRepathTimer = CONFIG.heat.chaseRepathSeconds;
  }

  /**
   * Perseguicao: anda pela rota do grafo e, perto ou sem rota, vai direto.
   * Devolve true quando alcanca o jogador (o heat system aplica a punicao).
   */
  updateChase(dt, ctx) {
    const player = ctx.playerPosition;
    const dist = distance2D(this.position.x, this.position.z, player.x, player.z);
    if (dist <= CONFIG.heat.catchRadius) {
      this.walking = false;
      return true;
    }

    this.chaseRepathTimer -= dt;
    if (this.chaseRepathTimer <= 0) this.repathChase(player);

    const node = this.chasePath[this.chasePathIndex];
    const usePath = dist > CONFIG.npc.followDistance && node
      && this.chasePathIndex < this.chasePath.length;

    if (usePath) {
      const remaining = this.moveToward(node.x, node.z, CONFIG.heat.chaseSpeed, dt);
      this.setActivity(this.blockedByForbidden ? 'Travado na cerca' : 'Perseguindo voce');
      if (remaining < 0.6) this.chasePathIndex += 1;
    } else {
      // sem rota util (ou ja perto): vai direto. Nao recalcula a rota aqui,
      // senao o indice zera e o NPC fica indo e voltando entre os nos.
      this.moveToward(player.x, player.z, CONFIG.heat.chaseSpeed, dt, { stopAt: 0.6 });
      this.setActivity(this.blockedByForbidden ? 'Travado na cerca' : 'Perseguindo voce');
    }

    this.murmur(player, dt);
    return false;
  }

  /** Volta ao script: recalcula o destino a partir de onde estiver. */
  resumeRoutine(hour) {
    this.place = null;
    this.wanderTarget = null;
    if (this.state === 'inside') return;
    this.state = 'walking';
    this.goToPlace(this.desiredEntry(hour).place);
  }
}

/** Gerencia todos os NPCs do mundo. */
export class NPCManager {
  constructor({ scene, world, ui }) {
    this.list = ROSTER.map((def, index) => new NPC({ scene, world, ui, def, index }));
    this.caughtBy = null;
  }

  update(dt, hour, ctx) {
    // quem alcanca o jogador durante a perseguicao e registrado aqui
    this.caughtBy = null;
    for (let i = 0; i < this.list.length; i += 1) {
      const npc = this.list[i];
      if (npc.update(dt, hour, ctx) === true) this.caughtBy = npc;
    }
  }

  /** NPCs que pararam para encarar o jogador (nivel 1). */
  staring() {
    return this.list.filter((npc) => npc.heat === 'stare');
  }

  /** NPCs correndo atras do jogador (nivel 3). */
  chasing() {
    return this.list.filter((npc) => npc.heat === 'chase');
  }

  reset() {
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].reset();
    }
  }

  /** NPC presente (fora de casa) mais proximo de uma posicao. */
  nearest(position, maxDistance = Infinity) {
    let best = null;
    let bestDist = maxDistance;
    for (let i = 0; i < this.list.length; i += 1) {
      const npc = this.list[i];
      if (!npc.isPresent) continue;
      const dist = distance2D(npc.position.x, npc.position.z, position.x, position.z);
      if (dist < bestDist) {
        bestDist = dist;
        best = npc;
      }
    }
    return best;
  }

  followers() {
    return this.list.filter((npc) => npc.alert && npc.alert.phase === 'follow');
  }

  present() {
    return this.list.filter((npc) => npc.isPresent);
  }
}


