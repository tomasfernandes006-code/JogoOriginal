import { CONFIG } from './config.js';

/**
 * Audio por codigo (Web Audio API), sem nenhum arquivo de som.
 *
 * - O AudioContext so nasce no primeiro clique/tecla do jogador (unlock()).
 * - Tudo e reaproveitado: um buffer de ruido em loop, um pequeno grupo de
 *   osciladores ("vozes") e os osciladores da musica ficam sempre ligados;
 *   o som sai apenas moldando o ganho (envelopes). Nada de criar nos novos
 *   a cada passo ou efeito.
 * - Musica ambiente: calma em baixo, tensa em cima, conforme a suspeita.
 * - M liga/desliga o som (estado salvo). pause()/resume() suspendem tudo.
 */

const MASTER_VOLUME = 0.5;
const VOICES = 6;

// escala menor (La menor natural) para o arpejo da musica
const ARP_NOTES = [220, 261.63, 329.63, 392, 329.63, 261.63, 440, 329.63];
const PAD_NOTES = [110, 130.81, 164.81];

function loadMuted() {
  try {
    return window.localStorage.getItem(CONFIG.save.muteKey) === '1';
  } catch (error) {
    return false;
  }
}

function saveMuted(muted) {
  try {
    window.localStorage.setItem(CONFIG.save.muteKey, muted ? '1' : '0');
  } catch (error) {
    // sem localStorage: o estado vale so nesta sessao
  }
}

/** Curva de distorcao usada no som de glitch. */
function makeDistortionCurve(amount = 60) {
  const samples = 256;
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i += 1) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((3 + amount) * x * 20 * (Math.PI / 180)) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = loadMuted();
    this.suspended = false;
    this.ready = false;

    this.tension = 0;         // 0..1 suavizado
    this.targetTension = 0;
    this.chasing = false;
    this.beatTimer = 0;
    this.beatIndex = 0;
    this.chaseTimer = 0;
    this.chaseFlip = false;
    this.voiceIndex = 0;
    this.stepTimer = 0;
    this.listeners = new Set();
  }

  /** Quem quiser saber do mudo (HUD) se inscreve aqui. */
  onMuteChange(callback) {
    this.listeners.add(callback);
    callback(this.muted);
  }

  /* ---------------- inicio / pausa ---------------- */

  /** Cria o AudioContext. Chamar dentro de um gesto do jogador (clique/tecla). */
  unlock() {
    if (this.ready) {
      this.resume();
      return;
    }
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return;
    try {
      this.ctx = new Ctor();
    } catch (error) {
      return;
    }
    this.build();
    this.ready = true;
    this.applyMute();
    this.resume();
  }

  pause() {
    this.suspended = true;
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
  }

  resume() {
    this.suspended = false;
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
  }

  toggleMute() {
    this.muted = !this.muted;
    saveMuted(this.muted);
    this.applyMute();
    this.listeners.forEach((cb) => cb(this.muted));
    return this.muted;
  }

  applyMute() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(this.muted ? 0 : MASTER_VOLUME, t, 0.03);
  }

  /* ---------------- grafo de audio (montado uma vez) ---------------- */

  build() {
    const ctx = this.ctx;

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : MASTER_VOLUME;
    const limiter = ctx.createDynamicsCompressor();
    this.master.connect(limiter);
    limiter.connect(ctx.destination);

    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);
    this.music = ctx.createGain();
    this.music.gain.value = 0.32;
    this.music.connect(this.master);

    // ruido branco em loop (compartilhado por passos e glitch)
    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    this.noise = ctx.createBufferSource();
    this.noise.buffer = noiseBuffer;
    this.noise.loop = true;

    // cadeia dos passos: ruido -> passa-baixa -> ganho
    this.stepFilter = ctx.createBiquadFilter();
    this.stepFilter.type = 'lowpass';
    this.stepFilter.frequency.value = 700;
    this.stepGain = ctx.createGain();
    this.stepGain.gain.value = 0;
    this.noise.connect(this.stepFilter);
    this.stepFilter.connect(this.stepGain);
    this.stepGain.connect(this.sfx);

    // cadeia do glitch: ruido -> passa-alta -> distorcao -> ganho
    const glitchHp = ctx.createBiquadFilter();
    glitchHp.type = 'highpass';
    glitchHp.frequency.value = 900;
    const shaper = ctx.createWaveShaper();
    shaper.curve = makeDistortionCurve(80);
    shaper.oversample = '2x';
    this.glitchGain = ctx.createGain();
    this.glitchGain.gain.value = 0;
    this.noise.connect(glitchHp);
    glitchHp.connect(shaper);
    shaper.connect(this.glitchGain);
    this.glitchGain.connect(this.sfx);
    this.noise.start();

    // vozes reutilizaveis para os efeitos de tom
    this.voices = [];
    for (let i = 0; i < VOICES; i += 1) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.sfx);
      osc.start();
      this.voices.push({ osc, gain });
    }

    // sirene da perseguicao
    this.chaseOsc = ctx.createOscillator();
    this.chaseOsc.type = 'sawtooth';
    this.chaseOsc.frequency.value = 150;
    const chaseLp = ctx.createBiquadFilter();
    chaseLp.type = 'lowpass';
    chaseLp.frequency.value = 520;
    this.chaseGain = ctx.createGain();
    this.chaseGain.gain.value = 0;
    this.chaseOsc.connect(chaseLp);
    chaseLp.connect(this.chaseGain);
    this.chaseGain.connect(this.sfx);
    this.chaseOsc.start();

    // musica: pad calmo (senoidal) + camada tensa (serra desafinada) + arpejo
    this.padCalm = [];
    this.calmGain = ctx.createGain();
    this.calmGain.gain.value = 0.5;
    this.calmGain.connect(this.music);
    for (const freq of PAD_NOTES) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(this.calmGain);
      osc.start();
      this.padCalm.push(osc);
    }

    this.tenseFilter = ctx.createBiquadFilter();
    this.tenseFilter.type = 'lowpass';
    this.tenseFilter.frequency.value = 200;
    this.tenseGain = ctx.createGain();
    this.tenseGain.gain.value = 0;
    this.tenseFilter.connect(this.tenseGain);
    this.tenseGain.connect(this.music);
    this.padTense = [];
    for (const freq of [55, 58.3, 82.4]) {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      osc.connect(this.tenseFilter);
      osc.start();
      this.padTense.push(osc);
    }

    this.arpOsc = ctx.createOscillator();
    this.arpOsc.type = 'triangle';
    this.arpGain = ctx.createGain();
    this.arpGain.gain.value = 0;
    this.arpOsc.connect(this.arpGain);
    this.arpGain.connect(this.music);
    this.arpOsc.start();
  }

  /* ---------------- efeitos ---------------- */

  /** Toca um tom com varredura de frequencia e envelope. */
  tone({ type = 'sine', from = 440, to = from, duration = 0.15, volume = 0.3, delay = 0 }) {
    if (!this.ready || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const voice = this.voices[this.voiceIndex];
    this.voiceIndex = (this.voiceIndex + 1) % this.voices.length;

    voice.osc.type = type;
    voice.osc.frequency.cancelScheduledValues(t);
    voice.osc.frequency.setValueAtTime(from, t);
    if (to !== from) voice.osc.frequency.exponentialRampToValueAtTime(Math.max(to, 20), t + duration);
    voice.gain.gain.cancelScheduledValues(t);
    voice.gain.gain.setValueAtTime(0.0001, t);
    voice.gain.gain.linearRampToValueAtTime(volume, t + 0.012);
    voice.gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  }

  /** Passo do jogador: ruido filtrado curtinho. */
  footstep(running = false) {
    if (!this.ready || this.muted) return;
    const t = this.ctx.currentTime;
    this.stepFilter.frequency.setValueAtTime(420 + Math.random() * 380, t);
    this.stepGain.gain.cancelScheduledValues(t);
    this.stepGain.gain.setValueAtTime(0.0001, t);
    this.stepGain.gain.linearRampToValueAtTime(running ? 0.5 : 0.32, t + 0.006);
    this.stepGain.gain.exponentialRampToValueAtTime(0.0008, t + (running ? 0.07 : 0.1));
  }

  /** Ruido distorcido picotado + queda de tom. */
  glitchBurst(strength = 1) {
    if (!this.ready || this.muted) return;
    const t = this.ctx.currentTime;
    const g = this.glitchGain.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(0.0001, t);
    const bursts = 7;
    for (let i = 0; i < bursts; i += 1) {
      const at = t + i * 0.07;
      g.setValueAtTime(0.0001, at);
      g.linearRampToValueAtTime((0.25 + Math.random() * 0.3) * strength, at + 0.01);
      g.exponentialRampToValueAtTime(0.0001, at + 0.06);
    }
    this.tone({ type: 'square', from: 900, to: 70, duration: 0.5, volume: 0.16 * strength });
  }

  /** Nome do efeito -> som. */
  play(name) {
    switch (name) {
      case 'interact':
        this.tone({ type: 'triangle', from: 520, to: 780, duration: 0.09, volume: 0.22 });
        this.tone({ type: 'triangle', from: 780, to: 1040, duration: 0.1, volume: 0.18, delay: 0.07 });
        break;
      case 'talk':
        this.tone({ type: 'sine', from: 340, to: 300, duration: 0.12, volume: 0.18 });
        break;
      case 'glitch':
        this.glitchBurst(1);
        break;
      case 'glitch_light':
        this.glitchBurst(0.5);
        break;
      case 'notice':
        // alerta: dois bipes subindo
        this.tone({ type: 'square', from: 620, to: 620, duration: 0.09, volume: 0.15 });
        this.tone({ type: 'square', from: 880, to: 880, duration: 0.12, volume: 0.15, delay: 0.1 });
        break;
      case 'power_time':
        this.tone({ type: 'sine', from: 900, to: 120, duration: 0.6, volume: 0.3 });
        this.tone({ type: 'triangle', from: 450, to: 60, duration: 0.7, volume: 0.22 });
        break;
      case 'power_invis':
        this.tone({ type: 'sawtooth', from: 200, to: 1400, duration: 0.35, volume: 0.14 });
        this.glitchBurst(0.35);
        break;
      case 'power_phase':
        this.tone({ type: 'sine', from: 160, to: 90, duration: 0.5, volume: 0.32 });
        this.tone({ type: 'triangle', from: 320, to: 640, duration: 0.45, volume: 0.16, delay: 0.05 });
        break;
      case 'power_end':
        this.tone({ type: 'sine', from: 300, to: 200, duration: 0.2, volume: 0.15 });
        break;
      case 'unlock':
        [523, 659, 784, 1046].forEach((f, i) => this.tone({
          type: 'triangle', from: f, to: f, duration: 0.18, volume: 0.2, delay: i * 0.08,
        }));
        break;
      case 'secret':
        [392, 523, 659].forEach((f, i) => this.tone({
          type: 'sine', from: f, to: f, duration: 0.25, volume: 0.2, delay: i * 0.1,
        }));
        break;
      case 'achievement':
        [659, 880, 1318].forEach((f, i) => this.tone({
          type: 'triangle', from: f, to: f, duration: 0.2, volume: 0.2, delay: i * 0.09,
        }));
        break;
      case 'caught':
        this.glitchBurst(1.2);
        this.tone({ type: 'sawtooth', from: 400, to: 40, duration: 0.8, volume: 0.25 });
        break;
      case 'ending':
        [196, 247, 294, 392].forEach((f, i) => this.tone({
          type: 'sine', from: f, to: f, duration: 1.2, volume: 0.2, delay: i * 0.25,
        }));
        break;
      default:
        break;
    }
  }

  /* ---------------- loop (musica, passos, perseguicao) ---------------- */

  /**
   * ctx: { dt, tension (0..1), chasing, moving, running }
   * Chamado todo frame.
   */
  update({ dt, tension = 0, chasing = false, moving = false, running = false }) {
    if (!this.ready || this.suspended) return;
    const t = this.ctx.currentTime;

    this.targetTension = Math.max(0, Math.min(1, tension));
    this.tension += (this.targetTension - this.tension) * Math.min(1, dt * 0.9);
    const k = this.tension;

    // passos: mais rapidos ao correr
    if (moving) {
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) {
        this.footstep(running);
        this.stepTimer = running ? 0.26 : 0.43;
      }
    } else {
      this.stepTimer = 0;
    }

    // musica: calma some e a camada tensa cresce com a suspeita
    this.calmGain.gain.setTargetAtTime(0.5 * (1 - k * 0.7), t, 0.4);
    this.tenseGain.gain.setTargetAtTime(k * 0.55, t, 0.4);
    this.tenseFilter.frequency.setTargetAtTime(200 + k * 900, t, 0.4);
    for (let i = 0; i < this.padTense.length; i += 1) {
      // desafina um pouco mais conforme a tensao sobe
      this.padTense[i].detune.setTargetAtTime(i * k * 18, t, 0.5);
    }

    // arpejo: mais rapido e mais agudo quando tenso
    const beatLen = 0.75 - k * 0.45;
    this.beatTimer -= dt;
    if (this.beatTimer <= 0) {
      this.beatTimer = beatLen;
      const note = ARP_NOTES[this.beatIndex % ARP_NOTES.length] * (k > 0.55 ? 1 : 0.5);
      this.beatIndex += 1;
      this.arpOsc.type = k > 0.5 ? 'sawtooth' : 'triangle';
      this.arpOsc.frequency.setValueAtTime(note, t);
      const peak = 0.05 + k * 0.05;
      this.arpGain.gain.cancelScheduledValues(t);
      this.arpGain.gain.setValueAtTime(0.0001, t);
      this.arpGain.gain.linearRampToValueAtTime(peak, t + 0.02);
      this.arpGain.gain.exponentialRampToValueAtTime(0.0001, t + beatLen * 0.9);
    }

    // sirene da perseguicao (pulsa e alterna dois tons)
    this.chasing = chasing;
    this.chaseTimer -= dt;
    if (this.chaseTimer <= 0) {
      this.chaseTimer = 0.32;
      this.chaseFlip = !this.chaseFlip;
      this.chaseOsc.frequency.setTargetAtTime(this.chaseFlip ? 190 : 140, t, 0.02);
      this.chaseGain.gain.setTargetAtTime(chasing ? (this.chaseFlip ? 0.16 : 0.07) : 0, t, 0.03);
    }
  }
}

export const audio = new AudioEngine();
