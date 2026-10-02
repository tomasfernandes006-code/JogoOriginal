/**
 * Configuracao central de "O NPC".
 * Todo numero que rege o mundo fica aqui para facilitar ajustes futuros.
 */
export const CONFIG = {
  world: {
    groundSize: 190,
    bounds: 86, // limite navegavel (jogador e NPCs sao travados aqui)
  },

  time: {
    startHour: 7,
    dayLengthSeconds: 300, // 5 minutos reais = 24 horas do mundo
  },

  player: {
    radius: 0.45,
    height: 1.8,
    walkSpeed: 5.0,
    runMultiplier: 1.8,
    spawn: { x: -14, z: -12 },
  },

  camera: {
    distance: 8.5,
    minDistance: 3,
    maxDistance: 22,
    lookHeight: 1.5,
    sensitivity: 0.0026,
    minPitch: -0.2,
    maxPitch: 1.15,
    followLambda: 14,
    zoomStep: 1.3,
    fov: 60,
  },

  npc: {
    radius: 0.42,
    baseSpeed: 1.5,
    speedVariance: 0.3,
    turnSpeed: 4.0,
    visionRange: 20,
    visionRangeAfterGlitch: 27,
    visionFov: (140 * Math.PI) / 180,
    // raio de atencao periférica: mesmo de costas, o NPC estranha quem
    // aparece bem perto na area proibida
    peripheralRange: 7.5,
    followDistance: 5.5,
    followSpeed: 2.3,
    enterTime: 1.0,
    idleMin: 2.5,
    idleMax: 7.0,
    labelMaxDistance: 60,
  },

  suspicion: {
    max: 100,
    seenInForbidden: 18,
    witnessedGlitch: 30,
    postGlitchReaction: 8,
    decayPerSecond: 1.4,
    decayDelay: 6,
  },

  // Niveis de suspeita e o que cada um dispara.
  heat: {
    wary: 30,    // acima disso: NPCs proximos param e te encaram (com "?")
    hunt: 60,    // acima disso: seguem, murmuram e a tela fica tensa
    chase: 100,  // no maximo: perseguicao

    stareRadius: 13,        // raio em que o NPC para e encara no nivel 1
    stareMinSeconds: 4,     // tempo minimo encarando antes de voltar a rotina
    stareMeltSeconds: 10,   // sem o jogador por perto, desiste do encaro
    stareSpeedFactor: 0,    // parado enquanto encara

    chaseSpeed: 4.4,           // NPCs correm na perseguicao
    chaseRepathSeconds: 0.8,   // recalcula a rota no grafo neste intervalo
    catchRadius: 1.5,          // distancia que conta como "alcancou voce"

    murmurMinSeconds: 7,   // intervalo entre frases desconfiadas
    murmurMaxSeconds: 13,

    safeZoneDecayMultiplier: 6,  // queda de suspeita dentro das casas
    safeZoneInset: 0.6,           // folga para o rect da casa

    // punicao ao ser alcancado
    catchSuspicion: 30,       // suspeita volta para este valor
    catchHourPenalty: 1,      // horas de mundo perdidas
    catchGlitchDuration: 2.2, // duracao do glitch da captura
    catchMessage: 'Erro: rotina reescrita. Voce foi devolvido para casa.',

    // vinheta vermelha (tela mais tensa)
    tensionWary: 0,
    tensionHunt: 0.3,
    tensionChase: 0.62,
  },

  events: {
    glitchDuration: 1.8,
    forbiddenToastCooldown: 20,
  },

  objectives: {
    walkDistance: 5,   // passo 1: metros que o jogador precisa andar
    runSeconds: 2,     // passo 2: segundos correndo (SHIFT + andando)
    plazaRadius: 8,    // passo 3: distancia ate o centro da praca
    reachRadius: 3.5,  // passos 5 e 6: alcance da porta/portao
    checkSeconds: 1.1, // duracao do "check" ao concluir um passo
  },

  start: {
    controlsCardSeconds: 5,  // tempo do quadro de controles apos o botao
    houseExitRadius: 3.2,    // raio que conta como "saiu de casa" (com folga para a colisao da parede)
  },

  anomalies: {
    count: 5,          // total de anomalias (tem que bater com LAYOUT.anomalies)
    interactRadius: 3.4,
    suspicionPerFind: 14,   // suspeita ganha a cada anomalia coletada
    glitchDuration: 1.1,     // glitch curto ao encostar em uma
    hideAfterFound: true,    // a anomalia some depois de coletada
    // o diario (tecla J) mostra no maximo esta altura
    diaryMaxHeight: 0.72,
  },

  power: {
    duration: 6,          // segundos de tempo congelado (Q)
    cooldown: 20,         // recarga total compartilhada pelos 3 poderes
    invisDuration: 5,     // segundos de invisibilidade glitchada (F)
    phaseDuration: 3,     // maximo de segundos atravessando parede (G)
    phaseReach: 2.2,      // distancia maxima da parede da casa para G funcionar
    witnessRange: 8,      // usar perto de um NPC custa suspeita
    suspicionCost: 10,    // quebrar o tempo na frente de alguem
    invisSuspicionCost: 6,
    phaseSuspicionCost: 8,
    unlockHint: 'Voce aprendeu a quebrar o tempo. Aperte Q',
    // a praca vigiada: e aqui que o objetivo obriga a usar o poder
    zone: { x: 0, z: 0, radius: 9 },
    crossSeconds: 2.5,    // tempo dentro da zona com o poder ligado
    // aspecto da tela congelada
    invert: 0.55,
    grayscale: 0.8,
    contrast: 1.15,
    glitchLevel: 0.26,
    invisGlitchLevel: 0.12,
  },

  ally: {
    name: 'Celia',
    minAnomalies: 2,        // anomalias necessarias para ela despertar
    distractSeconds: 4,     // quanto tempo os perseguidores ficam distraidos
    distractRadius: 12,     // alcance em volta do jogador
    cooldown: 30,           // recarga da distracao
    helpRange: 40,          // so ajuda se estiver a ate esta distancia do jogador
    warnRange: 24,          // aviso sobre NPC olhando para a area proibida
    warnCooldown: 12,
  },

  secrets: {
    talkRange: 3,
    hintEvery: 3,           // a cada N tentativas fora do horario ele da uma dica
  },

  ending: {
    lineSeconds: 4.2,       // tempo de cada frase da cena final
  },

  hints: {
    firstDelay: 3,        // espera antes da primeira dica da sessao
    fadeIn: 0.45,         // fade in
    hold: 5.5,            // tempo parado na tela
    fadeOut: 0.6,         // fade out
    gap: 1.2,             // intervalo silencioso entre duas dicas
    houseRange: 7,        // proximidade de uma porta de casa
    fountainRange: 6.5,   // proximidade da fonte
    npcRange: 16,         // distancia para "ver" um NPC de perto
    fenceRange: 9,        // proximidade da cerca da area proibida
    suspicionRise: 6,     // quanto a suspeita precisa subir para a dica
  },

  guide: {
    hideDistance: 4.5,      // seta e marcador somem abaixo desta distancia
    arrow: {
      distance: 2.2,        // distancia da seta 3D a frente do jogador
      bobAmplitude: 0.18,   // curso da animacao de sobe/desce
      bobSpeed: 2.4,
      turnLambda: 8,        // suavidade da rotacao da seta
      headHeight: 1.4,      // altura usada na projecao da borda da tela
    },
    marker: {
      ringInner: 1.15,
      ringOuter: 1.8,
      ringPulse: 0.09,      // variacao de escala do anel
      pillarBottomRadius: 0.9,
      pillarTopRadius: 0.5,
      pillarHeight: 7.5,
      pillarOpacity: 0.16,
      lightIntensity: 6,
      lightDistance: 18,
      pulseSpeed: 1.8,
    },
    edge: {
      margin: 64,           // px de folga nas bordas da tela
    },
  },

  save: {
    key: 'o-npc.save.v1',
    objectiveKey: 'o-npc.objectives.v1',
    hintsKey: 'o-npc.hints.v1',
    anomaliesKey: 'o-npc.anomalies.v1',
    achievementsKey: 'o-npc.achievements.v1',  // dura entre partidas
    muteKey: 'o-npc.mute.v1',                  // dura entre partidas
    version: 3,                                // versao do formato do save
    intervalMs: 4000,
  },
};

/** Paleta de cores (tudo gerado por codigo, sem assets externos). */
export const PALETTE = {
  grass: 0x5c8a4c,
  forbiddenGround: 0x4a3f3f,
  path: 0xc6bca4,
  plaza: 0xd8d1c0,
  plazaRing: 0xb0a893,
  fountainBase: 0x9aa2ac,
  water: 0x4fa3d1,

  housePlayer: 0xe3b879,
  houseB: 0x9dc4ab,
  houseC: 0xc9a3c4,
  roof: 0x8c4a3a,
  roofAlt: 0x5b5560,
  workplace: 0x7b8ea8,
  forbiddenBuilding: 0x34333c,
  forbiddenDoor: 0x7a2320,

  door: 0x5a3a24,
  window: 0xffe9a8,
  fence: 0x71707a,
  lamp: 0x4a4a52,
  lampGlow: 0xfff0b0,
  bench: 0xa06d3c,
  crate: 0xb98b4f,
  treeTrunk: 0x6b4a2f,
  treeLeaves: 0x3f7a3a,

  playerBody: 0xf3f1ea,
  playerAccent: 0xff8a3d,
  npcSkin: 0xe8b98f,
  anomaly: 0xd94fff,

  guideArrow: 0xffc93c,
  guideBeam: 0x8fe9ff,
};

/** Cores dos NPCs (um tom por morador, para diferenciar na praca). */
export const NPC_COLORS = [
  0xe0645a, 0x5aa8e0, 0x6fc46f, 0xe0c44f, 0xb07ae0, 0xe08ac0, 0x4fd0c0,
];
