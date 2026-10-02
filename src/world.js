import * as THREE from 'three';
import { CONFIG, PALETTE } from './config.js';
import { clamp, rectContainsPoint, rectFromBox, segmentIntersectsRect } from './utils.js';
import { LAYOUT, ANOMALIES, PLAZA_WANDER_POINTS, buildNav, doorApproach } from './map.js';

/* ------------------------------------------------------------------ *
 * Helpers de construcao: apenas geometrias simples, sem assets
 * ------------------------------------------------------------------ */

export function box(width, height, depth, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.05,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
    }),
  );
  mesh.castShadow = opts.cast ?? true;
  mesh.receiveShadow = opts.receive ?? true;
  return mesh;
}

/** Texto desenhado em canvas: placas e letreiros sem assets externos. */
export function makeTextTexture(text, {
  background = '#111318',
  color = '#ffffff',
  fontSize = 76,
  width = 512,
  height = 256,
  border = 'rgba(255,255,255,0.35)',
} = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = border;
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, width - 10, height - 10);

  ctx.fillStyle = color;
  ctx.font = `bold ${fontSize}px "Segoe UI", system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > width - 60 && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);

  const lineHeight = height / (lines.length + 1);
  lines.forEach((l, i) => ctx.fillText(l, width / 2, lineHeight * (i + 1)));

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

/** Placa plana com texto (fachadas e area proibida). */
export function signPlane(text, width, height, { background, color, rotationY = 0, fontSize = 76 } = {}) {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({
      map: makeTextTexture(text, { background, color, fontSize }),
      side: THREE.DoubleSide,
      toneMapped: false,
    }),
  );
  mesh.rotation.y = rotationY;
  return mesh;
}

/**
 * Placa de mao dupla: o texto fica legivel pelos dois lados.
 * Os dois planos usam FrontSide + um deslocamento minimo em Z, para que a
 * ordenacao de profundidade nunca misture o texto certo com o espelhado.
 */
export function signGroup(text, width, height, { background, color, fontSize = 76 } = {}) {
  const group = new THREE.Group();
  const opts = { background, color, fontSize };
  const front = signPlane(text, width, height, opts);
  front.material.side = THREE.FrontSide;
  front.position.z = 0.015;
  group.add(front);
  const back = signPlane(text, width, height, opts);
  back.material.side = THREE.FrontSide;
  back.rotation.y = Math.PI;
  back.position.z = -0.015;
  group.add(back);
  return group;
}

function createRoad(root, x1, z1, x2, z2, width = 3.4) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(Math.hypot(dx, dz), width),
    new THREE.MeshStandardMaterial({ color: PALETTE.path, roughness: 1 }),
  );
  road.rotation.x = -Math.PI / 2;
  road.rotation.z = -Math.atan2(dz, dx);
  road.position.set((x1 + x2) / 2, 0.02, (z1 + z2) / 2);
  road.receiveShadow = true;
  root.add(road);
  return road;
}

function createTree(x, z, scale = 1) {
  const group = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28 * scale, 0.36 * scale, 3.2 * scale, 8),
    new THREE.MeshStandardMaterial({ color: PALETTE.treeTrunk, roughness: 1 }),
  );
  trunk.position.y = 1.6 * scale;
  trunk.castShadow = true;
  group.add(trunk);

  const leaves = new THREE.MeshStandardMaterial({ color: PALETTE.treeLeaves, roughness: 1 });
  const crownA = new THREE.Mesh(new THREE.SphereGeometry(1.9 * scale, 10, 8), leaves);
  crownA.position.y = 3.8 * scale;
  crownA.castShadow = true;
  group.add(crownA);

  const crownB = new THREE.Mesh(new THREE.SphereGeometry(1.4 * scale, 10, 8), leaves);
  crownB.position.set(0.9 * scale, 4.6 * scale, 0.3 * scale);
  crownB.castShadow = true;
  group.add(crownB);

  group.position.set(x, 0, z);
  return group;
}

/**
 * Casa com interior: em vez de uma caixa solida, quatro paredes finas com
 * um vao onde fica a porta. E o interior onde o jogador comeca no
 * primeiro dia, entao precisa ter chao livre e um unico acesso.
 */
function createEnterableHouse(root, spec) {
  const { x, z, w, d, h, color, roofColor, doorSide, sign, signBackground } = spec;
  const group = new THREE.Group();
  const t = 0.4;           // espessura das paredes
  const doorWidth = 2.4;   // largura do vao
  const doorHeight = 2.6;
  const half = doorWidth / 2;
  const east = doorSide === 'east';
  const west = doorSide === 'west';
  const alongX = east || west; // porta nas laterais: vao ao longo de Z

  // chao interno
  const floor = box(w - t * 2, 0.1, d - t * 2, PALETTE.plaza);
  floor.position.set(x, 0.05, z);
  group.add(floor);

  // Cada parede e criada aqui e vira tambem um colisor, entao o que voce
  // ve e o que bloqueia o jogador nunca saem de sincronia.
  const walls = [];
  const addWall = (cx, cz, sw, sd) => {
    const mesh = box(sw, h, sd, color);
    mesh.position.set(cx, h / 2, cz);
    group.add(mesh);
    walls.push({ cx, cz, sw, sd });
  };

  if (alongX) {
    const doorX = east ? x + w / 2 - t / 2 : x - w / 2 + t / 2;
    const backX = east ? x - w / 2 + t / 2 : x + w / 2 - t / 2;
    // parede oposta: inteira
    addWall(backX, z, t, d);
    // paredes perpendiculares: inteiras
    addWall(x, z - d / 2 + t / 2, w, t);
    addWall(x, z + d / 2 - t / 2, w, t);
    // parede da porta: dois trechos com o vao no meio
    const segLen = (d - doorWidth) / 2;
    addWall(doorX, z - (half + segLen / 2), t, segLen);
    addWall(doorX, z + (half + segLen / 2), t, segLen);
    // lintel acima do vao (visual: o vao tem altura de porta)
    const lintel = box(t, h - doorHeight, doorWidth, color);
    lintel.position.set(doorX, doorHeight + (h - doorHeight) / 2, z);
    group.add(lintel);
  } else {
    const doorZ = doorSide === 'north' ? z - d / 2 + t / 2 : z + d / 2 - t / 2;
    const backZ = doorSide === 'north' ? z + d / 2 - t / 2 : z - d / 2 + t / 2;
    addWall(x, backZ, w, t);
    addWall(x - w / 2 + t / 2, z, t, d);
    addWall(x + w / 2 - t / 2, z, t, d);
    const segLen = (w - doorWidth) / 2;
    addWall(x - (half + segLen / 2), doorZ, segLen, t);
    addWall(x + (half + segLen / 2), doorZ, segLen, t);
    const lintel = box(doorWidth, h - doorHeight, t, color);
    lintel.position.set(x, doorHeight + (h - doorHeight) / 2, doorZ);
    group.add(lintel);
  }

  // folha da porta encostada na parede de dentro (nao bloqueia o vao)
  const doorLeaf = box(alongX ? 0.16 : 1.5, doorHeight - 0.2, alongX ? 1.5 : 0.16, PALETTE.door);
  if (east) doorLeaf.position.set(x + w / 2 - 0.5, (doorHeight - 0.2) / 2, z - half - 0.85);
  else if (west) doorLeaf.position.set(x - w / 2 + 0.5, (doorHeight - 0.2) / 2, z - half - 0.85);
  else if (doorSide === 'north') doorLeaf.position.set(x - half - 0.85, (doorHeight - 0.2) / 2, z - d / 2 + 0.5);
  else doorLeaf.position.set(x - half - 0.85, (doorHeight - 0.2) / 2, z + d / 2 - 0.5);
  group.add(doorLeaf);

  // teto: laje simples, para a camera nao ficar presa em telhado inclinado
  const roof = box(w + 0.7, 0.35, d + 0.7, roofColor, { roughness: 0.95 });
  roof.position.set(x, h + 0.17, z);
  group.add(roof);

  if (sign) {
    const signRotation = { east: Math.PI / 2, west: -Math.PI / 2, north: Math.PI, south: 0 }[doorSide];
    const plate = signPlane(sign, 5.2, 1.3, { background: signBackground || '#222222', fontSize: 80 });
    if (alongX) plate.position.set(doorSide === 'east' ? x + w / 2 + 0.12 : x - w / 2 - 0.12, h - 1.2, z);
    else plate.position.set(x, h - 1.2, doorSide === 'north' ? z - d / 2 - 0.12 : z + d / 2 + 0.12);
    plate.rotation.y = signRotation;
    group.add(plate);
  }

  // janelas na parede oposta
  for (const dz of [-d / 4, d / 4]) {
    const win = box(0.16, 1.1, 1.1, PALETTE.window, { emissive: 0x664400, emissiveIntensity: 0.6, roughness: 0.4 });
    win.position.set(x - w / 2 + 0.1, 2.5, z + dz);
    group.add(win);
  }

  root.add(group);
  return { group, walls };
}

/** Predio generico (casa ou trabalho) com porta, janelas e placa. */
function createBuilding(root, spec, { windows = true } = {}) {
  const { x, z, w, d, h, color, roofColor, doorSide, sign, signBackground } = spec;
  const group = new THREE.Group();

  const walls = box(w, h, d, color);
  walls.position.set(x, h / 2, z);
  group.add(walls);

  const roof = box(w + 0.9, 0.5, d + 0.9, roofColor, { roughness: 0.95 });
  roof.position.set(x, h + 0.25, z);
  group.add(roof);

  const vertical = doorSide === 'east' || doorSide === 'west';
  const door = box(vertical ? 0.28 : 1.7, 2.3, vertical ? 1.7 : 0.28, PALETTE.door);

  let doorX = x;
  let doorZ = z;
  if (doorSide === 'east') doorX = x + w / 2 + 0.1;
  else if (doorSide === 'west') doorX = x - w / 2 - 0.1;
  else if (doorSide === 'north') doorZ = z - d / 2 - 0.1;
  else doorZ = z + d / 2 + 0.1;
  door.position.set(doorX, 1.15, doorZ);
  group.add(door);

  if (sign) {
    const signRotation = { east: Math.PI / 2, west: -Math.PI / 2, north: Math.PI, south: 0 }[doorSide];
    const plate = signPlane(sign, 5.2, 1.3, { background: signBackground || '#222222', fontSize: 80 });
    if (vertical) plate.position.set(doorSide === 'east' ? x + w / 2 + 0.12 : x - w / 2 - 0.12, h - 1.2, z);
    else plate.position.set(x, h - 1.2, doorSide === 'north' ? z - d / 2 - 0.12 : z + d / 2 + 0.12);
    plate.rotation.y = signRotation;
    group.add(plate);
  }

  if (windows) {
    const offsets = [-w / 4, w / 4];
    if (vertical) {
      for (const dz of offsets) {
        const win = box(0.2, 1.2, 1.2, PALETTE.window, { emissive: 0x664400, emissiveIntensity: 0.6, roughness: 0.4 });
        win.position.set(doorSide === 'east' ? x + w / 2 + 0.1 : x - w / 2 - 0.1, 2.5, z + dz);
        group.add(win);
      }
    } else {
      for (const dx of offsets) {
        const win = box(1.2, 1.2, 0.2, PALETTE.window, { emissive: 0x664400, emissiveIntensity: 0.6, roughness: 0.4 });
        win.position.set(x + dx, 2.5, doorSide === 'north' ? z - d / 2 - 0.1 : z + d / 2 + 0.1);
        group.add(win);
      }
    }
  }

  root.add(group);
  return group;
}

/* ------------------------------------------------------------------ *
 * Mundo
 * ------------------------------------------------------------------ */

/**
 * Constroi o mundo estatico e devolve tudo que os outros sistemas usam:
 * colisores, objetos interativos, grafo de navegacao e areas especiais.
 */
export function createWorld(scene) {
  const root = new THREE.Group();
  root.name = 'world';
  scene.add(root);

  const rects = [];          // AABBs { minX, maxX, minZ, maxZ, height, blocksSight, tag }
  const circles = [];        // circulos { x, z, r }
  const interactables = [];  // objetos que respondem a tecla E

  const addRect = (rect, height, opts = {}) => {
    rects.push({
      ...rect, height, blocksSight: opts.blocksSight ?? true, tag: opts.tag ?? 'generic', houseId: opts.houseId ?? null,
    });
  };
  const addCircle = (x, z, r) => circles.push({ x, z, r });

  /* ---------- ceu e iluminacao ---------- */
  scene.background = new THREE.Color(0x9fd0f0);
  scene.fog = new THREE.Fog(0x9fd0f0, 80, 200);

  const hemi = new THREE.HemisphereLight(0xdfeaff, 0x40502f, 0.75);
  root.add(hemi);

  const ambient = new THREE.AmbientLight(0xffffff, 0.32);
  root.add(ambient);

  const sun = new THREE.DirectionalLight(0xfff2d6, 1.4);
  sun.position.set(48, 66, 30);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 260;
  sun.shadow.camera.left = -95;
  sun.shadow.camera.right = 95;
  sun.shadow.camera.top = 95;
  sun.shadow.camera.bottom = -95;
  sun.shadow.bias = -0.0006;
  root.add(sun);
  root.add(sun.target);

  /* ---------- chao e estradas ---------- */
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(CONFIG.world.groundSize, CONFIG.world.groundSize),
    new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  root.add(ground);

  for (const [x, z] of [[-17, -18], [17, -18], [-17, 18], [18, 20], [0, LAYOUT.forbidden.gate.z]]) {
    createRoad(root, 0, 0, x, z, 4);
  }

  /* ---------- praca central ---------- */
  const plazaFloor = new THREE.Mesh(
    new THREE.CircleGeometry(LAYOUT.plaza.radius, 56),
    new THREE.MeshStandardMaterial({ color: PALETTE.plaza, roughness: 1 }),
  );
  plazaFloor.rotation.x = -Math.PI / 2;
  plazaFloor.position.y = 0.04;
  plazaFloor.receiveShadow = true;
  root.add(plazaFloor);

  const plazaRing = new THREE.Mesh(
    new THREE.RingGeometry(LAYOUT.plaza.radius - 0.7, LAYOUT.plaza.radius, 56),
    new THREE.MeshStandardMaterial({ color: PALETTE.plazaRing, roughness: 1 }),
  );
  plazaRing.rotation.x = -Math.PI / 2;
  plazaRing.position.y = 0.05;
  root.add(plazaRing);

  const plazaSign = signGroup('PRACA CENTRAL', 7, 1.6, { background: '#4a4436', fontSize: 70 });
  plazaSign.position.set(0, 0.9, LAYOUT.plaza.radius - 0.4);
  plazaSign.rotation.x = -0.5;
  root.add(plazaSign);

  /* ---------- fonte (tambem e obstaculo) ---------- */
  const fountainBase = new THREE.Mesh(
    new THREE.CylinderGeometry(LAYOUT.fountain.radius, LAYOUT.fountain.radius + 0.15, 0.8, 28),
    new THREE.MeshStandardMaterial({ color: PALETTE.fountainBase, roughness: 0.7 }),
  );
  fountainBase.position.y = 0.4;
  fountainBase.castShadow = true;
  fountainBase.receiveShadow = true;
  root.add(fountainBase);

  const water = new THREE.Mesh(
    new THREE.CircleGeometry(LAYOUT.fountain.radius - 0.35, 28),
    new THREE.MeshStandardMaterial({ color: PALETTE.water, roughness: 0.2, metalness: 0.35 }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.79;
  root.add(water);

  const fountainPillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.45, 2.1, 14),
    new THREE.MeshStandardMaterial({ color: PALETTE.fountainBase, roughness: 0.7 }),
  );
  fountainPillar.position.y = 1.6;
  fountainPillar.castShadow = true;
  root.add(fountainPillar);
  addCircle(0, 0, LAYOUT.fountain.radius + 0.25);

  /* ---------- bancos ---------- */
  const benchSpots = [
    [0, -8.2, 0], [0, 8.2, Math.PI], [-8.2, 0, Math.PI / 2], [8.2, 0, -Math.PI / 2],
  ];
  benchSpots.forEach(([x, z, rotY], index) => {
    const bench = new THREE.Group();
    const seat = box(3.2, 0.22, 0.9, PALETTE.bench);
    seat.position.y = 0.55;
    bench.add(seat);

    const back = box(3.2, 0.8, 0.16, PALETTE.bench);
    back.position.set(0, 1.0, -0.37);
    bench.add(back);

    for (const lx of [-1.35, 1.35]) {
      const leg = box(0.18, 0.55, 0.7, 0x6b4a2a);
      leg.position.set(lx, 0.28, 0);
      bench.add(leg);
    }

    bench.position.set(x, 0, z);
    bench.rotation.y = rotY;
    root.add(bench);
    addRect(rectFromBox(x, z, 3.4, 1.1, rotY), 1.5, { blocksSight: false, tag: 'bench' });

    interactables.push({
      id: `bench_${index}`,
      label: 'Banco da praca',
      kind: 'bench',
      x, z,
      radius: 3,
      message: 'Voce se senta. Nada acontece. Nada nunca acontece... exceto com voce.',
    });
  });

  /* ---------- postes de luz ---------- */
  const lampMaterials = [];
  const lampPools = []; // pocas de luz no chao: brilho falso, sem PointLight
  for (const [x, z] of [[10.5, 10.5], [-10.5, 10.5], [10.5, -10.5], [-10.5, -10.5]]) {
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.14, 4.4, 10),
      new THREE.MeshStandardMaterial({ color: PALETTE.lamp, roughness: 0.6 }),
    );
    pole.position.set(x, 2.2, z);
    pole.castShadow = true;
    root.add(pole);

    const glowMat = new THREE.MeshStandardMaterial({
      color: PALETTE.lampGlow, emissive: PALETTE.lampGlow, emissiveIntensity: 0.2,
    });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 10), glowMat);
    bulb.position.set(x, 4.5, z);
    root.add(bulb);
    lampMaterials.push(glowMat);

    const pool = new THREE.Mesh(
      new THREE.CircleGeometry(6, 28),
      new THREE.MeshBasicMaterial({
        color: 0xffe3a0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(x, 0.07, z);
    root.add(pool);
    lampPools.push(pool);
    addCircle(x, z, 0.32);
  }

  /* ---------- arvores ---------- */
  const treeSpots = [
    [-46, -30, 1.1], [46, -34, 1], [-44, 44, 1.2], [44, 52, 1],
    [0, -42, 1.15], [-52, 4, 1], [52, 2, 1.05], [-34, -42, 0.9],
    [36, -46, 1.1], [0, 66, 1.2], [-60, -4, 1], [58, -6, 0.95],
  ];
  for (const [x, z, scale] of treeSpots) {
    root.add(createTree(x, z, scale));
    addCircle(x, z, 0.55 * scale);
  }

  /* ---------- casas e local de trabalho ---------- */
  for (const spec of [...LAYOUT.houses, LAYOUT.work]) {
    if (spec.enterable) {
      // casa do jogador: interior livre, colisao so nas paredes
      const house = createEnterableHouse(root, spec);
      for (const wall of house.walls) {
        addRect(rectFromBox(wall.cx, wall.cz, wall.sw, wall.sd), spec.h, { tag: 'wall', houseId: spec.id });
      }
      continue;
    }
    createBuilding(root, spec);
    addRect(rectFromBox(spec.x, spec.z, spec.w, spec.d), spec.h, { tag: 'building', houseId: spec.id });
  }

  const doorMessages = {
    homeA: 'Porta da sua casa. Tudo exatamente como voce deixou.',
    homeB: 'Trancada. O morador deve estar cumprindo a rotina.',
    homeC: 'Trancada. Voce ouve passos la dentro, sempre no mesmo ritmo.',
  };
  for (const house of LAYOUT.houses) {
    const p = doorApproach(house);
    interactables.push({
      id: `door_${house.id}`,
      label: house.name,
      kind: 'door',
      x: p.x, z: p.z,
      radius: 3,
      message: doorMessages[house.id],
    });
  }

  const workDoor = doorApproach(LAYOUT.work);
  interactables.push({
    id: 'door_work',
    label: LAYOUT.work.name,
    kind: 'door',
    x: workDoor.x, z: workDoor.z,
    radius: 3,
    message: 'A catraca registra: FUNCIONARIO 04. Bom trabalho. Sempre o mesmo trabalho.',
  });

  /* ---------- caixas no patio do trabalho ---------- */
  const crateSpots = [[24, 11.2], [25.9, 11.7], [24.7, 12.4]];
  crateSpots.forEach(([x, z], index) => {
    const crate = box(1.3, 1.3, 1.3, PALETTE.crate, { roughness: 0.95 });
    crate.position.set(x, 0.66, z);
    crate.rotation.y = index * 0.4;
    root.add(crate);
    addRect(rectFromBox(x, z, 1.5, 1.5), 1.4, { tag: 'crate' });
    interactables.push({
      id: `crate_${index}`,
      label: 'Caixa',
      kind: 'crate',
      x, z,
      radius: 2.6,
      message: 'Voce empurra a caixa. Ela se move. Os outros tentaram isso ontem e nao conseguiram.',
    });
  });

  /* ---------- area proibida: chao marcado + cerca ---------- */
  const forbidden = LAYOUT.forbidden;
  const area = forbidden.area;
  const areaWidth = area.maxX - area.minX;
  const areaDepth = area.maxZ - area.minZ;

  const restrictedFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(areaWidth, areaDepth),
    new THREE.MeshStandardMaterial({ color: PALETTE.forbiddenGround, roughness: 1 }),
  );
  restrictedFloor.rotation.x = -Math.PI / 2;
  restrictedFloor.position.set((area.minX + area.maxX) / 2, 0.03, (area.minZ + area.maxZ) / 2);
  restrictedFloor.receiveShadow = true;
  root.add(restrictedFloor);

  const FENCE_HEIGHT = 1.6;
  const addFenceSegment = (x, z, width, depth) => {
    const panel = box(width, FENCE_HEIGHT * 0.55, depth, PALETTE.fence, {
      roughness: 0.5, metalness: 0.35, transparent: true, opacity: 0.85,
    });
    panel.position.set(x, 0.55, z);
    root.add(panel);

    const rail = box(width, 0.12, depth, 0x8d8c96, { roughness: 0.5, metalness: 0.3 });
    rail.position.set(x, FENCE_HEIGHT, z);
    root.add(rail);

    // cerca e baixa: bloqueia passagem, mas nao bloqueia a visao
    addRect(rectFromBox(x, z, width, depth), FENCE_HEIGHT, { blocksSight: false, tag: 'fence' });
  };

  const gateHalf = forbidden.gate.halfWidth;
  const southLeftWidth = -gateHalf - area.minX;
  const southRightWidth = area.maxX - gateHalf;
  addFenceSegment((area.minX - gateHalf) / 2, forbidden.gate.z, southLeftWidth, 0.35);
  addFenceSegment((gateHalf + area.maxX) / 2, forbidden.gate.z, southRightWidth, 0.35);
  addFenceSegment(0, area.maxZ, areaWidth, 0.35);
  addFenceSegment(area.minX, (forbidden.gate.z + area.maxZ) / 2, 0.35, areaDepth);
  addFenceSegment(area.maxX, (forbidden.gate.z + area.maxZ) / 2, 0.35, areaDepth);

  /* ---------- portao aberto ---------- */
  for (const side of [-1, 1]) {
    const post = box(0.5, 2.4, 0.5, 0x3a3a42, { roughness: 0.6, metalness: 0.3 });
    post.position.set(side * gateHalf, 1.2, forbidden.gate.z);
    root.add(post);

    const leaf = box(0.12, 1.9, 1.9, 0x5a5a64, { roughness: 0.6, metalness: 0.4 });
    leaf.position.set(side * (gateHalf + 0.35), 1.0, forbidden.gate.z + 0.95);
    leaf.rotation.y = side * 1.15;
    root.add(leaf);
    addRect(rectFromBox(leaf.position.x, leaf.position.z, 1.9, 1.9, leaf.rotation.y), 1.9, {
      blocksSight: false, tag: 'gate',
    });
  }

  /* ---------- placa ACESSO NEGADO ---------- */
  const signPostA = box(0.22, 3.6, 0.22, 0x3a3a42);
  signPostA.position.set(3.6, 1.8, forbidden.gate.z + 0.6);
  root.add(signPostA);
  const signPostB = box(0.22, 3.6, 0.22, 0x3a3a42);
  signPostB.position.set(7.4, 1.8, forbidden.gate.z + 0.6);
  root.add(signPostB);

  const forbiddenSign = signGroup('ACESSO NEGADO', 4.4, 1.5, {
    background: '#b3231f', color: '#ffffff', fontSize: 66,
  });
  forbiddenSign.position.set(5.5, 3.1, forbidden.gate.z + 0.5);
  root.add(forbiddenSign);
  addRect(rectFromBox(5.5, forbidden.gate.z + 0.6, 4.2, 0.4), 3.6, { blocksSight: false, tag: 'signpost' });

  interactables.push({
    id: 'sign_forbidden',
    label: 'Placa: ACESSO NEGADO',
    kind: 'sign',
    x: 5.5, z: forbidden.gate.z + 0.6,
    radius: 4,
    message: 'ACESSO NEGADO. Nenhum NPC olha para esta placa. Eles simplesmente contornam.',
  });

  interactables.push({
    id: 'gate',
    label: 'Portao da area proibida',
    kind: 'gate',
    x: 0, z: forbidden.gate.z + 1.6,
    radius: 3.2,
    message: 'O portao esta aberto. Nenhum NPC jamais passou por aqui. Voce pode.',
  });

  /* ---------- predio da area proibida ---------- */
  const forbiddenBuilding = forbidden.building;
  createBuilding(
    root,
    {
      x: forbiddenBuilding.x, z: forbiddenBuilding.z,
      w: forbiddenBuilding.w, d: forbiddenBuilding.d, h: forbiddenBuilding.h,
      color: PALETTE.forbiddenBuilding, roofColor: 0x23232b,
      doorSide: 'north', sign: null,
    },
    { windows: false },
  );
  addRect(
    rectFromBox(forbiddenBuilding.x, forbiddenBuilding.z, forbiddenBuilding.w, forbiddenBuilding.d),
    forbiddenBuilding.h,
    { tag: 'building' },
  );

  // janelas tapadas
  for (const dx of [-6.5, 6.5]) {
    const board = box(2.4, 2, 0.25, 0x4a4a52, { roughness: 0.9 });
    board.position.set(forbiddenBuilding.x + dx, 3.4, forbiddenBuilding.z - forbiddenBuilding.d / 2 - 0.12);
    root.add(board);
  }

  const forbiddenPlate = signGroup('ACESSO NEGADO', 9, 2, {
    background: '#b3231f', color: '#ffffff', fontSize: 78,
  });
  forbiddenPlate.rotation.y = Math.PI;
  forbiddenPlate.position.set(forbiddenBuilding.x, 5.4, forbiddenBuilding.z - forbiddenBuilding.d / 2 - 0.15);
  root.add(forbiddenPlate);

  // lacre na porta
  const seal = box(2.6, 0.35, 0.3, 0xb3231f, { roughness: 0.6 });
  seal.position.set(forbiddenBuilding.x, 1.35, forbiddenBuilding.z - forbiddenBuilding.d / 2 - 0.2);
  seal.rotation.z = 0.55;
  root.add(seal);

  interactables.push({
    id: 'door_forbidden',
    label: 'Porta lacrada',
    kind: 'door',
    x: forbiddenBuilding.x, z: forbiddenBuilding.z - forbiddenBuilding.d / 2 - 1.2,
    radius: 3.2,
    message: 'A porta esta lacrada por dentro. Algo aqui nao quer ser visto.',
  });

  /* ---------- anomalias (os cinco objetos que nao seguem o script) ---------- */
  const anomalies = ANOMALIES.map((def) => {
    const group = new THREE.Group();
    group.name = `anomaly-${def.id}`;

    const material = new THREE.MeshStandardMaterial({
      color: PALETTE.anomaly, emissive: PALETTE.anomaly, emissiveIntensity: 1.8,
      roughness: 0.3, metalness: 0.4,
    });
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.72, 0), material);
    mesh.position.y = 1.35;
    mesh.castShadow = true;
    group.add(mesh);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.95, 1.4, 28),
      new THREE.MeshBasicMaterial({ color: PALETTE.anomaly, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
    );
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = 0.14;
    group.add(halo);

    const stand = box(1.5, 0.35, 1.5, 0x2a2a33, { roughness: 0.7 });
    stand.position.y = 0.17;
    group.add(stand);

    const light = new THREE.PointLight(PALETTE.anomaly, 8, 16, 2);
    light.position.y = 1.5;
    group.add(light);

    group.position.set(def.x, 0, def.z);
    root.add(group);
    addRect(rectFromBox(def.x, def.z, 1.6, 1.6), 1.6, {
      blocksSight: false, tag: 'anomaly',
    });

    const item = {
      id: `anomaly_${def.id}`,
      anomalyId: def.id,
      label: def.name,
      kind: 'anomaly',
      x: def.x, z: def.z,
      radius: CONFIG.anomalies.interactRadius,
      enabled: true,
      message: 'Voce nao deveria conseguir pegar isso. voce pega.',
    };
    interactables.push(item);

    return {
      ...def,
      group, mesh, halo, light, material, item,
      found: false,
      available: true,
    };
  });

  const anomalyById = (id) => anomalies.find((a) => a.id === id) || null;

  /* ---------- janelas (acendem a noite) ---------- */
  const windowMaterials = [];
  root.traverse((obj) => {
    const mat = obj.isMesh ? obj.material : null;
    if (mat && mat.emissive && mat.emissive.getHex() === 0x664400 && !windowMaterials.includes(mat)) {
      windowMaterials.push(mat);
    }
  });

  /* ---------- atmosfera: ciclo de luz e clima ---------- */
  // amanhecer, dia, entardecer e noite. Cada chave: hora, cor do ceu/nevoa,
  // cor e forca do sol, luz ambiente e distancia da nevoa.
  const ATMOSPHERE_KEYS = [
    { h: 0, sky: 0x070b16, sun: 0x6a7bb5, sunI: 0.12, hemi: 0.24, amb: 0.17, fogNear: 40, fogFar: 150 },
    { h: 5, sky: 0x10172b, sun: 0x6a7bb5, sunI: 0.14, hemi: 0.26, amb: 0.18, fogNear: 40, fogFar: 150 },
    { h: 6.2, sky: 0xf0a070, sun: 0xffa86a, sunI: 0.75, hemi: 0.45, amb: 0.25, fogNear: 30, fogFar: 125 },
    { h: 8, sky: 0xb4d6ee, sun: 0xfff0d0, sunI: 1.4, hemi: 0.72, amb: 0.31, fogNear: 70, fogFar: 190 },
    { h: 12, sky: 0x9fd0f0, sun: 0xfff2d6, sunI: 1.6, hemi: 0.82, amb: 0.34, fogNear: 80, fogFar: 205 },
    { h: 16, sky: 0xa5d2ef, sun: 0xfff0d0, sunI: 1.45, hemi: 0.74, amb: 0.31, fogNear: 75, fogFar: 195 },
    { h: 18.2, sky: 0xf2a066, sun: 0xff9250, sunI: 0.95, hemi: 0.5, amb: 0.26, fogNear: 35, fogFar: 135 },
    { h: 19.6, sky: 0x5c3a6c, sun: 0xc06a60, sunI: 0.38, hemi: 0.33, amb: 0.2, fogNear: 30, fogFar: 115 },
    { h: 21, sky: 0x0e1426, sun: 0x6a7bb5, sunI: 0.13, hemi: 0.25, amb: 0.17, fogNear: 40, fogFar: 145 },
    { h: 24, sky: 0x070b16, sun: 0x6a7bb5, sunI: 0.12, hemi: 0.24, amb: 0.17, fogNear: 40, fogFar: 150 },
  ].map((key) => ({
    ...key, sky: new THREE.Color(key.sky), sun: new THREE.Color(key.sun),
  }));

  // estado atual da atmosfera (objetos reaproveitados: nada e criado por frame)
  const atm = {
    sky: new THREE.Color(), sun: new THREE.Color(), sunI: 1, hemi: 0.7, amb: 0.3, fogNear: 80, fogFar: 200, night: 0,
  };
  const hemiSkyBase = new THREE.Color(0xdfeaff);
  const ambientBase = new THREE.Color(0xffffff);
  // clima da area proibida: nevoa escura e luz avermelhada
  const moodSky = new THREE.Color(0x1d0709);
  const moodSun = new THREE.Color(0xff3b2a);
  const moodTint = new THREE.Color(0xff6a55);
  let mood = 0;
  let moodTarget = 0;
  let appliedMood = -1;

  function sampleAtmosphere(hour) {
    const h = ((hour % 24) + 24) % 24;
    let i = 0;
    while (i < ATMOSPHERE_KEYS.length - 2 && h >= ATMOSPHERE_KEYS[i + 1].h) i += 1;
    const a = ATMOSPHERE_KEYS[i];
    const b = ATMOSPHERE_KEYS[i + 1];
    const t = clamp((h - a.h) / (b.h - a.h), 0, 1);
    atm.sky.copy(a.sky).lerp(b.sky, t);
    atm.sun.copy(a.sun).lerp(b.sun, t);
    atm.sunI = a.sunI + (b.sunI - a.sunI) * t;
    atm.hemi = a.hemi + (b.hemi - a.hemi) * t;
    atm.amb = a.amb + (b.amb - a.amb) * t;
    atm.fogNear = a.fogNear + (b.fogNear - a.fogNear) * t;
    atm.fogFar = a.fogFar + (b.fogFar - a.fogFar) * t;
    // noite: postes e janelas acesos (rampa entre 17:30-19:30 e 5:00-7:00)
    if (h >= 19.5 || h < 5) atm.night = 1;
    else if (h >= 17.5) atm.night = (h - 17.5) / 2;
    else if (h < 7) atm.night = 1 - (h - 5) / 2;
    else atm.night = 0;
  }

  /** Junta a hora do dia com o clima da area proibida e aplica na cena. */
  function applyAtmosphere() {
    scene.background.copy(atm.sky).lerp(moodSky, mood * 0.78);
    scene.fog.color.copy(scene.background);
    scene.fog.near = atm.fogNear + (14 - atm.fogNear) * mood;
    scene.fog.far = atm.fogFar + (88 - atm.fogFar) * mood;

    sun.color.copy(atm.sun).lerp(moodSun, mood * 0.6);
    sun.intensity = atm.sunI * (1 - 0.45 * mood);
    hemi.color.copy(hemiSkyBase).lerp(moodTint, mood * 0.55);
    hemi.intensity = atm.hemi * (1 - 0.2 * mood);
    ambient.color.copy(ambientBase).lerp(moodTint, mood * 0.45);
    ambient.intensity = atm.amb;
    appliedMood = mood;
  }

  const lightsForNight = () => {
    const glow = 0.15 + atm.night * 2.4;
    for (let i = 0; i < lampMaterials.length; i += 1) lampMaterials[i].emissiveIntensity = glow;
    for (let i = 0; i < lampPools.length; i += 1) lampPools[i].material.opacity = atm.night * 0.3;
    const windowGlow = 0.15 + atm.night * 1.3;
    for (let i = 0; i < windowMaterials.length; i += 1) windowMaterials[i].emissiveIntensity = windowGlow;
  };

  /* ---------- navegacao e lugares ---------- */
  const nav = buildNav();

  const places = {
    homes: LAYOUT.houses.map((house) => ({
      id: house.id,
      name: house.name,
      nodeId: `${house.id}_door`,
      door: doorApproach(house),
      inside: { x: house.x, z: house.z },
    })),
    work: {
      id: 'work',
      name: LAYOUT.work.name,
      nodeId: 'work_door',
      door: doorApproach(LAYOUT.work),
      inside: { x: LAYOUT.work.x, z: LAYOUT.work.z },
    },
    plaza: {
      nodes: ['p_n', 'p_e', 'p_s', 'p_w'],
      wander: PLAZA_WANDER_POINTS,
    },
  };

  let elapsed = 0;

  // interior da casa do jogador: onde o jogo comeca no primeiro dia
  const playerHome = LAYOUT.houses.find((house) => house.enterable) || LAYOUT.houses[0];
  const playerHomeInfo = {
    center: { x: playerHome.x, z: playerHome.z },
    door: doorApproach(playerHome),
  };

  // lugares seguros: interior de cada casa em que da para entrar.
  // dentro deles a suspeita cai bem mais rapido.
  const safeZones = LAYOUT.houses
    .filter((house) => house.enterable)
    .map((house) => {
      const inset = CONFIG.heat.safeZoneInset;
      return {
        id: house.id,
        name: house.name,
        minX: house.x - house.w / 2 + inset,
        maxX: house.x + house.w / 2 - inset,
        minZ: house.z - house.d / 2 + inset,
        maxZ: house.z + house.d / 2 - inset,
      };
    });

  const api = {
    root,
    rects,
    circles,
    interactables,
    nav,
    places,
    forbiddenArea: area,
    anomalies,
    anomalyById,
    playerHome: playerHomeInfo,
    safeZones,

    /** O jogador esta em um lugar seguro (dentro de uma casa)? */
    isSafeZone(x, z) {
      return safeZones.some((zone) => zone.minX <= x && x <= zone.maxX
        && zone.minZ <= z && z <= zone.maxZ);
    },

    homeById(id) {
      return places.homes.find((home) => home.id === id) || places.homes[0];
    },

    /** Linha de visao livre entre dois pontos (predios bloqueiam, cerca nao). */
    lineOfSight(ax, az, bx, bz) {
      for (let i = 0; i < rects.length; i += 1) {
        const rect = rects[i];
        if (!rect.blocksSight) continue;
        if (segmentIntersectsRect(ax, az, bx, bz, rect)) return false;
      }
      return true;
    },

    /** Solido na altura y? (usado para nao enfiar a camera dentro das paredes) */
    isSolid(x, y, z) {
      for (let i = 0; i < rects.length; i += 1) {
        const rect = rects[i];
        if (y > rect.height) continue;
        if (x >= rect.minX && x <= rect.maxX && z >= rect.minZ && z <= rect.maxZ) return true;
      }
      for (let i = 0; i < circles.length; i += 1) {
        const c = circles[i];
        if (y > 1.2) continue;
        if ((x - c.x) ** 2 + (z - c.z) ** 2 <= c.r * c.r) return true;
      }
      return false;
    },

    isInsideForbidden(x, z) {
      return rectContainsPoint(area, x, z);
    },

    /** Ajusta ceu, nevoa, sol, postes e janelas conforme a hora do mundo. */
    setHour(hour) {
      sampleAtmosphere(hour);
      applyAtmosphere();
      lightsForNight();
      const sunAngle = ((hour - 5) / 14) * Math.PI;
      sun.position.set(Math.cos(sunAngle) * 70, Math.max(14, Math.sin(sunAngle) * 85), 34);
    },

    /** Clima da area proibida (0 = normal, 1 = nevoa escura + luz vermelha). */
    setMood(value) {
      moodTarget = clamp(value, 0, 1);
    },

    get mood() {
      return mood;
    },

    update(dt) {
      elapsed += dt;
      // transicao suave do clima da area proibida
      if (Math.abs(moodTarget - mood) > 0.001) {
        mood += (moodTarget - mood) * Math.min(1, dt * 2.2);
        if (Math.abs(mood - appliedMood) > 0.004) applyAtmosphere();
      }
      for (let i = 0; i < anomalies.length; i += 1) {
        const a = anomalies[i];
        if (!a.available || a.found) continue;
        a.mesh.rotation.y += dt * 1.1;
        a.mesh.rotation.x += dt * 0.45;
        a.mesh.position.y = 1.35 + Math.sin(elapsed * 1.8) * 0.12;
        a.halo.scale.setScalar(1 + Math.sin(elapsed * 2.6) * 0.07);
        a.light.intensity = 7 + Math.sin(elapsed * 4) * 2.5;
      }
      water.position.y = 0.79 + Math.sin(elapsed * 1.4) * 0.01;
    },

    /**
     * Liga/desliga a exibicao de uma anomalia pelo horario do mundo.
     * Fora do horario (ou ja coletada) ela some e deixa de ser interagivel.
     */
    setAnomalyActive(id, active) {
      const a = anomalyById(id);
      if (!a) return;
      a.available = active === true;
      a.group.visible = a.available;
      a.item.enabled = a.available;
    },

    /** Marca como coletada: some do mapa e do diario. */
    collectAnomaly(id) {
      const a = anomalyById(id);
      if (!a) return null;
      a.found = true;
      a.group.visible = false;
      a.item.enabled = false;
      return a;
    },

    resetAnomalies() {
      for (let i = 0; i < anomalies.length; i += 1) {
        anomalies[i].found = false;
        anomalies[i].group.visible = true;
        anomalies[i].item.enabled = true;
      }
    },

    reset() {
      this.resetAnomalies();
      mood = 0;
      moodTarget = 0;
      this.setHour(CONFIG.time.startHour);
      elapsed = 0;
    },
  };

  api.setHour(CONFIG.time.startHour);
  return api;
}








