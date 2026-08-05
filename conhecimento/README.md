# Base de conhecimento da Capitão Tati

Esta pasta é o "cérebro" da TATI. Tudo que estiver aqui, ela pode consultar.
O worker lê estes arquivos direto do GitHub, então **atualizar a TATI é só commitar aqui** — sem rebuild, sem redeploy.

## Como adicionar uma norma nova

1. Crie um arquivo `.md` (ou `.txt`) nesta pasta com o texto da norma.
   - Sugestão de nome: curto, sem acento e sem espaço. Ex.: `8-nova-portaria-2026.md`.
   - Comece com um título na 1ª linha: `# Nova Portaria nº X, de 2026`.
2. Abra o `manifest.json` e acrescente uma linha no fim da lista `documentos`:

   ```json
   { "arquivo": "8-nova-portaria-2026.md", "titulo": "Nova Portaria nº X, de 2026" }
   ```

   (não esqueça a vírgula na linha anterior)
3. Commit. Pronto — em até 10 minutos a TATI já usa a norma nova.
   Para valer na hora, abra uma vez: `https://SEU-WORKER.workers.dev/gemini/reload`.

## Como atualizar ou remover uma norma

- **Atualizar:** edite o `.md` correspondente e commit.
- **Remover:** apague a linha dela no `manifest.json` (pode apagar o `.md` também).

## Dicas para a TATI responder bem

- Quanto mais limpo o texto (sem cabeçalho/rodapé repetido de PDF), melhor a busca.
- Pode dividir uma norma grande em vários arquivos por tema — a busca funciona por trecho.
- Use termos que os alunos realmente digitam (ex.: "prazo de entrega da dissertação").

## Como conferir o que a TATI "enxerga"

- `https://SEU-WORKER.workers.dev/gemini/kb` → mostra quantos documentos e trechos foram carregados.
- `https://SEU-WORKER.workers.dev/gemini/kb?q=prazo da dissertação` → mostra quais trechos ela selecionaria para essa pergunta.
