import { CONFIG } from './config.js';
import { LAYOUT } from './map.js';
import { distance2D } from './utils.js';
import { loadObjectiveStep, saveObjectiveStep } from './save.js';

/**
 * Objetivos em sequencia: uma lista de passos onde apenas o atual esta ativo.
 * Cada passo tem id, texto curto, alvo opcional (x, z) e uma condicao de
 * conclusao. Passos sem condicao propria sao concluidos por evento
 * (notifyInteract, quando o jogador aperta E no lugar certo).
 */

const DONE_TEXT = 'Todos os objetivos concluidos!';

/** Condicao generica: jogador dentro do raio do alvo do passo. */
function reachesTarget(ctx, step) {
  const radius = step.radius || CONFIG.objectives.reachRadius;
  return distance2D(ctx.playerPosition.x, ctx.playerPosition.z, step.target.x, step.target.z) <= radius;
}

function buildSteps(world) {
  const workDoor = { x: world.places.work.door.x, z: world.places.work.door.z };
  const gate = { x: 0, z: LAYOUT.forbidden.gate.z };
  // primeiro dia: o jogador acorda dentro de casa e precisa sair pela porta
  const homeDoor = { x: world.playerHome.door.x, z: world.playerHome.door.z };

  return [
    {
      id: 'sair',
      text: 'Voce acorda em casa. Ache a porta e saia',
      target: homeDoor,
      radius: CONFIG.start.houseExitRadius,
      condition: reachesTarget,
    },
    {
      id: 'walk',
      text: 'Use W A S D para andar',
      condition: (ctx, step, sys) => sys.walkDistance >= CONFIG.objectives.walkDistance,
    },
    {
      id: 'run',
      text: 'Segure SHIFT para correr',
      condition: (ctx, step, sys) => sys.runTime >= CONFIG.objectives.runSeconds,
    },
    {
      id: 'plaza',
      text: 'Va ate a praca no centro da cidade',
      target: { x: 0, z: 0 },
      radius: CONFIG.objectives.plazaRadius,
      condition: reachesTarget,
    },
    {
      // concluido por evento: E em um banco ou em um NPC (notifyInteract)
      id: 'interact',
      text: 'Aperte E perto de um banco ou de um NPC para interagir',
    },
    {
      id: 'work',
      text: 'Va ate o local de trabalho',
      target: workDoor,
      condition: reachesTarget,
    },
    {
      id: 'gate',
      text: 'Existe uma area proibida ao norte. Va ate o portao',
      target: gate,
      condition: reachesTarget,
    },
    {
      id: 'forbidden',
      text: 'Entre na area proibida',
      condition: (ctx) => ctx.playerInForbidden === true,
    },
    {
      // passo dinamico: o alvo e a proxima anomalia disponivel e o texto
      // mostra o progresso. Completa quando todas as cinco forem coletadas.
      id: 'anomaly',
      text: 'Encontre os objetos que nao seguem o script',
      target: null,
      condition: (ctx) => ctx.allAnomaliesFound === true,
    },
    {
      // so possivel depois de achar a primeira anomalia (o poder e liberado)
      id: 'congelar',
      text: 'Voce quebrou o tempo. Use Q para atravessar a praca vigiada',
      target: { x: CONFIG.power.zone.x, z: CONFIG.power.zone.z },
      condition: (ctx) => ctx.powerCrossed === true || ctx.endingStarted === true,
    },
    {
      // evento final: a porta do predio proibido abre com as 5 anomalias
      id: 'finale',
      text: 'Entre no predio proibido e escolha o destino do mundo',
      target: { x: LAYOUT.forbidden.building.x, z: LAYOUT.forbidden.building.z - LAYOUT.forbidden.building.d / 2 - 1.2 },
      condition: (ctx) => ctx.endingStarted === true,
    },
  ];
}

export class ObjectivesSystem {
  constructor({ ui, world }) {
    this.ui = ui;
    this.world = world;
    this.steps = buildSteps(world);
    this.index = 0;
    this.done = false;
    this.advanceTimer = 0;
    this.walkDistance = 0;
    this.runTime = 0;
    this.lastX = null;
    this.lastZ = null;

    this.restore(loadObjectiveStep());
  }

  get total() {
    return this.steps.length;
  }

  get current() {
    if (this.done) return null;
    return this.steps[this.index] || null;
  }

  /** Alvo (x, z) do passo atual, ou null se o passo nao tem alvo. */
  get target() {
    const step = this.current;
    return step ? step.target || null : null;
  }

  /**
   * Atualiza alvo e texto de um passo em tempo real.
   * Usado pelo passo das anomalias, que muda de alvo a cada descoberta.
   */
  refreshStep(id, { target = undefined, text = undefined } = {}) {
    const step = this.steps.find((s) => s.id === id);
    if (!step) return;
    if (target !== undefined) step.target = target;
    if (text !== undefined) step.text = text;
    if (this.current && this.current.id === id) {
      this.ui.setStep(step.text, this.index, this.steps.length);
    }
  }

  /** Restaura um indice salvo (ou 0) e ressincroniza o HUD. */
  restore(index) {
    const raw = Number.isFinite(index) ? Math.floor(index) : 0;
    this.index = Math.min(Math.max(raw, 0), this.steps.length);
    this.done = this.index >= this.steps.length;
    this.advanceTimer = 0;
    this.walkDistance = 0;
    this.runTime = 0;
    this.lastX = null;
    this.lastZ = null;

    const step = this.current;
    this.ui.hideStepCheck();
    this.ui.setStep(step ? step.text : DONE_TEXT, this.index, this.steps.length);
    this.ui.setStepDistance(null);
  }

  /** Reinicia do passo 0 (tecla R) e atualiza o salvamento. */
  reset() {
    this.restore(0);
    saveObjectiveStep(this.index);
  }

  /**
   * Usado quando ja existe save: o jogador ja saiu de casa em sessoes
   * anteriores, entao o passo de abertura ("sair") e pulado. Como ele foi
   * inserido no inicio da lista, os indices salvos precisam de +1.
   */
  skipIntroStep() {
    if (this.index === 0) {
      this.restore(1);
      saveObjectiveStep(this.index);
    }
  }

  /**
   * Conclusao por evento, disparada pela interacao (E).
   * Aceita o retorno de InteractionSystem.tryInteract():
   * { kind: 'npc' } ou { kind: 'object', item }.
   */
  notifyInteract(result) {
    if (!result || this.done || this.advanceTimer > 0) return;
    const step = this.current;
    if (!step) return;

    if (step.id === 'interact') {
      const isNpc = result.kind === 'npc';
      const isBench = result.kind === 'object' && result.item && result.item.kind === 'bench';
      if (isNpc || isBench) this.complete();
    } else if (step.id === 'anomaly') {
      if (result.kind === 'object' && result.item && result.item.id === 'anomaly') this.complete();
    }
  }

  /** Mostra o "check" e agenda a troca de passo. */
  complete() {
    if (this.done || this.advanceTimer > 0) return;
    this.advanceTimer = CONFIG.objectives.checkSeconds;
    this.ui.showStepCheck();
  }

  /** Troca para o proximo passo (ou conclui a sequencia). */
  advance() {
    this.advanceTimer = 0;
    this.index += 1;
    this.walkDistance = 0;
    this.runTime = 0;
    saveObjectiveStep(this.index);

    if (this.index >= this.steps.length) {
      this.done = true;
      this.ui.hideStepCheck();
      this.ui.setStep(DONE_TEXT, this.index, this.steps.length);
      this.ui.setStepDistance(null);
      return;
    }

    const step = this.current;
    this.ui.hideStepCheck();
    this.ui.setStep(step.text, this.index, this.steps.length);
    this.ui.setStepDistance(null);
  }

  /**
   * Atualiza o passo atual.
   * ctx: { playerPosition, running, playerInForbidden }
   */
  update(dt, ctx) {
    const position = ctx.playerPosition;
    let moved = 0;
    if (this.lastX !== null) {
      moved = distance2D(this.lastX, this.lastZ, position.x, position.z);
      // teleporte (carregamento/reinicio) nao conta como andar
      if (moved > 4) moved = 0;
    }
    this.lastX = position.x;
    this.lastZ = position.z;

    const step = this.current;
    if (step && step.id === 'walk') this.walkDistance += moved;
    if (step && step.id === 'run' && ctx.running && moved > 0.005) this.runTime += dt;

    if (this.advanceTimer > 0) {
      this.advanceTimer -= dt;
      if (this.advanceTimer <= 0) this.advance();
    } else if (step && step.condition && step.condition(ctx, step, this)) {
      this.complete();
    }

    this.updateDistance(ctx);
  }

  /** Distancia (em metros) ate o alvo do passo atual, para o HUD. */
  updateDistance(ctx) {
    const step = this.current;
    if (!step || !step.target) {
      this.ui.setStepDistance(null);
      return;
    }
    const meters = distance2D(
      ctx.playerPosition.x, ctx.playerPosition.z,
      step.target.x, step.target.z,
    );
    this.ui.setStepDistance(meters);
  }
}
