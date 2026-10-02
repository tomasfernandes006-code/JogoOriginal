import { CONFIG } from './config.js';
import { distance2D } from './utils.js';

/**
 * Niveis de suspeita.
 *
 *   0 (ate 30)  nada acontece
 *   1 (> 30)    NPCs proximos param e te encaram, com "?" acima da cabeca
 *   2 (> 60)    quem te viu passa a murmurar frases desconfiadas e a tela
 *               ganha uma vinheta vermelha leve
 *   3 (= 100)   perseguicao: todos correm atras de voce usando o grafo
 *
 * Se um NPC alcanca o jogador, o mundo "reescreve" a rotina dele: glitch,
 * volta para casa, a suspeita cai para 30 e voce perde 1 hora do mundo.
 * Dentro de uma casa (lugar seguro) a suspeita cai bem mais rapido.
 */

export const LEVEL_CALM = 'calm';
export const LEVEL_WARY = 'wary';
export const LEVEL_HUNT = 'hunt';
export const LEVEL_CHASE = 'chase';

const TOASTS = {
  [LEVEL_WARY]: 'Algum por perto parou e esta te olhando.',
  [LEVEL_HUNT]: 'Eles comecaram a sussurrar. Ninguem parece tranquilo.',
  [LEVEL_CHASE]: 'Voce foi descoberto. Corra.',
};

export class HeatSystem {
  constructor({ world, npcs, suspicion, ui, onCaught, onEscaped, onAlert }) {
    this.world = world;
    this.npcs = npcs;
    this.suspicion = suspicion;
    this.ui = ui;
    this.onCaught = onCaught;
    this.onEscaped = onEscaped;
    this.onAlert = onAlert;
    this.justCaught = false;
    this.level = LEVEL_CALM;
    this.toastGuard = null;
  }

  /** Nivel correspondente ao valor atual da suspeita. */
  levelFor(value) {
    if (value >= CONFIG.heat.chase) return LEVEL_CHASE;
    if (value >= CONFIG.heat.hunt) return LEVEL_HUNT;
    if (value >= CONFIG.heat.wary) return LEVEL_WARY;
    return LEVEL_CALM;
  }

  /** Intensidade da vinheta vermelha (0..1). */
  tensionFor(level) {
    if (level === LEVEL_CHASE) return CONFIG.heat.tensionChase;
    if (level === LEVEL_HUNT) return CONFIG.heat.tensionHunt;
    return CONFIG.heat.tensionWary;
  }

  update(dt, ctx) {
    const player = ctx.playerPosition;
    const value = this.suspicion.value;
    const level = this.levelFor(value);

    // lugar seguro: a suspeita cai muito mais rapido
    this.suspicion.setSafeZone(this.world.isSafeZone(player.x, player.z));

    if (level !== this.level) {
      // saiu da perseguicao sem ser alcancado: escapou
      if (this.level === LEVEL_CHASE && !this.justCaught && this.onEscaped) this.onEscaped();
      this.justCaught = false;
      this.onLevelChange(this.level, level);
    }
    this.level = level;

    this.applyLevel(dt, ctx, level);
    this.ui.setTension(this.tensionFor(level));
  }

  onLevelChange(from, to) {
    if (to === LEVEL_CALM) {
      for (const npc of this.npcs.list) npc.stopHeat();
      return;
    }
    if (this.toastGuard === to) return;
    this.toastGuard = to;
    if (TOASTS[to]) this.ui.toast(TOASTS[to], 4);
  }

  applyLevel(dt, ctx, level) {
    const player = ctx.playerPosition;
    // tempo quebrado: ninguem reage a nada
    if (ctx.frozen) return;

    // invisivel: ninguem te ve, entao todos largam o encaro/perseguicao
    if (ctx.hidden) {
      for (const npc of this.npcs.list) {
        npc.murmurEnabled = false;
        if (npc.heat !== 'none' || npc.alert) {
          npc.stopHeat();
          npc.alert = null;
          npc.resumeRoutine(ctx.hour);
        }
      }
      return;
    }

    if (level === LEVEL_CALM) {
      for (const npc of this.npcs.list) {
        npc.murmurEnabled = false;
        if (npc.heat !== 'none') {
          // so larga o encaro depois de um tempo sem o jogador por perto
          if (npc.heat === 'stare' && npc.stareTimer < CONFIG.heat.stareMeltSeconds) continue;
          npc.stopHeat();
          npc.resumeRoutine(ctx.hour);
        }
      }
      return;
    }

    if (level === LEVEL_CHASE) {
      for (const npc of this.npcs.list) {
        if (npc.ally) continue; // a aliada ajuda em vez de perseguir
        npc.murmurEnabled = true;
        if (npc.isPresent) {
          if (npc.startChase(player) && this.onAlert) this.onAlert(npc, 'chase');
        }
      }
      this.checkCaught(ctx);
      return;
    }

    // nivel 1 e 2: encaro por perto; no 2 quem segue tambem murmura
    for (const npc of this.npcs.list) {
      npc.murmurEnabled = level === LEVEL_HUNT;
      if (npc.ally || !npc.isPresent || npc.alert || npc.heat === 'chase') continue;

      const dist = distance2D(npc.position.x, npc.position.z, player.x, player.z);
      if (dist <= CONFIG.heat.stareRadius) {
        if (npc.startStare(player) && this.onAlert) this.onAlert(npc, 'stare');
      } else if (npc.heat === 'stare') {
        npc.stopHeat();
        npc.resumeRoutine(ctx.hour);
      }
    }
  }

  /** Alguem alcanca o jogador? aplica a punicao uma vez por evento. */
  checkCaught(ctx) {
    const catcher = this.npcs.caughtBy;
    if (!catcher) return;

    this.justCaught = true;
    this.suspicion.set(CONFIG.heat.catchSuspicion);
    this.suspicion.setSafeZone(true); // o jogador volta para casa
    this.level = this.levelFor(this.suspicion.value);

    for (const npc of this.npcs.list) {
      npc.stopHeat();
      npc.murmurEnabled = false;
    }

    if (this.onCaught) this.onCaught(catcher, ctx);
  }

  reset() {
    this.level = LEVEL_CALM;
    this.justCaught = false;
    this.toastGuard = null;
    for (const npc of this.npcs.list) {
      npc.murmurEnabled = false;
      npc.stopHeat();
    }
    this.ui.setTension(0);
  }
}
