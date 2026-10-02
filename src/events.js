import * as THREE from 'three';
import { CONFIG } from './config.js';
import { clamp, distance2D, randomPick, randomRange } from './utils.js';

/**
 * Glitch: tremor de camera, cores alteradas e mensagem de erro.
 * Nada de pos-processamento pesado: shake + filtros CSS.
 */
export class GlitchEffect {
  constructor({ ui }) {
    this.ui = ui;
    this.active = false;
    this.timer = 0;
    this.duration = 1;
    this.level = 0;
    this.strength = 1;
    this.offset = new THREE.Vector3();
  }

  trigger({
    duration = CONFIG.events.glitchDuration,
    message = 'Erro: entidade fora do script detectada',
    strength = 1,
  } = {}) {
    this.active = true;
    this.timer = duration;
    this.duration = duration;
    this.strength = strength;
    this.level = 1;
    this.ui.showError(message, duration + 1.6);
    this.ui.setGlitch(1);
  }

  update(dt) {
    if (!this.active) {
      if (this.offset.lengthSq() !== 0) this.offset.set(0, 0, 0);
      return;
    }

    this.timer -= dt;
    if (this.timer <= 0) {
      this.active = false;
      this.level = 0;
      this.offset.set(0, 0, 0);
      this.ui.setGlitch(0);
      return;
    }

    this.level = clamp(this.timer / this.duration, 0, 1);
    this.ui.setGlitch(this.level);
    const strength = this.level * 1.5 * (this.strength || 1);
    this.offset.set(
      (Math.random() - 0.5) * strength,
      (Math.random() - 0.5) * strength,
      (Math.random() - 0.5) * strength,
    );
  }

  reset() {
    this.active = false;
    this.level = 0;
    this.timer = 0;
    this.offset.set(0, 0, 0);
    this.ui.setGlitch(0);
  }
}

/** Indicador de suspeita: sobe com quebras de regra e decai com o tempo. */
export class Suspicion {
  constructor() {
    this.value = 0;
    this.idleTime = 0;
    this.lastReason = '';
    // multiplicador de queda: dentro de um lugar seguro cai muito mais rapido
    this.decayMultiplier = 1;
    this.safeZone = false;
  }

  raise(amount, reason = '') {
    this.value = clamp(this.value + amount, 0, CONFIG.suspicion.max);
    this.idleTime = 0;
    if (reason) this.lastReason = reason;
  }

  update(dt) {
    this.idleTime += dt;
    if (this.idleTime > CONFIG.suspicion.decayDelay && this.value > 0) {
      const rate = CONFIG.suspicion.decayPerSecond * this.decayMultiplier;
      this.value = Math.max(0, this.value - rate * dt);
    }
  }

  /** Liga/desliga a queda rapida (dentro de casa). */
  setSafeZone(isSafe) {
    this.safeZone = isSafe === true;
    this.decayMultiplier = this.safeZone ? CONFIG.heat.safeZoneDecayMultiplier : 1;
  }

  set(value) {
    this.value = clamp(Number(value) || 0, 0, CONFIG.suspicion.max);
  }

  reset() {
    this.value = 0;
    this.idleTime = 0;
    this.lastReason = '';
    this.decayMultiplier = 1;
    this.safeZone = false;
  }
}

/** Aviso de interacao com objetos proximos (tecla E). */
export class InteractionSystem {
  constructor({ world, npcs, ui, onInteract, onTalk }) {
    this.world = world;
    this.npcs = npcs;
    this.ui = ui;
    this.onInteract = onInteract;
    this.onTalk = onTalk;
    this.current = null;
  }

  update(playerPosition) {
    let best = null;
    let bestDist = Infinity;

    for (let i = 0; i < this.world.interactables.length; i += 1) {
      const item = this.world.interactables[i];
      if (item.enabled === false) continue; // ex.: anomalia fora do horario
      const dist = distance2D(item.x, item.z, playerPosition.x, playerPosition.z);
      if (dist <= item.radius && dist < bestDist) {
        bestDist = dist;
        best = { type: 'object', item };
      }
    }

    const npc = this.npcs.nearest(playerPosition, 3);
    if (npc) {
      const dist = distance2D(npc.position.x, npc.position.z, playerPosition.x, playerPosition.z);
      if (dist < bestDist) best = { type: 'npc', npc };
    }

    this.current = best;

    if (!best) {
      this.ui.hidePrompt();
      return;
    }

    this.ui.showPrompt(best.type === 'object' ? best.item.label : `Falar com ${best.npc.name}`);
  }

  tryInteract() {
    if (!this.current) return null;

    if (this.current.type === 'npc') {
      const npc = this.current.npc;
      // a fala (personalidade, segredo, aliada) e decidida no main
      if (this.onTalk) this.onTalk(npc);
      else npc.say(npc.line('talk'), 2.8);
      return { kind: 'npc', npc };
    }

    const item = this.current.item;
    if (item.message) this.ui.toast(item.message, 3.4);
    if (this.onInteract) this.onInteract(item);
    return { kind: 'object', item };
  }

  reset() {
    this.current = null;
    this.ui.hidePrompt();
  }
}

/**
 * Regras do mundo: NPCs nunca entram na area proibida e nunca saem da rotina,
 * mas reagem quando veem o jogador quebrando o script.
 */
export class WorldRules {
  constructor({ world, npcs, suspicion, ui, state }) {
    this.world = world;
    this.npcs = npcs;
    this.suspicion = suspicion;
    this.ui = ui;
    this.state = state;
    this.wasInForbidden = false;
    this.reactionTimer = 8;
    this.noticed = 0;
  }

  update(dt, ctx) {
    const { playerPosition: player, frozen = false, hidden = false } = ctx;
    const inForbidden = this.world.isInsideForbidden(player.x, player.z);

    if (inForbidden && !this.wasInForbidden) {
      this.ui.toast('Area proibida. Nenhum NPC jamais pisou aqui. Voce acabou de pisar.', 4.2);
    }
    this.wasInForbidden = inForbidden;
    this.state.playerInForbidden = inForbidden;

    // com o tempo quebrado (ou invisivel) ninguem enxerga ninguem
    if (frozen || hidden) return;

    const range = this.state.glitchTriggered
      ? CONFIG.npc.visionRangeAfterGlitch
      : CONFIG.npc.visionRange;

    if (inForbidden) {
      for (let i = 0; i < this.npcs.list.length; i += 1) {
        const npc = this.npcs.list[i];
        if (npc.alert || !npc.isPresent || npc.ally) continue;
        if (!npc.canSee(player.x, player.z, range)) continue;
        if (npc.noticePlayer(player)) {
          this.noticed += 1;
          this.suspicion.raise(CONFIG.suspicion.seenInForbidden, `${npc.name} viu voce`);
          this.ui.toast(`${npc.name} interrompeu a rotina e esta te observando.`, 3.8);
        }
      }
    }

    const followers = this.npcs.followers();
    this.state.following = followers.length ? followers[0].name : null;
    this.state.followerCount = followers.length;

    // depois do glitch os NPCs reagem com muito mais frequencia
    if (this.state.glitchTriggered && !inForbidden) {
      this.reactionTimer -= dt;
      if (this.reactionTimer <= 0) {
        this.reactionTimer = randomRange(6, 13);
        const nearby = this.npcs.list.filter((npc) => npc.isPresent && !npc.alert && !npc.ally
          && distance2D(npc.position.x, npc.position.z, player.x, player.z) < 16);
        const picked = nearby.length ? randomPick(nearby) : null;
        if (picked && picked.reactShort(player)) {
          this.suspicion.raise(CONFIG.suspicion.postGlitchReaction, `${picked.name} estranhou voce`);
        }
      }
    }
  }

  reset() {
    this.wasInForbidden = false;
    this.reactionTimer = 8;
    this.noticed = 0;
  }
}
