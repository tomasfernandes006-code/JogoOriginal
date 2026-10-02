import { CONFIG } from './config.js';
import { SECRETS, secretFor } from './dialogues.js';
import { distance2D } from './utils.js';

/**
 * Segredos dos NPCs.
 *
 * Cada NPC guarda um segredo que so e revelado se o jogador falar com ele
 * (tecla E) no horario e no lugar certos (dados em src/dialogues.js).
 * Os segredos descobertos aparecem no diario (J) e ficam no save.
 */

export class SecretSystem {
  constructor({ world }) {
    this.world = world;
    this.defs = SECRETS;
    this.found = new Set();
    this.attempts = new Map(); // tentativas fora do horario, por NPC
  }

  get count() { return this.found.size; }
  get total() { return this.defs.length; }
  isFound(id) { return this.found.has(id); }
  forNpc(name) { return secretFor(name); }

  /** O NPC esta no lugar certo (perto do ponto definido para o segredo)? */
  inPlace(secret, npc) {
    const where = secret.where;
    let point = null;
    if (where.type === 'plaza') point = { x: 0, z: 0 };
    else if (where.type === 'workDoor') point = this.world.places.work.door;
    else if (where.type === 'homeDoor') point = this.world.homeById(where.home).door;
    if (!point) return false;
    return distance2D(npc.position.x, npc.position.z, point.x, point.z) <= (where.radius || 10);
  }

  /** Horario certo para o segredo? */
  inTime(secret, hour) {
    return hour >= secret.from && hour <= secret.to;
  }

  /**
   * Avalia uma conversa com `npc`.
   * Devolve: { status: 'none' | 'known' | 'wrong' | 'reveal', secret }
   *   none    o NPC nao tem segredo
   *   known   segredo ja descoberto
   *   wrong   fora do horario ou do lugar (pode vir com `showHint`)
   *   reveal  o segredo foi revelado agora
   */
  talk(npc, hour) {
    const secret = this.forNpc(npc.name);
    if (!secret) return { status: 'none', secret: null };
    if (this.found.has(secret.id)) return { status: 'known', secret };

    const free = npc.isPresent && npc.heat === 'none' && !npc.alert;
    if (free && this.inTime(secret, hour) && this.inPlace(secret, npc)) {
      this.found.add(secret.id);
      return { status: 'reveal', secret };
    }

    const tries = (this.attempts.get(npc.name) || 0) + 1;
    this.attempts.set(npc.name, tries);
    return {
      status: 'wrong',
      secret,
      showHint: tries % CONFIG.secrets.hintEvery === 0,
    };
  }

  /** Linhas para a secao "Segredos" do diario. */
  entries() {
    return this.defs.map((secret, index) => ({
      index: index + 1,
      name: secret.npc,
      found: this.found.has(secret.id),
      clue: this.found.has(secret.id) ? secret.clue : null,
    }));
  }

  serialize() { return [...this.found]; }

  load(ids) {
    this.found.clear();
    if (!Array.isArray(ids)) return;
    for (const id of ids) {
      if (this.defs.some((secret) => secret.id === id)) this.found.add(id);
    }
  }

  reset() {
    this.found.clear();
    this.attempts.clear();
  }
}
