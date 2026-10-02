import { CONFIG } from './config.js';

/** Relogio do mundo: converte tempo real em horas do jogo (0h - 24h). */
export class WorldClock {
  constructor({ startHour = CONFIG.time.startHour, dayLengthSeconds = CONFIG.time.dayLengthSeconds } = {}) {
    this.startHour = startHour;
    this.dayLengthSeconds = dayLengthSeconds;
    this.hour = startHour;
    this.days = 0;
  }

  update(dt) {
    this.hour += dt * (24 / this.dayLengthSeconds);
    while (this.hour >= 24) {
      this.hour -= 24;
      this.days += 1;
    }
  }

  setHour(hour) {
    this.hour = ((hour % 24) + 24) % 24;
  }

  reset() {
    this.hour = this.startHour;
    this.days = 0;
  }

  get timeString() {
    const totalMinutes = Math.floor(this.hour * 60);
    const h = String(Math.floor(totalMinutes / 60) % 24).padStart(2, '0');
    const m = String(totalMinutes % 60).padStart(2, '0');
    return `${h}:${m}`;
  }

  get phase() {
    const h = this.hour;
    if (h < 5) return 'madrugada';
    if (h < 12) return 'manha';
    if (h < 18) return 'tarde';
    return 'noite';
  }

  get isNight() {
    return this.hour < 6 || this.hour >= 19;
  }
}
