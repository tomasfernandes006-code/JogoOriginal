import { CONFIG } from './config.js';

/**
 * Salvamento em localStorage.
 *
 * Formato do save principal (campo "version"):
 *   v1  (sem campo)  posicao, suspeita, hora
 *   v2               + stats (estatisticas) e powers (poderes liberados)
 *   v3               + secrets (segredos), ally (aliada) e ending (final)
 *
 * Saves antigos sao migrados ao carregar, sem perder o que existia.
 */
export const SAVE_VERSION = CONFIG.save.version;

/** Leva qualquer save (antigo ou incompleto) para o formato atual. */
export function migrateSave(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const data = { ...raw };
  let version = Number.isInteger(data.version) && data.version > 0 ? data.version : 1;

  if (version < 2) {
    data.stats = data.stats && typeof data.stats === 'object' ? data.stats : null;
    data.powers = Array.isArray(data.powers) ? data.powers : [];
    version = 2;
  }
  if (version < 3) {
    data.secrets = Array.isArray(data.secrets) ? data.secrets : [];
    data.ally = data.ally === true;
    data.ending = data.ending && typeof data.ending === 'object'
      ? data.ending
      : { done: false, id: null };
    version = 3;
  }

  // limpeza de tipos: um campo estragado nunca derruba o jogo
  data.powers = Array.isArray(data.powers) ? data.powers.filter((id) => typeof id === 'string') : [];
  data.secrets = Array.isArray(data.secrets) ? data.secrets.filter((id) => typeof id === 'string') : [];
  data.ally = data.ally === true;
  const ending = data.ending && typeof data.ending === 'object' ? data.ending : {};
  data.ending = {
    done: ending.done === true,
    id: typeof ending.id === 'string' ? ending.id : null,
  };
  data.version = SAVE_VERSION;
  return data;
}

export function loadSave() {
  try {
    const raw = window.localStorage.getItem(CONFIG.save.key);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data !== 'object') return null;
    return migrateSave(data);
  } catch (error) {
    return null;
  }
}

export function saveGame(data) {
  try {
    window.localStorage.setItem(CONFIG.save.key, JSON.stringify({ ...data, version: SAVE_VERSION }));
    return true;
  } catch (error) {
    return false;
  }
}

export function clearSave() {
  try {
    window.localStorage.removeItem(CONFIG.save.key);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Passo atual dos objetivos.
 * Usa uma chave separada do save principal para nao alterar o formato
 * salvo em CONFIG.save.key (nada do que ja foi salvo e perdido).
 */
export function loadObjectiveStep() {
  try {
    const raw = window.localStorage.getItem(CONFIG.save.objectiveKey);
    const step = Number.parseInt(raw, 10);
    return Number.isFinite(step) && step >= 0 ? step : 0;
  } catch (error) {
    return 0;
  }
}

export function saveObjectiveStep(step) {
  try {
    const value = Math.max(0, Math.floor(Number(step) || 0));
    window.localStorage.setItem(CONFIG.save.objectiveKey, String(value));
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Ids das dicas que o jogador ja viu, para nunca repetir a mesma.
 * Chave separada: o save principal nao muda de formato.
 */
export function loadSeenHints() {
  try {
    const raw = window.localStorage.getItem(CONFIG.save.hintsKey);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter((id) => typeof id === 'string');
  } catch (error) {
    return [];
  }
}

export function saveSeenHints(ids) {
  try {
    const list = Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : [];
    window.localStorage.setItem(CONFIG.save.hintsKey, JSON.stringify(list));
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Ids das anomalias ja coletadas (o diario nunca repete uma pista).
 * Chave separada: o save principal nao muda de formato.
 */
export function loadFoundAnomalies() {
  try {
    const raw = window.localStorage.getItem(CONFIG.save.anomaliesKey);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter((id) => typeof id === 'string');
  } catch (error) {
    return [];
  }
}

export function saveFoundAnomalies(ids) {
  try {
    const list = Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : [];
    window.localStorage.setItem(CONFIG.save.anomaliesKey, JSON.stringify(list));
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Apaga tudo da partida (save, objetivos, dicas, anomalias).
 * NAO apaga o que dura entre partidas: conquistas e estado do mudo.
 */
export function clearRunData() {
  try {
    const keys = [
      CONFIG.save.key,
      CONFIG.save.objectiveKey,
      CONFIG.save.hintsKey,
      CONFIG.save.anomaliesKey,
    ];
    for (const key of keys) window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

/** Conquistas: chave propria, nunca apagada por "Jogar de novo" nem por R. */
export function loadAchievements() {
  try {
    const raw = window.localStorage.getItem(CONFIG.save.achievementsKey);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data.filter((id) => typeof id === 'string') : [];
  } catch (error) {
    return [];
  }
}

export function saveAchievements(ids) {
  try {
    const list = Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : [];
    window.localStorage.setItem(CONFIG.save.achievementsKey, JSON.stringify(list));
    return true;
  } catch (error) {
    return false;
  }
}
