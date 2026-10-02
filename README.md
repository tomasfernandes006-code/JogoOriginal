# O NPC

Prototipo 3D jogavel feito com **Three.js + Vite + JavaScript puro** (sem assets externos:
toda a arte e geometria simples/canvas geradas em codigo).

Voce e um NPC aparentemente normal em um mundo de rotinas fixas. Aos poucos, percebe
que consegue fazer coisas que os outros nao conseguem -- como entrar na area proibida.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereco mostrado no terminal (por padrao http://localhost:5173).

Build de producao / preview:

```bash
npm run build
npm run preview
```

## Tela inicial

A tela inicial mostra o titulo **O NPC**, a frase *"Voce acorda. Hoje e igual a ontem. Ou nao?"* e os botoes:

- **Comecar**: primeiro dia. O jogador acorda **dentro da sua casa** e o
  primeiro objetivo e sair pela porta. Logo depois do clique aparece, por 5
  segundos, um quadro resumindo os controles.
- **Continuar**: so aparece quando existe save. Volta para a posicao, a
  suspeita e a hora do ultimo acesso.

## Controles

| Tecla / mouse | Acao |
| --- | --- |
| `W` `A` `S` `D` / setas | andar |
| `SHIFT` | correr |
| mouse | girar a camera (clique na tela para travar o cursor) |
| botao direito do mouse | liberar o cursor |
| roda do mouse | zoom |
| `E` | interagir com o objeto proximo / falar com um NPC |
| `H` | abrir ou fechar a ajuda com a lista de teclas |
| `J` | abrir ou fechar o diario de pistas |
| `Q` | quebrar o tempo (libera depois da primeira anomalia) |
| `R` | reiniciar o mundo |

## O que existe no prototipo

- **Mapa pequeno**: praca central com fonte e bancos, 3 casas (uma e a sua), local de
  trabalho com patio de caixas e a **area proibida cercada** ao norte
  (predio com placas "ACESSO NEGADO" e portao aberto que so voce atravessa).
- **Jogador**: controle WASD + camera em terceira pessoa que segue o personagem,
  colisao basica com paredes, arvores, postes, bancos e caixas.
- **6 NPCs** (Bruno, Celia, Dora, Enzo, Fabi e Guto), cada um com casa, horarios proprios
  e rotina *casa -> trabalho -> praca -> casa*, entrando e saindo dos predios.
  Cada um mostra **nome + atividade atual** acima da cabeca.
- **Interacao com `E`**: portas, bancos, caixas, placas, portao e o objeto anomalo,
  com aviso na tela quando ha algo interagivel por perto.
- **Regra do mundo**: NPCs nunca entram na area proibida (o seguidor trava na cerca)
  e nunca saem da rotina.
- **Quebra de regra**: se um NPC *ver* o jogador na area proibida, ele interrompe a
  rotina, vira-se para ele, solta um balao estranhando ("Voce nao deveria estar ai...")
  e passa a segui-lo a distancia. Os que nao viram continuam normais.
- **Evento de revelacao**: dentro da area proibida existe um objeto que vibra.
  Interagir com ele dispara um **glitch** (tremor de tela, cores alteradas, scanlines)
  e a mensagem `Erro: entidade fora do script detectada`. Depois disso os NPCs
  reagem ao jogador com muito mais frequencia e a suspeita sobe mais rapido.
- **Objetivos em sequencia**: 8 passos guiados (andar, correr, praca, interagir,
  trabalho, portao, area proibida, objeto anomalo) mostrados num banner no topo,
  com contador `n/8`, animacao na troca e um "check" ao concluir. O passo atual
  fica salvo em `localStorage` e e reiniciado com `R`.
- **Seta guia**: enquanto o passo tem alvo, uma seta 3D aponta no chao para ele,
  o alvo ganha um marcador de luz (anel + pilar) e, se ele estiver fora da tela,
  aparece uma seta na borda com a distancia em metros. Tudo some quando o jogador
  chega perto do alvo.
- **Dicas contextuais**: mensagens curtas na parte de baixo da tela quando voce
  chega perto de uma casa, da fonte, de um NPC ou da cerca proibida, e quando a
  suspeita sobe. Aparecem uma por vez, com fade in/fade out, e nunca se repetem:
  as ja vistas ficam salvas em `localStorage`. A tecla `H` abre e fecha uma ajuda
  com a lista de todas as teclas.
- **Interface minima**: relogio do mundo (24h em 5 minutos reais), objetivo/dica,
  barra de suspeita e reinicio com `R`.
- **Salvamento simples**: posicao do jogador, suspeita e hora do mundo em `localStorage`
  (salva a cada 4s, ao reiniciar e ao fechar a aba); carregado automaticamente ao abrir.

## Estrutura dos modulos

```
src/
  main.js      bootstrap, loop, salvar/carregar, reiniciar
  config.js    todos os numeros e a paleta de cores
  utils.js     matematica, colisao circulo x AABB, linha de visao
  clock.js     relogio do mundo (24h)
  map.js       planta baixa + grafo de navegacao (BFS)
  world.js     constroi praca, casas, trabalho, area proibida, colisores e interativos
  player.js    input (teclado/mouse), jogador e camera em terceira pessoa
  npcs.js      NPCs, rotinas por horario, labels e baloes de fala
  events.js    suspeita, glitch, interacao (E) e regras do mundo
  objectives.js objetivos em sequencia (passo atual, alvo e condicao)
  guide.js      seta 3D + marcador no alvo e seta de borda com distancia
  hints.js      dicas contextuais (uma por vez) e ajuda de controles (H)
  heat.js       niveis de suspeita: encaro, murmurio, perseguicao e captura
  anomalies.js  as cinco anomalias: horario, coleta, pistas e diario (J)
  power.js      poder de congelar o tempo (Q) e a travessia vigiada
  ui.js        HUD e labels CSS2D
  save.js      localStorage
  style.css    HUD, labels, baloes e efeito de glitch
```

## As cinco anomalias

Sao cinco objetos que nao seguem o script. Cada um tem **lugar e horario
proprios** (`ANOMALIES` em `src/map.js`) e some depois de coletado:

| Anomalia | Onde | Quando aparece |
| --- | --- | --- |
| Objeto do quarto | dentro da sua casa | sempre |
| Objeto da praca | no meio da praca | de dia (6h-20h) |
| Objeto do patio | patio do trabalho | so a noite (19h-6h) |
| Objeto atras do predio | atras do predio proibido | madrugada (0h-5h) |
| Objeto do portao | perto do portao do mapa | de manha (4h-11h) |

Interagir (`E`) com uma delas dispara um **glitch curto**, soma **+14 de
suspeita**, revela uma **pista de historia** e conta no progresso. As pistas
ficam no **diario**, aberto com a tecla `J`, que mostra `Anomalias: 2/5` e
so revela as pistas ja encontradas. O passo final dos objetivos acompanha a
contagem e a **seta guia** aponta sempre para a proxima anomalia disponivel.

## Quebrar o tempo (tecla Q)

Depois de coletar a **primeira anomalia** voce libera o poder de parar o tempo
(`CONFIG.power`). A dica *"Voce aprendeu a quebrar o tempo. Aperte Q"* aparece
na tela e um painel com a barra de recarga surge no HUD.

Enquanto o tempo esta quebrado (**6 s**):

- o relogio do mundo para;
- todos os NPCs param e **nao conseguem te ver** (ninguem encara, segue ou
  persegue);
- a tela fica invertida/cinza com um glitch leve;
- **somente o jogador se move**.

A recarga e de **20 s**. Usar o poder na frente de um NPC (a menos de 8 m)
custa **+10 de suspeita**, porque alguem viu voce fazer isso.

O ultimo objetivo obriga a usar o poder: atravessar a **praca vigiada** (raio
de 9 m no centro) com o tempo parado. Ficar 2,5 s dentro da zona com o poder
ligado e sair dela completa o passo.

## Niveis de suspeita

A barra de suspeita reage em tres niveis (`CONFIG.heat`):

| Suspeita | O que acontece |
| --- | --- |
| ate 30 | nada: o mundo segue normal |
| acima de 30 | NPCs proximos param e te encaram, com um **?** acima da cabeca |
| acima de 60 | quem te viu passa a **murmurar** frases desconfiadas e a tela ganha uma **vinheta vermelha** leve |
| em 100 | **perseguicao**: todos correm atras de voce usando o grafo de navegacao |

Se um NPC te alcancar, o mundo reescreve a sua rotina: tela de glitch, voce volta
para casa, a suspeita cai para 30 e voce perde **1 hora** do mundo.

**Lugares seguros**: dentro de uma casa a suspeita cai **6x mais rapido**
(`CONFIG.heat.safeZoneDecayMultiplier`). Correr para casa e a forma mais rapida
de sair de uma perseguicao.

## Limitacoes (proposital)

Sem memoria de longo prazo, sem perseguicao complexa, sem missoes e sem dialogos longos:
as falas sao curtas e reativas, exatamente como pedido para este prototipo.

---

## Atualizacao: poderes, falas, audio, visual, finais e conquistas

**Novos modulos (src/):** `powers.js` (substitui `power.js`), `stats.js`, `dialogues.js`, `secrets.js`, `ally.js`, `audio.js`, `postfx.js`, `effects.js`, `ending.js`, `achievements.js`.

**Poderes** (mesma barra de recarga de 20 s, um ativo por vez):
- 1a anomalia: **Q** quebrar o tempo (6 s)
- 2a anomalia: **F** apagar a visao (5 s, NPCs nao te enxergam)
- 3a anomalia: **G** segurar perto da parede de uma casa para atravessar (ate 3 s; ao soltar ou acabar, voce e empurrado para fora)

**NPCs:** falas por personalidade, hora, suspeita e glitch (`dialogues.js`). Cada um tem um segredo (so revelado no horario/lugar certo, aparece no diario `J`). A **Celia** vira aliada (glitch ocorrido + 2 anomalias + segredo dela + conversar): distrai perseguidores e avisa sobre NPCs com linha de visao na area proibida.

**Audio:** Web Audio sem arquivos; so inicia apos o primeiro clique/tecla; **M** muda (estado salvo). `audio.pause()` / `audio.resume()` ficam prontos para os anuncios do Poki.

**Final:** com as 5 anomalias, a porta do predio proibido abre o evento (A liberdade, B caos, C conformismo; teclas 1/2/3), cena de texto e creditos com "Jogar de novo".

**Conquistas:** salvas em chave propria (`o-npc.achievements.v1`), nao sao apagadas por "Jogar de novo" nem pela tecla R. Lista na ajuda (`H`).

**Save:** campo `version` (atual: 3). Saves antigos sao migrados em `save.js`.

**Visual:** glitch RGB (so renderiza pelo compositor enquanto ha glitch), ciclo amanhecer/dia/entardecer/noite, postes e janelas acesos a noite (sem PointLight extra), particulas roxas (um unico `Points`), "?"/"!" animados, area proibida sombria.

### O que NAO foi testado em navegador
O ambiente de criacao nao tinha navegador, entao `npm run smoke` e `npm run playtest` nao foram executados. Foram validados: `npm run build` (ok) e testes de logica dos modulos puros (save/migracao, falas, estatisticas, alcance do poder G). Rode `npm run dev` + `npm run smoke` antes de publicar.

### Ainda pode melhorar
- Importante: controles de toque (celular) e integracao do SDK do Poki; ajustar dificuldade apos playtest real.
- Desejavel: reduzir o bundle (~630 kB, quase tudo e o Three.js); mais variacoes de fala.
- Futuro: tela de opcoes (volume), mais finais, mapa maior.
