import { loadAchievements, saveAchievements } from './save.js';

/**
 * Conquistas simples. Ficam numa chave propria do localStorage, entao
 * duram entre partidas: "Jogar de novo" e a tecla R nao as apagam.
 */
export const ACHIEVEMENTS = [
  { id: 'forbidden', title: 'Entrou na area proibida', description: 'Voce pisou onde nenhum NPC jamais pisou.' },
  { id: 'escaped', title: 'Fugiu de uma perseguicao', description: 'Eles correram atras de voce. Voce escapou.' },
  { id: 'froze', title: 'Congelou o tempo', description: 'Por alguns segundos, o mundo parou so para voce.' },
  { id: 'anomalies', title: 'Achou todas as anomalias', description: 'Os cinco objetos que o script escondeu.' },
  { id: 'nocatch', title: 'Terminou sem ser pego', description: 'Chegou ao final sem ser alcancado nenhuma vez.' },
];

export class AchievementSystem {
  constructor({ ui, onUnlock }) {
    this.ui = ui;
    this.onUnlock = onUnlock || (() => {});
    this.unlocked = new Set(loadAchievements().filter((id) => ACHIEVEMENTS.some((a) => a.id === id)));
    this.refreshUi();
  }

  has(id) {
    return this.unlocked.has(id);
  }

  get count() {
    return this.unlocked.size;
  }

  /** Desbloqueia (uma unica vez) e mostra o aviso na tela. */
  unlock(id) {
    const def = ACHIEVEMENTS.find((a) => a.id === id);
    if (!def || this.unlocked.has(id)) return false;
    this.unlocked.add(id);
    saveAchievements([...this.unlocked]);
    this.ui.achievement(def.title, def.description);
    this.onUnlock(def);
    this.refreshUi();
    return true;
  }

  list() {
    return ACHIEVEMENTS.map((a) => ({ ...a, unlocked: this.unlocked.has(a.id) }));
  }

  refreshUi() {
    this.ui.setAchievementsList(this.list());
  }
}
