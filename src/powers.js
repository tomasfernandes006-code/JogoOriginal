import { CONFIG } from './config.js';
import { LAYOUT } from './map.js';
import { distance2D } from './utils.js';

/**
 * Sistema de poderes (substitui o antigo power.js).
 *
 * Tres poderes, liberados pela ordem em que as anomalias sao coletadas:
 *   1a anomalia  Q  Quebrar o tempo      6 s   mundo e NPCs congelados
 *   2a anomalia  F  Apagar a visao       5 s   NPCs nao te enxergam
 *   3a anomalia  G  Atravessar paredes   ate 3 s (segurando G) numa casa
 *
 * Os tres dividem a mesma barra de recarga e so um fica ativo por vez.
 * O sistema nao conhece o resto do jogo: avisa por callbacks
 * (onUse / onEnd / onUnlock) e o main liga audio, estatisticas e conquistas.
 */

export const POWER_DEFS = [
  {
    id: 'time', key: 'KeyQ', keyLabel: 'Q', name: 'Quebrar o tempo',
    color: '#6ec6ff', tint: 0x6ec6ff, unlockAt: 1,
    duration: () => CONFIG.power.duration,
    witnessCost: () => CONFIG.power.suspicionCost,
    hint: 'Voce aprendeu a quebrar o tempo. Aperte Q',
    witnessMessage: 'Alguem viu voce quebrar o tempo.',
  },
  {
    id: 'invis', key: 'KeyF', keyLabel: 'F', name: 'Apagar a visao',
    color: '#5dffb0', tint: 0x5dffb0, unlockAt: 2,
    duration: () => CONFIG.power.invisDuration,
    witnessCost: () => CONFIG.power.invisSuspicionCost,
    hint: 'Nova habilidade: apagar a visao. Aperte F e os NPCs deixam de te enxergar',
    witnessMessage: 'Alguem viu voce piscar e sumir.',
  },
  {
    id: 'phase', key: 'KeyG', keyLabel: 'G', name: 'Atravessar paredes',
    color: '#ffb347', tint: 0xffb347, unlockAt: 3,
    duration: () => CONFIG.power.phaseDuration,
    witnessCost: () => CONFIG.power.phaseSuspicionCost,
    hint: 'Nova habilidade: atravessar paredes. Segure G perto da parede de uma casa',
    witnessMessage: 'Alguem viu voce entrar na parede.',
  },
];

const BY_ID = Object.fromEntries(POWER_DEFS.map((def) => [def.id, def]));

/**
 * Casa cuja parede esta ao alcance de `reach` metros (ou null).
 * Dentro da casa conta a distancia ate a parede mais proxima, para dar
 * para sair atravessando tambem.
 */
export function houseWallNear(x, z, reach = CONFIG.power.phaseReach) {
  let best = null;
  let bestDist = reach;
  for (let i = 0; i < LAYOUT.houses.length; i += 1) {
    const h = LAYOUT.houses[i];
    const minX = h.x - h.w / 2;
    const maxX = h.x + h.w / 2;
    const minZ = h.z - h.d / 2;
    const maxZ = h.z + h.d / 2;
    const dx = Math.max(minX - x, 0, x - maxX);
    const dz = Math.max(minZ - z, 0, z - maxZ);
    let dist = Math.hypot(dx, dz);
    if (dist === 0) dist = Math.min(x - minX, maxX - x, z - minZ, maxZ - z);
    if (dist <= bestDist) {
      bestDist = dist;
      best = h.id;
    }
  }
  return best;
}

export class PowerSystem {
  constructor({ ui, npcs, suspicion, onUse, onEnd, onUnlock }) {
    this.ui = ui;
    this.npcs = npcs;
    this.suspicion = suspicion;
    this.onUse = onUse || (() => {});
    this.onEnd = onEnd || (() => {});
    this.onUnlock = onUnlock || (() => {});

    this.defs = POWER_DEFS;
    this.unlocked = new Set();
    this.activeId = null;
    this.timer = 0;
    this.cooldown = 0;
    this.phaseHouseId = null;
    this.phaseArmed = true; // exige soltar G antes de poder usar de novo

    // travessia da zona vigiada (objetivo "congelar")
    this.insideZone = false;
    this.zoneProgress = 0;
    this.enteredZone = false;
    this.crossed = false;

    this.pushUi();
  }

  /* ---------------- estado ---------------- */

  get active() { return this.activeId !== null; }
  get timeFrozen() { return this.activeId === 'time'; }
  get invisible() { return this.activeId === 'invis'; }
  get phasing() { return this.activeId === 'phase'; }
  get ready() { return this.cooldown <= 0 && this.activeId === null; }
  get anyUnlocked() { return this.unlocked.size > 0; }

  isUnlocked(id) { return this.unlocked.has(id); }
  unlockedIds() { return [...this.unlocked]; }

  /** Libera um poder (e avisa o jogador). Devolve true se era novo. */
  unlock(id, { silent = false } = {}) {
    if (!BY_ID[id] || this.unlocked.has(id)) return false;
    this.unlocked.add(id);
    if (!silent) {
      this.ui.toast(BY_ID[id].hint, 6);
      this.onUnlock(id);
    }
    this.pushUi();
    return true;
  }

  /**
   * Libera todos os poderes que a contagem de anomalias ja merece,
   * mais os ids vindos do save. Com `silent` nao mostra dica.
   */
  syncUnlocks(anomalyCount, savedIds = [], { silent = false } = {}) {
    for (const def of this.defs) {
      if (anomalyCount >= def.unlockAt || savedIds.includes(def.id)) this.unlock(def.id, { silent });
    }
  }

  /* ---------------- uso ---------------- */

  /** Algum NPC presente por perto? (usar na frente de alguem custa suspeita) */
  hasWitness(playerPosition) {
    const range = CONFIG.power.witnessRange;
    return this.npcs.list.some((npc) => npc.isPresent
      && distance2D(npc.position.x, npc.position.z, playerPosition.x, playerPosition.z) <= range);
  }

  /** Tenta ligar um poder. Devolve true se ligou. */
  activate(id, playerPosition, { houseId = null } = {}) {
    const def = BY_ID[id];
    if (!def || !this.unlocked.has(id) || !this.ready) return false;

    this.activeId = id;
    this.timer = def.duration();
    this.cooldown = CONFIG.power.cooldown;
    this.phaseHouseId = id === 'phase' ? houseId : null;

    if (this.hasWitness(playerPosition)) {
      this.suspicion.raise(def.witnessCost(), `usou ${def.name} na frente de alguem`);
      this.ui.toast(def.witnessMessage, 3.2);
    }
    this.onUse(id);
    this.pushUi();
    return true;
  }

  /** Desliga o poder ativo (acabou o tempo ou o jogador soltou G). */
  end() {
    if (this.activeId === null) return;
    const id = this.activeId;
    this.activeId = null;
    this.timer = 0;
    this.phaseHouseId = null;
    this.onEnd(id);
    this.pushUi();
  }

  /**
   * Chamado todo frame. ctx: { playerPosition, input }
   * Le as teclas Q / F (um toque) e G (segurar).
   */
  update(dt, ctx) {
    const { playerPosition, input } = ctx;
    if (this.cooldown > 0) this.cooldown = Math.max(0, this.cooldown - dt);

    if (input) {
      if (input.wasPressed('KeyQ')) this.activate('time', playerPosition);
      if (input.wasPressed('KeyF')) this.activate('invis', playerPosition);

      const holdingG = input.isDown('KeyG');
      if (!holdingG) this.phaseArmed = true;
      if (this.phasing && !holdingG) {
        this.end();
      } else if (holdingG && this.phaseArmed && this.ready && this.unlocked.has('phase')) {
        // sem parede de casa por perto, G nao faz nada e nao gasta recarga
        const houseId = houseWallNear(playerPosition.x, playerPosition.z);
        if (houseId) this.activate('phase', playerPosition, { houseId });
      }
    }

    if (this.activeId !== null) {
      this.timer -= dt;
      if (this.timer <= 0) {
        if (this.phasing) this.phaseArmed = false;
        this.end();
      }
    }

    this.trackCrossing(dt, playerPosition);
    this.pushUi();
  }

  /**
   * Objetivo "atravesse a praca vigiada": conta o tempo dentro da zona
   * enquanto o tempo esta quebrado e so completa quando o jogador sai.
   */
  trackCrossing(dt, playerPosition) {
    const zone = CONFIG.power.zone;
    const dist = distance2D(playerPosition.x, playerPosition.z, zone.x, zone.z);
    const inside = dist <= zone.radius;

    if (inside) {
      this.enteredZone = true;
      this.insideZone = true;
      if (this.timeFrozen) this.zoneProgress += dt;
      return;
    }

    if (!this.insideZone) return;
    this.insideZone = false;
    if (this.enteredZone && this.zoneProgress >= CONFIG.power.crossSeconds) {
      this.crossed = true;
      this.enteredZone = false;
      this.zoneProgress = 0;
    }
  }

  /** Empurra o estado atual para o painel de habilidades do HUD. */
  pushUi() {
    this.ui.setSkills({
      defs: this.defs,
      unlocked: this.unlocked,
      activeId: this.activeId,
      ratio: 1 - this.cooldown / CONFIG.power.cooldown,
      remaining: this.activeId !== null ? this.timer : this.cooldown,
      ready: this.ready,
    });
  }

  reset() {
    this.unlocked.clear();
    this.activeId = null;
    this.timer = 0;
    this.cooldown = 0;
    this.phaseHouseId = null;
    this.phaseArmed = true;
    this.insideZone = false;
    this.zoneProgress = 0;
    this.enteredZone = false;
    this.crossed = false;
    this.pushUi();
  }
}
