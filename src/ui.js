import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CONFIG } from './config.js';
import { clamp } from './utils.js';

/**
 * Interface minima: relogio do mundo, objetivo, suspeita, aviso de interacao,
 * mensagens de texto e a camada de glitch.
 * Tambem cria labels 3D (CSS2D) usados pelos NPCs.
 */
export class UI {
  constructor() {
    this.clockEl = document.getElementById('clock');
    this.clockPhaseEl = document.getElementById('clock-phase');
    this.suspicionFill = document.getElementById('suspicion-fill');
    this.suspicionValue = document.getElementById('suspicion-value');
    this.objectiveEl = document.getElementById('objective-text');
    this.promptEl = document.getElementById('prompt');
    this.promptTextEl = document.getElementById('prompt-text');
    this.toastEl = document.getElementById('toast');
    this.errorEl = document.getElementById('error-banner');
    this.glitchOverlay = document.getElementById('glitch-overlay');
    this.tensionEl = document.getElementById('tension-vignette');
    this.startScreen = document.getElementById('start-screen');
    this.startButton = document.getElementById('start-button');
    this.stepTextEl = document.getElementById('step-text');
    this.stepCountEl = document.getElementById('step-count');
    this.stepDistanceEl = document.getElementById('step-distance');
    this.stepCheckEl = document.getElementById('step-check');
    this.hintEl = document.getElementById('hint');
    this.controlsCardEl = document.getElementById('controls-card');
    this.continueButton = document.getElementById('continue-button');
    this.startSaveNoteEl = document.getElementById('start-save-note');
    this.helpEl = document.getElementById('help');
    this.helpListEl = document.getElementById('help-list');
    this.helpHintEl = document.getElementById('help-hint');
    this.diaryEl = document.getElementById('diary');
    this.diaryListEl = document.getElementById('diary-list');
    this.diaryCountEl = document.getElementById('diary-count');
    this.powerPanel = document.getElementById('power-panel');
    this.powerFillEl = document.getElementById('power-fill');
    this.powerLabelEl = document.getElementById('power-label');
    this.skillsListEl = document.getElementById('skills-list');
    this.muteStateEl = document.getElementById('mute-state');
    this.muteEl = document.getElementById('mute-indicator');
    this.achievementEl = document.getElementById('achievement-toast');
    this.diarySecretsEl = document.getElementById('diary-secrets');
    this.diarySecretsCountEl = document.getElementById('diary-secrets-count');
    this.achievementsListEl = document.getElementById('achievements-list');
    this.root = document.documentElement;

    this.skillRows = new Map();
    this.skillsSignature = '';
    this.achievementQueue = [];
    this.achievementTimer = 0;

    this.toastTimer = 0;
    this.errorTimer = 0;
    this.controlsCardTimer = 0;

    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.inset = '0';
    this.labelRenderer.domElement.style.pointerEvents = 'none';
    const layer = document.getElementById('label-layer');
    if (layer) layer.appendChild(this.labelRenderer.domElement);
  }

  onStart(callback) {
    this.startButton.addEventListener('click', callback);
  }

  /** Botao "Continuar": so aparece quando existe save. */
  onContinue(callback) {
    if (this.continueButton) this.continueButton.addEventListener('click', callback);
  }

  /** Habilita/desabilita o botao "Continuar" conforme existe save. */
  setHasSave(hasSave) {
    if (this.continueButton) this.continueButton.classList.toggle('hidden', !hasSave);
    if (this.startSaveNoteEl) {
      this.startSaveNoteEl.textContent = hasSave
        ? 'Continuar volta para onde voce parou.'
        : 'Primeiro dia: voce acorda dentro de casa.';
    }
  }

  hideStartScreen() {
    this.startScreen.classList.add('hidden');
  }

  /**
   * Mostra o quadro resumido de controles por alguns segundos
   * (CONFIG.start.controlsCardSeconds) e some sozinho.
   */
  showControlsCard(seconds = CONFIG.start.controlsCardSeconds) {
    if (!this.controlsCardEl) return;
    this.controlsCardEl.classList.remove('hidden');
    this.controlsCardEl.classList.remove('out');
    void this.controlsCardEl.offsetWidth;
    this.controlsCardEl.classList.add('in');
    this.controlsCardTimer = seconds;
  }

  hideControlsCard() {
    if (!this.controlsCardEl) return;
    this.controlsCardTimer = 0;
    this.controlsCardEl.classList.remove('in');
    this.controlsCardEl.classList.add('hidden');
  }

  /** Cria um label CSS2D (usado para nomes, atividades e baloes de fala). */
  createLabel(className, html = '') {
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = html;
    const object = new CSS2DObject(element);
    return { element, object };
  }

  setClock(text, phase) {
    this.clockEl.textContent = text;
    this.clockPhaseEl.textContent = phase;
  }

  setSuspicion(value, max = CONFIG.suspicion.max) {
    const ratio = clamp(value / max, 0, 1);
    this.suspicionFill.style.width = `${(ratio * 100).toFixed(1)}%`;
    this.suspicionValue.textContent = `${Math.round(value)}%`;
    const panel = this.suspicionFill.parentElement?.parentElement;
    if (panel) panel.classList.toggle('high', ratio > 0.6);
  }

  setObjective(text) {
    if (this.objectiveEl.textContent !== text) this.objectiveEl.textContent = text;
  }

  /**
   * Passo atual do sequenciador de objetivos (banner no topo).
   * A animacao de troca e reancorada removendo e religando a classe.
   */
  setStep(text, index, total) {
    if (!this.stepTextEl) return;
    const count = index >= total ? `${total}/${total}` : `${index + 1}/${total}`;
    if (this.stepCountEl && this.stepCountEl.textContent !== count) {
      this.stepCountEl.textContent = count;
    }

    if (this.stepTextEl.textContent !== text) {
      this.stepTextEl.textContent = text;
      this.stepTextEl.classList.remove('step-swap');
      // reflow para reiniciar a animacao CSS a cada troca de passo
      void this.stepTextEl.offsetWidth;
      this.stepTextEl.classList.add('step-swap');
    }
  }

  /** Distancia em metros ate o alvo do passo (null esconde o indicador). */
  setStepDistance(meters) {
    if (!this.stepDistanceEl) return;
    if (meters === null || meters === undefined) {
      if (!this.stepDistanceEl.classList.contains('hidden')) {
        this.stepDistanceEl.classList.add('hidden');
      }
      return;
    }
    const text = `${Math.round(meters)} m`;
    if (this.stepDistanceEl.textContent !== text) this.stepDistanceEl.textContent = text;
    this.stepDistanceEl.classList.remove('hidden');
  }

  /** Pequeno "check" verde ao concluir o passo. */
  showStepCheck() {
    if (!this.stepCheckEl) return;
    this.stepCheckEl.classList.remove('step-check-pop');
    void this.stepCheckEl.offsetWidth;
    this.stepCheckEl.classList.remove('hidden');
    this.stepCheckEl.classList.add('step-check-pop');
  }

  hideStepCheck() {
    if (!this.stepCheckEl) return;
    this.stepCheckEl.classList.add('hidden');
    this.stepCheckEl.classList.remove('step-check-pop');
  }

  /** Mostra uma dica na parte de baixo (fade in controlado por CSS). */
  showHint(text) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.remove('hidden', 'out');
    // reflow para reiniciar a transicao de entrada
    void this.hintEl.offsetWidth;
    this.hintEl.classList.add('in');
  }

  /** Comeca o fade out da dica atual. */
  fadeOutHint() {
    if (!this.hintEl) return;
    this.hintEl.classList.remove('in');
    this.hintEl.classList.add('out');
  }

  hideHint() {
    if (!this.hintEl) return;
    this.hintEl.classList.remove('in', 'out');
    this.hintEl.classList.add('hidden');
  }

  /** Ajuda de controles (tecla H). `rows` e a lista de teclas/acoes. */
  setHelpOpen(open, rows) {
    if (!this.helpEl) return;
    this.helpEl.classList.toggle('hidden', !open);
    if (!open || !this.helpListEl || !Array.isArray(rows)) return;

    // a lista so e montada na primeira abertura
    if (this.helpListEl.childElementCount > 0) return;
    for (let i = 0; i < rows.length; i += 1) {
      const row = document.createElement('div');
      row.className = 'help-row';

      const keys = document.createElement('span');
      keys.className = 'help-keys';
      for (let k = 0; k < rows[i].keys.length; k += 1) {
        const chip = document.createElement('kbd');
        chip.textContent = rows[i].keys[k];
        keys.appendChild(chip);
      }

      const label = document.createElement('span');
      label.className = 'help-label';
      label.textContent = rows[i].label;

      row.appendChild(keys);
      row.appendChild(label);
      this.helpListEl.appendChild(row);
    }
  }

  /**
   * Painel de habilidades (Q / F / G). Aparece quando o primeiro poder e
   * liberado. Cada poder tem cor propria; a barra de recarga e compartilhada.
   */
  setSkills({ defs, unlocked, activeId, ratio, remaining, ready }) {
    if (!this.powerPanel || !this.skillsListEl) return;

    // monta as linhas uma unica vez
    if (this.skillRows.size === 0) {
      for (let i = 0; i < defs.length; i += 1) {
        const def = defs[i];
        const row = document.createElement('div');
        row.className = 'skill locked';
        row.style.setProperty('--skill-color', def.color);

        const key = document.createElement('kbd');
        key.textContent = def.keyLabel;
        const name = document.createElement('span');
        name.className = 'skill-name';
        name.textContent = def.name;
        const state = document.createElement('span');
        state.className = 'skill-state';

        row.appendChild(key);
        row.appendChild(name);
        row.appendChild(state);
        this.skillsListEl.appendChild(row);
        this.skillRows.set(def.id, { row, state, def });
      }
    }

    const anyUnlocked = unlocked.size > 0;
    this.powerPanel.classList.toggle('hidden', !anyUnlocked);
    if (!anyUnlocked) return;

    const value = Math.max(0, Math.min(1, ratio));
    const activeDef = activeId ? defs.find((d) => d.id === activeId) : null;
    const percent = (value * 100).toFixed(0);
    const label = activeDef ? `${activeDef.name}: ${remaining.toFixed(1)} s`
      : ready ? 'pronto' : `recarregando ${remaining.toFixed(0)} s`;

    const signature = `${[...unlocked].join(',')}|${activeId}|${percent}|${ready}|${label}`;
    if (signature === this.skillsSignature) return;
    this.skillsSignature = signature;

    for (const { row, state, def } of this.skillRows.values()) {
      const isUnlocked = unlocked.has(def.id);
      const isActive = activeId === def.id;
      row.classList.toggle('locked', !isUnlocked);
      row.classList.toggle('active', isActive);
      row.classList.toggle('ready', isUnlocked && ready && !activeId);
      const text = !isUnlocked ? 'bloqueado' : isActive ? 'ATIVO' : ready ? 'pronto' : '...';
      if (state.textContent !== text) state.textContent = text;
    }

    if (this.powerFillEl) {
      this.powerFillEl.style.width = `${percent}%`;
      this.powerFillEl.style.background = activeDef
        ? `linear-gradient(90deg, ${activeDef.color}, #ffffff)`
        : '';
      this.powerFillEl.classList.toggle('active', activeDef !== null);
      this.powerFillEl.classList.toggle('ready', ready && !activeDef);
    }
    if (this.powerLabelEl && this.powerLabelEl.textContent !== label) this.powerLabelEl.textContent = label;
    this.powerPanel.classList.toggle('ready', ready && !activeId);
    this.powerPanel.classList.toggle('active', activeDef !== null);
  }

  /** Efeitos de tela dos outros poderes (F: glitch verde; G: tom laranja). */
  setPowerTint(id) {
    this.root.classList.toggle('power-invis', id === 'invis');
    this.root.classList.toggle('power-phase', id === 'phase');
  }

  /** Indicador de som (tecla M). */
  setMuted(muted) {
    if (this.muteStateEl) this.muteStateEl.textContent = muted ? 'mudo' : 'ligado';
    if (this.muteEl) this.muteEl.classList.toggle('muted', muted === true);
  }

  /** Aviso de conquista: entram em fila e aparecem uma por vez. */
  achievement(title, description = '') {
    this.achievementQueue.push({ title, description });
  }

  /** Lista de conquistas dentro da ajuda (H). */
  setAchievementsList(items) {
    if (!this.achievementsListEl || !Array.isArray(items)) return;
    this.achievementsListEl.textContent = '';
    for (const item of items) {
      const row = document.createElement('div');
      row.className = item.unlocked ? 'ach-row unlocked' : 'ach-row';
      row.textContent = `${item.unlocked ? '\u2605' : '\u2606'} ${item.unlocked ? item.title : '???'}`;
      row.title = item.unlocked ? item.description : 'Conquista bloqueada';
      this.achievementsListEl.appendChild(row);
    }
  }

  /** Filtro invertido/cinza + glitch leve enquanto o tempo esta parado. */
  setFrozenTime(on, cfg) {
    this.root.classList.toggle('frozen-time', on === true);
    if (on) {
      this.root.style.setProperty('--freeze-invert', String(cfg.invert));
      this.root.style.setProperty('--freeze-grayscale', String(cfg.grayscale));
      this.root.style.setProperty('--freeze-contrast', String(cfg.contrast));
      this.setGlitch(cfg.glitchLevel);
    } else {
      this.setGlitch(0);
    }
  }

  /** Abre/fecha o diario de pistas (tecla J). */
  setDiaryOpen(open) {
    if (!this.diaryEl) return;
    this.diaryEl.classList.toggle('hidden', !open);
  }

  /**
   * Desenha as pistas do diario.
   * `entries` vem de src/anomalies.js: { index, name, found, clue }.
   */
  setDiaryContent(entries, count, total) {
    if (!this.diaryListEl) return;
    if (this.diaryCountEl) this.diaryCountEl.textContent = `Anomalias: ${count}/${total}`;
    if (!Array.isArray(entries)) return;

    // so redesenha quando a lista realmente muda (evita|reflow por frame)
    const signature = entries.map((e) => (e.found ? '1' : '0')).join('');
    if (this.diarySignature === signature) return;
    this.diarySignature = signature;

    this.diaryListEl.textContent = '';
    for (let i = 0; i < entries.length; i += 1) {
      const entry = entries[i];
      const row = document.createElement('div');
      row.className = entry.found ? 'diary-row found' : 'diary-row';

      const title = document.createElement('div');
      title.className = 'diary-row-title';
      title.textContent = entry.found ? `${entry.index}. ${entry.name}` : `${entry.index}. ???`;

      const clue = document.createElement('div');
      clue.className = 'diary-row-clue';
      clue.textContent = entry.found ? entry.clue : 'Pista ainda nao encontrada.';

      row.appendChild(title);
      row.appendChild(clue);
      this.diaryListEl.appendChild(row);
    }
  }

  /** Secao "Segredos" do diario. entries: { index, name, found, clue }. */
  setDiarySecrets(entries, count, total) {
    if (!this.diarySecretsEl) return;
    if (this.diarySecretsCountEl) this.diarySecretsCountEl.textContent = `Segredos: ${count}/${total}`;
    if (!Array.isArray(entries)) return;

    const signature = entries.map((e) => (e.found ? '1' : '0')).join('');
    if (this.secretsSignature === signature) return;
    this.secretsSignature = signature;

    this.diarySecretsEl.textContent = '';
    for (const entry of entries) {
      const row = document.createElement('div');
      row.className = entry.found ? 'diary-row found secret' : 'diary-row secret';
      const title = document.createElement('div');
      title.className = 'diary-row-title';
      title.textContent = entry.found ? entry.name : '???';
      const clue = document.createElement('div');
      clue.className = 'diary-row-clue';
      clue.textContent = entry.found ? entry.clue : 'Este NPC guarda algo. Fale com ele no horario e no lugar certos.';
      row.appendChild(title);
      row.appendChild(clue);
      this.diarySecretsEl.appendChild(row);
    }
  }

  showPrompt(text) {
    this.promptTextEl.textContent = text;
    this.promptEl.classList.remove('hidden');
  }
  hidePrompt() {
    this.promptEl.classList.add('hidden');
  }

  toast(text, duration = 3.2) {
    this.toastEl.textContent = text;
    this.toastEl.classList.remove('hidden');
    this.toastTimer = duration;
  }

  showError(text, duration = 3) {
    this.errorEl.textContent = text;
    this.errorEl.classList.remove('hidden');
    this.errorTimer = duration;
  }

  /** Tensao da tela: 0 nada, 1 perseguicao (vinheta vermelha). */
  setTension(level) {
    if (!this.tensionEl) return;
    const value = clamp(level, 0, 1);
    if (this.tensionEl.style.opacity === String(value)) return;
    this.tensionEl.style.opacity = String(value);
  }

  /** level 0..1: liga tremor de cores, scanlines e aberracao cromatica. */
  setGlitch(level) {
    const value = clamp(level, 0, 1);
    this.root.style.setProperty('--glitch', String(value));
    this.glitchOverlay.style.opacity = String(value * 0.85);
    this.root.classList.toggle('glitching', value > 0.02);
  }

  update(dt) {
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.toastEl.classList.add('hidden');
    }
    if (this.errorTimer > 0) {
      this.errorTimer -= dt;
      if (this.errorTimer <= 0) this.errorEl.classList.add('hidden');
    }
    if (this.controlsCardTimer > 0) {
      this.controlsCardTimer -= dt;
      if (this.controlsCardTimer <= 0) this.hideControlsCard();
    }
    this.updateAchievements(dt);
  }

  updateAchievements(dt) {
    if (!this.achievementEl) return;
    if (this.achievementTimer > 0) {
      this.achievementTimer -= dt;
      if (this.achievementTimer <= 0) this.achievementEl.classList.add('hidden');
      return;
    }
    const next = this.achievementQueue.shift();
    if (!next) return;
    this.achievementEl.textContent = '';
    const head = document.createElement('b');
    head.textContent = `Conquista: ${next.title}`;
    const body = document.createElement('span');
    body.textContent = next.description;
    this.achievementEl.appendChild(head);
    this.achievementEl.appendChild(body);
    this.achievementEl.classList.remove('hidden');
    this.achievementTimer = 4.2;
  }

  resize(width, height) {
    this.labelRenderer.setSize(width, height);
  }

  render(scene, camera) {
    this.labelRenderer.render(scene, camera);
  }
}
