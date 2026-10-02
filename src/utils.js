/**
 * Funcoes utilitarias de matematica, colisao e visao (tudo 2D no plano XZ).
 */

export const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

export const lerp = (a, b, t) => a + (b - a) * t;

/** Interpolacao independente de framerate. */
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

export const randomRange = (min, max) => min + Math.random() * (max - min);

export const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const distance2D = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

/** Diferenca entre dois angulos, no intervalo [-PI, PI]. */
export function angleDelta(from, to) {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/** Gira `current` em direcao a `target` respeitando uma velocidade maxima. */
export function approachAngle(current, target, maxStep) {
  const d = angleDelta(current, target);
  if (Math.abs(d) <= maxStep) return target;
  return current + Math.sign(d) * maxStep;
}

/** Vetor "para frente" a partir de um yaw (modelos olham para +Z). */
export function forwardFromYaw(yaw) {
  return { x: Math.sin(yaw), z: Math.cos(yaw) };
}

export function yawTo(x, z, targetX, targetZ) {
  return Math.atan2(targetX - x, targetZ - z);
}

/** AABB conservador de uma caixa rotacionada em Y. */
export function rectFromBox(cx, cz, width, depth, rotY = 0) {
  const c = Math.abs(Math.cos(rotY));
  const s = Math.abs(Math.sin(rotY));
  const ex = (width * c + depth * s) / 2;
  const ez = (width * s + depth * c) / 2;
  return { minX: cx - ex, maxX: cx + ex, minZ: cz - ez, maxZ: cz + ez };
}

export function rectContainsPoint(rect, x, z) {
  return x >= rect.minX && x <= rect.maxX && z >= rect.minZ && z <= rect.maxZ;
}

export function inflateRect(rect, amount) {
  return {
    minX: rect.minX - amount,
    maxX: rect.maxX + amount,
    minZ: rect.minZ - amount,
    maxZ: rect.maxZ + amount,
  };
}

/** Interseccao segmento x AABB (metodo slab, usado para linha de visao). */
export function segmentIntersectsRect(x1, z1, x2, z2, rect) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  let tmin = 0;
  let tmax = 1;

  const axis = [
    [dx, x1, rect.minX, rect.maxX],
    [dz, z1, rect.minZ, rect.maxZ],
  ];

  for (const [d, o, min, max] of axis) {
    if (Math.abs(d) < 1e-8) {
      if (o < min || o > max) return false;
      continue;
    }
    let t1 = (min - o) / d;
    let t2 = (max - o) / d;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    if (t1 > tmin) tmin = t1;
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return false;
  }
  return true;
}

/** Empurra um circulo (x,z) para fora de um AABB. Retorna true se houve correcao. */
function resolveCircleVsRect(pos, radius, rect) {
  const closestX = clamp(pos.x, rect.minX, rect.maxX);
  const closestZ = clamp(pos.z, rect.minZ, rect.maxZ);
  const dx = pos.x - closestX;
  const dz = pos.z - closestZ;
  const distSq = dx * dx + dz * dz;

  if (distSq > radius * radius) return false;

  if (distSq > 1e-8) {
    const dist = Math.sqrt(distSq);
    const push = radius - dist;
    pos.x += (dx / dist) * push;
    pos.z += (dz / dist) * push;
    return true;
  }

  // Centro dentro do retangulo: sai pelo eixo mais proximo.
  const left = pos.x - rect.minX;
  const right = rect.maxX - pos.x;
  const top = pos.z - rect.minZ;
  const bottom = rect.maxZ - pos.z;
  const min = Math.min(left, right, top, bottom);

  if (min === left) pos.x = rect.minX - radius;
  else if (min === right) pos.x = rect.maxX + radius;
  else if (min === top) pos.z = rect.minZ - radius;
  else pos.z = rect.maxZ + radius;
  return true;
}

/**
 * Resolve colisoes do personagem (circulo) contra AABBs, circulos e limites do mapa.
 * `pos` e mutado no lugar (aceita Vector3 ou {x,z}).
 */
export function resolveCollisions(pos, radius, rects, circles, bounds, skipHouseId = null) {
  for (let i = 0; i < rects.length; i += 1) {
    // poder de atravessar paredes: a colisao daquela casa fica desligada
    if (skipHouseId && rects[i].houseId === skipHouseId) continue;
    resolveCircleVsRect(pos, radius, rects[i]);
  }

  for (let i = 0; i < circles.length; i += 1) {
    const c = circles[i];
    const dx = pos.x - c.x;
    const dz = pos.z - c.z;
    const minDist = radius + c.r;
    const distSq = dx * dx + dz * dz;
    if (distSq < minDist * minDist && distSq > 1e-8) {
      const dist = Math.sqrt(distSq);
      const push = minDist - dist;
      pos.x += (dx / dist) * push;
      pos.z += (dz / dist) * push;
    }
  }

  if (typeof bounds === 'number') {
    pos.x = clamp(pos.x, -bounds, bounds);
    pos.z = clamp(pos.z, -bounds, bounds);
  }
}
