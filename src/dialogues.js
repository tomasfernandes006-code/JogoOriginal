import { randomPick } from './utils.js';

/**
 * Todos os textos de fala dos NPCs ficam aqui.
 *
 * Cada NPC tem personalidade e falas proprias. A fala certa depende de:
 *   1. a hora do dia  (manha, tarde, noite, madrugada)
 *   2. a suspeita do jogador (calma, > 30, > 60)
 *   3. se o glitch (a quebra do script) ja aconteceu
 *
 * Uso: getLine('Bruno', 'talk', { hour, suspicion, glitch })
 *
 * Tipos de fala (kind):
 *   talk    jogador aperta E perto do NPC
 *   notice  viu o jogador na area proibida
 *   follow  seguindo o jogador a distancia (area proibida)
 *   glitch  reacao curta depois do glitch
 *   murmur  suspeita alta (nivel 2) e perseguicao (nivel 3)
 *   chase   grito ao comecar a perseguir
 *   ally    fala da aliada depois que ela desperta
 */

export const SUSPICION_WARY = 30;
export const SUSPICION_HUNT = 60;

/** Faixa do dia: manha 5-12, tarde 12-18, noite 18-23, madrugada 23-5. */
export function timeBand(hour) {
  const h = ((hour % 24) + 24) % 24;
  if (h >= 5 && h < 12) return 'manha';
  if (h >= 12 && h < 18) return 'tarde';
  if (h >= 18 && h < 23) return 'noite';
  return 'madrugada';
}

/** Nivel de suspeita usado nas falas. */
export function suspicionBand(value) {
  if (value > SUSPICION_HUNT) return 'hunt';
  if (value > SUSPICION_WARY) return 'wary';
  return 'calm';
}

export const NPC_PROFILES = {
  Bruno: {
    trait: 'preocupado com horarios',
    talk: {
      calm: {
        manha: ['Sao seis horas, sempre seis. Voce esta atrasado?', 'Cafe as sete, trabalho as oito. Ninguem se atrasa.'],
        tarde: ['Ja passou do meio-dia. O relogio nao espera ninguem.', 'Almoco: uma hora exata. Nem um minuto a mais.'],
        noite: ['Ja anoiteceu. Casa antes das vinte, como sempre.', 'A praca encerra a minha agenda. Depois, cama.'],
        madrugada: ['Ainda de pe? Isso nao esta na minha tabela.', 'Madrugada nao existe no meu horario.'],
      },
      glitch: {
        manha: ['O relogio errou ontem. Eu vi. Sete segundos.'],
        tarde: ['Meus horarios estao falhando. Isso nunca aconteceu.'],
        noite: ['A agenda mudou sozinha. Eu senti.'],
        madrugada: ['Se o tempo parou, onde eu estava esses segundos?'],
      },
      wary: ['Por que voce esta fora do horario?', 'Seus passos nao batem com a rotina.'],
      hunt: ['Voce atrasa o dia de todo mundo! Pare!', 'Isso vai embaralhar a agenda inteira.'],
    },
    notice: ['Fora do horario, fora do lugar...'],
    follow: ['Isso nao esta na agenda.', 'Volte ao horario. Por favor.'],
    glitch: ['O relogio deu um salto!', 'Perdi tres segundos. Onde foram?'],
    murmur: ['Isso vai atrasar tudo.', 'Alguem anota o horario disso.', 'Fora da rotina de novo.'],
    chase: ['Voce esta atrasado para a rotina!', 'Pare! E ordem do relogio!'],
  },

  Celia: {
    trait: 'curiosa',
    talk: {
      calm: {
        manha: ['Bom dia! Voce notou como a luz entra sempre pelo mesmo canto?', 'Eu fico me perguntando por que a fonte nunca seca.'],
        tarde: ['Voce nunca quis ver o que tem atras do predio?', 'Tudo aqui se repete... mas eu anoto os detalhes.'],
        noite: ['Olha as janelas acendendo. Sempre na mesma ordem.', 'A noite eu penso mais. O que sera que existe alem da cerca?'],
        madrugada: ['Voce tambem nao consegue dormir? Interessante...', 'Madrugada e quando as coisas ficam estranhas. Gosto disso.'],
      },
      glitch: {
        manha: ['Voce sentiu? O mundo tremeu. Eu juro que vi.'],
        tarde: ['Foi voce, nao foi? Conta como faz!'],
        noite: ['As luzes piscaram. Isso e novo. Muito novo.'],
        madrugada: ['Sabia que nao era so eu! Algo esta errado aqui.'],
      },
      wary: ['Hum... o que voce esta aprontando?', 'Esse seu jeito me deixa curiosa. E nervosa.'],
      hunt: ['Eu quero entender, mas todo mundo esta com medo de voce.', 'Cuidado. Eles estao ficando agressivos.'],
    },
    notice: ['O que voce esta fazendo la dentro?'],
    follow: ['Como e passar pela cerca?', 'Eu queria poder ir ai... so para ver.'],
    glitch: ['O que foi isso?! Fascinante!', 'Eu vi o ar se rasgar. Voce viu tambem?'],
    murmur: ['Preciso saber o que ele e.', 'Isso nao esta em nenhum dos meus cadernos.', 'Por que so ele escapa do script?'],
    chase: ['Espera! So quero conversar!', 'Nao corre! Eu tenho perguntas!'],
    ally: {
      manha: ['Estou do seu lado. Pode contar comigo.', 'Eu vigio a rua para voce.'],
      tarde: ['Se eles te perseguirem, eu distraio. Combinado?', 'Cada anomalia e uma porta. Continue.'],
      noite: ['Fique de olho nas sombras. Eu fico de olho neles.', 'Eu sempre soube. Agora tenho certeza.'],
      madrugada: ['Ninguem esta olhando. Va em frente.', 'Eu cuido da retaguarda.'],
    },
    allyWait: ['Ainda nao sei o que voce e... volte depois de ver mais coisas estranhas.', 'Preciso de mais provas. Quebre o script mais uma vez e conversamos.'],
    allyWarn: ['Cuidado! Alguem esta olhando!', 'Sai da linha de visao deles!', 'Psiu! Tem gente vindo!'],
    allyHelp: ['Ei! Olhem para ca!', 'Por aqui! Eu tenho uma pergunta!', 'Nao e ele! Aquele ali e que e estranho!'],
  },

  Dora: {
    trait: 'medrosa',
    talk: {
      calm: {
        manha: ['B-bom dia... voce nao ouviu nada estranho, ne?', 'Eu deixo a luz acesa de manha tambem. So por garantia.'],
        tarde: ['Eu prefiro ficar perto de gente. Sempre.', 'A praca e segura... nao e?'],
        noite: ['Ja esta escurecendo. Eu odeio quando escurece.', 'Vou para casa antes que a rua fique vazia.'],
        madrugada: ['Que voce faz acordado a essa hora? Isso me assusta.', 'Eu ouvi passos. Eram os seus?'],
      },
      glitch: {
        manha: ['O chao tremeu! Eu senti nos pes!'],
        tarde: ['Eu vi tudo piscar. Quero ir para casa.'],
        noite: ['As luzes... as luzes sumiram por um segundo!'],
        madrugada: ['Eu sabia. Eu sempre soube que tinha algo errado.'],
      },
      wary: ['V-voce esta me assustando.', 'Por favor, nao chega muito perto.'],
      hunt: ['Nao me machuca! Eu nao fiz nada!', 'Socorro... alguem faz ele parar!'],
    },
    notice: ['A-ali dentro nao pode...'],
    follow: ['V-volta, por favor...', 'Eu nao quero ver o que tem ai.'],
    glitch: ['Ai! O que foi isso?!', 'Eu vou para casa. Agora.'],
    murmur: ['Eu quero ir embora...', 'Isso nao esta certo, nao esta certo.', 'Por que ninguem faz nada?'],
    chase: ['Aaaah! Ele esta ali!', 'Socorro! Alguem pega ele!'],
  },

  Enzo: {
    trait: 'arrogante',
    talk: {
      calm: {
        manha: ['Eu acordo mais cedo que todos. Obvio.', 'Bom dia. Tente acompanhar o meu ritmo.'],
        tarde: ['Meu trabalho e o mais importante daqui. Nao conte aos outros.', 'Voce tem sorte de falar comigo.'],
        noite: ['Eu mereco descanso. Fiz mais que todo mundo hoje.', 'A praca fica melhor quando eu estou nela.'],
        madrugada: ['Gente de verdade dorme a essa hora. Eu so estou de passagem.', 'Madrugada e para quem nao tem rotina decente.'],
      },
      glitch: {
        manha: ['Aquilo foi um defeito do mundo. Nao tem nada a ver comigo.'],
        tarde: ['Eu nao tive medo. Foi so... surpresa. Controlada.'],
        noite: ['Se algo esta quebrando, o problema nao sou eu.'],
        madrugada: ['Eu ja sabia que isso ia acontecer. Ja sabia.'],
      },
      wary: ['Quem voce pensa que e para me olhar assim?', 'Eu fico de olho em gente como voce.'],
      hunt: ['Eu aviso uma vez so: pare de causar problema.', 'Voce e um erro. E eu corrijo erros.'],
    },
    notice: ['Voce nao tem permissao para estar ai!'],
    follow: ['Eu mandaria nele se pudesse entrar.', 'Saia ja da! E uma ordem.'],
    glitch: ['Isso foi culpa de alguem. Provavelmente sua.', 'Hmpf. Que espetaculo desnecessario.'],
    murmur: ['Eu disse que ele era problema.', 'Alguem importante precisa resolver isso. Eu, por exemplo.', 'Que audacia.'],
    chase: ['Eu mesmo vou te pegar!', 'Ninguem foge de mim!'],
  },

  Fabi: {
    trait: 'sonhadora',
    talk: {
      calm: {
        manha: ['Sonhei que o ceu era de outra cor. Voce ja viu?', 'Bom dia... as nuvens parecem sempre as mesmas, mas eu imagino formas.'],
        tarde: ['Eu fico olhando a fonte e imaginando o mar.', 'Um dia eu vou ver algo que nao seja a praca.'],
        noite: ['As estrelas parecem pintadas, nao acha? Lindas mesmo assim.', 'A noite eu viajo sem sair do lugar.'],
        madrugada: ['A madrugada e quando os sonhos escapam para a rua.', 'Voce tambem acorda para ouvir o silencio?'],
      },
      glitch: {
        manha: ['O mundo piscou como um olho. Foi lindo e assustador.'],
        tarde: ['Eu vi uma cor nova por meio segundo!'],
        noite: ['Era isso que eu sonhava... o mundo se abrindo.'],
        madrugada: ['Talvez eu ainda esteja dormindo. Voce tambem?'],
      },
      wary: ['Voce parece alguem que acordou antes de todos.', 'Seus olhos estao diferentes. Como os de quem viu longe.'],
      hunt: ['Nao deixe eles te apagarem...', 'Eu ainda quero sonhar, mas eles estao nervosos.'],
    },
    notice: ['Voce esta onde nem os sonhos chegam...'],
    follow: ['Leva um pedaco desse lugar para mim?', 'O que tem ai dentro? Cores?'],
    glitch: ['Uau... o mundo respirou.', 'Isso e o que eu sinto quando fecho os olhos.'],
    murmur: ['Parece um sonho ruim.', 'Quem sera ele de verdade?', 'Eu queria acordar.'],
    chase: ['Nao some, ainda e cedo!', 'Fica! Eu nao quero perder o sonho!'],
  },

  Guto: {
    trait: 'calado',
    talk: {
      calm: {
        manha: ['...Dia.', '...'],
        tarde: ['Hum.', '...Tarde.'],
        noite: ['...Noite.', 'Hm.'],
        madrugada: ['...', '...Cedo demais.'],
      },
      glitch: {
        manha: ['...Eu vi.'],
        tarde: ['...Voce tambem?'],
        noite: ['...Nao e so comigo.'],
        madrugada: ['...Finalmente.'],
      },
      wary: ['...Te observo.', 'Hm. Cuidado.'],
      hunt: ['...Para.', '...Eles estao vindo.'],
    },
    notice: ['...'],
    follow: ['...Volta.', 'Hm.'],
    glitch: ['...', '...Isso.'],
    murmur: ['...', 'Hm...', '...Ruim.'],
    chase: ['...!', 'Ali.'],
  },
};

/**
 * Segredos: cada NPC guarda um. A pista so aparece se o jogador falar com ele
 * (tecla E) no horario e no lugar certos. Fora disso o NPC solta so uma dica
 * sutil de que "agora nao e a hora".
 *
 * where:
 *   { type: 'plaza' }                  perto da praca central
 *   { type: 'workDoor' }               perto da porta do trabalho
 *   { type: 'homeDoor', home: 'homeX' } perto da porta da casa dele
 * from/to: janela de hora do mundo (sem passar da meia-noite).
 */
export const SECRETS = [
  {
    id: 'bruno', npc: 'Bruno',
    where: { type: 'plaza', radius: 13 },
    from: 18.4, to: 19.8, placeName: 'na praca, no fim do dia',
    hint: 'Agora nao. Depois do expediente, na praca, eu consigo respirar.',
    reveal: 'Eu anoto tudo, sabe? Todo dia o relogio do patio para as 17:58. Eu anoto. Ninguem mais.',
    clue: 'Bruno anota os horarios: o relogio do patio para sempre as 17:58 e so ele reparou.',
  },
  {
    id: 'celia', npc: 'Celia',
    where: { type: 'plaza', radius: 13 },
    from: 19.0, to: 20.3, placeName: 'na praca, ao entardecer',
    hint: 'Hoje nao... espere o fim da tarde. Na praca eu converso melhor.',
    reveal: 'Eu contei: sao cinco objetos que brilham. Alguem os escondeu de nos.',
    clue: 'Celia contou cinco objetos que brilham em horarios diferentes. Alguem os escondeu dos moradores.',
  },
  {
    id: 'dora', npc: 'Dora',
    where: { type: 'homeDoor', home: 'homeC', radius: 9 },
    from: 8.5, to: 9.3, placeName: 'na porta da casa lilas, de manha',
    hint: 'Aqui nao... so quando eu saio de casa de manha eu tenho coragem.',
    reveal: 'Todo dia alguem arruma meu quarto antes de eu acordar. Eu nunca vi quem.',
    clue: 'Dora diz que alguem arruma o quarto dela antes de acordar. Ninguem nunca viu quem.',
  },
  {
    id: 'enzo', npc: 'Enzo',
    where: { type: 'workDoor', radius: 10 },
    from: 16.8, to: 17.6, placeName: 'na saida do trabalho',
    hint: 'Eu nao falo disso no meio do trabalho. Na saida, talvez.',
    reveal: 'Eu tentei sair pela estrada. Ela me traz de volta a praca. Nao conte a ninguem.',
    clue: 'Enzo tentou sair do povoado pela estrada. Ela sempre o devolve a praca.',
  },
  {
    id: 'fabi', npc: 'Fabi',
    where: { type: 'homeDoor', home: 'homeB', radius: 9 },
    from: 9.0, to: 9.8, placeName: 'na porta da casa verde, de manha',
    hint: 'Ainda estou meio dormindo... me pergunta quando eu acordar e sair de casa.',
    reveal: 'Eu sonho com um lugar sem rotina. Tem um portao do lado de fora do mundo.',
    clue: 'Fabi sonha com um portao do lado de fora do mundo. Pode ser o portao que voce viu.',
  },
  {
    id: 'guto', npc: 'Guto',
    where: { type: 'plaza', radius: 13 },
    from: 17.9, to: 18.9, placeName: 'na praca, no comeco da noite',
    hint: '...Depois. Na praca.',
    reveal: '...Eles te chamam de NPC. Me chamaram assim uma vez. Depois todos esqueceram.',
    clue: 'Guto lembra de ter sido chamado de "NPC" por alguem de fora, antes de todos esquecerem.',
  },
];

const lastPick = new Map();

/** Sorteia uma fala evitando repetir a ultima da mesma lista. */
function pickFresh(list, key) {
  if (!Array.isArray(list) || list.length === 0) return '';
  if (list.length === 1) return list[0];
  const previous = lastPick.get(key);
  let line = randomPick(list);
  let guard = 0;
  while (line === previous && guard < 6) {
    line = randomPick(list);
    guard += 1;
  }
  lastPick.set(key, line);
  return line;
}

/**
 * Fala de um NPC.
 * ctx: { hour, suspicion, glitch, ally }   (todos opcionais)
 */
export function getLine(npcName, kind, ctx = {}) {
  const profile = NPC_PROFILES[npcName];
  if (!profile) return '...';
  const hour = Number.isFinite(ctx.hour) ? ctx.hour : 12;
  const suspicion = Number.isFinite(ctx.suspicion) ? ctx.suspicion : 0;
  const band = timeBand(hour);
  const key = `${npcName}:${kind}`;

  if (kind === 'talk') {
    if (ctx.ally && profile.ally) return pickFresh(profile.ally[band], `${key}:ally:${band}`);
    const level = suspicionBand(suspicion);
    if (level === 'hunt') return pickFresh(profile.talk.hunt, `${key}:hunt`);
    if (level === 'wary') return pickFresh(profile.talk.wary, `${key}:wary`);
    if (ctx.glitch) return pickFresh(profile.talk.glitch[band], `${key}:glitch:${band}`);
    return pickFresh(profile.talk.calm[band], `${key}:calm:${band}`);
  }

  return pickFresh(profile[kind], key);
}

export function secretFor(npcName) {
  return SECRETS.find((secret) => secret.npc === npcName) || null;
}
