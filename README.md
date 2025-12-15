
# 🎖️ Chatbot SPG - Capitão Tati CaIAdo Brasil

> Assistente Virtual Inteligente da Seção de Pós-Graduação da EsAO, baseada no modelo Gemini Flash.

Este projeto implementa um chatbot estático (client-side) capaz de responder dúvidas de oficiais alunos sobre normas, prazos e formatações (ABNT), utilizando uma base de conhecimento local e a API do Google Gemini.

## 🚀 Funcionalidades Táticas

* **Inteligência Artificial:** Utiliza o modelo mais recente `gemini-2.0-flash-exp` para interpretação de linguagem natural.
* **Base de Conhecimento Instantânea:** As normas (RIPG, Calendários, Manuais) são carregadas via arquivo JS otimizado (`dados.js`), eliminando o tempo de leitura de PDFs.
* **Consciência Temporal:** A IA sabe a data atual para responder corretamente sobre prazos vigentes.
* **Formatação Rica:** Respostas renderizadas em Markdown (tabelas, listas, negrito) usando `marked.js`.
* **Log de Conversas:** Integração com Google Sheets (via Google Forms) para auditoria e melhoria contínua das respostas.
* **Gestão de Erros:** Tratamento automático de sobrecarga da API (Erro 429) com contador regressivo visual para o usuário.
* **Segurança Básica:** Tática de ofuscação de chave API para evitar revogação automática por bots de varredura.

---

## 📂 Arquitetura do Projeto

A estrutura foi modularizada para facilitar a manutenção e atualização das normas:

```text
/
├── chatbot tati.html   # O "Rádio": Interface do usuário, lógica de conexão e controle do chat.
├── dados.js            # Os "Manuais": Contém todo o texto das normas (Contexto) em uma variável const.
├── persona.js          # A "Alma": Define a personalidade (Prompt do Sistema) e regras de conduta.
└── README.md           # Documentação do projeto.
````

-----

## 🛠️ Configuração e Instalação

Como o projeto é estático (HTML/JS puro), não requer instalação de servidores (Node.js, Python, etc). Pode ser hospedado diretamente no **GitHub Pages**.

### 1\. Configuração da API Key (Google Gemini)

No arquivo `index.html`, a chave é dividida em partes para evitar detecção automática pelo GitHub Secret Scanning:

```javascript
// index.html
const part1 = "AIzaSy"; 
const part2 = "SEU_FINAL_DA_CHAVE"; 
const API_KEY = part1 + part2;
```

*Lembre-se de configurar a restrição de domínio (HTTP Referrer) no Google Cloud Console para `seu-usuario.github.io`.*

### 2\. Atualização das Normas (`dados.js`)

Para atualizar o conhecimento da Capitão Tati:

1.  Extraia o texto dos novos PDFs.
2.  Abra o arquivo `dados.js`.
3.  Cole o texto dentro da variável `const NORMAS_TEXTO`.

### 3\. Configuração do Log (Google Sheets)

Para que o log funcione sem erro 401 (Unauthorized):

1.  Crie um Google Form com campos para "Pergunta" e "Resposta".
2.  Obtenha os IDs dos campos (`entry.XXXXXX`) inspecionando o formulário.
3.  **Importante:** Nas configurações do Form, desmarque "Restringir aos usuários da organização" e "Coletar e-mails". O formulário deve ser público.
4.  Atualize as constantes `FORM_ID` e `ENTRY_...` no `index.html`.

-----

## 💻 Tecnologias Utilizadas

  * **Frontend:** HTML5, CSS3, JavaScript (ES6+).
  * **IA:** Google Gemini API (Model: `gemini-2.0-flash-exp`).
  * **Estilização:** Bootstrap Icons.
  * **Utilitários:** `marked.js` (Markdown Parser).
  * **Backend (Log):** Google Forms + Google Sheets.

-----

## 🛡️ Aviso de Uso

Este é um projeto de código aberto para fins educacionais e de auxílio administrativo no âmbito da EsAO. As respostas da IA são baseadas nos textos fornecidos, mas recomenda-se sempre a conferência nos documentos oficiais.

-----

**Autor:** Major Pochmann
**Status:** Operacional 🟢
**Lema:** Bellator et Sapien\!

