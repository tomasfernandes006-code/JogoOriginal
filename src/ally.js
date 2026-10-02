import { CONFIG } from './config.js';
import { getLine } from './dialogues.js';
import { distance2D } from './utils.js';
import { LEVEL_CHASE } from './heat.js';

/**
 * A aliada: a Celia comeca a perceber o mundo quebrado.
 *
 * Ela desperta quando: o glitch ja aconteceu, o jogador achou pelo menos
 * 2 anomalias, o segredo dela foi descoberto e o jogador conversa com ela.
 *
 * Depois disso ela ajuda de duas formas concretas:
 *  1. Em perseguicao, corre ate o jogador e distrai os perseguidores
 *     (eles param por alguns segundos). Recarga de 30 s.
 *  2. Quando um NPC com linha de visao se aproxima do jogador na area
 *     proibida, ela solta um aviso em balao.
 *
 * A aliada nunca encara, segue nem persegue o jogador (src/heat.js e
 * src/events.js ignoram NPCs com `ally = true`).
 */
export class AllySystem {
  constructor({ npcs, ui, world }) {
    this.npcs = npcs;
    this.ui = ui;
    this.world = world;
    this.active = false;
    this.cooldown = 0;
    this.warnCooldown = 0;
  }

  get npc() {
    return this.npcs.list.find((n) => n.name === CONFIG.ally.name) || null;
  }

  /** Condicoes para despertar (a conversa precisa acontecer depois delas). */
  canAwaken({ glitch, anomalyCount, secretFound }) {
    return !this.active && glitch === true
      && anomalyCount >= CONFIG.ally.minAnomalies && secretFound === true;
  }

  awaken({ silent = false } = {}) {
    const npc = this.npc;
    if (!npc || this.active) return false;
    this.active = true;
    npc.ally = true;
    npc.stopHeat();
    npc.alert = null;
    if (!silent) {
      npc.say('Eu sempre soube. A partir de agora, estou com voce.', 5);
      this.ui.toast(`${npc.name} percebeu o mundo quebrado e agora e sua aliada.`, 5);
    }
    return true;
  }

  update(dt, ctx) {
    const npc = this.npc;
    if (!this.active || !npc) return;
    if (this.cooldown > 0) this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.warnCooldown > 0) this.warnCooldown = Math.max(0, this.warnCooldown - dt);
    if (ctx.frozen || !npc.isPresent) return;

    const player = ctx.playerPosition;
    const distToPlayer = distance2D(npc.position.x, npc.position.z, player.x, player.z);

    // 1) perseguicao: ela corre ate o jogador e distrai quem persegue
    if (ctx.level === LEVEL_CHASE && distToPlayer <= CONFIG.ally.helpRange && !ctx.hidden) {
      npc.assistTimer = 0.4;
      if (this.cooldown <= 0 && distToPlayer <= CONFIG.ally.distractRadius) {
        let helped = 0;
        for (const other of this.npcs.list) {
          if (other === npc || other.heat !== 'chase') continue;
          const d = distance2D(other.position.x, other.position.z, player.x, player.z);
          if (d <= CONFIG.ally.distractRadius) {
            other.distract(CONFIG.ally.distractSeconds, npc.position);
            helped += 1;
          }
        }
        if (helped > 0) {
          this.cooldown = CONFIG.ally.cooldown;
          npc.say(getLine(npc.name, 'allyHelp'), 3);
          this.ui.toast(`${npc.name} distraiu os perseguidores.`, 3);
        }
      }
    }

    // 2) aviso: alguem com linha de visao se aproxima na area proibida
    if (ctx.playerInForbidden && this.warnCooldown <= 0 && distToPlayer <= CONFIG.ally.warnRange * 2) {
      const watcher = this.npcs.list.find((other) => other !== npc
        && other.isPresent && !other.alert && other.heat === 'none'
        && other.canSee(player.x, player.z, CONFIG.ally.warnRange));
      if (watcher) {
        this.warnCooldown = CONFIG.ally.warnCooldown;
        npc.say(getLine(npc.name, 'allyWarn'), 3);
      }
    }
  }

  reset() {
    const npc = this.npc;
    if (npc) npc.ally = false;
    this.active = false;
    this.cooldown = 0;
    this.warnCooldown = 0;
  }
}
