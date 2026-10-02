import { ANOMALIES } from './map.js';
import { loadFoundAnomalies, saveFoundAnomalies } from './save.js';

/**
 * As cinco anomalias do mundo.
 *
 * Cada uma tem lugar e horario proprios: so aparece dentro da sua janela de
 * horas e desaparece depois de coletada. Cada interacao revele uma pista de
 * historia, guardada no diario (tecla J).
 */

/** A anomalia esta disponivel nesse horario da hora do mundo? */
export function inWindow(hour, [from, to]) {
  if (from === 0 && to >= 24) return true;
  if (to < from) return hour >= from || hour < to; // atravessa a meia-noite
  return hour >= from && hour < to;
}

export class AnomalySystem {
  constructor({ world, ui }) {
    this.world = world;
    this.ui = ui;
    this.defs = ANOMALIES;
    this.total = this.defs.length;
    this.found = new Set(loadFoundAnomalies());
    this.diaryOpen = false;
  }

  get count() {
    return this.found.size;
  }

  get complete() {
    return this.count >= this.total;
  }

  isFound(id) {
    return this.found.has(id);
  }

  /**
   * Aplica o horario do mundo: cada anomalia fica visivel (e interagivel)
   * apenas quando deveria estar no mapa.
   */
  applySchedule(hour) {
    for (let i = 0; i < this.defs.length; i += 1) {
      const def = this.defs[i];
      const active = !this.isFound(def.id) && inWindow(hour, def.window);
      this.world.setAnomalyActive(def.id, active);
    }
  }

  /**
   * Proxima anomalia a procurar: a primeira ainda nao coletada que esteja
   * disponivel agora. E o alvo que a seta guia aponta.
   */
  nextTarget() {
    for (let i = 0; i < this.defs.length; i += 1) {
      const def = this.defs[i];
      if (this.isFound(def.id)) continue;
      const anomaly = this.world.anomalyById(def.id);
      if (anomaly && anomaly.available) {
        return { id: def.id, x: def.x, z: def.z, name: def.name };
      }
    }
    return null;
  }

  /**
   * Coleta uma anomalia. Devolve a pista revelada, ou null se ja tinha sido
   * coletada (ou se ela nao estava disponivel).
   */
  collect(id) {
    const def = this.defs.find((d) => d.id === id);
    if (!def || this.isFound(id)) return null;
    const anomaly = this.world.anomalyById(id);
    if (!anomaly || !anomaly.available) return null;

    this.found.add(id);
    this.world.collectAnomaly(id);
    saveFoundAnomalies([...this.found]);
    this.refreshDiary();
    return { id, clue: def.clue, count: this.count, total: this.total };
  }

  /** Linhas do diario: as pistas achadas e as que ainda faltam. */
  entries() {
    return this.defs.map((def, index) => ({
      index: index + 1,
      name: def.name,
      found: this.isFound(def.id),
      clue: this.isFound(def.id) ? def.clue : null,
    }));
  }

  refreshDiary() {
    if (this.diaryOpen) this.ui.setDiaryContent(this.entries(), this.count, this.total);
  }

  /** Texto do objetivo do proximo passo, usado por src/objectives.js. */
  objectiveText() {
    const next = this.nextTarget();
    if (!next) return 'Voce encontrou todas as anomalias';
    const left = this.total - this.count;
    return `Ache a anomalia ${this.count + 1}/${this.total} (${left} restante${left > 1 ? 's' : ''})`;
  }

  toggleDiary() {
    this.diaryOpen = !this.diaryOpen;
    this.ui.setDiaryOpen(this.diaryOpen);
    if (this.diaryOpen) this.ui.setDiaryContent(this.entries(), this.count, this.total);
    return this.diaryOpen;
  }

  reset() {
    this.found.clear();
    saveFoundAnomalies([]);
    this.world.resetAnomalies();
    this.refreshDiary();
  }
}
