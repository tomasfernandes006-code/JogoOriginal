import { PALETTE } from './config.js';

/**
 * LAYOUT = planta baixa do mundo.
 * Praca central, 3 casas nos cantos, local de trabalho a leste
 * e a area proibida cercada ao norte.
 */
export const LAYOUT = {
  plaza: { radius: 11 },
  fountain: { radius: 2.3 },
  houses: [
    {
      id: 'homeA',
      name: 'Sua casa',
      x: -24, z: -18, w: 12, d: 9, h: 4.2,
      color: PALETTE.housePlayer, roofColor: PALETTE.roof,
      doorSide: 'east', sign: 'CASA 01', signBackground: '#b98428',
      // unica casa com interior: e onde o jogador comeca no primeiro dia
      enterable: true,
    },
    {
      id: 'homeB',
      name: 'Casa Verde',
      x: 24, z: -18, w: 12, d: 9, h: 4.2,
      color: PALETTE.houseB, roofColor: PALETTE.roofAlt,
      doorSide: 'west', sign: 'CASA 02', signBackground: '#2f6b4a',
    },
    {
      id: 'homeC',
      name: 'Casa Lilas',
      x: -24, z: 18, w: 12, d: 9, h: 4.2,
      color: PALETTE.houseC, roofColor: PALETTE.roof,
      doorSide: 'east', sign: 'CASA 03', signBackground: '#6f4a86',
    },
  ],
  work: {
    id: 'work',
    name: 'Setor de Trabalho',
    x: 28, z: 20, w: 18, d: 13, h: 5.6,
    color: PALETTE.workplace, roofColor: PALETTE.roofAlt,
    doorSide: 'west', sign: 'TRABALHO', signBackground: '#2e3c52',
  },
  forbidden: {
    area: { minX: -20, maxX: 20, minZ: 28, maxZ: 58 },
    building: { x: 0, z: 44, w: 22, d: 16, h: 6.5 },
    gate: { z: 28, halfWidth: 2.2 },
  },
};

/**
 * As cinco anomalias: cada uma em um lugar e com um horario diferente.
 * `window` e o intervalo de horas em que ela aparece; quando `to < from`
 * o intervalo atravessa a meia-noite (ex: noite = [19, 6]).
 * Cada pista e uma fracao da historia, revelada ao interagir (tecla E).
 */
export const ANOMALIES = [
  {
    id: 'quarto',
    name: 'Objeto do quarto',
    x: -27.5, z: -20.5,
    window: [0, 24],
    clue: 'O quarto estava arrumado antes de voce acordar. Alguem fez isso. Alguem sempre fez.',
  },
  {
    id: 'praca',
    name: 'Objeto da praca',
    x: 4.6, z: 4.6,
    window: [6, 20],
    clue: 'Marcas de circulos no chao da praca. Sempre as mesmas. Ninguem lembra de ter estado ali.',
  },
  {
    id: 'patio',
    name: 'Objeto do patio',
    x: 23, z: 9,
    window: [19, 6],
    clue: 'O relogio do patio marca sempre 17:58. Ninguem ajusta. Ninguem parece notar.',
  },
  {
    id: 'atras',
    name: 'Objeto atras do predio',
    x: 0, z: 55,
    window: [0, 5],
    clue: 'Atras do predio proibido: cinco marcas no chao, do tamanho de uma mao. Cinco objetos que ninguem levou.',
  },
  {
    id: 'portao',
    name: 'Objeto do portao',
    x: -55, z: -40,
    window: [4, 11],
    clue: 'Um cartaz desbotado: BUSCAM-SE PESSOAS COMO VOCE. O resto da frase foi raspado.',
  },
];

/** Pontos de navegacao: sempre fora da area proibida (regra do mundo). */
export const NAV_NODES = {
  p_n: { x: 0, z: -7.5 },
  p_e: { x: 7.5, z: 0 },
  p_s: { x: 0, z: 7.5 },
  p_w: { x: -7.5, z: 0 },
  road_north: { x: 0, z: 21 },
  homeA_door: { x: 0, z: 0 }, // preenchidos em buildNav()
  homeB_door: { x: 0, z: 0 },
  homeC_door: { x: 0, z: 0 },
  work_door: { x: 0, z: 0 },
};

const NAV_EDGES = [
  ['p_n', 'p_e'], ['p_e', 'p_s'], ['p_s', 'p_w'], ['p_w', 'p_n'],
  ['p_n', 'homeA_door'], ['p_w', 'homeA_door'],
  ['p_n', 'homeB_door'], ['p_e', 'homeB_door'],
  ['p_w', 'homeC_door'], ['road_north', 'homeC_door'],
  ['p_e', 'work_door'], ['p_s', 'work_door'], ['road_north', 'work_door'],
  ['p_e', 'road_north'], ['p_w', 'road_north'],
];

/** Ponto de aproximacao da porta (onde o NPC entra/sai do predio). */
export function doorApproach(spec) {
  const { x, z, w, d, doorSide } = spec;
  const offset = 1.4;
  switch (doorSide) {
    case 'east': return { x: x + w / 2 + offset, z };
    case 'west': return { x: x - w / 2 - offset, z };
    case 'north': return { x, z: z - d / 2 - offset };
    default: return { x, z: z + d / 2 + offset };
  }
}

/** Grafo de navegacao simples com busca em largura (BFS). */
export class NavGraph {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.adjacency = new Map();
    for (const key of Object.keys(nodes)) this.adjacency.set(key, []);
    for (const [a, b] of edges) {
      if (!nodes[a] || !nodes[b]) continue;
      this.adjacency.get(a).push(b);
      this.adjacency.get(b).push(a);
    }
  }

  node(id) {
    return this.nodes[id] || null;
  }

  positionOf(id) {
    const n = this.nodes[id];
    return n ? { x: n.x, z: n.z } : null;
  }

  /** No mais proximo de uma posicao livre do mapa. */
  nearest(x, z) {
    let best = null;
    let bestDist = Infinity;
    for (const [id, node] of Object.entries(this.nodes)) {
      const d = (node.x - x) ** 2 + (node.z - z) ** 2;
      if (d < bestDist) {
        bestDist = d;
        best = id;
      }
    }
    return best;
  }

  /** Caminho de nos (inclui origem e destino) ou [] se nao houver rota. */
  path(fromId, toId) {
    if (!this.nodes[fromId] || !this.nodes[toId]) return [];
    if (fromId === toId) return [fromId];

    const queue = [fromId];
    const cameFrom = new Map([[fromId, null]]);

    while (queue.length) {
      const current = queue.shift();
      if (current === toId) break;
      for (const next of this.adjacency.get(current)) {
        if (!cameFrom.has(next)) {
          cameFrom.set(next, current);
          queue.push(next);
        }
      }
    }

    if (!cameFrom.has(toId)) return [];
    const result = [];
    let node = toId;
    while (node) {
      result.unshift(node);
      node = cameFrom.get(node);
    }
    return result;
  }
}

/** Preenche os nos das portas a partir das posicoes reais dos predios. */
export function buildNav() {
  NAV_NODES.homeA_door = doorApproach(LAYOUT.houses[0]);
  NAV_NODES.homeB_door = doorApproach(LAYOUT.houses[1]);
  NAV_NODES.homeC_door = doorApproach(LAYOUT.houses[2]);
  NAV_NODES.work_door = doorApproach(LAYOUT.work);
  return new NavGraph(NAV_NODES, NAV_EDGES);
}

/** Pontos de flanagem dentro da praca (NPCs ociosos). */
export const PLAZA_WANDER_POINTS = [
  { x: 4.5, z: 4.5 }, { x: -4.5, z: 4.5 }, { x: 4.5, z: -4.5 }, { x: -4.5, z: -4.5 },
  { x: 0, z: 5.5 }, { x: 5.5, z: 0 }, { x: 0, z: -5.5 }, { x: -5.5, z: 0 },
];
