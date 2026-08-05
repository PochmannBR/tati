# Livro Abordagens Metodológicas em Ciências Militares (2026) — Cap. 6: Design Science for Artificial Intelligence (DS-AI)

DESIGN SCIENCE FOR ARTIFICIAL
                 INTELLIGENCE (DS-AI)
                                               Daisy Cristine Albuquerque da Silva
                                                             Eduardo Borba Neves

INTRODUÇÃO
        A proposta deste capítulo é detalhar uma abordagem específica do método
Design Science Research (DSR) aplicável a desenvolvimento de modelos de
Inteligência Artificial (IA). O framework Design Science for Artificial Intelligence
(DS-AI) é uma abordagem estruturada para a condução de pesquisas científicas
ou desenvolvimento de modelos que envolvem ferramentas de Machine Learning
(ML) ou Large Language Model (LLM). Para compreender melhor este framework
vamos revisar alguns conceitos que fazem parte da sua base: a Design Science
Research (DSR).

DESIGN SCIENCE RESEARCH (DSR) E DESIGN SCIENCE
FOR ARTIFICIAL INTELLIGENCE (DS-AI)
        Diferente das ciências tradicionais, que buscam observar e explicar o
mundo como ele é (Ciência Natural), a Design Science Research foca em como o
mundo poderia ser. Ela é a ciência do artificial. Seu objetivo central é a criação de
artefatos, que podem ser algoritmos, modelos de machine learning, softwares ou
metodologias, para resolver problemas práticos e complexos.
        Na área de IA, a DSR é a metodologia ideal porque ela não se contenta
apenas em treinar um modelo; ela exige que esse modelo seja útil, inovador e
rigorosamente validado dentro de um contexto real. Para que a criação de um
artefato de IA não seja baseada em tentativa e erro, utilizamos o modelo de Peffers
et al. (2007), conforme ilustrado na Figura 1.

Figura 1. O roteiro de Peffers com 6 etapas para desenvolvimento de pesquisas
                            com Inteligência Artificial.

       Conforme ilustrado na Figura 1, o roteiro proposto por Peffers et al. (2007),
Ele fornece um passo a passo lógico, dividido em seis etapas:

       1 - Identificação do Problema: É a definição clara do gargalo (ex: a
       dificuldade em analisar grandes volumes de dados logísticos).
       2 - Objetivos da Solução: O que esperamos da IA? (ex: reduzir o erro
       humano em X%).
       3 - Design e Desenvolvimento: É a fase de mão na massa, onde
       selecionamos arquiteturas (Transformers, ML) e treinamos o modelo.

 122                                                            SILVA, D. C. A. da; NEVES, E. B.
                                              DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

               4 - Demonstração: Uma prova de conceito que mostra o modelo
               funcionando em um cenário específico.
               5 - Avaliação: A fase crítica onde medimos a performance e a utilidade
               do modelo.
               6 - Comunicação: A entrega do conhecimento para a academia e para
               a instituição.

           Enquanto Peffers nos dá o mapa, Alan Hevner (2004) nos dá o equilíbrio. Ele
     propõe que uma pesquisa de qualidade deve orbitar entre três ciclos simultâneos:

               1 - Ciclo de Relevância (Relevance Cycle)

           Este ciclo conecta a pesquisa ao mundo real. Ele garante que a pesquisa
     em IA desenvolvida realmente resolva um problema de pessoas ou de instituições.
     Se a pesquisa não nasce de uma necessidade real, ela perde sua relevância social.

               2 - Ciclo de Rigor (Rigor Cycle)

            Este ciclo conecta a pesquisa ao conhecimento científico. Ele garante que
     você está usando as melhores técnicas de machine learning, as leis vigentes (como
     a Lei Geral de Proteção de Dados Pessoais (LGPD)) e as teorias mais modernas.
     É o que separa uma ferramenta comum de uma pesquisa de mestrado/doutorado.

               3-     Ciclo de Design (Design Cycle)

            É o ciclo interno, o coração da pesquisa. É aqui que o pesquisador alterna
     entre construir o modelo e testá-lo imediatamente, em um processo iterativo de
     melhoria contínua até chegar ao artefato ideal.
            Assim, o framework DS-AI une essas duas visões tradicionais e adiciona
     mais uma camada para a tecnologia atual: o Gerenciamento de Riscos e
     Governança. Ao aplicar a DS-AI, o pesquisador não apenas desenvolve/manipula
     uma tecnologia de ponta, mas assegura que ela seja ética, segura contra ataques
     cibernéticos, explicável e em conformidade com a legislação brasileira. É,
     portanto, uma metodologia completa para transformar a Inteligência Artificial em
     uma ferramenta de Estado, segura e eficiente.

SILVA, D. C. A. da; NEVES, E. B.                                                            123

ESTRUTURA METODOLÓGICA PARA PESQUISAS EM
INTELIGÊNCIA ARTIFICIAL (IA)
       A crescente presença da Inteligência Artificial nos diversos setores da
sociedade gerou uma demanda, sem precedentes, por pesquisas científicas que
explorem suas capacidades. No entanto, a complexidade técnica de modelos
como machine learning, deep learning e transformers, aliada aos desafios éticos e
legais, cria uma lacuna para o pesquisador: a ausência de um roteiro que equilibre
o rigor acadêmico com a eficácia técnica.
       O Framework DS-AI (Design Science for Artificial Intelligence) surge como
resposta a essa necessidade, oferecendo uma estrutura metodológica que guia o
passo a passo da construção de artefatos de IA, garantindo que o desenvolvimento
tecnológico não ocorra de forma isolada, mas integrado a um contexto de utilidade
e segurança.

AS FASES DO FRAMEWORK DS-AI
       O framework organiza-se de forma cíclica e iterativa, garantindo que cada
fase retroalimente a anterior. A Figura 2 ilustra o Framework DS-AI.

   Figura 2. Framework de Design Science for Artificial Intelligence (DS-AI).

 124                                                           SILVA, D. C. A. da; NEVES, E. B.
                                         DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

     Fase de Relevância (Contextualização)
           Inspirada no Ciclo de Relevância de Hevner, esta fase identifica o problema
     no mundo real. O pesquisador deve delimitar claramente a lacuna operacional
     ou administrativa. É o momento de responder: ‘Qual problema de negócio ou de
     Estado a IA resolverá?’ Esta fase define os requisitos que o artefato deve atender
     para ser considerado útil.

     Fase de Rigor (Base Científica e Legal)
            Esta fase estabelece as fundações teóricas e normativas. No campo da
     IA, o rigor envolve: estado da arte, mapeamento de arquiteturas e algoritmos
     existentes; e base legal, análise de conformidade prévia, especialmente no que
     tange à LGPD, garantindo que a coleta de dados seja legítima desde o início.

     Fase de Design (Desenvolvimento Técnico)
            Aqui ocorre a construção do artefato (modelo de IA). Esta fase engloba o
     ciclo de vida do dado: pré-processamento, limpeza, normalização e anonimização;
     e treinamento, seleção de modelos (ex: fine-tuning de transformers) e
     experimentação controlada.

     Fase de Análise e Gerenciamento de Riscos
           Diferencial central deste framework, esta fase avalia as vulnerabilidades da
     IA em quatro eixos: dados e privacidade, riscos de vazamento ou reidentificação;
     performance e confiabilidade, monitoramento de alucinações e erros de predição;
     segurança cibernética, proteção contra manipulações adversárias; ética e
     governança, garantia de que o modelo seja explicável e não discriminatório.

     Fase de Avaliação (Rigor de Resultados)
            Fase dedicada à aferição científica do artefato. Não se limita a métricas
     técnicas como Acurácia ou F1-Score; inclui a avaliação de utilidade (o modelo
     realmente resolve o problema da fase I?) e a explicabilidade (conseguimos
     entender a lógica da decisão?).

SILVA, D. C. A. da; NEVES, E. B.                                                       125

Fase de Comunicação
        O encerramento do ciclo foca na transparência. O pesquisador deve
comunicar os resultados através de publicações acadêmicas e documentação
técnica, como model cards (que descrevem as limitações da IA) e relatórios de
impacto algorítmico, facilitando a adoção institucional da solução desenvolvida.
        O objetivo primordial do DS-AI é fornecer um guia prático e normativo para
pesquisadores que buscam desenvolver soluções baseadas em IA, com validade
científica. A adoção do guia DS-AI em programas de pesquisa científica justifica-se
pela necessidade de alinhar a produção acadêmica às exigências de transparência
e prestação de contas (accountability) da tecnologia moderna. Ao utilizar uma base
fundamentada na Design Science Research (DSR), o pesquisador demonstra que
sua inovação possui um propósito social claro (relevância) e está ancorada nas
melhores práticas globais (rigor), o que é fundamental para a aceitação de teses e
dissertações em conselhos de ética e bancas examinadoras de alto nível.

FASE I – RELEVÂNCIA (CONTEXTUALIZAÇÃO)
       A primeira etapa do framework DS-AI é a Fase da Relevância. Como o
próprio nome sugere, seu propósito é garantir que a pesquisa não seja um exercício
puramente teórico ou técnico, mas que esteja ancorada em uma necessidade
concreta do mundo real. Na Design Science Research (DSR), a relevância é o que
diferencia uma inovação útil de uma curiosidade acadêmica.
       O objetivo central desta fase é realizar o enquadramento do problema. Antes
de se discutir qual algoritmo utilizar ou como treinar o modelo, o pesquisador deve
mergulhar no ambiente onde a solução será aplicada.
       Os objetivos específicos incluem:

       • Identificar a Lacuna (Gap): Detectar uma ineficiência, um custo elevado,
       um erro recorrente ou um processo que não pode mais ser realizado por
       humanos devido ao volume de dados.
       • Definir os Requisitos do Usuário: Compreender o que os stakeholders
       (gestores, oficiais, cidadãos) esperam da solução.
       • Estabelecer Critérios de Sucesso: Definir, antes do desenvolvimento,
       o que será considerado um modelo bem-sucedido (ex: reduzir o tempo de
       triagem em 50%).

 126                                                            SILVA, D. C. A. da; NEVES, E. B.
                                            DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

           Para ilustrar como a Fase de Relevância orienta a pesquisa, vejamos dois
     cenários distintos:

     Exemplo A: Logística Militar

               • Contexto: Um determinado Exército gerencia milhares de ativos (viaturas,
               armamentos, fardamento). Atualmente, a previsão de manutenção é feita
               por planilhas manuais baseadas em tempo de uso, gerando desperdício de
               peças ou quebras imprevistas.
               • Problema Relevante: Ineficiência na manutenção preditiva de
               ativos críticos.
               • Necessidade de IA: Um modelo de Machine Learning que analise o
               histórico de falhas e sensores para prever quebras antes que ocorram.
               • Valor Gerado: Economia de recursos públicos e aumento da
               prontidão operacional.

     Exemplo B: Políticas Públicas

               •  Contexto: Um determinado Tribunal recebe milhares de petições
               diariamente sobre um mesmo tema (ex: pedidos de medicamentos). Juízes
               levam semanas para agrupar casos similares.
               • Problema      Relevante:   Morosidade      na   classificação    de
               demandas repetitivas.
               • Necessidade de IA: Uso de processamento de linguagem natural (NLP)
               com Transformers para agrupar processos idênticos automaticamente.
               • Valor Gerado: Aceleração da prestação jurisdicional e equidade
               nas decisões.

     Recursos metodológicos utilizados nesta fase
           Para documentar esta fase em sua pesquisa, o pesquisador deve realizar
     as seguintes ações:

               1 - Entrevistas ou Observação: Conversar com os operadores do
               processo atual.
               2 - Análise Documental: Ler manuais, portarias ou regulamentos que
               regem a atividade.

SILVA, D. C. A. da; NEVES, E. B.                                                          127

       3 - Mapeamento do Processo Atual: Desenhar como o problema é
       resolvido hoje (o As-Is) para identificar onde a IA entrará como diferencial
       (o To-Be).

      Em resumo, esta fase fornece ao pesquisador a missão da sua pesquisa.
Sem uma Fase de Relevância bem executada, corre-se o risco de construir uma
ferramenta tecnicamente perfeita, mas que ninguém usará por não resolver o
problema certo.

FASE II – RIGOR (BASE CIENTÍFICA E LEGAL)
        Se a Fase de Relevância nos diz o que resolver, a Fase do Rigor define sob
quais fundamentos iremos construir a solução. No framework DS-AI, o rigor não se
limita à revisão bibliográfica tradicional; ele é expandido para incluir a segurança
jurídica, essencial em pesquisas que utilizam dados e algoritmos de decisão.
        O objetivo desta fase é ancorar a pesquisa na base de conhecimento
existente, garantindo que o artefato de IA seja desenvolvido com excelência
técnica e conformidade normativa. Os pilares desta fase são:

       • Fundamentação Teórica: Identificar as teorias e modelos que explicam
       o problema.
       • Estado da Arte: Mapear as tecnologias de IA mais avançadas e eficazes
       para o problema em questão.
       • Conformidade Normativa: Estabelecer as balizas legais que limitam e
       orientam o desenvolvimento (Ex: LGPD, Marco Legal da IA).

Rigor Técnico
       Em machine learning, o rigor técnico exige que o pesquisador não apenas
use um modelo, mas compreenda sua mecânica. Isso envolve a seleção de
baselines, identificar métodos simples (como uma regressão logística) para
comparar com a IA complexa. se o modelo simples resolver, o rigor científico
exige honestidade intelectual sobre a necessidade da IA; e métricas de referência:
pesquisar na literatura quais métricas (F1-score, área sob a curva característica de
operação do receptor (AUC-ROC), ou o erro quadrático médio (MSE)) são padrão
para o tipo de problema escolhido.

 128                                                            SILVA, D. C. A. da; NEVES, E. B.
                                           DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

     Rigor Legal: IA em Conformidade (Compliance)
             Um diferencial do framework DS-AI é tratar a legislação não como um
      obstáculo, mas como parte do rigor científico. Para uma pesquisa científica
      aplicada, a base legal é o que garante que o artefato poderá ser implementado.
             O pesquisador deve fundamentar o tratamento de dados no Art. 7º, inciso
      IV da Lei Geral de Proteção de Dados (LGPD), que permite o tratamento para
      fins de pesquisa por órgãos de pesquisa, garantindo, sempre que possível,
      a anonimização.
             O Projeto de Lei 2338/2023 (Marco Legal da IA), mesmo sendo uma
      legislação em consolidação, recomenda que o pesquisador deve utilizar seus
      princípios (transparência, não discriminação e supervisão humana) como base de
      rigor para o design do modelo .

      Exemplo A: IA para Análise de Contratos

               • Rigor Técnico: O pesquisador estuda a arquitetura Transformer (ex:
               BERT-PT) por ser o estado da arte para processamento de linguagem
               natural em português.
               • Rigor Legal: Baseia-se nas normas de licitações e contratos e nas
               diretrizes de sigilo de informações, definindo o que pode ou não ser
               processado pela IA.

      Exemplo B: Modelo Preditivo de Saúde

               • Rigor Técnico: uso de redes neurais recorrentes (RNN) para análise de
               séries temporais de dados de saúde.
               • Rigor Legal: Aplicação rigorosa da LGPD sobre dados sensíveis (saúde),
               prevendo técnicas de criptografia e acesso restrito.

              O Framework DS-AI sustenta que uma IA rigorosa é aquela que funciona
      de acordo com os melhores padrões da computação, respeita o ordenamento
      jurídico vigente, e protege o indivíduo e a instituição contra decisões arbitrárias.
      Sem a observância do Ciclo de Rigor, a pesquisa corre o risco de ser tecnicamente
      obsoleta ou juridicamente nula.

SILVA, D. C. A. da; NEVES, E. B.                                                         129

FASE III – DESIGN (DESENVOLVIMENTO DO ARTEFATO)
       A Fase de Design é o coração técnico do framework DS-AI. É o momento em
que as necessidades identificadas na relevância e os fundamentos estabelecidos
no rigor convergem para a criação do artefato: o modelo de Inteligência Artificial.
Nesta fase, adotamos uma abordagem baseada no ciclo de vida do machine
learning, garantindo que o desenvolvimento seja rastreável e científico.
       O objetivo principal desta fase é transformar dados brutos e teorias em um
modelo funcional. Não se trata apenas de treinar um algoritmo, mas de desenhar
um sistema que seja robusto, eficiente e adequado ao hardware e ao contexto
operacional disponível (especialmente importante em ambientes militares ou
governamentais).
       Para garantir o rigor da Design Science, o desenvolvimento técnico é
dividido em quatro etapas fundamentais, que devem ser descritas detalhadamente
no capítulo de métodos da pesquisa:

Preparação e Governança de Dados (Data Engineering)
       O modelo é tão bom quanto os dados que o alimentam. Para tanto, realizamos
as seguintes ações: coleta de dados, Identificação das fontes de dados (bases de
dados, diários oficiais, etc.); limpeza e tratamento dos dados, remoção de ruídos,
tratamento de valores ausentes e normalização; e anonimização dos registros,
aplicação prática dos requisitos legais da Fase II, removendo identificadores
pessoais para garantir a privacidade.

Escolha da Arquitetura (Model Selection)
       Aqui, o pesquisador decide qual ferramenta é mais adequada baseando-
se na complexidade vs. Necessidade, isto é, se o problema é simples, usa-se
machine learning clássico (Random Forest, Support Vector Machine (SVM)). Se
envolve linguagem complexa, opta-se por Transformers (Bidirectional Encoder
Representations from Transformers (BERT), Generative Pre-trained Transformer
(GPT), Large Language Model Meta AI (Llama)).
       Dado a grande variedade e disponibilidades de modelos já desenvolvidos,
é comum utilizar modelos pré-treinados de machine learning ou LLM e realizar o
fine-tuning (ajuste fino) para o domínio específico (ex: linguagem militar brasileira).

  130                                                              SILVA, D. C. A. da; NEVES, E. B.
                                         DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

     Treinamento e Experimentação
             Esta é a fase experimental propriamente dita. Neste tópico devem
     ser detalhados a estrutura de hardware, software utilizados no treinamento /
     desenvolvimento do modelo. Além disso, deve-se detalhar as escolhas dos
     hiperparâmetros de treinamento (taxa de aprendizado, número de épocas, tamanho
     do lote, etc…). O pesquisador registra esses dados para cada versão do modelo. É
     essencial anotar o que funcionou e o que falhou para garantir a reprodutibilidade
     científica. Nesta etapa também é importante o registro das métricas alcançadas no
     treinamento do modelo (F1-score, AUC-ROC, MSE), de acordo com as melhores
     práticas observadas na literatura para o tipo de problema estudado.

     Prova de Conceito (PoC) e Demonstração
            O modelo treinado é colocado à prova em um cenário controlado que simula
     a realidade. Conforme Peffers et al. (2007), esta etapa mostra que o artefato é
     capaz de resolver instâncias do problema real identificado no início da pesquisa.
            Diferente de um processo linear, o Design na DS-AI é cíclico. Ao avaliar os
     resultados preliminares, o pesquisador frequentemente precisa retornar à etapa
     de preparação de dados para corrigir vieses ou ajustar a arquitetura do modelo.

     Exemplo simplificado de design para um modelo classificador
     de documentos.

     1-     Preparação e Governança de Dados (Data Engineering)

             Coleta e Limpeza: Extração de 10.000 documentos administrativos (PDF/
     DOCX) de repositórios oficiais. Realizada a remoção de ruídos (stop-words,
     caracteres especiais) e normalização de texto para minúsculas. Anonimização:
     Implementação de uma camada de NER (Named Entity Recognition) para identificar
     e mascarar automaticamente nomes próprios e CPFs, garantindo conformidade
     com a LGPD e os requisitos de privacidade da Fase II. Divisão do Dataset: Os
     dados foram segmentados em 80% para treino, 10% para validação e 10% para
     teste final, garantindo a lisura do processo experimental.

     2 - Escolha da Arquitetura (Model Selection)

            Modelo Base: Utilização do BERTimbau (Base), um modelo Transformer
     pré-treinado em português, devido à sua superioridade no processamento

SILVA, D. C. A. da; NEVES, E. B.                                                       131

de linguagem natural e compreensão de contexto semântico em documentos
técnicos. Ajuste Fino (Fine-tuning): Adição de uma camada densa de classificação
(Softmax) no topo da arquitetura original para mapear os embeddings para as
categorias específicas do domínio militar brasileiro.

3-   Treinamento e Experimentação

        Infraestrutura: O treinamento foi realizado em um servidor com GPU
NVIDIA A100 (40GB), utilizando o framework PyTorch e a biblioteca Hugging
Face. Hiperparâmetros Registrados: Taxa de Aprendizado (Learning Rate): 2 x
10 -5, Tamanho do Lote (Batch Size): 32, Épocas: 4 (com técnica de Early Stopping
para evitar overfitting). Métricas de Desempenho: O modelo será avaliado pelo
F1-Score e pela AUC-ROC.

4-   Prova de Conceito (PoC) e Demonstração

        Cenário de Teste: Simulação em ambiente de intranet controlado. O modelo
processou um lote de 500 novos documentos inéditos. Resultado: Organização
automática em pastas virtuais com 95% de precisão. O tempo de resposta foi
inferior a 200ms por documento, validando a eficiência técnica necessária para o
contexto operacional militar identificado na fase de Relevância.

FASE IV – ANÁLISE E GERENCIAMENTO DE RISCOS
        No framework DS-AI, a análise de risco deixa de ser um tópico periférico para
se tornar o pilar de sustentação da segurança jurídica e operacional do artefato.
Em ambientes complexos, onde a precisão e a responsabilidade são mandatórias,
desenvolver uma pesquisa na área de IA sem um mapeamento rigoroso de suas
vulnerabilidades é um risco estratégico.
        O objetivo desta fase é antecipar cenários de falha, danos ou violações
de direitos antes da implementação, onde o modelo de machine learning pode
falhar, causar danos ou violar direitos. Ao contrário da engenharia de software
tradicional, o comportamento da IA é probabilístico, o que exige uma abordagem
proativa para garantir que o modelo seja não apenas eficiente, mas seguro e ético.
Em vez de focar apenas no que o modelo acerta, focamos no que ele pode errar
e como mitigar essas falhas antes da implementação.

 132                                                             SILVA, D. C. A. da; NEVES, E. B.
                                           DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

     PRINCIPAIS RISCOS A SEREM GERENCIADOS
              Privacidade (Conformidade com a LGPD): A base de toda IA são os dados.
      Contudo, o uso de informações institucionais exige rigorosa conformidade com a
      Lei Geral de Proteção de Dados.
              Vazamento de Informação: Existe o risco de modelos de linguagem
      (Transformers) decorarem sequências de dados sensíveis ou classificados durante
      o treinamento e acabarem expondo-os em suas respostas (data leakage).
              Qualidade e Viés: Se os dados históricos contiverem preconceitos ou
      desequilíbrios, a IA irá automatizar e perpetuar esses erros, tratando o viés como
      uma regra estatística válida.
              Alucinação Algorítmica: Em sistemas baseados em Transformers, o modelo
      pode gerar informações factualmente falsas com uma aparência de verdade
      absoluta. Isso é especialmente crítico em contextos onde a desinformação pode
      levar a decisões operacionais equivocadas.
              Degradação do Modelo: Conhecido como Model Drift, é o risco de a IA
      perder precisão ao longo do tempo conforme o contexto operacional muda (ex:
      novas normas ou mudanças na doutrina), tornando o modelo obsoleto.
              Ataques Adversários: Refere-se ao risco de manipulação maliciosa da
      entrada de dados para enganar a IA. Um atacante pode alterar sutilmente uma
      única palavra em um documento ou um pixel em uma imagem para forçar uma
      classificação errada pelo modelo, sem que um humano perceba a alteração.
              Opacidade (Caixa-Preta): O risco de não conseguirmos explicar tecnicamente
      o porquê de uma decisão tomada pela IA. Essa falta de rastreabilidade fere o
      princípio da transparência administrativa, fundamental para a prestação de contas
      no serviço público.

     The National Institute of Standards and Technology (NIST)
     - AI Risk Management Framework (AI RMF 1.0)
             O NIST AI Risk Management Framework (AI RMF 1.0), publicado pelo
      National Institute of Standards and Technology dos EUA é, em 2026, o padrão
      ouro global para a governança de Inteligência Artificial. Ele foi desenhado para ser
      adaptável, o que o torna alinhado ao framework DS-AI.
             Para a Matriz de Risco DS-AI, fundamentamos nossa análise nos quatro
      pilares (funções) do NIST: Governar, Mapear, Medir e Gerenciar. Para o pesquisador
      que utiliza este guia, a aplicação segue as funções do NIST de forma cíclica. O
      NIST propõe que a gestão de riscos em IA não é apenas evitar erros, mas garantir

SILVA, D. C. A. da; NEVES, E. B.                                                         133

que o sistema seja confiável. Um sistema confiável, segundo o NIST e adotado
pela DS-AI, deve ser:

       1-     Válido e Confiável: Faz o que se propõe a fazer consistentemente.
       2-     Seguro: Protegido contra ataques e danos.
       3-     Resiliente: Capaz de suportar mudanças no ambiente.
       4-     Transparente e Explicável: Permite entender sua lógica.
       5-     Privado: Respeita as leis de proteção de dados (LGPD).
       6-     Justo: Gerencia ativamente o viés nocivo.

        A Tabela 1 apresenta a Matriz de Risco do framework DS-AI. Esta matriz
utiliza a função Mapear do NIST para identificar os riscos e a função Gerenciar
para definir as respostas.

Tabela 1. Matriz de Gestão de Riscos Operacionais e Éticos baseada no National
  Institute of Standards and Technology - AI Risk Management Framework 1.0

                                                                                   Medida de
                                                                 Criticidade
 Atributo NIST     Evento de Risco       Impacto Probabilidade                 Mitigação (Função
                                                                    (PxI)
                                                                                   Gerenciar)

                     Vazamento de                                                 Implementação
                   Informação: Risco                                               de técnicas de
                    de o modelo expor                                              anonimização
  Privacidade                            Crítico     Baixa         Média
                     dados sensíveis                                           (Masking) e filtros de
                     ou classificados                                           saída para bloquear
                  decorados no treino.                                           dados sensíveis.

                                                                               Auditoria estatística
                      Qualidade e
                                                                                  do dataset e
                   Viés: Perpetuação
                                                                                 balanceamento
                    de preconceitos
    Justiça                               Alto       Média          Alta       manual de classes
                   históricos contidos
                                                                                  para garantir
                      nos dados de
                                                                                  equidade nas
                      treinamento.
                                                                                    decisões.

                       Alucinação
                                                                                Uso de arquitetura
                      Algorítmica:
                                                                                 RAG (âncora em
                    Geração de fatos
                                                                                manuais oficiais) e
 Confiabilidade   falsos com aparência   Crítico      Alta          Alta
                                                                                validação humana
                     de verdade (ex:
                                                                               obrigatória (Human-
                      citar portarias
                                                                                   in-the-loop).
                      inexistentes).

                                                                                          (continua)

 134                                                                       SILVA, D. C. A. da; NEVES, E. B.
                                                       DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

                                                                                                   (conclusão)

     Tabela 1. Matriz de Gestão de Riscos Operacionais e Éticos baseada no National
       Institute of Standards and Technology - AI Risk Management Framework 1.0

                                                                                              Medida de
                                                                            Criticidade
        Atributo NIST        Evento de Risco        Impacto Probabilidade                 Mitigação (Função
                                                                               (PxI)
                                                                                              Gerenciar)

                             Degradação do
                                                                                          Estabelecimento de
                            Modelo: Perda de
                                                                                           monitoramento de
                           precisão conforme o
         Resiliência                                 Médio      Média         Média       performance e plano
                           contexto operacional
                                                                                            de retreinamento
                           ou doutrinário muda
                                                                                          periódico do modelo.
                               (Data Drift).

                                 Ataques
                                                                                              Realização de
                              Adversários:
                                                                                           testes de estresse
                              Manipulação
                                                                                            (Red Teaming) e
         Segurança        maliciosa de entradas      Alto       Baixa         Média
                                                                                          sanitização rigorosa
                            para forçar erros
                                                                                          de todos os inputs do
                            de classificação
                                                                                                 sistema.
                           propositais na IA.

                                Opacidade                                                       Utilização
                              (Caixa-Preta):                                                   de modelos
                            Impossibilidade de                                              interpretáveis ou
       Transparência       explicar juridicamente    Alto        Alta          Alta          ferramentas de
                             o porquê de uma                                                 explicabilidade
                           decisão tomada pela                                             (SHAP/LIME) para
                                     IA.                                                    auditar decisões.

             Exemplo
             Para que você possa visualizar a aplicação prática do framework DS-AI
     fundamentado no NIST AI RMF, a Tabela 2 apresenta um exemplo de Matriz de
     Risco estruturada para um cenário de pesquisa em ambiente complexo. Esta
     matriz quantifica a probabilidade e o impacto por meio de uma escala tipo Likert e
     utiliza a lógica de impacto x probabilidade para definir a prioridade de ação.

SILVA, D. C. A. da; NEVES, E. B.                                                                         135

Tabela 2. Exemplo de matriz de Gestão de Riscos Operacionais e Éticos
baseada no Baseada no National Institute of Standards and Technology - AI Risk
                       Management Framework 1.0

        Categoria                         Probabilidade Impacto Criticidade Ação de Mitigação
ID                    Evento de Risco
          NIST                                (1-5)       (1-5)    (PxI)    (Função Gerenciar)
                       Reidentificação
                                                                                   Aplicação de
                           de dados
                                                                                 anonimização por
                        sensíveis de
R1      Privacidade                            2           5     10 (Média)     NER (Named Entity
                        militares em
                                                                                  Recognition) e
                        modelos de
                                                                                máscaras de dados.
                         linguagem.

                       Alucinação do                                             Uso de arquitetura
                       modelo ao citar                                           RAG (âncora em
R2 Confiabilidade      regulamentos            4           4      16 (Alta)      manuais oficiais) e
                        ou portarias                                            conferência humana
                        inexistentes.                                               obrigatória.

                      Viés algorítmico
                                                                                Auditoria estatística
                       que prejudica
                                                                                    do dataset e
R3        Justiça      promoções de            3           5      15 (Alta)
                                                                                   balanceamento
                       determinadas
                                                                                sintético de classes.
                      Armas/Quadros.

                      Ataque de Injeção                                           Filtros de entrada
                       de Prompt para                                            (Input Sanitization)
R4      Segurança        forçar a IA a         2           4     8 (Média)        e monitoramento
                        revelar dados                                             de anomalias em
                           sigilosos.                                                 tempo real.

                                                                                     Utilização de
                         Opacidade
                                                                                   ferramentas de
                        (Caixa-Preta)
                                                                                   explicabilidade
R5 Transparência        em decisões            4           4      16 (Alta)
                                                                                 (SHAP/LIME) para
                       administrativas
                                                                                    justificar cada
                         complexas.
                                                                                      predição.

                          Perda de
                                                                                  Estabelecimento
                       precisão (Data
                                                                                  de protocolo de
                       Drift) devido a
R6      Resiliência                            3           3     9 (Média)         retreinamento
                        mudanças na
                                                                                    semestral do
                       doutrina militar
                                                                                      modelo.
                            anual.

       A utilização das funções Mapear e Gerenciar do NIST AI RMF na estruturação
da Matriz de Risco DS-AI garante que o artefato desenvolvido não seja apenas
tecnicamente funcional, mas institucionalmente seguro.
       A função Mapear é o alicerce. Ela serve para entender as interdependências
entre o sistema de IA, seus usuários e as leis. Na tabela, foi utilizado o Mapear para:

  136                                                                         SILVA, D. C. A. da; NEVES, E. B.
                                             DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

               • Identificar Riscos (R1 a R6): olhando para o modelo (ex: um Transformer
               para análise de processos) e perguntando: ‘Onde ele pode falhar
               juridicamente ou operacionalmente?’.
               • Análise de Impacto: No NIST, mapear significa entender quem é
               afetado. Se a IA errar uma promoção (R3), o impacto é o moral da tropa e
               a segurança jurídica.
               • Classificação de Criticidade: Ao atribuir notas de 1 a 5 para Probabilidade
               e Impacto, você está realizando o mapeamento de prioridades.
               • Uma vez que o risco foi mapeado, ele não pode ficar sem resposta.
               A função Gerenciar é onde o pesquisador atua como um engenheiro de
               segurança. Ela foca em:
               • Tratamento do Risco: Para cada ID (R1 a R6) da tabela, está definido uma
               ação. Se o risco mapeado foi a Alucinação (R2), a ação de gerenciamento
               foi o RAG (âncora em manuais).
               • Alocação de Recursos: Momento em que se decide onde gastar
               mais energia. Riscos com criticidade alta (zona vermelha da matriz)
               recebem as medidas de gerenciamento mais robustas (ex: supervisão
               humana obrigatória).
               • Mitigação Prática: É a implementação das travas de segurança descritas
               na última coluna da tabela.

            Ao unir essas duas funções, é possível provar que a pesquisa possui
     Governança. Isso significa que a IA não é uma Caixa-Preta: ao mapear
     suas entranhas, saberá onde estão as fraquezas. Houve responsabilidade
     (Accountability) ao assumir o controle das falhas possíveis, oferecerá soluções
     (Gerenciamento) em vez de ignorar os erros. E há segurança jurídica, pois a
     tecnologia está subordinada à norma e ao controle do pesquisador.
            Em resumo, para documentar esta fase, o pesquisador deve elaborar uma
     matriz que classifique os riscos por impacto e probabilidade. Ao finalizar este
     etapa, o pesquisador entrega um Relatório de Impacto Algorítmico. Isso garante
     que a autoridade que irá decidir sobre o emprego da IA tenha plena consciência
     das limitações da ferramenta, atendendo aos princípios de responsabilidade e
     supervisão humana exigidos pelo Marco Legal da IA.

SILVA, D. C. A. da; NEVES, E. B.                                                           137

FASE V – AVALIAÇÃO (FUNÇÃO MEDIR - MEASURE)
       A Fase de Avaliação é o momento da verdade no framework DS-AI. Após
projetar e mitigar os riscos do artefato, o pesquisador deve provar, por meio de
evidências empíricas, que a solução desenvolvida é eficaz, segura e superior aos
métodos anteriores. No contexto do NIST AI RMF, esta fase corresponde à função
Medir (Measure).
       O objetivo principal é validar o artefato sob duas perspectivas: a técnica (ele
funciona com precisão?) e a sociotécnica (ele é útil e ético dentro da organização?).
Conforme a DSR (Peffers et al., 2007), o pesquisador pode utilizar diferentes
métodos para avaliar seu artefato: Experimento Controlado, Estudo de Caso,
Avaliação por Especialistas (Painel de Peritos), entre outros. Para o pesquisador,
medir significa coletar dados que respondam às seguintes perguntas:

        1 - O modelo atingiu os objetivos estabelecidos na Fase de Relevância?
        2 - As medidas de mitigação de risco (Fase VI) foram eficazes?
        3 - O modelo é explicável o suficiente para ser auditado por uma
        autoridade humana?

       Segundo o NIST, a medição deve ser quantitativa e qualitativa. Na DS-AI,
estruturamos esta fase em três pilares de métricas:

Métricas de Desempenho Técnico (Eficácia)

        • São as métricas clássicas de machine learning que comprovam o
        rigor matemático:
        • Acurácia e F1-Score: Para modelos de classificação.
        • Erro Quadrático Médio (MSE): Para modelos de predição/regressão.
        • Perplexidade e Bilingual Evaluation Understudy (BLEU): Para modelos
        de linguagem (Transformers).

Métricas de Confiança e Segurança (Rigor de Risco)
        Aqui medimos se o gerenciamento de riscos funcionou:

        • Taxa de Alucinação: Testar o modelo com perguntas armadilha para ver
        se ele inventa informações.

  138                                                             SILVA, D. C. A. da; NEVES, E. B.
                                             DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

               • Análise de Viés (Fairness Metrics): Verificar se o erro do modelo é
               distribuído de forma igualitária entre diferentes grupos.
               • Robustez Adversária: Testar como o modelo se comporta diante de
               entradas ruidosas ou manipuladas.

     Métricas de Utilidade e Explicabilidade (Valor Operacional)

               • Redução de Carga de Trabalho: Comparar o tempo gasto na tarefa com
               e sem o auxílio da IA.
               • Índice de Explicabilidade (XAI, Explainable AI): Utilizar métodos como
               SHAP (Shapley Additive Explanations) para visualizar quais variáveis
               foram determinantes para a decisão da IA.

     Exemplo
            Suponha que seu artefato seja um classificador de pareceres jurídicos. A
     avaliação seria documentada assim:

               • Medição Técnica: O modelo atingiu um F1-Score de 0,92, superando o
               baseline de palavras-chave (0,75).
               • Medição de Risco: Após a implementação do Retrieval-Augmented
               Generation (RAG) (na Fase de Risco), a taxa de citações de leis inexistentes
               caiu de 15% para 0,5%.
               • Medição de Utilidade: Em um teste com 10 oficiais, a triagem de 100
               processos passou de 5 horas para 15 minutos, com supervisão humana final.

           Nesta etapa o pesquisador não apenas diz que o modelo é bom, mas prova
     sua validade por meio da função medir. Isso encerra o ciclo de rigor científico e
     prepara o terreno para a última fase do framework.

     FASE VI – COMUNICAÇÃO
            A Fase de Comunicação encerra o ciclo do framework DS-AI. Na DS-AI, o
     conhecimento só é plenamente realizado quando é compartilhado de forma que
     outros possam aprender, replicar ou implementar a solução. Para a pesquisa, esta
     fase é o momento de transformar o artefato técnico em um legado institucional.
     Essa etapa comporia principalmente os capítulos de Resultados, Discussão e

SILVA, D. C. A. da; NEVES, E. B.                                                           139

Conclusão de um trabalho acadêmico. Pode-se também fazer a comunicação do
seu modelo por meio de Artigo Científico.
O objetivo central não é apenas escrever a tese, mas traduzir a complexidade da
IA para diferentes públicos:

Para a Academia: Demonstrar a contribuição teórica e a inovação algorítmica.

Para a Instituição: Entregar um manual de emprego, diretrizes de governança e a
prova de valor operacional.

Para a Sociedade: Garantir a transparência e a prestação de contas (accountability)
sobre o uso de algoritmos públicos.

        No framework DS-AI, a comunicação deve ir além do texto acadêmico,
utilizando ferramentas padrão da indústria de IA para garantir a transparência,
como por exemplo:

1. Model Cards (Cartões de Modelo)
     Inspirado no trabalho de Mitchell et al. (2019), o Model Card é um documento
de uma página que resume as informações essenciais do modelo:

Uso pretendido: Para que o modelo foi feito (e para o que não deve ser usado).

Fatores de treinamento: Quais dados foram usados e como foram anonimizados.

Limitações: Onde o modelo pode falhar (baseado na Matriz de Risco da Fase IV).

Métricas de Avaliação: Resultados finais de acurácia e ética (da Fase V).

2. Relatório de Impacto Algorítmico
       Fundamental para a conformidade com o Marco Legal da IA (PL 2338/2023).
Este relatório descreve as medidas de mitigação de risco e os procedimentos de
supervisão humana adotados, servindo como uma salvaguarda jurídica para a
autoridade que decidirá pela implementação do sistema.

 140                                                            SILVA, D. C. A. da; NEVES, E. B.
                                           DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

      3. Publicação do Código-Fonte e do Dataset
             A ciência exige que outros possam chegar aos mesmos resultados. Pode-
      se realizar a disponibilização do Código-Fonte e do Dataset (conforme a técnica de
      Datasheets for Datasets) em repositórios controlados (como um Git institucional).

      CONCLUSÃO
              O framework DS-AI consolida-se como uma resposta necessária à
      complexidade inerente ao desenvolvimento de Inteligência Artificial em contextos
      de alta responsabilidade. Ao integrar os ciclos de Relevância, Rigor e Design aos
      modernos preceitos de Governança e Gerenciamento de Riscos fundamentados
      em padrões globais como o NIST AI RMF 1.0. A metodologia assegura que o
      artefato gerado não seja apenas uma inovação técnica isolada. Pelo contrário, o
      processo garante que o modelo de IA nasça de uma necessidade real, sustente-
      se sobre bases jurídicas e científicas sólidas e opere dentro de limites éticos e
      operacionais rigorosamente mapeados.
              Ademais, a transição de uma abordagem puramente experimental para
      uma estrutura metodológica formal permite que o pesquisador supere o paradigma
      da “caixa-preta”. Através das fases de Análise de Riscos e Avaliação (medir),
      o framework fornece as ferramentas para que a precisão técnica caminhe lado
      a lado com a explicabilidade e a segurança cibernética. Isso é particularmente
      crítico em instituições de Estado, como as Forças Armadas ou o Judiciário, onde
      a confiabilidade das decisões automatizadas e a proteção de dados sensíveis são
      requisitos mandatórios para a legitimidade do uso da tecnologia.
              Por fim, a fase de Comunicação encerra o ciclo transformando o esforço
      técnico em patrimônio intelectual e institucional. A utilização de instrumentos
      como Model Cards e Relatórios de Impacto Algorítmico não apenas atende às
      futuras exigências do Marco Legal da IA no Brasil, mas também eleva o padrão
      de transparência e reprodutibilidade da pesquisa acadêmica. Assim, o DS-
      AI estabelece um roteiro seguro para que pesquisadores possam navegar nas
      fronteiras da Inteligência Artificial, entregando soluções que são, simultaneamente,
      cientificamente rigorosas e institucionalmente transformadoras.

SILVA, D. C. A. da; NEVES, E. B.                                                         141

SOBRE OS AUTORES
Daisy Cristine Albuquerque da Silva, Mestre em Sistemas e Computação.
Professora do Curso de Mestrado Profissional em Ciências Militares, Escola de
Aperfeiçoamento de Oficiais do Exército (EsAO), Rio de Janeiro, Brasil.
E-mail: profadaisyalbuquerque@gmail.com

Eduardo Borba Neves, Doutor em Engenharia Biomédica.
Coordenador do Curso de Mestrado Profissional em Ciências Militares, Escola de
Aperfeiçoamento de Oficiais do Exército (EsAO), Rio de Janeiro, Brasil.
E-mail: neveseb@gmail.com

COMO CITAR ESTE CAPÍTULO
SILVA, D. C. A. da; NEVES, E. B. Design Science for Artificial Intelligence (DS-AI).
In: NEVES, E. B.; POCHMANN, P. G. C.; SCHMIDT, R. P. B. (org.). Abordagens
Metodológicas em Ciências Militares. Rio de Janeiro: Traço Leal Comunicação,
2026. p. 121-143.

REFERÊNCIAS
BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de
Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018. Disponível
em: http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm.

BRASIL. Congresso Nacional. Senado Federal. Projeto de Lei n° 2338, de 2023.
Dispõe sobre o uso da Inteligência Artificial no Brasil. Brasília, DF: Senado Federal,
2023. Disponível em: https://www25.senado.leg.br/web/atividade/materias/-/
materia/157233.

BRASIL. Ministério da Defesa. Exército Brasileiro. Portaria – CEx nº 1.704, de 23
de março de 2022. Aprova as Diretrizes Estratégicas para o Sistema de Ciência,
Tecnologia e Inovação do Exército. Brasília, DF: Secretaria-Geral do Exército, 2022.

HEVNER, A. R. et al. Design science in information systems research. MIS
Quarterly, p. 75-105, 2004.

  142                                                             SILVA, D. C. A. da; NEVES, E. B.
                                       DESIGN SCIENCE FOR ARTIFICIAL INTELLIGENCE (DS-AI)

     MITCHELL, M. et al. Model Cards for Model Reporting. In: ACM Conference
     on Fairness, Accountability, and Transparency (FAT), 2019, Atlanta.
     Proceedings… New York: ACM, 2019. p. 220-229. Disponível em: https://doi.
     org/10.1145/3287560.3287596.

      NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY (NIST). AI Risk
      Management Framework (AI RMF 1.0). Gaithersburg: NIST, 2023. Disponível
      em: https://doi.org/10.6028/NIST.AI.100-1.

     PEFFERS, K. et al. A design science research methodology for information
     systems research. Journal of Management Information Systems, v. 24, n. 3, p.
     45-77, 2007.

SILVA, D. C. A. da; NEVES, E. B.                                                     143
                                                                                       NEVES,
