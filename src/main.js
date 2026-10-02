import './style.css';
import * as THREE from 'three';

import { CONFIG } from './config.js';
import { WorldClock } from './clock.js';
import { createWorld } from './world.js';
import { Input, Player, ThirdPersonCamera } from './player.js';
import { NPCManager } from './npcs.js';
import { UI } from './ui.js';
import { GlitchEffect, InteractionSystem, Suspicion, WorldRules } from './events.js';
import { ObjectivesSystem } from './objectives.js';
import { GuideSystem } from './guide.js';
import { HintSystem } from './hints.js';
import { HeatSystem, LEVEL_CHASE } from './heat.js';
import { AnomalySystem } from './anomalies.js';
import { PowerSystem } from './powers.js';
import { SecretSystem } from './secrets.js';
import { AllySystem } from './ally.js';
import { EndingSystem } from './ending.js';
import { AchievementSystem } from './achievements.js';
import { AnomalyParticles } from './effects.js';
import { GlitchPost } from './postfx.js';
import { audio } from './audio.js';
import { getLine } from './dialogues.js';
import * as stats from './stats.js';
import { clearRunData, loadSave, saveGame } from './save.js';
import { LAYOUT } from './map.js';
import { clamp, distance2D } from './utils.js';

/* ---------------- renderizador e cena ---------------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x9fd0f0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  CONFIG.camera.fov,
  window.innerWidth / window.innerHeight,
  0.1,
  420,
);

/* ---------------- sistemas ---------------- */
const ui = new UI();
const world = createWorld(scene);
const clock = new WorldClock();
const player = new Player({ scene, world });
const cameraRig = new ThirdPersonCamera(camera);
const input = new Input(canvas);
const npcs = new NPCManager({ scene, world, ui });
const post = new GlitchPost(renderer, scene, camera);
const particles = new AnomalyParticles({ scene, world });

const playerTag = ui.createLabel('player-label', 'VOCE');
playerTag.object.position.set(0, 2.35, 0);
player.object.add(playerTag.object);

/** Estado geral da partida (tambem usado pela UI e pelas regras). */
const state = {
  glitchTriggered: false,
  playerInForbidden: false,
  following: null,
  followerCount: 0,
  visitedPlaza: false,
  interactions: 0,
};

const glitch = new GlitchEffect({ ui });
const suspicion = new Suspicion();
const rules = new WorldRules({ world, npcs, suspicion, ui, state });
const interactions = new InteractionSystem({
  world, npcs, ui, onInteract: handleInteract, onTalk: handleTalk,
});
const objectives = new ObjectivesSystem({ ui, world });
const guide = new GuideSystem({ scene, camera });
const hints = new HintSystem({ ui });
const heat = new HeatSystem({
  world, npcs, suspicion, ui, onCaught: handleCaught, onEscaped: handleEscaped, onAlert: handleAlert,
});
const anomalies = new AnomalySystem({ world, ui });
const achievements = new AchievementSystem({ ui, onUnlock: () => audio.play('achievement') });
const power = new PowerSystem({
  ui, npcs, suspicion, onUse: handlePowerUse, onEnd: handlePowerEnd, onUnlock: () => audio.play('unlock'),
});
const secrets = new SecretSystem({ world });
const ally = new AllySystem({ npcs, ui, world });
const ending = new EndingSystem({
  ui,
  world,
  anomalyTotal: anomalies.total,
  onStart: handleEndingStart,
  onChoose: handleEndingChoose,
  onCredits: () => persist(),
  onPlayAgain: playAgain,
});

audio.onMuteChange((muted) => ui.setMuted(muted));

let started = false;
let suppressPersist = false;
let saveTimer = 0;
let elapsed = 0;
let lastLightHour = clock.hour;
let lastNoticed = 0;
let lastAlertSound = -10;
let chaosTimer = 0;

/* ---------------- eventos dos sistemas ---------------- */

/** Glitch com som. strength < 0.7 usa o som leve. */
function fireGlitch(options = {}) {
  glitch.trigger(options);
  audio.play((options.strength ?? 1) < 0.7 ? 'glitch_light' : 'glitch');
}

/**
 * Um NPC alcancou o jogador durante a perseguicao: o mundo reescreve a
 * rotina dele. Glitch, de volta para casa, suspeita em 30 e -1 hora.
 */
function handleCaught(catcher) {
  stats.recordCaught();
  const home = world.playerHome;
  player.teleport(home.center.x, home.center.z);
  cameraRig.reset();
  clock.setHour(clock.hour - CONFIG.heat.catchHourPenalty);
  lastLightHour = clock.hour;
  world.setHour(clock.hour);
  glitch.trigger({
    duration: CONFIG.heat.catchGlitchDuration,
    message: CONFIG.heat.catchMessage,
    strength: 1.3,
  });
  audio.play('caught');
  suspicion.set(CONFIG.heat.catchSuspicion);
  state.playerInForbidden = false;
  ui.toast(`${catcher.name} te alcancou. A rotina foi reescrita.`, 4.5);
  persist();
}

/** Saiu da perseguicao sem ser alcancado. */
function handleEscaped() {
  stats.recordChaseSurvived();
  achievements.unlock('escaped');
}

/** Um NPC comecou a encarar ou perseguir: toca o alerta (sem repetir em rajada). */
function handleAlert() {
  if (elapsed - lastAlertSound < 1.2) return;
  lastAlertSound = elapsed;
  audio.play('notice');
}

function handlePowerUse(id) {
  stats.recordPowerUse(id);
  audio.play(`power_${id}`);
  if (id === 'time') {
    ui.setFrozenTime(true, CONFIG.power);
    achievements.unlock('froze');
  } else if (id === 'invis') {
    ui.setPowerTint('invis');
    ui.setGlitch(CONFIG.power.invisGlitchLevel);
  } else if (id === 'phase') {
    ui.setPowerTint('phase');
  }
  persist();
}

function handlePowerEnd(id) {
  audio.play('power_end');
  ui.setPowerTint(null);
  if (id === 'time') ui.setFrozenTime(false, CONFIG.power);
  if (id === 'invis') ui.setGlitch(0);
  // nunca deixa o jogador preso dentro de uma parede
  if (id === 'phase') player.pushOutOfWalls();
}

/**
 * Coleta de uma anomalia: glitch curto, pista no diario, progresso, poder
 * novo (1a: Q, 2a: F, 3a: G) e a seta passa a apontar para a proxima.
 */
function discoverAnomaly(anomalyId) {
  const result = anomalies.collect(anomalyId);
  if (!result) return;

  stats.setAnomalyCount(result.count);
  power.syncUnlocks(result.count);

  if (!state.glitchTriggered) state.glitchTriggered = true;
  fireGlitch({
    duration: CONFIG.anomalies.glitchDuration,
    message: 'Erro: entidade fora do script detectada',
    strength: 0.9,
  });
  suspicion.raise(CONFIG.anomalies.suspicionPerFind, `anomalia ${result.id}`);

  ui.toast(`${result.name} (${result.count}/${result.total}) - pista no diario`, 4.2);
  ui.showError(result.clue, 5.5);

  if (!power.invisible) {
    for (let i = 0; i < npcs.list.length; i += 1) {
      const npc = npcs.list[i];
      if (!npc.isPresent || npc.ally) continue;
      if (distance2D(npc.position.x, npc.position.z, player.position.x, player.position.z) < 22) {
        npc.reactShort(player.position);
      }
    }
  }

  if (anomalies.complete) {
    achievements.unlock('anomalies');
    ui.toast('Todas as anomalias! A porta do predio proibido responde.', 5);
  }

  refreshDiary();
  syncAnomalyObjective();
  persist();
}

function handleInteract(item) {
  state.interactions += 1;
  audio.play('interact');
  if (item.kind === 'anomaly' && item.anomalyId) discoverAnomaly(item.anomalyId);
  if (item.id === 'door_forbidden' && anomalies.complete && !ending.done) ending.start();
}

/** Conversa (E) com um NPC: personalidade, segredo e aliada. */
function handleTalk(npc) {
  audio.play('talk');
  npc.talkCount += 1;

  const lineCtx = {
    hour: clock.hour,
    suspicion: suspicion.value,
    glitch: state.glitchTriggered,
    ally: npc.ally,
  };

  const result = secrets.talk(npc, clock.hour);
  let said = false;

  if (result.status === 'reveal') {
    stats.setSecretCount(secrets.count);
    npc.say(result.secret.reveal, 6);
    ui.toast(`Segredo de ${npc.name} descoberto - pista no diario`, 4.5);
    audio.play('secret');
    refreshDiary();
    said = true;
    persist();
  } else if (result.status === 'wrong' && result.showHint) {
    npc.say(result.secret.hint, 4.5);
    said = true;
  }

  // a aliada desperta ao conversar com ela depois de cumprir as condicoes
  if (npc.name === CONFIG.ally.name && secrets.isFound('celia') && !ally.active) {
    if (ally.canAwaken({
      glitch: state.glitchTriggered, anomalyCount: anomalies.count, secretFound: true,
    })) {
      ally.awaken();
      audio.play('secret');
      said = true;
      persist();
    } else if (!said) {
      npc.say(getLine(npc.name, 'allyWait'), 4.5);
      said = true;
    }
  }

  if (!said) npc.say(getLine(npc.name, 'talk', lineCtx), 3.2);
}

/* ---------------- final do jogo ---------------- */

function handleEndingStart() {
  ui.hidePrompt();
  ui.hideHint();
  persist();
}

function handleEndingChoose(id) {
  audio.play('ending');
  if (!stats.stats.caughtThisRun) achievements.unlock('nocatch');

  if (id === 'A') {
    // amanhecer de uma cor nova
    clock.setHour(6.2);
    world.setHour(6.2);
    lastLightHour = 6.2;
  } else if (id === 'B') {
    // todos os NPCs entram em glitch
    for (const npc of npcs.list) {
      npc.setChaos(true);
      npc.say('###', 6);
    }
    chaosTimer = 0;
  } else if (id === 'C') {
    clock.setHour(7);
    world.setHour(7);
    lastLightHour = 7;
  }
  persist();
}

/** "Jogar de novo": apaga a partida (conquistas ficam) e recarrega. */
function playAgain() {
  suppressPersist = true;
  clearRunData();
  window.location.reload();
}

/** Mantem o passo das anomalias apontando para a proxima disponivel. */
function syncAnomalyObjective() {
  const next = anomalies.nextTarget();
  objectives.refreshStep('anomaly', {
    target: next ? { x: next.x, z: next.z } : null,
    text: next
      ? `Ache a anomalia ${anomalies.count + 1}/${anomalies.total}: ${next.name}`
      : 'Voce encontrou todas as anomalias',
  });
}

/** Atualiza as duas secoes do diario (anomalias e segredos). */
function refreshDiary() {
  ui.setDiaryContent(anomalies.entries(), anomalies.count, anomalies.total);
  ui.setDiarySecrets(secrets.entries(), secrets.count, secrets.total);
}

/** Evento de revelacao do primeiro glitch (mantido para o console e testes). */
function triggerGlitch() {
  state.glitchTriggered = true;
  fireGlitch();
  suspicion.raise(CONFIG.suspicion.witnessedGlitch, 'entidade fora do script');
  for (let i = 0; i < npcs.list.length; i += 1) {
    const npc = npcs.list[i];
    if (!npc.isPresent || npc.ally) continue;
    if (distance2D(npc.position.x, npc.position.z, player.position.x, player.position.z) < 22) {
      npc.reactShort(player.position);
    }
  }
  persist();
}

/* ---------------- reiniciar / salvar ---------------- */

function restart({ silent = false } = {}) {
  clock.reset();
  world.reset();
  player.reset();
  // novo dia: o jogador acorda em casa, igual ao primeiro inicio
  player.teleport(world.playerHome.center.x, world.playerHome.center.z);
  npcs.reset();
  suspicion.reset();
  glitch.reset();
  rules.reset();
  interactions.reset();
  objectives.reset();
  guide.reset();
  hints.reset();
  heat.reset();
  anomalies.reset();
  power.reset();
  secrets.reset();
  ally.reset();
  ending.reset();
  stats.resetRun();
  syncAnomalyObjective();
  refreshDiary();
  cameraRig.reset();

  state.glitchTriggered = false;
  state.playerInForbidden = false;
  state.following = null;
  state.followerCount = 0;
  state.visitedPlaza = false;
  state.interactions = 0;
  lastNoticed = 0;

  lastLightHour = clock.hour;
  ui.hidePrompt();
  ui.setGlitch(0);
  ui.setPowerTint(null);
  ui.setFrozenTime(false, CONFIG.power);
  ui.setObjective(currentObjective());
  if (!silent) ui.toast('Mundo reiniciado. Mesmo script, do comeco.', 2.8);
  persist();
}

function persist() {
  // so salva depois de comecar: antes disso o jogador ainda esta no ponto
  // de partida e sobrescreveria o save que o botao "Continuar" vai carregar
  if (!started || suppressPersist) return;
  saveGame({
    player: {
      x: Number(player.position.x.toFixed(2)),
      z: Number(player.position.z.toFixed(2)),
    },
    suspicion: Number(suspicion.value.toFixed(2)),
    hour: Number(clock.hour.toFixed(3)),
    savedAt: Date.now(),
    stats: stats.serializeStats(),
    powers: power.unlockedIds(),
    secrets: secrets.serialize(),
    ally: ally.active,
    ending: ending.serialize(),
  });
}

function loadSaved() {
  const saved = loadSave();
  if (!saved) {
    ui.toast('Dia 1 - 07:00. Viva a rotina como todos os outros.', 4.5);
    return null;
  }

  if (saved.player && Number.isFinite(saved.player.x) && Number.isFinite(saved.player.z)) {
    player.teleport(saved.player.x, saved.player.z);
  }
  if (Number.isFinite(saved.suspicion)) suspicion.set(saved.suspicion);
  if (Number.isFinite(saved.hour)) clock.setHour(saved.hour);
  lastLightHour = clock.hour - 1;

  // sistemas novos (saves antigos ja foram migrados em save.js)
  stats.loadStats(saved.stats);
  stats.setAnomalyCount(Math.max(stats.stats.anomalies, anomalies.count));
  power.syncUnlocks(anomalies.count, saved.powers, { silent: true });
  secrets.load(saved.secrets);
  stats.setSecretCount(secrets.count);
  if (saved.ally) ally.awaken({ silent: true });
  ending.load(saved.ending);
  refreshDiary();

  ui.toast('Posicao e suspeita carregadas do ultimo acesso.', 3.6);
  return saved;
}

/* ---------------- objetivo ---------------- */

function currentObjective() {
  if (ending.done) {
    return 'Voce fez a sua escolha.';
  }
  if (anomalies.complete) {
    return 'Todas as anomalias! Entre no predio proibido: a porta lacrada agora responde. (J abre o diario)';
  }
  if (state.glitchTriggered) {
    return `Voce quebrou o script. Faltam ${anomalies.total - anomalies.count} anomalia(s) - siga a seta. (J abre o diario)`;
  }
  if (state.followerCount > 0) {
    return `${state.following} saiu da rotina por sua causa e esta te observando. Saia da area proibida para ele voltar ao normal.`;
  }
  if (state.playerInForbidden) {
    return 'Area proibida. Nenhum NPC jamais entrou aqui. Ha algo escondido atras do predio.';
  }
  if (state.visitedPlaza) {
    return 'Observe as rotinas: casa, trabalho, praca. Cinco objetos nao seguem o script.';
  }
  return 'Viva um dia normal: ande ate a praca (WASD) e observe os NPCs.';
}

/** Distancia do ponto ate o retangulo da area proibida (0 se dentro). */
function distanceToForbidden(x, z) {
  const area = LAYOUT.forbidden.area;
  const dx = Math.max(area.minX - x, 0, x - area.maxX);
  const dz = Math.max(area.minZ - z, 0, z - area.maxZ);
  return Math.hypot(dx, dz);
}

/* ---------------- loop principal ---------------- */

function update(dt) {
  elapsed += dt;

  // som: M funciona ate na tela inicial
  if (input.wasPressed('KeyM')) audio.toggleMute();

  // durante o evento final o mundo fica parado
  const paused = ending.active;
  const playing = started && !paused;

  if (playing) {
    stats.tickPlay(dt);
    cameraRig.applyInput(input);
    player.update(dt, input, cameraRig.yaw, power.phaseHouseId);

    if (input.wasPressed('KeyE')) {
      const result = interactions.tryInteract();
      if (result) objectives.notifyInteract(result);
    }
    if (input.wasPressed('KeyR')) restart();
    if (input.wasPressed('KeyH')) hints.toggleHelp();
    if (input.wasPressed('KeyJ')) {
      anomalies.toggleDiary();
      ui.setDiarySecrets(secrets.entries(), secrets.count, secrets.total);
    }

    // o relogio do mundo para enquanto o tempo esta quebrado
    if (!power.timeFrozen) {
      clock.update(dt);
      if (Math.abs(clock.hour - lastLightHour) > 0.03) {
        world.setHour(clock.hour);
        lastLightHour = clock.hour;
      }
    }
  }

  // poderes: Q / F (toque) e G (segurar)
  power.update(dt, { playerPosition: player.position, input: playing ? input : null });
  player.setGhost(
    power.invisible ? 0.9 : power.phasing ? 0.55 : 0,
    power.invisible ? 0x5dffb0 : 0xffb347,
    elapsed,
  );

  // quais anomalias estao no mapa depende da hora do mundo
  anomalies.applySchedule(clock.hour);
  if (!anomalies.complete) syncAnomalyObjective();
  ending.refreshDoor(anomalies.complete);

  const frozen = power.timeFrozen || paused;
  const hidden = power.invisible;
  npcs.update(dt, clock.hour, {
    playerPosition: player.position,
    cameraPosition: camera.position,
    hour: clock.hour,
    playerInForbidden: state.playerInForbidden,
    frozen,
    suspicion: suspicion.value,
    glitch: state.glitchTriggered,
  });

  world.update(dt);
  rules.update(dt, { playerPosition: player.position, frozen, hidden });
  if (rules.noticed > lastNoticed) {
    lastNoticed = rules.noticed;
    handleAlert();
  }

  objectives.update(dt, {
    playerPosition: player.position,
    running: playing && (input.isDown('ShiftLeft') || input.isDown('ShiftRight')),
    playerInForbidden: state.playerInForbidden,
    allAnomaliesFound: anomalies.complete,
    powerCrossed: power.crossed,
    endingStarted: ending.started,
  });
  guide.update(dt, {
    playerPosition: player.position,
    target: started && !paused ? objectives.target : null,
  });
  hints.update(dt, {
    playerPosition: player.position,
    npcs: npcs.list,
    suspicion: suspicion.value,
  });
  if (!paused) suspicion.update(dt);
  heat.update(dt, {
    playerPosition: player.position,
    hour: clock.hour,
    frozen,
    hidden,
  });
  ally.update(dt, {
    playerPosition: player.position,
    level: heat.level,
    playerInForbidden: state.playerInForbidden,
    frozen,
    hidden,
  });
  glitch.update(dt);

  // final de caos: o glitch volta de tempos em tempos
  if (ending.active && ending.endingId === 'B') {
    chaosTimer -= dt;
    if (chaosTimer <= 0) {
      chaosTimer = 2.6;
      fireGlitch({ duration: 2, message: 'Erro: o script de todos foi corrompido', strength: 0.8 });
    }
  }

  cameraRig.shake.copy(glitch.offset);
  cameraRig.update(dt, player.position, world);
  if (paused) {
    interactions.reset();
  } else {
    interactions.update(player.position);
  }
  ending.update(dt);

  if (!state.visitedPlaza && distance2D(player.position.x, player.position.z, 0, 0) < 12) {
    state.visitedPlaza = true;
  }

  // clima: a area proibida fica sombria (nevoa escura e luz avermelhada)
  const mood = state.playerInForbidden
    ? 1
    : 1 - clamp(distanceToForbidden(player.position.x, player.position.z) / 9, 0, 1);
  world.setMood(mood);

  if (state.playerInForbidden && !achievements.has('forbidden')) achievements.unlock('forbidden');

  particles.update(dt);

  audio.update({
    dt,
    tension: heat.level === LEVEL_CHASE ? 1 : suspicion.value / CONFIG.suspicion.max,
    chasing: heat.level === LEVEL_CHASE && !hidden,
    moving: playing && player.isMoving,
    running: input.isDown('ShiftLeft') || input.isDown('ShiftRight'),
  });

  ui.setClock(clock.timeString, clock.phase);
  ui.setSuspicion(suspicion.value);
  ui.setObjective(currentObjective());
  ui.update(dt);

  saveTimer += dt;
  if (saveTimer >= CONFIG.save.intervalMs / 1000) {
    saveTimer = 0;
    persist();
  }

  input.endFrame();
}

/** Intensidade (0..1) do glitch de tela neste frame. */
function glitchVisualLevel() {
  let level = glitch.active ? glitch.level * (glitch.strength || 1) : 0;
  if (power.timeFrozen) level = Math.max(level, CONFIG.power.glitchLevel);
  if (power.invisible) level = Math.max(level, CONFIG.power.invisGlitchLevel);
  return Math.min(1, level);
}

function frame(now) {
  const dt = Math.min((now - frame.last) / 1000 || 0, 0.05);
  frame.last = now;

  update(dt);
  post.render(glitchVisualLevel(), elapsed);
  ui.render(scene, camera);
}
frame.last = performance.now();

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  post.resize(width, height);
  ui.resize(width, height);
});

window.addEventListener('beforeunload', persist);

// o audio so nasce depois de um gesto do jogador; pausa quando a aba some
const unlockAudio = () => audio.unlock();
window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) audio.pause();
  else audio.resume();
});

/** Entra no jogo: esconde a tela inicial, mostra os controles e trava o mouse. */
function beginSession() {
  started = true;
  audio.unlock();
  ui.hideStartScreen();
  ui.showControlsCard();
  try {
    const request = canvas.requestPointerLock?.();
    if (request && typeof request.catch === 'function') request.catch(() => {});
  } catch (error) {
    // sem pointer lock: o mouse gira a camera arrastando
  }
}

/** "Comecar": primeiro dia limpo, o jogador acorda dentro de casa. */
function startNewGame() {
  clearRunData();
  restart({ silent: true });
  const home = world.playerHome;
  player.teleport(home.center.x, home.center.z);
  player.facing = 0;
  cameraRig.reset();
  objectives.restore(0);
  beginSession();
  ui.toast('Voce acorda em casa. A porta esta a leste.', 4);
  persist();
}

/** "Continuar": volta para a posicao, suspeita e hora salvas. */
function continueGame() {
  const saved = loadSaved();
  objectives.skipIntroStep();
  beginSession();
  // partida que ja terminou: volta direto para os creditos
  if (saved && ending.done && !ending.restoreFinished(ending.endingId)) ending.reset();
}

ui.onStart(startNewGame);
ui.onContinue(continueGame);

// o botao Continuar so aparece quando existe save
ui.setHasSave(loadSave() !== null);

power.syncUnlocks(anomalies.count, [], { silent: true });
anomalies.applySchedule(clock.hour);
syncAnomalyObjective();
refreshDiary();

world.setHour(clock.hour);
ui.setSuspicion(suspicion.value);
ui.setObjective(currentObjective());

/**
 * Gancho de desenvolvimento (usado pelos testes headless e util para depurar
 * no console do navegador: __oNpc.state, __oNpc.npcs, __oNpc.checkRoutes()...).
 */
window.__oNpc = {
  state,
  player,
  world,
  npcs,
  clock,
  suspicion,
  glitch,
  rules,
  interactions,
  objectives,
  guide,
  hints,
  heat,
  anomalies,
  power,
  secrets,
  ally,
  ending,
  achievements,
  stats: stats.stats,
  audio,
  ui,
  cameraRig,
  restart,
  triggerGlitch,
  /** Toda dupla de nos do mapa precisa ter rota, e nenhuma rota entra na area proibida. */
  checkRoutes() {
    const ids = Object.keys(world.nav.nodes);
    for (const from of ids) {
      for (const to of ids) {
        const route = world.nav.path(from, to);
        if (route.length === 0) return false;
        for (const id of route) {
          const node = world.nav.positionOf(id);
          if (node && world.isInsideForbidden(node.x, node.z)) return false;
        }
      }
    }
    return true;
  },
};

renderer.setAnimationLoop(frame);
