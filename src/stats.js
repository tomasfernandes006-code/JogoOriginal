/**
 * Estatisticas da partida atual (usadas nos creditos e nas conquistas).
 * Tudo aqui vale por partida: resetRun() zera, e o save guarda uma copia.
 * Dados que duram entre partidas (conquistas, mudo) ficam em outros modulos.
 */

export const POWER_IDS = ['time', 'invis', 'phase'];

function defaults() {
  return {
    playSeconds: 0,          // tempo jogado (so conta com o jogo rodando)
    caught: 0,               // vezes que foi pego
    anomalies: 0,            // anomalias coletadas
    powerUses: { time: 0, invis: 0, phase: 0 },
    chasesSurvived: 0,       // perseguicoes das quais escapou
    secrets: 0,              // segredos descobertos
    caughtThisRun: false,    // foi pego alguma vez nesta partida?
  };
}

export const stats = defaults();

/** Soma o tempo de jogo (chamado todo frame com o jogo rodando). */
export function tickPlay(dt) {
  stats.playSeconds += dt;
}

export function recordCaught() {
  stats.caught += 1;
  stats.caughtThisRun = true;
}

export function recordPowerUse(id) {
  if (!POWER_IDS.includes(id)) return;
  stats.powerUses[id] += 1;
}

export function recordChaseSurvived() {
  stats.chasesSurvived += 1;
}

export function setAnomalyCount(count) {
  stats.anomalies = Math.max(0, Math.floor(count) || 0);
}

export function setSecretCount(count) {
  stats.secrets = Math.max(0, Math.floor(count) || 0);
}

export function totalPowerUses() {
  return POWER_IDS.reduce((sum, id) => sum + stats.powerUses[id], 0);
}

/** Zera as estatisticas da partida (novo jogo, tecla R, jogar de novo). */
export function resetRun() {
  const fresh = defaults();
  Object.assign(stats, fresh);
  stats.powerUses = fresh.powerUses;
}

export function serializeStats() {
  return {
    playSeconds: Number(stats.playSeconds.toFixed(2)),
    caught: stats.caught,
    anomalies: stats.anomalies,
    powerUses: { ...stats.powerUses },
    chasesSurvived: stats.chasesSurvived,
    secrets: stats.secrets,
    caughtThisRun: stats.caughtThisRun,
  };
}

/** Carrega do save, aceitando dados incompletos ou invalidos. */
export function loadStats(data) {
  resetRun();
  if (!data || typeof data !== 'object') return;
  const num = (value) => (Number.isFinite(value) && value >= 0 ? value : 0);
  stats.playSeconds = num(data.playSeconds);
  stats.caught = Math.floor(num(data.caught));
  stats.anomalies = Math.floor(num(data.anomalies));
  stats.chasesSurvived = Math.floor(num(data.chasesSurvived));
  stats.secrets = Math.floor(num(data.secrets));
  stats.caughtThisRun = data.caughtThisRun === true || stats.caught > 0;
  if (data.powerUses && typeof data.powerUses === 'object') {
    for (const id of POWER_IDS) stats.powerUses[id] = Math.floor(num(data.powerUses[id]));
  }
}

/** "mm:ss" (ou "h:mm:ss") para a tela de creditos. */
export function formatPlayTime(totalSeconds) {
  const total = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
