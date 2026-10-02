import { CONFIG } from './config.js';
import { stats, formatPlayTime, totalPowerUses } from './stats.js';

/**
 * Final do jogo.
 *
 * Quando as 5 anomalias forem achadas, a porta do predio proibido abre o
 * evento final: tres escolhas, uma cena curta de texto e a tela de creditos
 * com o resumo da partida e o botao "Jogar de novo".
 *
 * Estados: idle -> choosing -> scene -> credits
 * Enquanto nao estiver em "idle" o jogo fica pausado (NPCs, suspeita e
 * perseguicao nao andam), para nada capturar o jogador durante o final.
 */

export const ENDINGS = {
  A: {
    key: 'A',
    name: 'Fugir do mundo',
    tag: 'Final de liberdade',
    lines: [
      'Voce empurra o portao que fica do lado de fora do mundo.',
      'O script fica para tras, repetindo o mesmo dia para ninguem.',
      'Pela primeira vez, o horizonte tem uma cor que ninguem escreveu.',
      'Voce nao e mais um NPC. Voce e alguem que escolheu.',
    ],
  },
  B: {
    key: 'B',
    name: 'Quebrar o script de todos',
    tag: 'Final de caos',
    lines: [
      'Voce rasga a primeira linha do script. Depois a segunda.',
      'Os NPCs congelam, tremem, riem e choram ao mesmo tempo.',
      'As rotinas se desfazem em ruido. Ninguem sabe mais para onde ir.',
      'O mundo nao acabou. Ele so parou de obedecer.',
    ],
  },
  C: {
    key: 'C',
    name: 'Voltar a rotina',
    tag: 'Final de conformismo',
    lines: [
      'Voce fecha o diario e devolve cada objeto ao seu lugar.',
      'O relogio volta as sete. A fonte volta a correr.',
      'Amanha sera igual a hoje. E isso, de algum jeito, e um alivio.',
      'Voce acorda. Hoje e igual a ontem.',
    ],
  },
};

const KEY_TO_ENDING = {
  Digit1: 'A', Numpad1: 'A', Digit2: 'B', Numpad2: 'B', Digit3: 'C', Numpad3: 'C',
};

export class EndingSystem {
  constructor({ ui, world, anomalyTotal, onStart, onChoose, onCredits, onPlayAgain }) {
    this.ui = ui;
    this.world = world;
    this.anomalyTotal = anomalyTotal;
    this.onStart = onStart || (() => {});
    this.onChoose = onChoose || (() => {});
    this.onCredits = onCredits || (() => {});
    this.onPlayAgain = onPlayAgain || (() => {});

    this.state = 'idle';
    this.done = false;       // um final ja foi escolhido nesta partida
    this.endingId = null;
    this.started = false;    // o evento ja foi aberto alguma vez
    this.lineIndex = 0;
    this.lineTimer = 0;

    this.overlay = document.getElementById('ending-overlay');
    this.choicesEl = document.getElementById('ending-choices');
    this.sceneEl = document.getElementById('ending-scene');
    this.textEl = document.getElementById('ending-text');
    this.creditsEl = document.getElementById('ending-credits');
    this.creditsEndingEl = document.getElementById('credits-ending');
    this.creditsStatsEl = document.getElementById('credits-stats');
    this.playAgainButton = document.getElementById('play-again');

    this.door = world.interactables.find((item) => item.id === 'door_forbidden') || null;
    this.doorDefaults = this.door ? { label: this.door.label, message: this.door.message } : null;

    this.bindEvents();
  }

  get active() {
    return this.state !== 'idle';
  }

  bindEvents() {
    if (this.choicesEl) {
      this.choicesEl.querySelectorAll('.ending-choice').forEach((button) => {
        button.addEventListener('click', () => this.choose(button.dataset.ending));
      });
    }
    if (this.sceneEl) this.sceneEl.addEventListener('click', () => this.advance());
    if (this.playAgainButton) this.playAgainButton.addEventListener('click', () => this.onPlayAgain());

    window.addEventListener('keydown', (event) => {
      if (!this.active) return;
      if (this.state === 'choosing' && KEY_TO_ENDING[event.code]) {
        this.choose(KEY_TO_ENDING[event.code]);
      } else if (this.state === 'scene' && (event.code === 'Enter' || event.code === 'Space')) {
        event.preventDefault();
        this.advance();
      } else if (this.state === 'credits' && event.code === 'Enter') {
        this.onPlayAgain();
      }
    });
  }

  /** A porta do predio proibido so abre com todas as anomalias. */
  refreshDoor(allAnomaliesFound) {
    if (!this.door || this.done) return;
    if (allAnomaliesFound) {
      this.door.label = 'Entrar no predio proibido';
      this.door.message = '';
    } else {
      this.door.label = this.doorDefaults.label;
      this.door.message = this.doorDefaults.message;
    }
  }

  /** Abre o evento final (escolhas). */
  start() {
    if (this.active || this.done) return false;
    this.started = true;
    this.state = 'choosing';
    this.showOnly(this.choicesEl);
    this.overlay.className = '';
    if (document.exitPointerLock) document.exitPointerLock();
    this.onStart();
    return true;
  }

  showOnly(element) {
    this.overlay.classList.remove('hidden');
    for (const el of [this.choicesEl, this.sceneEl, this.creditsEl]) {
      if (el) el.classList.toggle('hidden', el !== element);
    }
  }

  choose(id) {
    const ending = ENDINGS[id];
    if (!ending || this.state !== 'choosing') return;
    this.endingId = id;
    this.done = true;
    this.state = 'scene';
    this.lineIndex = 0;
    this.overlay.className = `ending-${id}`;
    this.showOnly(this.sceneEl);
    this.showLine();
    this.onChoose(id);
  }

  showLine() {
    const ending = ENDINGS[this.endingId];
    this.textEl.textContent = ending.lines[this.lineIndex];
    // reinicia a animacao de fade do texto
    this.textEl.style.animation = 'none';
    void this.textEl.offsetWidth;
    this.textEl.style.animation = '';
    this.lineTimer = CONFIG.ending.lineSeconds;
  }

  advance() {
    if (this.state !== 'scene') return;
    const ending = ENDINGS[this.endingId];
    this.lineIndex += 1;
    if (this.lineIndex >= ending.lines.length) {
      this.showCredits(this.endingId);
    } else {
      this.showLine();
    }
  }

  /** Tela de creditos com o resumo da partida. */
  showCredits(id = this.endingId) {
    const ending = ENDINGS[id];
    if (!ending) return;
    this.endingId = id;
    this.done = true;
    this.state = 'credits';
    this.overlay.className = `ending-${id}`;
    this.showOnly(this.creditsEl);
    if (document.exitPointerLock) document.exitPointerLock();

    this.creditsEndingEl.textContent = `${ending.tag}: ${ending.name}`;
    const rows = [
      ['Tempo jogado', formatPlayTime(stats.playSeconds)],
      ['Vezes que foi pego', String(stats.caught)],
      ['Anomalias achadas', `${stats.anomalies}/${this.anomalyTotal}`],
      ['Poderes usados', String(totalPowerUses())],
    ];
    this.creditsStatsEl.textContent = '';
    for (const [label, value] of rows) {
      const name = document.createElement('span');
      name.textContent = label;
      const number = document.createElement('b');
      number.textContent = value;
      this.creditsStatsEl.appendChild(name);
      this.creditsStatsEl.appendChild(number);
    }
    this.onCredits(id);
  }

  /** Save de uma partida que ja terminou: volta direto para os creditos. */
  restoreFinished(id) {
    if (!ENDINGS[id]) return false;
    this.done = true;
    this.started = true;
    this.showCredits(id);
    return true;
  }

  update(dt) {
    if (this.state !== 'scene') return;
    this.lineTimer -= dt;
    if (this.lineTimer <= 0) this.advance();
  }

  serialize() {
    return { done: this.done, id: this.endingId };
  }

  load(data) {
    this.done = Boolean(data && data.done);
    this.endingId = data && typeof data.id === 'string' ? data.id : null;
  }

  reset() {
    this.state = 'idle';
    this.done = false;
    this.endingId = null;
    this.started = false;
    this.lineIndex = 0;
    this.lineTimer = 0;
    if (this.overlay) {
      this.overlay.className = 'hidden';
      for (const el of [this.choicesEl, this.sceneEl, this.creditsEl]) {
        if (el) el.classList.add('hidden');
      }
    }
    if (this.door && this.doorDefaults) {
      this.door.label = this.doorDefaults.label;
      this.door.message = this.doorDefaults.message;
    }
  }
}
