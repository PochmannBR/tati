# tati-proxy — Worker dedicado da Capitão Tati

Proxy gratuito que resolve o erro **429 (perguntas seguidas em menos de 30s)** do chatbot da TATI.

## Por que o problema acontecia

A TATI antiga chamava o Gemini **direto do navegador** e reenviava **todas as normas (~129 mil tokens)** em **cada** pergunta. No free tier do `gemini-2.5-flash` o limite é **250.000 tokens por minuto**. Duas perguntas no mesmo minuto já passavam de 258 mil tokens → **429**. Esperar ~30s "recarregava" a cota do minuto — exatamente o sintoma observado.

## Como o worker resolve

1. A **chave** do Gemini vira um *secret* no servidor (some do site).
2. **Normas + persona** ficam no worker (`normas-tati.js`, `persona-tati.js`). O navegador manda **só a pergunta**.
3. Modelo padrão `gemini-2.0-flash-lite`: **1.000.000 tokens/min** e **30 req/min** — 4x o TPM do 2.5-flash. Na prática o 429 some no uso normal.
4. Só as últimas 16 mensagens do histórico são enviadas.

## Deploy (uma vez)

Pré-requisito: conta gratuita na Cloudflare e Node instalado.

```bash
cd worker
npx wrangler login            # abre o navegador p/ autorizar
npx wrangler deploy           # publica; anote a URL final
npx wrangler secret put GEMINI_API_KEY   # cole a chave do Gemini quando pedir
```

A URL final será algo como:

```
https://tati-proxy.SEU-SUBDOMINIO.workers.dev
```

## Ligar o site à API

No arquivo **`chatbot tati.html`**, ajuste a linha:

```js
const WORKER_URL = "https://tati-proxy.SEU-SUBDOMINIO.workers.dev";
```

Trocando pela URL que o `wrangler deploy` mostrou.

## Testar

- Abra `https://tati-proxy.SEU-SUBDOMINIO.workers.dev/` no navegador → deve mostrar `status: ok` e `gemini_configurado: true`.
- `https://.../gemini/models` → lista os modelos disponíveis na sua chave.
- No chat, faça 3–4 perguntas seguidas rápidas. Não deve mais dar "Sobrecarga Tática".

## Trocar o modelo (opcional)

Painel do Worker → **Settings → Variables** → adicione `GEMINI_MODEL` (ex.: `gemini-2.0-flash`, que também tem 1M TPM). Sem essa variável, o padrão é `gemini-2.0-flash-lite`.

## Arquivos

| Arquivo | Função |
|---|---|
| `worker.js` | Lógica do proxy `/gemini` |
| `normas-tati.js` | Normas da EsAO (gerado a partir do `dados.js`) |
| `persona-tati.js` | Persona da Capitão Tati (gerado a partir do `persona.js`) |
| `wrangler.toml` | Configuração do deploy |

> Se você atualizar as normas, edite `dados.js` como antes e regenere `normas-tati.js` (basta trocar a 1ª linha `const NORMAS_TEXTO =` por `export const NORMAS_TATI =`), depois rode `npx wrangler deploy` de novo.
