/**
 * Teste de gameplay headless: dirige o jogo de verdade (posiciona o jogador,
 * aperta E, espera as rotinas) e confere o conceito do "O NPC".
 *
 * Cenarios verificados:
 *  1. O jogador entra na area proibida e um NPC que o ve interrompe a rotina,
 *     fala no balao e passa a seguir a distancia.
 *  2. Nenhum NPC entra na area proibida (amostra de posicoes ao longo do tempo).
 *  3. Interagir com o objeto anomalo dispara o glitch + "Erro: entidade fora do
 *     script detectada" e a suspeita sobe.
 *  4. Depois do glitch, NPCs proximos reagem sozinhos.
 *  5. A tecla R reinicia o mundo (posicao e flags voltam ao inicio).
 *
 * Uso: npm run dev (num terminal) e npm run playtest (noutro).
 */
import { openBrowser } from './cdp.mjs';

const TARGET_URL = process.argv[2] || 'http://localhost:5173/';
const checks = [];

function check(name, passed, detail = '') {
  checks.push({ name, passed });
  console.log(`[playtest] ${passed ? 'OK   ' : 'FALHA'} ${name}${detail ? ` -> ${detail}` : ''}`);
}

const client = await openBrowser({ port: Number(process.env.PLAYTEST_PORT || 9334) });
const errors = [];

client.on((msg) => {
  if (msg.method === 'Runtime.exceptionThrown') {
    errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  }
  if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
    errors.push(msg.params.entry.text);
  }
  if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
    errors.push((msg.params.args || []).map((a) => a.value ?? a.description).join(' '));
  }
});

await client.send('Runtime.enable');
await client.send('Log.enable');
await client.goto(TARGET_URL);
await client.sleep(2500);

// começa o jogo (equivale a clicar em JOGAR)
await client.evaluate(`document.getElementById('start-button').click(), true`);
await client.sleep(600);

// posiciona o jogador dentro da area proibida e um NPC parado perto do portao,
// virado para o jogador (yaw 0 = olhando para +Z). A rotina dele e fixada na
// praca para o teste nao competir com a regra de "nunca sair da rotina".
await client.evaluate(`(() => {
  const g = window.__oNpc;
  g.player.teleport(0, 32);
  const npc = g.npcs.list[0];
  npc.schedule = [{ until: 24, place: 'plaza', activity: 'Almoco na praca' }];
  npc.place = 'plaza';
  npc.state = 'idle';
  npc.idleTimer = 999;
  npc.position.set(0, 0, 24);
  npc.yaw = 0;
  npc.alert = null;
  npc.syncVisuals();
  return true;
})()`);

await client.sleep(1200);

const seen = await client.evaluate(`(() => {
  const npc = window.__oNpc.npcs.list[0];
  return {
    alert: !!npc.alert,
    phase: npc.alert ? npc.alert.phase : null,
    bubble: npc.bubbleElement.textContent,
    suspicion: window.__oNpc.suspicion.value,
    inForbidden: window.__oNpc.state.playerInForbidden,
    z: npc.position.z,
  };
})()`);

check('NPC viu o jogador na area proibida e parou a rotina', seen.alert, `fase=${seen.phase}`);
check('Balao estranhou o jogador', /nao deveria estar ai/i.test(seen.bubble), `"${seen.bubble}"`);
check('Jogador registrado dentro da area proibida', seen.inForbidden === true);
check('Suspeita subiu', seen.suspicion > 0, `${seen.suspicion.toFixed(1)}%`);

// segue a distancia sem nunca entrar na area proibida
let maxZ = -Infinity;
for (let i = 0; i < 12; i += 1) {
  const z = await client.evaluate(`window.__oNpc.npcs.list[0].position.z`);
  maxZ = Math.max(maxZ, z);
  await client.sleep(400);
}

const area = await client.evaluate(`window.__oNpc.world.forbiddenArea`);
check('NPC seguiu mas parou na cerca', maxZ < area.minZ, `z maximo=${maxZ.toFixed(2)}, cerca=${area.minZ}`);

// amostra geral: nenhum NPC pode estar na area proibida
let intruders = 0;
for (let i = 0; i < 10; i += 1) {
  intruders += await client.evaluate(`(() => {
    const g = window.__oNpc;
    return g.npcs.list.filter((n) => g.world.isInsideForbidden(n.position.x, n.position.z)).length;
  })()`);
  await client.sleep(250);
}
check('Nenhum NPC entrou na area proibida', intruders === 0, `invasoes=${intruders}`);

// interage com o objeto anomalo
await client.evaluate(`window.__oNpc.player.teleport(0, 32.2), true`);
await client.sleep(400);
await client.press('KeyE');
await client.sleep(300);

const glitched = await client.evaluate(`(() => ({
  triggered: window.__oNpc.state.glitchTriggered,
  active: window.__oNpc.glitch.active,
  banner: document.getElementById('error-banner').textContent,
  visible: !document.getElementById('error-banner').classList.contains('hidden'),
  suspicion: window.__oNpc.suspicion.value,
}))()`);

check('Glitch disparou ao interagir com o objeto', glitched.triggered && glitched.active);
check('Mensagem de erro exibida', glitched.visible && /fora do script/i.test(glitched.banner), `"${glitched.banner}"`);
check('Suspeita subiu com o glitch', glitched.suspicion > seen.suspicion, `${glitched.suspicion.toFixed(1)}%`);

// depois do glitch os NPCs proximos reagem sozinhos: traz dois NPCs para
// perto do jogador (fora da area proibida) e observa os baloes.
await client.evaluate(`(() => {
  const g = window.__oNpc;
  g.player.teleport(0, 24);
  g.npcs.list[2].position.set(4, 0, 25);
  g.npcs.list[3].position.set(-5, 0, 26);
  return true;
})()`);

let reactions = 0;
let reacted = [];
for (let i = 0; i < 45; i += 1) {
  const sample = await client.evaluate(
    `window.__oNpc.npcs.list.filter((n) => n.bubbleTimer > 0).map((n) => n.name)`,
  );
  reactions += sample.length;
  for (const name of sample) if (!reacted.includes(name)) reacted.push(name);
  await client.sleep(400);
}
check('NPCs reagiram ao jogador depois do glitch', reactions > 0,
  `npcs=${JSON.stringify(reacted)}, amostras=${reactions}`);

// reinicio com R
await client.press('KeyR');
await client.sleep(600);

const restarted = await client.evaluate(`(() => ({
  glitch: window.__oNpc.state.glitchTriggered,
  suspicion: window.__oNpc.suspicion.value,
  hour: window.__oNpc.clock.hour,
  player: { x: window.__oNpc.player.position.x, z: window.__oNpc.player.position.z },
  home: window.__oNpc.world.playerHome.center,
  alerting: window.__oNpc.npcs.list.filter((n) => n.alert).length,
}))()`);

check('R reiniciou o mundo', restarted.glitch === false && restarted.suspicion === 0,
  `suspeita=${restarted.suspicion}, hora=${restarted.hour}`);
// novo dia: o jogador volta para dentro de casa
check('Jogador voltou para casa',
  Math.abs(restarted.player.x - restarted.home.x) < 1.5
  && Math.abs(restarted.player.z - restarted.home.z) < 1.5,
  `(${restarted.player.x.toFixed(1)}, ${restarted.player.z.toFixed(1)}) casa=(${restarted.home.x}, ${restarted.home.z})`);
check('Nenhum NPC ficou em alerta apos o reinicio', restarted.alerting === 0);
check('Zero erros de console durante a sessao', errors.length === 0, errors.slice(0, 3).join(' | '));

const failed = checks.filter((checkItem) => !checkItem.passed).length;
console.log(`\n[playtest] ${checks.length - failed}/${checks.length} verificacoes passaram`);
console.log(failed === 0 ? '[playtest] RESULTADO: OK' : '[playtest] RESULTADO: FALHOU');

client.close();
process.exit(failed === 0 ? 0 : 1);
