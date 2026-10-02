import { CONFIG } from './config.js';
import { LAYOUT } from './map.js';
import { distance2D } from './utils.js';
import { loadSeenHints, saveSeenHints } from './save.js';

/**
 * Dicas contextuais: mensagens curtas que aparecem uma por vez na parte
 * de baixo da tela enquanto o jogador anda, com fade in e fade out.
 * Cada dica so aparece uma vez: os ids ja vistos ficam em localStorage.
 *
 * Todas as condicoes recebem o mesmo contexto:
 *   ctx: { playerPosition, npcs, suspicion, world }
 *     - playerPosition: { x, z } do jogador
 *     - npcs: lista de NPCs (para as dicas que dependem de ver alguem)
 *     - suspicion: valor atual da barra (0..100)
 */

/** Distancia de um ponto ate o retangulo da area proibida (0 se dentro). */
function distanceToFence(x, z) {
  const area = LAYOUT.forbidden.area;
  const dx = Math.max(area.minX - x, 0, x - area.maxX);
  const dz = Math.max(area.minZ - z, 0, z - area.maxZ);
  return Math.hypot(dx, dz);
}

export const HINTS = [
  {
    id: 'casa',
    text: 'Aperte E para abrir a porta',
    isReady: (ctx) => {
      const { x, z } = ctx.playerPosition;
      return LAYOUT.houses.some((house) => {
        const p = house.x + (house.doorSide === 'west' ? -house.w / 2 - 1.4 : house.w / 2 + 1.4);
        return distance2D(x, z, p, house.z) <= CONFIG.hints.houseRange;
      });
    },
  },
  {
    id: 'fonte',
    text: 'Os NPCs passam aqui todo dia, observe a rotina deles',
    isReady: (ctx) => {
      const { x, z } = ctx.playerPosition;
      return distance2D(x, z, 0, 0) <= CONFIG.hints.fountainRange;
    },
  },
  {
    id: 'npc',
    text: 'Cada NPC tem horario e rotina. Observe o nome e a atividade acima da cabeca',
    isReady: (ctx) => ctx.npcs.some((npc) => npc.isPresent
      && distance2D(
        ctx.playerPosition.x, ctx.playerPosition.z,
        npc.position.x, npc.position.z,
      ) <= CONFIG.hints.npcRange),
  },
  {
    id: 'cerca',
    text: 'NPCs nunca entram aqui. Voce pode',
    isReady: (ctx) => {
      const { x, z } = ctx.playerPosition;
      return distanceToFence(x, z) <= CONFIG.hints.fenceRange;
    },
  },
  {
    id: 'suspeita',
    text: 'Se os NPCs te virem fazendo coisas estranhas, a suspeita sobe',
    // depende de uma variacao de estado: o sistema registra a ultima
    // suspeita vista e marca esta dica quando ela subir o bastante
    isReady: () => false,
    watch: (ctx, memory) => {
      if (ctx.suspicion - memory.lastSuspicion >= CONFIG.hints.suspicionRise) {
        memory.lastSuspicion = ctx.suspicion;
        return true;
      }
      return false;
    },
  },
];

/** Lista de teclas exibida na ajuda (tambem em Portuguese, sem acentos). */
export const CONTROLS_HELP = [
  { keys: ['W', 'A', 'S', 'D'], label: 'andar' },
  { keys: ['setas'], label: 'andar' },
  { keys: ['SHIFT'], label: 'correr' },
  { keys: ['mouse'], label: 'girar a camera' },
  { keys: ['clique'], label: 'travar o cursor na tela' },
  { keys: ['botao direito'], label: 'liberar o cursor' },
  { keys: ['roda'], label: 'zoom' },
  { keys: ['E'], label: 'interagir / falar com um NPC' },
  { keys: ['H'], label: 'abrir ou fechar esta ajuda' },
  { keys: ['J'], label: 'abrir o diario de pistas' },
  { keys: ['Q'], label: 'quebrar o tempo (1a anomalia)' },
  { keys: ['F'], label: 'apagar a visao (2a anomalia)' },
  { keys: ['G'], label: 'segurar perto de uma casa para atravessar a parede (3a anomalia)' },
  { keys: ['M'], label: 'ligar ou desligar o som' },
  { keys: ['R'], label: 'reiniciar o mundo' },
];

const STATE_IDLE = 'idle';
const STATE_IN = 'in';
const STATE_HOLD = 'hold';
const STATE_OUT = 'out';

export class HintSystem {
  constructor({ ui }) {
    this.ui = ui;
    this.hints = HINTS;
    this.seen = new Set(loadSeenHints());
    this.memory = { lastSuspicion: 0 };

    this.state = STATE_IDLE;
    this.timer = 0;
    this.current = null;
    this.waiting = 0;
    this.helpOpen = false;
  }

  /** Marca a dica como vista e grava no localStorage. */
  markSeen(hint) {
    if (this.seen.has(hint.id)) return;
    this.seen.add(hint.id);
    saveSeenHints([...this.seen]);
  }

  /**
   * Procura a primeira dica ainda nao vista cuja condicao vale.
   * As dicas com `watch` sao avaliadas antes das de `isReady`, porque
   * dependem de variacao (a suspeita subindo) e nao do lugar do jogador.
   */
  findNext(ctx) {
    for (let i = 0; i < this.hints.length; i += 1) {
      const hint = this.hints[i];
      if (this.seen.has(hint.id) || typeof hint.watch !== 'function') continue;
      if (hint.watch(ctx, this.memory)) return hint;
    }
    for (let i = 0; i < this.hints.length; i += 1) {
      const hint = this.hints[i];
      if (this.seen.has(hint.id) || typeof hint.isReady !== 'function') continue;
      if (hint.isReady(ctx)) return hint;
    }
    return null;
  }

  show(hint) {
    this.current = hint;
    this.state = STATE_IN;
    this.timer = 0;
    this.markSeen(hint);
    this.ui.showHint(hint.text);
  }

  /**
   * Controla o ciclo de vida de uma dica por vez:
   * fade in -> hold -> fade out -> espera -> proxima dica.
   */
  update(dt, ctx) {
    if (this.helpOpen) return;

    this.timer += dt;

    if (this.state === STATE_IN) {
      if (this.timer >= CONFIG.hints.fadeIn) {
        this.state = STATE_HOLD;
        this.timer = 0;
      }
      return;
    }

    if (this.state === STATE_HOLD) {
      if (this.timer >= CONFIG.hints.hold) {
        this.state = STATE_OUT;
        this.timer = 0;
        this.ui.fadeOutHint();
      }
      return;
    }

    if (this.state === STATE_OUT) {
      if (this.timer >= CONFIG.hints.fadeOut) {
        this.state = STATE_IDLE;
        this.timer = 0;
        this.current = null;
        this.ui.hideHint();
      }
      return;
    }

    // idle: espera um pouco e procura a proxima dica que ainda nao apareceu
    this.waiting += dt;
    if (this.waiting < CONFIG.hints.firstDelay + CONFIG.hints.gap) return;

    const hint = this.findNext(ctx);
    if (hint) {
      this.waiting = 0;
      this.show(hint);
    }
  }

  /** Abre/fecha a ajuda de controles (tecla H). */
  toggleHelp() {
    this.helpOpen = !this.helpOpen;
    this.ui.setHelpOpen(this.helpOpen, CONTROLS_HELP);
    if (this.helpOpen) {
      // nao deixa uma dica pela metade com o painel em cima
      this.state = STATE_IDLE;
      this.timer = 0;
      this.current = null;
      this.ui.hideHint();
    }
    return this.helpOpen;
  }

  /** Reinicio (tecla R): zera o ciclo, mas mantem as dicas ja vistas. */
  reset() {
    this.state = STATE_IDLE;
    this.timer = 0;
    this.current = null;
    this.waiting = 0;
    this.memory.lastSuspicion = 0;
    this.ui.hideHint();
  }
}

