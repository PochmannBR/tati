/* =========================================================================
   Cloudflare Worker — tati-proxy
   Proxy GRATUITO e dedicado do chatbot "Capitão Tati" (SPG / EsAO).

   Por que este worker existe:
     A TATI antiga chamava o Gemini direto do navegador e reenviava TODAS as
     normas (~129 mil tokens) em CADA pergunta. No free tier do gemini-2.5-flash
     (250.000 tokens/min) bastavam 2 perguntas no mesmo minuto para estourar a
     cota -> erro HTTP 429. Esperar ~30s recarregava o "balde" do minuto, por
     isso o problema aparecia só em perguntas seguidas.

   O que este worker resolve:
     1) A chave da API fica como SECRET no servidor (não exposta no site).
     2) As normas e a persona ficam AQUI (server-side). O navegador manda só a
        pergunta -> payload minúsculo trafegando.
     3) Usa por padrão gemini-2.0-flash-lite: 1.000.000 tokens/min e 30 req/min
        no free tier (4x o TPM do 2.5-flash). Com isso o 429 deixa de aparecer
        no uso normal.
     4) Mantém só as últimas mensagens do histórico para o contexto não crescer
        sem limite.
   -------------------------------------------------------------------------
   Rotas:
     GET  /                 -> status
     GET  /gemini/models    -> lista modelos gratuitos disponíveis na chave
     POST /gemini           -> body: { messages:[{role:"user"|"model", text}] }
   -------------------------------------------------------------------------
   Configuração (painel do Worker -> Settings -> Variables and Secrets):
     GEMINI_API_KEY  (Secret)   -> obrigatório
     GEMINI_MODEL    (Variable) -> opcional; padrão "gemini-2.0-flash-lite"
   ========================================================================= */

import { NORMAS_TATI } from "./normas-tati.js";
import { PERSONA_TATI } from "./persona-tati.js";

const MODELO_PADRAO = "gemini-2.0-flash-lite"; // 1M TPM / 30 RPM no free tier
const MAX_MENSAGENS = 16;                       // últimas N trocas mantidas

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return comCors(new Response(null, { status: 204 }));

    const url = new URL(request.url);
    const partes = url.pathname.split("/").filter(Boolean);
    const rota = partes.shift();

    // ---- Status (raiz) ----
    if (!rota) {
      return comCors(json({
        status: "ok",
        servico: "tati-proxy — chatbot Capitão Tati (SPG/EsAO)",
        rotas: ["GET /gemini/models", "POST /gemini"],
        gemini_configurado: !!(env && env.GEMINI_API_KEY),
        modelo_padrao: (env && env.GEMINI_MODEL) || MODELO_PADRAO,
      }));
    }

    if (rota !== "gemini") {
      return comCors(json({ erro: "Rota inválida. Use /gemini." }, 404));
    }

    if (partes[0] === "models" && request.method === "GET") return await handleListModels(env);
    if (request.method !== "POST") return comCors(json({ erro: "Use POST em /gemini." }, 405));
    return await handleGemini(request, env);
  },
};

/* ----------------------------- Modelos ----------------------------------- */

let _modeloCache = null;

async function listarModelos(env) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}&pageSize=1000`);
  const d = await r.json();
  if (!r.ok) throw new Error((d && d.error && d.error.message) || ("HTTP " + r.status));
  return (d.models || [])
    .filter(m => (m.supportedGenerationMethods || []).includes("generateContent"))
    .map(m => m.name.replace(/^models\//, ""));
}

/* Escolhe um modelo gratuito com TPM alto. Preferência:
   flash-lite 2.x  >  flash 2.x  >  flash-lite  >  flash  (evita pro/pesados). */
function escolherModelo(nomes) {
  const cand = nomes.filter(n => !/(embedding|aqa|imagen|vision|tts|audio|image|live|native|pro)/i.test(n));
  const score = (n) => {
    let s = 0;
    if (/flash-?lite/i.test(n)) s += 100; else if (/flash/i.test(n)) s += 60;
    const v = (n.match(/(\d+(?:\.\d+)?)/) || [])[1];
    if (v) s += Math.min(parseFloat(v), 9); // desempate por versão mais nova
    if (/latest/i.test(n)) s += 1;
    return s;
  };
  return cand.sort((a, b) => score(b) - score(a))[0] || nomes[0];
}

async function definirModelo(env, forcarLista) {
  if (env.GEMINI_MODEL && !forcarLista) return env.GEMINI_MODEL.trim();
  if (_modeloCache && !forcarLista) return _modeloCache;
  // tenta o padrão sem gastar uma chamada de listagem
  if (!forcarLista) { _modeloCache = MODELO_PADRAO; return _modeloCache; }
  const nomes = await listarModelos(env);
  _modeloCache = escolherModelo(nomes);
  return _modeloCache;
}

async function handleListModels(env) {
  if (!env || !env.GEMINI_API_KEY) return comCors(json({ erro: "GEMINI_API_KEY não configurada." }, 500));
  try {
    const nomes = await listarModelos(env);
    return comCors(json({ modelos: nomes, escolhido: escolherModelo(nomes) }));
  } catch (e) {
    return comCors(json({ erro: String(e) }, 502));
  }
}

/* ----------------------------- Chatbot ----------------------------------- */

// System instruction = persona + consciência temporal + normas (prefixo estável
// -> favorece o cache implícito do Gemini).
function montarSystem() {
  const hoje = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return `${PERSONA_TATI}\n\nHOJE É DIA: ${hoje}. Use essa data para verificar prazos.` +
         `\n\nCONTEXTO E NORMAS DA ESAO:\n${NORMAS_TATI}`;
}

async function chamarGemini(env, model, payload) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${env.GEMINI_API_KEY}`;
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await r.json();
  return { ok: r.ok, status: r.status, data };
}

async function handleGemini(request, env) {
  if (!env || !env.GEMINI_API_KEY) {
    return comCors(json({ erro: "Chave do Gemini não configurada no Worker (defina o secret GEMINI_API_KEY)." }, 500));
  }
  let body;
  try { body = await request.json(); } catch (e) { return comCors(json({ erro: "JSON inválido." }, 400)); }

  const mensagens = Array.isArray(body.messages) ? body.messages : [];
  if (!mensagens.length) return comCors(json({ erro: "Envie 'messages'." }, 400));

  const payload = {
    contents: mensagens.slice(-MAX_MENSAGENS).map(m => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: String(m.text || "") }],
    })),
    systemInstruction: { parts: [{ text: montarSystem() }] },
    generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
  };

  try {
    let model = await definirModelo(env, false);
    let res = await chamarGemini(env, model, payload);

    // Se o modelo padrão não existir/estiver indisponível, redescobre e tenta de novo.
    const erroModelo = !res.ok && /not found|no longer available|not supported|unavailable|is not found/i
      .test((res.data && res.data.error && res.data.error.message) || "");
    if (erroModelo) {
      _modeloCache = null;
      model = await definirModelo(env, true);
      res = await chamarGemini(env, model, payload);
    }

    if (!res.ok) {
      const err = (res.data && res.data.error) || {};
      const msg = err.message || ("HTTP " + res.status);
      // 429 = cota do minuto. Devolve mensagem amigável e o tempo sugerido de espera.
      if (res.status === 429) {
        return comCors(json({
          erro: "Sobrecarga temporária (cota do minuto). Aguarde alguns segundos e tente de novo.",
          codigo: 429,
          espera_segundos: 30,
        }, 429));
      }
      return comCors(json({ erro: "Gemini: " + msg, codigo: res.status }, res.status));
    }

    const texto = (((res.data.candidates || [])[0] || {}).content || {}).parts?.map(p => p.text).join("") || "";
    return comCors(json({ text: texto || "(sem resposta)", modelo: model }));
  } catch (e) {
    return comCors(json({ erro: "Falha ao chamar o Gemini: " + String(e) }, 502));
  }
}

/* ----------------------------- Utilidades -------------------------------- */

function comCors(resp) {
  resp.headers.set("Access-Control-Allow-Origin", "*");
  resp.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  resp.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return resp;
}
function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
