/**
 * Teste de fumaca: abre o jogo em um navegador headless via Chrome DevTools
 * Protocol e falha se houver QUALQUER erro no console ou excecao na pagina.
 *
 * Uso:
 *   npm run dev      (em um terminal)
 *   npm run smoke    (em outro terminal)
 *
 * Opcional: defina BROWSER_PATH se o navegador nao estiver nos caminhos padrao.
 */
import { openBrowser } from './cdp.mjs';

const TARGET_URL = process.argv[2] || 'http://localhost:5173/';
const DURATION_MS = 9000;

const errors = [];
const warnings = [];
const messages = [];

const client = await openBrowser({ port: Number(process.env.SMOKE_PORT || 9333) });

client.on((msg) => {
  if (msg.method === 'Runtime.exceptionThrown') {
    const details = msg.params.exceptionDetails;
    errors.push(`EXCECAO: ${details.exception?.description || details.text}`);
    return;
  }
  if (msg.method === 'Log.entryAdded') {
    const entry = msg.params.entry;
    if (entry.level === 'error') errors.push(`LOG erro: ${entry.text}`);
    else if (entry.level === 'warning') warnings.push(entry.text);
    return;
  }
  if (msg.method === 'Runtime.consoleAPICalled') {
    const text = (msg.params.args || [])
      .map((arg) => arg.value ?? arg.description ?? arg.type)
      .join(' ');
    messages.push(`[${msg.params.type}] ${text}`);
    if (msg.params.type === 'error') errors.push(`CONSOLE erro: ${text}`);
    if (msg.params.type === 'warning') warnings.push(text);
  }
});

await client.send('Runtime.enable');
await client.send('Log.enable');
await client.goto(TARGET_URL);
await client.sleep(DURATION_MS);

const info = await client.evaluate(`(() => ({
  labels: document.querySelectorAll('.npc-label').length,
  names: Array.from(document.querySelectorAll('.npc-name')).map((n) => n.textContent),
  player: document.querySelectorAll('.player-label').length,
  clock: (document.getElementById('clock') || {}).textContent,
  objective: (document.getElementById('objective-text') || {}).textContent,
  suspicion: (document.getElementById('suspicion-value') || {}).textContent,
  canvas: !!document.querySelector('canvas'),
  hudVisible: getComputedStyle(document.getElementById('hud')).display !== 'none',
  npcs: (window.__oNpc ? window.__oNpc.npcs.list.length : 0),
  interactables: (window.__oNpc ? window.__oNpc.world.interactables.length : 0),
  pathOk: (window.__oNpc ? window.__oNpc.checkRoutes() : false),
}))()`);

console.log('[smoke] url             :', TARGET_URL);
console.log('[smoke] NPCs            :', info.npcs);
console.log('[smoke] interativos     :', info.interactables);
console.log('[smoke] labels na tela  :', info.labels, JSON.stringify(info.names));
console.log('[smoke] label do jogador:', info.player);
console.log('[smoke] relogio         :', info.clock);
console.log('[smoke] objetivo        :', info.objective);
console.log('[smoke] suspeita        :', info.suspicion);
console.log('[smoke] canvas          :', info.canvas);
console.log('[smoke] rotas de naveg.:', info.pathOk);
console.log('[smoke] avisos          :', warnings.length);

const failed = errors.length > 0
  || info.npcs < 5
  || info.interactables < 8
  || info.labels === 0
  || info.player === 0
  || !info.canvas
  || !info.hudVisible
  || !info.pathOk;

if (errors.length) {
  console.error('\n[smoke] ERROS ENCONTRADOS:');
  for (const error of errors) console.error('  -', error);
}
if (messages.length) {
  console.log('\n[smoke] mensagens do console:');
  for (const message of messages.slice(0, 20)) console.log('  -', message);
}

console.log(failed ? '\n[smoke] RESULTADO: FALHOU' : '\n[smoke] RESULTADO: OK, zero erros de console');

client.close();
process.exit(failed ? 1 : 0);
