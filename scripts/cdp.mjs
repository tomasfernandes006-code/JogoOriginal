/**
 * Cliente minimo do Chrome DevTools Protocol usado pelos testes headless.
 * Depende apenas da API global WebSocket/fetch do Node 18+.
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const BROWSER_CANDIDATES = [
  process.env.BROWSER_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function findBrowser() {
  const browser = BROWSER_CANDIDATES.find((path) => existsSync(path));
  if (!browser) {
    throw new Error('Navegador nao encontrado. Defina a variavel de ambiente BROWSER_PATH.');
  }
  return browser;
}

/**
 * Abre o navegador headless, conecta na aba inicial e devolve um cliente CDP
 * com os metodos evaluate/key/subscribe. Chame close() ao terminar.
 */
export async function openBrowser({ port = 9333 } = {}) {
  const browser = findBrowser();
  const profile = mkdtempSync(join(tmpdir(), 'o-npc-test-'));

  const child = spawn(browser, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--enable-unsafe-swiftshader',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--mute-audio',
    // o jogo usa requestAnimationFrame: sem estes flags o headless estrangula o loop
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--disable-backgrounding-occluded-windows',
    '--disable-features=CalculateNativeWinOcclusion,IntensiveWakeUpThrottling',
    '--run-all-compositor-stages-before-draw',
    '--force-device-scale-factor=1',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    'about:blank',
  ], { stdio: 'ignore' });

  let wsUrl = null;
  for (let attempt = 0; attempt < 60 && !wsUrl; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === 'page');
      if (page?.webSocketDebuggerUrl) wsUrl = page.webSocketDebuggerUrl;
    } catch {
      // devtools ainda subindo
    }
    if (!wsUrl) await sleep(250);
  }
  if (!wsUrl) {
    child.kill();
    throw new Error('DevTools nao respondeu a tempo');
  }

  const socket = new WebSocket(wsUrl);
  const pending = new Map();
  const listeners = [];
  let nextId = 0;

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const entry = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) entry.reject(new Error(msg.error.message));
      else entry.resolve(msg.result);
      return;
    }
    for (const listener of listeners) listener(msg);
  };

  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = () => reject(new Error('falha ao conectar no DevTools'));
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    nextId += 1;
    pending.set(nextId, { resolve, reject });
    socket.send(JSON.stringify({ id: nextId, method, params }));
  });

  const client = {
    send,
    on: (fn) => listeners.push(fn),
    sleep,

    /** Avalia uma expressao no contexto da pagina e devolve o valor. */
    async evaluate(expression) {
      const result = await send('Runtime.evaluate', {
        expression: `JSON.stringify((${expression}))`,
        returnByValue: true,
        awaitPromise: true,
      });
      if (result.exceptionDetails) {
        throw new Error(result.exceptionDetails.exception?.description || 'erro na expressao');
      }
      return JSON.parse(result.result.value);
    },

    async keyDown(code, key = code) {
      await send('Input.dispatchKeyEvent', { type: 'keyDown', code, key, windowsVirtualKeyCode: 0 });
    },

    async keyUp(code, key = code) {
      await send('Input.dispatchKeyEvent', { type: 'keyUp', code, key, windowsVirtualKeyCode: 0 });
    },

    /** Aperta e solta uma tecla (o Input do jogo le e.code). */
    async press(code) {
      const key = code.replace(/^Key/, '').toLowerCase();
      await client.keyDown(code, key);
      await sleep(60);
      await client.keyUp(code, key);
    },

    async goto(url) {
      await send('Page.enable');
      await send('Page.navigate', { url });
    },

    close() {
      try { socket.close(); } catch { /* ignora */ }
      try { child.kill(); } catch { /* ignora */ }
      try { rmSync(profile, { recursive: true, force: true }); } catch { /* ignora */ }
    },
  };

  return client;
}
