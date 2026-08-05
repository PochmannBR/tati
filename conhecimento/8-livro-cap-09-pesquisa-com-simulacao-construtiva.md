# Livro Abordagens Metodológicas em Ciências Militares (2026) — Cap. 9: Pesquisa com Simulação Construtiva

PESQUISA COM SIMULAÇÃO CONSTRUTIVA
                                                 Pablo Gustavo Cogo Pochmann

INTRODUÇÃO
       Este capítulo apresenta a simulação construtiva como uma ferramenta
metodológica robusta e versátil para a pesquisa científica. Destaca-se a crescente
importância desta abordagem em um cenário de investigações cada vez mais
complexas e multidisciplinares, onde a capacidade de modelar, experimentar e
analisar sistemas dinâmicos de forma controlada e com otimização de recursos
é fundamental. Serão explorados os fundamentos teóricos da simulação
construtiva, diferenciando-a de outras modalidades de simulação e ressaltando
suas vantagens intrínsecas, como a análise de cenários complexos, a
experimentação com redução de custos e riscos, a repetibilidade para análise
estatística e o forte subsídio à tomada de decisão. O capítulo também aborda as
limitações e os desafios inerentes ao seu uso. Um guia prático detalha o processo
de aplicação da simulação construtiva em um projeto de pesquisa, desde a
definição do problema e desenvolvimento do modelo conceitual, passando pela
implementação computacional, delineamento e execução dos experimentos, até a
análise, interpretação e validação dos resultados. Adicionalmente, são discutidos
cuidados cruciais a serem observados para garantir a qualidade e a fidedignidade
dos estudos que empregam esta técnica. Para ilustrar a aplicação prática, um
exemplo comentado demonstra como a simulação construtiva pode ser utilizada
para comparar estratégias e gerar insights científicos valiosos. Ao final, espera-
se que o leitor compreenda o potencial da simulação construtiva para enriquecer
o arsenal metodológico do pesquisador, permitindo a investigação de questões
complexas e o avanço do conhecimento em diversas áreas do saber.

TEORIA DA SIMULAÇÃO CONSTRUTIVA
      A capacidade de prever, analisar e compreender sistemas complexos
é reconhecida como uma pedra angular do avanço científico e tecnológico

contemporâneo (Winsberg, 2010). Em diversos cenários, a experimentação
direta no ambiente real revela-se impraticável, excessivamente custosa, perigosa
ou, em certas instâncias, tecnicamente impossível (Banks et al., 2010; Tolk,
2012). É nesse panorama que a simulação se consolida como uma ferramenta
científica indispensável, oferecendo um meio rigoroso para replicar e investigar
o comportamento de sistemas sob diversas condições, operando de forma
controlada e com eficiência temporal superior aos métodos empíricos tradicionais
(Zeigler; Muzy; Kofman, 2019; Law, 2015).
        No âmbito da ciência e da engenharia militar, a simulação transcende a
mera reprodução de fenômenos, constituindo-se como um laboratório virtual
voltado ao suporte à decisão e à análise de eficácia no combate (Sokolowski;
Banks, 2009). Inserida no contexto da Revolução 4.0, essa tecnologia
utiliza modelos matemáticos e computacionais para representar interações
fundamentais, permitindo a visualização do curso das batalhas com grande
economia de meios (Almeida et al., 2023). Através desses ambientes virtuais
realistas, é possível fundamentar requisitos operacionais e testar doutrinas
antes da sua aplicação real (Morgero, 2016).
        Nesse contexto, os pesquisadores podem empregar a simulação para:

       a) Testar hipóteses – avaliar a validade de teorias e conjecturas, como
       o impacto da integração de unidades de defesa antiaérea ou anticarro
       na sobrevivência e eficiência das tropas (Hoika; Korecki, 2025; Da Silva;
       Pochmann; Neves, 2025);
       b) Prever comportamentos futuros – estimar como um sistema evoluirá ao
       longo do tempo ou em resposta a intervenções, possibilitando a predição
       de resultados de combate e o comportamento estratégico dos participantes
       (Founta, 2025; Law, 2015);
       c) Otimizar projetos e processos – refinar o design de novos produtos
       e táticas, como o planejamento de eixos de manobra coordenados em
       terrenos difíceis ou a implementação de novas plataformas blindadas
       (Nohel et al., 2021; Banks et al., 2010);
       d) Analisar cenários ‘e se?’ (what-if analysis) – explorar o impacto de
       diferentes composições de tropas e decisões táticas sem riscos reais,
       permitindo a comparação estatística entre diferentes linhas de ação (Falcão
       et al., 2025; Tolk, 2012);
       e) Realizar treinamento e educação – proporcionar ambientes seguros
       e controlados para o adestramento de oficiais, permitindo o aprendizado

 200                                                                   POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

            através da revisão pós-ação e o aprimoramento do pensamento crítico em
            situações de alto risco (Havlík et al., 2022; Rolenec; Vlkovsky; Sedlacek,
            2023; Almeida et al., 2023); e
            f) Compreender a dinâmica de sistemas complexos – desvendar relações
            de causa e efeito e identificar pontos críticos em cenários onde a intuição
            humana é limitada por múltiplas variáveis interdependentes e não lineares
            (Zeigler; Muzy; Kofman, 2019; Tolk, 2012).

              Figura 1. Possibilidades de uso da simulação por pesquisadores.

             Embora a simulação computacional moderna seja um fenômeno
     relativamente recente, a ideia de modelar e simular sistemas é antiga (Schmidt,
     2017). Jogos de guerra, como o Xadrez e o Go, podem ser vistos como formas
     rudimentares de simulação estratégica (Tolk, 2019). No início do século XX,
     simulações físicas em menor escala, como túneis de vento para estudos
     aerodinâmicos, já eram empregadas (Law, 2015).
             A verdadeira revolução na simulação começou com o advento dos
     computadores digitais em meados do século XX (Schmidt, 2017; Zeigler; Muzy;
     Kofman, 2019). Um dos marcos iniciais foi o desenvolvimento do método de
     Monte Carlo (Law, 2015) durante o Projeto Manhattan, utilizado para simular o
     comportamento de nêutrons. Nas décadas seguintes, o aumento exponencial
     da capacidade de processamento computacional (Tolk, 2019), aliado ao
     desenvolvimento de algoritmos mais sofisticados e linguagens de programação

POCHMANN, P. G. C.                                                                201

específicas para simulação, permitiu a criação de modelos cada vez mais
complexos e realistas.
        Nos anos 1950 e 1960, surgiram as primeiras linguagens de simulação
de eventos discretos, como GPSS (General Purpose Simulation System) e
SIMSCRIPT (Law, 2015), impulsionando aplicações em logística, manufatura e
pesquisa operacional (Zeigler; Muzy; Kofman, 2019). A simulação de sistemas
contínuos também avançou, com aplicações em engenharia de controle e
dinâmica de sistemas (Law, 2015; Zeigler; Muzy; Kofman, 2019). A popularização
dos computadores pessoais e das interfaces gráficas nas décadas de 1980 e 1990
tornou as ferramentas de simulação mais acessíveis a um público mais amplo de
pesquisadores e profissionais.
        A simulação assume um protagonismo ainda maior na era da Indústria
4.0 e da transformação digital. A Quarta Revolução Industrial, como destacado
por Schwab (2016), é caracterizada pela fusão de tecnologias digitais, físicas e
biológicas, com foco na automação, inteligência artificial (IA), Internet das Coisas
(internet of things – IoT), computação em nuvem e análise de grandes volumes de
dados (Da Silva; Pochmann; Neves, 2025; Almeida et al., 2023).
        Neste novo paradigma, a simulação não é apenas uma ferramenta de
análise, mas um componente integral do ciclo de vida de produtos, processos
e sistemas. Conceitos como gêmeos digitais (digital twins), que são réplicas
virtuais detalhadas de objetos ou processos físicos que são atualizadas em tempo
real com dados do mundo real, exemplificam essa integração, conectando-se à
evolução dos modernos sistemas ciberfísicos (Zeigler; Muzy; Kofman, 2019) e ao
uso de maquetes digitais preditivas (Neyland, 1997). Os gêmeos digitais permitem
monitoramento, diagnóstico, prognóstico e otimização contínuos, impulsionando a
eficiência e a inovação.
        A transformação digital na pesquisa também é profundamente impactada.
A disponibilidade massiva de dados, o poder de processamento em nuvem e
os avanços em IA permitem a criação de modelos de simulação de fidelidade e
escopo sem precedentes, contrapondo a modelagem de dados à modelagem de
simulação (Zeigler; Muzy; Kofman, 2019). Pesquisadores podem agora simular
sistemas socioeconômicos complexos, ecossistemas inteiros (Schmidt, 2017;
Zeigler; Muzy; Kofman, 2019) ou o comportamento de materiais em nanoescala
com um nível de detalhe antes inimaginável. A simulação se torna, portanto, uma
peça-chave para acelerar descobertas, validar inovações e traduzir dados brutos

 202                                                                    POCHMANN, P. G. C.
                                                     PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     em conhecimento acionável, capacitando a comunidade científica a enfrentar
     desafios globais cada vez mais intrincados.

     DEFINIÇÃO DE SIMULAÇÃO CONSTRUTIVA
              A simulação construtiva é compreendida como uma modalidade de
     simulação em que pessoas reais interagem com sistemas simulados, ou sistemas
     simulados interagem entre si, para gerar resultados que emergem da dinâmica
     dessas interações (Law, 2015; Tolk, 2019). Diferente de modelos estáticos ou
     eventos pré-determinados, na simulação construtiva, o desfecho não é escrito
     previamente; ele é a consequência lógica e probabilística das decisões tomadas
     pelos agentes, sejam eles humanos ou computacionais, frente às restrições
     impostas pelos modelos matemáticos de ambiente e sistemas de armas (Almeida
     et al., 2023).
              Neste contexto, o termo construtiva refere-se ao fato de que o cenário e
     os resultados são construídos pelo sistema a partir da execução de regras de
     engajamento e algoritmos de movimentação e combate (Neyland, 1997). O
     pesquisador ou o comandante não controla o resultado, mas sim as condições
     iniciais e as ordens emitidas às unidades simuladas (Schmidt, 2017; Almeida
     et al., 2023).

     DIFERENCIAÇÃO ENTRE SIMULAÇÕES
           Para uma compreensão precisa, é essencial situar a simulação construtiva
     dentro da taxonomia LVC (live, virtual e constructive – viva, virtual e construtiva),
     amplamente adotada em contextos militares e científicos (Almeida et al., 2023;
     Rolenec; Vlkovsky; Sedlacek, 2021).

            a) Simulação viva (live simulation) – envolve pessoas reais operando
            equipamentos reais em um ambiente real (Law, 2015; Tolk, 2019). O aspecto
            simulado reside nos efeitos, como o uso de dispositivos de engajamento
            tático a laser (DSET) para simular disparos e danos sem o uso de munição
            real (Schmidt, 2017);
            b) Simulação virtual (virtual simulation) – caracteriza-se pelo conceito
            de human-in-the-loop (humano no ciclo, tradução nossa; é um modelo
            interativo que exige a participação humana), onde pessoas reais operam
            equipamentos simulados, como simuladores de voo ou de tiro, em um
            ambiente sintético (Law, 2015; Tolk, 2019). A ênfase está na percepção
            sensorial e nas habilidades motoras do operador dentro do ambiente

POCHMANN, P. G. C.                                                                  203

       virtual, explorando os limites do operador e do equipamento (Schmidt,
       2017; Almeida et al., 2023); e
       c) Simulação construtiva (constructive simulation) – diferencia-se das
       anteriores por lidar com entidades e unidades agregadas e simuladas que
       são operadas por agentes (Law, 2015; Tolk, 2019). Aqui, o foco não está
       na habilidade individual de operar um equipamento, mas na capacidade de
       comando, controle e análise de processos de tomada de decisão (Neyland,
       1997; Schmidt, 2017). É o nível onde se situam os chamados jogos de
       guerra voltados para o treinamento de Estados-Maiores (Schmidt, 2017;
       Almeida et al., 2023).

                          Figura 2. Tipos de simulação.
                            Fonte: Adaptado de Law (2015).

MODELOS COMPORTAMENTAIS E INTELIGÊNCIA ARTIFICIAL
       A evolução da simulação construtiva está intrinsecamente ligada ao avanço
da IA e dos modelos comportamentais. Segundo Almeida et al. (2023), a eficácia
de uma simulação como ferramenta metodológica depende da fidedignidade com
que as unidades simuladas respondem ao ambiente e às ameaças.
       Nesse campo, destaca-se a transição das forças semiautomatizadas para
modelos de IA direta (direct artificial intelligence – direct AI). Como discutido por
Falcão et al. (2025), a IA direta permite que os agentes computacionais tomem
decisões autônomas baseadas em doutrina e lógica tática, reduzindo a necessidade
de microgerenciamento humano. Isso é fundamental para a pesquisa científica,
pois permite ao pesquisador focar na variável independente (a estratégia ou o
novo armamento) enquanto a IA garante que as forças amigas e inimigas reajam

 204                                                                     POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     de forma coerente e realista, conferindo maior validade interna aos experimentos
     realizados em sistemas como o software COMBATER.

     VANTAGENS     DA    SIMULAÇÃO                        CONSTRUTIVA              NA
     PESQUISA CIENTÍFICA
            A adoção da simulação construtiva como ferramenta metodológica
     oferece ao pesquisador uma série de benefícios que superam as limitações das
     observações empíricas tradicionais ou dos modelos puramente teóricos. As
     principais vantagens são apresentadas na Figura 3.

                     Figura 3. Os seis pilares da simulação científica.

     ANÁLISE DE CENÁRIOS COMPLEXOS
            Diferente de modelos lineares, a simulação construtiva permite investigar
     sistemas com múltiplas variáveis interdependentes e interações dinâmicas. Ela é
     capaz de capturar fenômenos emergentes: resultados que surgem da interação de
     componentes individuais e que não poderiam ser previstos apenas analisando as
     partes isoladamente (Zeigler; Muzy; Kofman, 2019). Como enfatizam os autores,
     em um sistema adaptativo complexo, o comportamento emergente do todo não
     é dedutível das características de seus agentes individuais. Isso é essencial
     para entender a complexidade do ambiente operacional moderno, uma vez que
     a maioria dos sistemas estocásticos do mundo real não pode ser avaliada com

POCHMANN, P. G. C.                                                                205

precisão por modelos puramente matemáticos e analíticos, tornando a simulação,
frequentemente, a única forma de investigação possível (Law, 2015).

EXPERIMENTAÇÃO CONTROLADA
        A simulação atua como um laboratório virtual onde o pesquisador possui
controle total sobre o ambiente. É possível isolar variáveis, manipular condições
iniciais e comparar diferentes alternativas (como políticas logísticas, estratégias
táticas ou configurações de sistemas) sob as mesmas circunstâncias exatas,
permitindo manter “um controle muito melhor sobre as condições experimentais do
que seria geralmente possível experimentando com o próprio sistema” (Law, 2015,
p. 70). Esse controle é o que permite estabelecer relações sólidas de causa e efeito,
garantindo “a flexibilidade de tentar novos conceitos operacionais em um espaço de
batalha controlável, mas de jogo completamente livre” (Neyland, 1997, p. 63).

REDUÇÃO DE CUSTOS E RISCOS
       Uma das vantagens mais pragmáticas da simulação construtiva é a
capacidade de explorar cenários que seriam logística ou financeiramente inviáveis
no mundo real (Rolenec; Vlkovsky; Sedlacek, 2023). Almeida et al. (2023, p. 5)
destacam que a experimentação virtual elimina a necessidade de movimentação
de tropas e o consumo de recursos reais, visto que uma simples manobra
“envolveria mais de 1500 homens, com consumo de combustível e desgaste de
material”. Além disso, permite a exploração de cenários perigosos ou destrutivos
sem colocar em risco vidas humanas ou equipamentos caros, permitindo que a
pesquisa de cenários críticos ocorra de modo rápido, barato e “acima de tudo,
com segurança in silico” (Rolenec; Vlkovsky; Sedlacek, 2023, p. 6).

REPETIBILIDADE E ANÁLISE ESTATÍSTICA
       Para que uma pesquisa tenha validade científica, seus resultados devem ser
consistentes. A simulação construtiva permite a execução de múltiplas rodadas (n)
do mesmo experimento em um curto espaço de tempo, gerando diversas réplicas
independentes (Law, 2015). Essa característica, ressaltada em diversos estudos
da área, permite o acúmulo de uma massa de dados robusta e automatizada,
possibilitando a aplicação de testes estatísticos de significância (Rolenec;
Vlkovsky; Sedlacek, 2023). Em simulações táticas recentes, por exemplo, extraem-
se dados precisos e avaliam-se o p-valor (p-value) ou o tamanho do efeito (effect
size) pela estatística d de Cohen para quantificar a incerteza e substanciar os

 206                                                                     POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     resultados observados (Da Silva; Pochmann; Neves, 2025; Rolenec; Vlkovsky;
     Sedlacek, 2023).

     APOIO À TOMADA DE DECISÃO
              Ao fornecer insights baseados em dados (quantitativos e qualitativos), a
     simulação transforma suposições em evidências. Ela permite que gestores e
     comandantes visualizem as prováveis consequências de suas decisões antes de
     implementá-las, pois “as informações geradas auxiliam nas tomadas de decisão
     necessárias no momento presente, e contribuem para uma melhor compreensão
     do sistema estudado” (Schmidt, 2017, p. 10). Logo, serve como uma ferramenta de
     mitigação de riscos e otimização de resultados em ambientes de alta incerteza,
     aprimorando o pensamento crítico e fomentando ações mais precisas (Almeida
     et al., 2023).

     DESENVOLVIMENTO E REFINAMENTO DE TEORIAS E DOUTRINAS
             A simulação funciona como um banco de provas para o conhecimento e
     a avaliação de conceitos operacionais. De acordo com os trabalhos de Da Silva,
     Pochmann e Neves (2025) e Falcão et al. (2025), o ambiente construtivo é o local
     ideal para testar e validar novos conceitos doutrinários ou modelos teóricos.
     A literatura comprova que “a simulação prova ser uma ferramenta eficaz para
     testar novas tecnologias, treinar pessoal militar e desenvolver doutrinas e táticas
     que atendam aos desafios da guerra moderna” (Da Silva; Pochmann; Neves,
     2025, p. 7). Se uma nova tática ou teoria não sobrevive ao rigor de um modelo
     simulado fidedigno, ela dificilmente terá sucesso no ambiente real, permitindo que
     o refinamento ocorra de forma iterativa e científica para que, numa missão real, os
     alunos ou comandantes a executem com perfeição (Almeida et al., 2023).

     LIMITAÇÕES E DESAFIOS
            Embora a simulação construtiva seja uma ferramenta poderosa, sua
     aplicação na pesquisa científica não está isenta de desafios e limitações. O
     pesquisador deve estar ciente de que a simulação é uma representação simplificada
     da realidade e, como tal, possui fronteiras que devem ser respeitadas para garantir
     a integridade das conclusões.

     A QUESTÃO DA VALIDADE DO MODELO
            A limitação fundamental de qualquer simulação reside na sua validade, que
     é “o processo de determinar se um modelo de simulação é uma representação

POCHMANN, P. G. C.                                                                207

precisa do sistema” (Law, 2015, p. 247). A qualidade e a utilidade dos resultados
dependem intrinsecamente dessa precisão, sendo que a validação é frequentemente
alcançada pela calibração e pela comparação iterativa entre o comportamento
do modelo e o sistema real (Banks et al., 2010). Se as premissas matemáticas
ou lógicas do modelo estiverem incorretas ou excessivamente simplificadas, os
resultados gerados serão distorcidos. Como afirma o famoso aforismo estatístico
de George Box, “todos os modelos estão errados, mas alguns são úteis” (Box, 1979,
p. 202); o desafio do pesquisador é garantir que o erro do modelo não invalide a
resposta à sua pergunta de pesquisa, compreendendo que é impossível espelhar
absolutamente todos os detalhes do mundo real na simulação (Law, 2015).

DEPENDÊNCIA DE DADOS DE ENTRADA (GIGO)
        A simulação é regida pelo princípio Garbage In, Garbage Out (entra
lixo, sai lixo, tradução nossa - GIGO) – se os dados de entrada forem de baixa
qualidade, os resultados também o serão. Existe uma necessidade crítica
de dados precisos para calibrar o modelo, como tabelas de probabilidade
de acerto, velocidades de deslocamento em diferentes terrenos, consumos
logísticos, entre outros. Banks et al. (2010, p. 287) alertam de forma incisiva
para esse risco: “mesmo quando a estrutura do modelo é válida, se os dados
de entrada forem coletados de forma imprecisa, analisados inadequadamente
ou não forem representativos do ambiente, os dados de saída da simulação
serão enganosos”. A falta de dados reais fidedignos para alimentar o sistema
pode forçar o pesquisador a utilizar estimativas, o que aumenta a incerteza dos
resultados e pode ser “possivelmente prejudicial ou custoso quando utilizado
para a formulação de políticas ou tomada de decisão” (Banks et al., 2010, p. 287).

COMPLEXIDADE E CURVA DE APRENDIZADO
        O desenvolvimento de modelos detalhados e a configuração de cenários
complexos em sistemas como o COMBATER exigem tempo considerável
e expertise técnica específica (Schmidt, 2017). A modelagem transcende a
mera inserção de ícones em uma interface; trata-se da tradução de conceitos
doutrinários e requisitos operacionais em parâmetros computacionais
executáveis(Morgero, 2016; Tolk, 2016). Essa complexidade pode se tornar um
gargalo, demandando que o pesquisador dedique uma parcela significativa do
cronograma à fase de preparação e testes de calibração antes da execução
definitiva (Sokolowski; Banks, 2009; Law, 2015).

 208                                                                   POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     DESAFIOS NA INTERPRETAÇÃO E GENERALIZAÇÃO
              A abstração inerente à simulação exige cautela na generalização dos
     achados para o mundo real, uma vez que o ambiente virtual reflete tendências
     sob condições específicas (Winsberg, 2010). O pesquisador deve evitar o erro de
     transpor literalmente as métricas da simulação para a realidade sem considerar
     as variáveis imponderáveis do campo de batalha, como o atrito de Clausewitz,
     que nem sempre é capturado integralmente pelos algoritmos atuais (Tolk, 2012;
     Morgero, 2016). Assim, a simulação deve ser interpretada como um suporte à
     decisão e não como uma verdade absoluta (Sokolowski; Banks, 2009; Havlík
     et al., 2022).

     NECESSIDADE DE RECURSOS COMPUTACIONAIS
            Simulações que envolvem alta granularidade (muitas entidades) ou
     que exigem milhares de iterações para garantir significância estatística podem
     demandar elevada capacidade computacional (Zeigler; Muzy; Kofman, 2019).
     Além das restrições de hardware, o acesso a licenças de softwares proprietários
     e o tempo de processamento das rodadas podem limitar a escala do experimento
     (Law, 2015). Tais limitações são particularmente críticas em pesquisas com prazos
     rígidos, onde a infraestrutura tecnológica impacta diretamente a viabilidade da
     tese (Falcão et al., 2025; Nohel et al., 2021).

     SOFTWARES E PLATAFORMAS COMUNS
             A escolha da plataforma de simulação é um passo crítico no delineamento
     da pesquisa. Diferentes softwares oferecem diferentes níveis de abstração,
     fidelidade e facilidade de coleta de dados (Banks et al., 2010; Law, 2015). Embora
     o ambiente militar utilize ferramentas específicas e de alta complexidade, existem
     alternativas acadêmicas e comerciais que permitem a aplicação dos mesmos
     princípios metodológicos em diversas áreas do saber.

     EXEMPLOS DE SOFTWARES E APLICAÇÕES

            a) MASA SWORD/COMBATER – no contexto do Exército Brasileiro, o
            software COMBATER é a principal ferramenta de simulação construtiva
            (Almeida et al., 2023; Falcão et al., 2025). Ele permite a simulação de
            operações militares em nível tático e operacional, com foco no processo
            de tomada de decisão (Almeida et al., 2023) e na análise de eficácia de

POCHMANN, P. G. C.                                                                209

       sistemas de armas (Havlík et al., 2022; Rolenec; Vlkovsky; Sedlacek,
       2023). Para o pesquisador militar, sua grande vantagem é a fidedignidade
       doutrinária e a capacidade de gerar logs detalhados de combate, que
       podem ser exportados para softwares estatísticos como o Jamovi (Da
       Silva; Pochmann; Neves, 2025);
       b) AnyLogic – é uma das plataformas comerciais mais versáteis, utilizada
       tanto na indústria quanto na academia. Sua principal característica é a
       capacidade multimétodo, permitindo combinar simulação de eventos
       discretos, dinâmica de sistemas e modelagem baseada em agentes em um
       único modelo. É ideal para pesquisas em logística, saúde pública e gestão
       de cadeias de suprimentos (Law, 2015);
       c) NetLogo – amplamente utilizado no meio acadêmico, o NetLogo é um
       ambiente de modelagem programável de código aberto, excelente para
       simular fenômenos sociais e naturais. Ele foca na interação de milhares
       de agentes operando de forma independente, sendo uma ferramenta
       poderosa para testar teorias sociológicas, biológicas ou comportamentais
       de forma rápida e acessível (Law, 2015); e
       d) VBS (Virtual Battlespace): Embora muitas vezes classificado como
       simulação virtual, o VBS possui módulos que permitem a execução
       de simulações construtivas em larga escala, servindo de ponte para
       experimentos que exigem maior detalhamento visual e geográfico (Almeida
       et al., 2023).

CARACTERÍSTICAS DESEJÁVEIS EM UMA PLATAFORMA
PARA PESQUISA
        Para que uma plataforma seja considerada adequada ao rigor da pesquisa
científica, ela deve possuir certas características que facilitem a aplicação do
método experimental:

       a) Capacidade de customização – o software deve permitir que o
       pesquisador crie seus próprios artefatos (novas regras, novos equipamentos
       ou novas doutrinas), o que é fundamental para pesquisas baseadas
       em Design Science Research (DSR). Bancos de dados que reúnem
       características comportamentais e físicas devem poder ser customizados
       pelo usuário para refletir restrições e realidades locais (Almeida et al.,
       2023; Falcão et al., 2025);

 210                                                                  POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

            b) Extração e ferramentas de análise – a plataforma deve facilitar a
            exportação de dados brutos para formatos processáveis (CSV, Excel, SQL).
            Uma plataforma fechada, que não permite auditar como os resultados foram
            gerados, compromete a transparência científica, sendo vital o suporte a
            ferramentas analíticas e de exportação estatística (Banks et al., 2010;
            Havlík et al., 2022).
            c) Interface gráfica e visualização – uma interface intuitiva reduz a
            curva de aprendizado e permite que o pesquisador foque no problema de
            pesquisa e não na complexidade da ferramenta. Além disso, a visualização
            em tempo real ajuda na validação conceitual do modelo (Law, 2015).
            d) Integração de IA – como discutido anteriormente, a capacidade de
            integrar modelos de IA direta ou scripts de comportamento autônomo é
            essencial para reduzir o viés do operador e garantir que as entidades
            simuladas ajam de forma coerente e repetível durante as rodadas
            experimentais, resolvendo problemas por meio de bancos de dados
            doutrinários sem microgerenciamento constante (Almeida et al., 2023;
            Falcão et al., 2025).
            e) Controle de estocasticidade – a plataforma deve permitir que o
            pesquisador controle a semente de aleatoriedade, possibilitando que um
            experimento seja exatamente replicado por outros cientistas, um pilar
            fundamental da validade externa e basilar como, por exemplo, no esquema
            de números aleatórios do método de Monte Carlo (Law, 2015).

     PASSO A PASSO PARA EMPREGAR A SIMULAÇÃO
     CONSTRUTIVA EM UMA PESQUISA
            A transição do campo teórico para a aplicação prática da simulação
     construtiva exige que o pesquisador adote uma postura sistemática, evitando que
     a ferramenta tecnológica se sobreponha ao rigor do método científico. Para balizar
     esse percurso metodológico e transformar o ambiente sintético em um laboratório
     verdadeiramente controlado e auditável, este trabalho propõe um fluxo de nove
     passos. Essa estrutura consiste em uma adaptação integradora que une a lógica do
     planejamento operacional ao rigor da engenharia de modelagem, fundamentando-
     se na fusão de quatro bases essenciais: os sete passos do Processo de Tomada
     de Decisão Militar (Military Decision-Making Process), delineados por Rolenec;
     Vlkovsky e Sedlacek (2023); as diretrizes do Processo de Planejamento e Condução

POCHMANN, P. G. C.                                                                211

das Operações Terrestres (PPCOT), estabelecidas no Manual de Campanha do
Exército Brasileiro (Brasil, 2020); os dez passos para a condução de um estudo
de simulação sólido, propostos por Law (2015); e as fases de um projeto de
simulação descritas por Banks et al. (2010). Ao amalgamar o planejamento militar
doutrinário com os preceitos acadêmicos de verificação e validação de sistemas,
o pesquisador assegura que todas as etapas do experimento, desde a concepção
tática do cenário até a análise estatística dos dados, possuam estrita validade
operacional e credibilidade científica.

DEFINIÇÃO DO PROBLEMA E OBJETIVOS
         O percurso inicia-se obrigatoriamente fora do ambiente computacional,
com a delimitação precisa do problema de pesquisa. À luz do PPCOT, esta fase
equivale à análise da missão e ao esforço do comandante e seu Estado-Maior
para compreender a situação e o problema militar (Brasil, 2020). O pesquisador
deve formular uma questão central que a simulação seja capaz de responder.
Segundo os passos clássicos da simulação, a formulação do problema e o
estabelecimento de objetivos claros indicam exatamente as questões a serem
respondidas e balizam se a simulação é, de fato, a ferramenta apropriada (Banks
et al., 2010; Law, 2015). É nesta etapa que se define o estado final desejado (EFD)
da pesquisa (Brasil, 2020), estabelecendo metas específicas e mensuráveis que
definirão quais dados quantitativos ou qualitativos serão posteriormente coletados
e avaliados.

REVISÃO DA LITERATURA                      E    DESENVOLVIMENTO                DO
MODELO CONCEITUAL
       Após a definição do problema, o pesquisador fundamenta-se na literatura
e em dados doutrinários ou históricos para desenvolver o modelo conceitual. No
contexto militar, esta etapa alinha-se ao Componente Conceitual do Planejamento
e ao desenvolvimento da Abordagem Operativa, onde se visualiza genericamente
como os meios interagem para alcançar o EFD (Brasil, 2020). Na engenharia de
simulação, esta é a fase crítica de abstração, em que se decide o escopo e o nível
de detalhe do modelo, definindo quais elementos do sistema real são essenciais
à pesquisa e quais podem ser simplificados (Law, 2015; Tolk, 2012). Identificam-
se as entidades operacionais, seus atributos físicos, regras de engajamento e
os indicadores de sucesso. Esses indicadores, que, no meio corporativo, são
chamados de KPIs, correspondem doutrinariamente à formulação de medidas de

 212                                                                   POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     eficácia (M Efi) e medidas de desempenho (M Dsp), essenciais para a posterior
     avaliação contínua do experimento (Brasil, 2020).

     ESCOLHA DA PLATAFORMA E COLETA DE DADOS
             A transição para a implementação técnica exige a seleção criteriosa da
     plataforma (Law, 2015), a qual deve ser compatível com a complexidade do
     modelo conceitual desenhado. No contexto de Forças Terrestres, softwares como
     o COMBATER destacam-se pela aderência estrita à doutrina nacional (Almeida
     et al., 2023; Falcão et al., 2025), embora ferramentas acadêmicas e comerciais,
     como AnyLogic ou NetLogo, possam ser preferíveis para estudos específicos de
     logística ou comportamento de agentes (Law, 2015). Definida a plataforma, inicia-
     se a coleta de dados de entrada. Banks et al. (2010) alertam que a coleta deve
     envolver obrigatoriamente especialistas e usuários finais para garantir a validação
     de face dos dados, mitigando o risco GIGO e evitando que o simulador gere
     resultados matematicamente corretos, porém desconectados da realidade tática.

     IMPLEMENTAÇÃO      E                            VERIFICAÇÃO                   DO
     MODELO COMPUTACIONAL
             A implementação consiste na tradução do modelo conceitual para o
     ambiente digital, frequentemente chamado de modelo operacional ou executável,
     onde os comportamentos dos agentes, as restrições logísticas e as características
     do terreno são programados ou configurados na plataforma escolhida (Banks
     et al., 2010). Concluída a montagem do cenário, o pesquisador deve realizar a
     verificação do modelo computacional. De acordo com Tolk (2019) e Banks et al.
     (2010), a verificação é o processo de assegurar que a implementação do modelo
     representa com precisão a descrição conceitual e suas especificações, focando na
     acurácia transformacional e respondendo à pergunta fundamental: ‘Construímos
     o modelo corretamente?’. Na prática, trata-se de um rigoroso processo de
     depuração (debugging) que visa assegurar que o software está executando as
     ordens e lógicas matemáticas exatamente conforme o planejado, garantindo que
     não existem erros internos que possam contaminar a coleta de dados subsequente
     (Law, 2015).

     DELINEAMENTO DOS EXPERIMENTOS
             O delineamento experimental (experimental design) constitui o coração
     científico da pesquisa, pois é a etapa onde se definem as alternativas, os cenários
     ou os Cursos de Ação (CoA) que serão submetidos ao teste comparativo (Banks

POCHMANN, P. G. C.                                                                 213

et al., 2010). Inspirando-se em metodologias de experimentação, o pesquisador
manipula os fatores (variáveis independentes) em diferentes configurações para
observar suas consequências nas medidas de desempenho ou variáveis de
resposta do sistema, ou seja, nas variáveis dependentes (Law, 2015). Devido à
natureza estocástica da simulação construtiva, onde eventos aleatórios ditados por
distribuições de probabilidade influenciam o desfecho de uma rodada isolada, uma
única execução não produz a resposta definitiva, mas apenas uma estimativa que
contém erro aleatório inerente (Banks et al., 2010; Law, 2015). Por isso, torna-se
obrigatória a determinação de um número adequado de replicações independentes
para cada cenário, o que é alcançado utilizando diferentes “sementes” de números
aleatórios a cada nova rodada (Banks et al., 2010; Law, 2015). Esse volume de
rodadas garante que os resultados possuam significância estatística, permitindo
que as conclusões sejam baseadas em tendências robustas e não em casos
fortuitos, anomalias ou falhas de inferência estatística (Law, 2015).

EXECUÇÃO E COLETA DE RESULTADOS
       Com o experimento delineado, as simulações entram na fase de rodadas
de produção (production runs), sendo executadas de forma sistemática para
estimar as medidas de desempenho relativas a cada alternativa do sistema
simulado (Banks et al., 2010). Durante as rodadas, o pesquisador assume o
papel de observador, garantindo que o sistema opere estritamente sob as
condições experimentais pré-estabelecidas sem interferências externas que
possam introduzir vieses (Law, 2015). A coleta de dados deve ser automatizada
e abrangente, registrando todos os indicadores de desempenho definidos na
fase conceitual, tirando proveito da capacidade nativa dos pacotes de simulação
de coletar essas saídas estatísticas automaticamente (Banks et al., 2010). A
organização desses dados brutos de saída em arquivos estruturados e sua
respectiva exportação para planilhas ou softwares analíticos externos facilitará a
transição para a etapa de análise estatística, permitindo a rastreabilidade de cada
evento ocorrido no ambiente virtual (Banks et al., 2010).

ANÁLISE E INTERPRETAÇÃO DOS RESULTADOS
         A fase de análise consiste em examinar os dados de saída gerados durante
as rodadas de produção (production runs) do experimento para estimar as medidas
de desempenho e avaliar o mérito relativo de cada alternativa simulada (Banks
et al., 2010; Law, 2015). Uma vez que os dados brutos são extraídos do simulador,
o pesquisador deve aplicar testes estatísticos rigorosos para validar as diferenças

  214                                                                  POCHMANN, P. G. C.
                                                     PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     observadas entre os CoA. Em simulações táticas e operacionais recentes, os dados
     extraídos de plataformas como o COMBATER são frequentemente exportados
     para softwares estatísticos, permitindo a aplicação de testes consolidados, como
     o Teste T de Student, a avaliação do p-valor e o cálculo da estatística d de Cohen
     para quantificar o tamanho do efeito (Da Silva; Pochmann; Neves, 2025; Rolenec;
     Vlkovsky; Sedlacek, 2023). Essa abordagem afasta a análise do mero empirismo
     visual e garante que as interpretações operacionais sejam fundamentadas em
     evidências matemáticas e probabilísticas.

     VALIDAÇÃO DO MODELO E ANÁLISE DE SENSIBILIDADE
             A validação é o processo de determinar o grau em que o modelo é uma
     representação precisa do sistema real, estritamente sob a perspectiva dos
     objetivos do estudo (Sokolowski; Banks, 2009). Enquanto a verificação (passo 2.4)
     avalia se o modelo foi construído corretamente no software, a validação responde
     se o modelo construído é, de fato, a abstração correta da realidade operacional
     (Banks et al., 2010; Tolk, 2019). Devido à complexidade dos imponderáveis do
     combate, é comum recorrer à validação de face (face validity), na qual especialistas
     e militares experientes na doutrina avaliam a razoabilidade dos resultados gerados
     pelo simulador (Law, 2015; Banks et al., 2010). Adicionalmente, a análise de
     sensibilidade é empregada para verificar como as saídas do modelo reagem a
     variações nos dados de entrada (Law, 2015), permitindo ao pesquisador identificar
     quais fatores táticos e restrições logísticas exercem maior influência decisiva no
     cumprimento da missão.

     DOCUMENTAÇÃO E COMUNICAÇÃO
             O último passo do percurso metodológico exige documentar o sistema e
     relatar os resultados para fomentar a confiança e subsidiar efetivamente o processo
     decisório (Banks et al., 2010; Law, 2015). A documentação detalhada garante o
     registro das premissas, das restrições (variáveis de controle) e dos parâmetros
     utilizados, permitindo que o modelo seja auditado, replicado ou reaproveitado
     em estudos futuros (Law, 2015). A comunicação dos achados deve traduzir a
     complexidade estatística e computacional em conhecimento tático acionável.
     Nesse sentido, o uso das ferramentas de animação e dos relatórios nativos dos
     simuladores (como o MASA SWORD/COMBATER) é vital para demonstrar a
     dinâmica do cenário aos comandantes e avaliadores de forma visual (Havlík et al.,
     2022; Law, 2015), promovendo a credibilidade dos resultados e embasando o
     refinamento doutrinário e operacional (Almeida et al., 2023).

POCHMANN, P. G. C.                                                                 215

        O ciclo completo pode ser visualizado na Figura 4.

 Figura 4. Guia em 9 Passos da Simulação Construtiva na Pesquisa Científica.

CUIDADOS AO UTILIZAR SIMULAÇÃO CONSTRUTIVA
       Embora a simulação construtiva ofereça um vasto leque de oportunidades
para a experimentação científica, seu emprego exige um olhar crítico e vigilante
sobre os processos de modelagem e análise de dados. Esta seção dedica-se
a explorar os cuidados essenciais que o pesquisador deve adotar para garantir
a integridade de seus achados, abordando desde a fidedignidade dos dados de
entrada até os limites técnicos e conceituais da generalização dos resultados
obtidos em ambiente virtual. Ao compreender os riscos de distorção e os vieses
inerentes ao cenário, o investigador torna-se capaz de blindar sua pesquisa contra
conclusões fragilizadas, assegurando que o simulador atue como uma ferramenta
de descoberta científica rigorosa e não como um gerador de resultados desconexos
da realidade operacional.

O EQUILÍBRIO ENTRE SIMPLIFICAÇÃO E COMPLEXIDADE
        Um dos dilemas fundamentais na modelagem para simulação reside
em encontrar o ponto ideal de abstração, que na teoria de sistemas é definida
como o processo de simplificação válida para reduzir a complexidade de forma
útil ao experimento (Zeigler; Muzy; Kofman, 2019). O pesquisador deve evitar a
supersimplificação, que ocorre quando o modelo falha em capturar as dinâmicas

  216                                                                  POCHMANN, P. G. C.
                                                     PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     essenciais do sistema real. Por outro lado, a busca por uma fidelidade absoluta
     e a tentativa de estabelecer uma correspondência biunívoca (um para um) com o
     mundo real pode levar à complexidade excessiva (Banks et al., 2010; Law, 2015).
     Modelos demasiadamente detalhados frequentemente tornam-se intratáveis,
     exigindo tempo de processamento e recursos de desenvolvimento proibitivos, o
     que obscurece fatores importantes e dificulta os processos de validação (Law,
     2015). O rigor científico exige, ecoando a máxima de Einstein (1934, p. 165)
     amplamente citada na engenharia de simulação, que o modelo seja “tão simples
     (…) quanto possível, sem ter que renunciar à representação adequada.”, garantindo
     que a estrutura construída seja compreensível e funcional (Law, 2015). Assim, a
     literatura preconiza que é preferível iniciar com um modelo simples, em um nível
     moderado, e aumentar a complexidade estritamente conforme a necessidade de
     responder à questão de pesquisa proposta (Banks et al., 2010; Law, 2015).

     A QUALIDADE DOS DADOS E O PRINCÍPIO GIGO
            A validade de qualquer simulação está indissociavelmente ligada ao princípio
     basilar conhecido na ciência da computação como GIGO (Banks et al., 2010).
     Em termos práticos, isso significa que a confiabilidade dos resultados de saída é
     um reflexo direto da qualidade dos dados de entrada e das premissas adotadas.
     Se as tabelas de probabilidade, os parâmetros de desempenho de sistemas de
     armas ou as taxas de consumo logístico forem baseados em estimativas frágeis,
     desatualizadas ou imprecisas, a simulação produzirá resultados matematicamente
     precisos, porém factualmente errôneos e perigosos (Banks et al., 2010). A calibração
     cuidadosa com dados fidedignos é, portanto, um pré-requisito indispensável para
     qualquer estudo sério, uma vez que a precisão analítica do modelo é guiada e
     altamente dependente dos dados empíricos coletados (Sokolowski; Banks, 2009).

     A IMPERATIVIDADE DA VERIFICAÇÃO E VALIDAÇÃO
             Frequentemente negligenciados ou realizados de forma superficial na fase
     final do cronograma devido a pressões de prazo e orçamento (Sokolowski; Banks,
     2009), os processos de Verificação e Validação (V&V) são os pilares que sustentam
     a confiança e a credibilidade acadêmica e operacional nos resultados (Law,
     2015). A literatura consagra que a verificação responde à pergunta ‘construímos
     o modelo corretamente?’, assegurando que o modelo computacional implementa
     as especificações conceituais com precisão e está livre de erros lógicos ou de
     programação (Sokolowski; Banks, 2009; Tolk, 2019). A validação, por sua vez,
     responde à pergunta ‘construímos o modelo correto?’ (Tolk, 2016). Ela confirma

POCHMANN, P. G. C.                                                                 217

se o modelo é uma representação acurada da realidade, estritamente sob a
perspectiva dos fins e objetivos propostos para aquele estudo específico (Banks
et al., 2010; Tolk, 2019). Sem um ciclo rigoroso de V&V, o emprego de um modelo
inválido pode levar a consequências graves, fazendo com que as conclusões
extraídas careçam de base científica e jamais devam ser utilizadas para o avanço
doutrinário ou como subsídio para a tomada de decisão no mundo real (Banks
et al., 2010; Sokolowski; Banks, 2009).

LIMITES DE INTERPRETAÇÃO E GENERALIZAÇÃO
       O pesquisador deve exercer cautela extrema ao interpretar e generalizar os
resultados obtidos em ambiente virtual. É fundamental reconhecer que os modelos
são abstrações e simplificações propositais da realidade, moldadas por restrições
cognitivas e computacionais (Tolk, 2019). Consequentemente, um modelo que é
válido para um propósito específico pode não ser válido para outro (Law, 2015).
Observa-se que muitas simulações operam sob premissas simplificadoras, pois
há uma elevada dificuldade em estabelecer parâmetros exatos para as múltiplas
variáveis que interferem no combate real, como condições meteorológicas
adversas, a ação da mídia ou a presença maciça de população civil no campo de
batalha (Morgero, 2016). Embora estudos como o de Rolenec, Vlkovsky e Sedlacek
(2023) demonstrem a eficácia da simulação para a verificação rápida de cenários,
ignorar as simplificações inerentes ao propor generalizações para contextos reais
complexos pode levar a diagnósticos perigosamente incompletos. Toda conclusão
deve, obrigatoriamente, vir acompanhada da declaração explícita das premissas e
das fronteiras de validade do estudo (Law, 2015).

O VIÉS DO MODELADOR E A SUBJETIVIDADE TÉCNICA
       Embora a simulação computacional pareça um processo puramente objetivo
e matemático, ela é fortemente influenciada pelas escolhas e pelo conhecimento
prévio do pesquisador. A literatura adverte que a construção de modelos é uma
arte, de modo que se dois indivíduos competentes construírem modelos do mesmo
sistema, eles terão semelhanças, mas dificilmente serão idênticos (Banks et al.,
2010). O viés do modelador manifesta-se na seleção de quais variáveis incluir ou
omitir e na interpretação subjetiva das doutrinas militares. Para mitigar esse risco
de distorção, é recomendável o uso de múltiplos especialistas no assunto nas
fases de modelagem e validação de face, garantindo que as premissas adotadas
sejam razoáveis (Law, 2015; Sokolowski; Banks, 2009). A documentação clara

 218                                                                    POCHMANN, P. G. C.
                                                     PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     das decisões técnicas tomadas permite que a comunidade acadêmica audite as
     escolhas e identifique possíveis inclinações nos modelos construídos.

     CUSTOS E TEMPORALIDADE DO DESENVOLVIMENTO
            Apesar de a simulação construtiva ser frequentemente citada como
     uma forma de reduzir custos e desgastes de material a longo prazo, o seu
     desenvolvimento inicial é intensivo em recursos e tempo. A construção de
     um modelo robusto, a parametrização do ambiente e a realização de testes
     demandam um treinamento especial e uma expertise técnica que podem não
     estar disponíveis de imediato (Banks et al., 2010; Sokolowski; Banks, 2009). A
     engenharia de simulação reconhece que os modelos são frequentemente caros
     e demorados para serem desenvolvidos (Law, 2015). O pesquisador deve prever
     esses investimentos no cronograma de sua pesquisa, evitando o erro comum de
     subestimar o esforço necessário para criar ou calibrar uma ferramenta que seja,
     de fato, cientificamente útil.

     REPRODUTIBILIDADE E TRANSPARÊNCIA
            Por fim, o valor científico de uma pesquisa com simulação repousa na
     sua reprodutibilidade e transparência. Infelizmente, a prática demonstra que a
     documentação formal é frequentemente negligenciada na modelagem (Law,
     2015). O rigor exige uma documentação exaustiva de todos os aspectos do
     programa, das premissas e dos protocolos experimentais, permitindo a criação de
     uma trilha de auditoria (Neyland, 1997). Além disso, para garantir a replicabilidade
     estatística, é imperativo documentar os dados utilizados em cada rodada (Law,
     2015). Somente através dessa descrição detalhada é que outros pesquisadores
     poderão entender, auditar e, idealmente, replicar ou reutilizar o estudo em projetos
     futuros, permitindo que o conhecimento gerado seja verificado e expandido pela
     comunidade científica militar (Banks et al., 2010).
            O Quadro 1 sintetiza os erros mais frequentes observados na prática
     da simulação.

POCHMANN, P. G. C.                                                                 219

                                                        Consequência para a
  Fase do processo              Erro comum                                          Como evitar/sugestão
                                                             pesquisa

                                                                                     Aplicar o princípio da
                             Tentar replicar cada            Torna o modelo          parcimônia (Navalha
                             detalhe da realidade        impossível de validar e    de Ockham): o modelo
       Concepção e
                               (ex.: clima, moral,      dificulta o isolamento da    deve ser tão simples
       modelagem
                           logística e balística) sem   causa e efeito (variável       quanto possível,
                                 necessidade.                independente).         desde que responda à
                                                                                    pergunta de pesquisa.

                                                           Ignora a natureza        Realizar um cálculo de
                            Realizar apenas uma         estocástica (aleatória)      tamanho de amostra
     Execução dos           ou duas simulações e             dos combates             e executar múltiplas
     experimentos          tratar o resultado como      simulados, capturando           rodadas (n) para
                              verdade absoluta.            apenas um outlier         garantir significância
                                                         (ponto fora da curva).            estatística.

                                                          O modelo pode estar
                            Pular a validação por                                      Submeter o modelo
                                                           logicamente correto
                            especialistas: assumir                                        conceitual e os
 Verificação e validação                                  (verificado), mas não
                             que, se o software                                      resultados parciais ao
          (V&V)                                          representar a doutrina
                             rodou sem erros, o                                       julgamento de peritos
                                                             militar real (não
                             modelo é fidedigno.                                    (subject matter experts).
                                                                 validado).

                                Interferência do
                             operador durante a                                      Definir ordens estritas
                                                             Introduz o viés
                               rodada: mudar as                                        antes do início da
     Delineamento                                           do pesquisador,
                              ordens das tropas                                      rodada e, se possível,
     experimental                                        invalidando o controle
                              simuladas no meio                                          utilizar scripts
                                                              experimental.
                             de uma rodada para                                         automatizados.
                                corrigir um erro.

                             Confundir simulação
                                                                                          Utilizar termos
                             com previsão: afirmar
                                                            Gera uma falsa             como ‘tendências’,
                               que ‘o evento X
                                                         sensação de certeza,           ‘sensibilidades’ e
 Análise de resultados      acontecerá’ em vez de
                                                         ignorando a natureza        fornecer intervalos de
                            ‘sob as condições Y, a
                                                        probabilística da guerra.     confiança nos dados
                             probabilidade de X é
                                                                                           estatísticos.
                                    maior’.

         Quadro 1. Erros comuns na pesquisa com simulação construtiva.

EXEMPLO COMENTADO: ANÁLISE COMPARATIVA DE
LINHAS DE AÇÃO USANDO SIMULAÇÃO CONSTRUTIVA
      Esta seção apresentará um estudo de caso de Da Silva, Pochmann e
Neves (2025), ilustrando a aplicação do passo a passo. Recomenda-se ao leitor
não focar na formatação, visto que o foco será em como a simulação foi usada
para gerar conhecimento científico.

 220                                                                                           POCHMANN, P. G. C.
                                                           PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     3 METODOLOGIA                                                        DICA METODOLÓGICA
     3.1 Modelagem de Simulação                                           - JUSTIFICATIVA DA
                                                                          PLATAFORMA: Em
              A experimentação utilizada neste trabalho é a Simulação     pesquisas com simulação,
                                                                          a escolha do software deve
     Construtiva, empregando o sistema COMBATER, um software de
                                                                          ser fundamentada. O sistema
     simulação desenvolvido especificamente para o Exército Brasileiro    COMBATER (baseado no
     com base no software francês Sword, pela empresa RustCon. O          MASA SWORD) é a ferramenta
     COMBATER pode ser utilizado em exercícios nos níveis Unidade,        adequada neste caso por aderir
                                                                          à doutrina militar do Exército
     Brigada e Divisão. Ele permite a simulação de operações de
                                                                          Brasileiro e focar no processo
     combate em diversos ambientes operacionais em todo o território      de tomada de decisão do nível
     nacional, de acordo com a doutrina militar do Exército Brasileiro    tático (Almeida et al., 2023).
     (Brasil, 2018).
              A simulação a seguir foi planejada e conduzida por estes    Não esquecer de
                                                                          explicitar qual a versão do
     autores, aplicando o Exame de Situação do Comandante Tático
                                                                          software empregado.
     no contexto de uma operação ofensiva, utilizando protocolos e
     metodologias como os empregados por Almeida et al. em um artigo      Problema de Pesquisa e
     publicado em 2023, que já foi devidamente publicado, aprovado e      Objetivos do Exemplo
                                                                          Ex: “Avaliar a eficácia de duas
     reconhecido internacionalmente.
                                                                          estratégias alternativas (A e B)
              No nível tático, o Exército Brasileiro emprega o software   para a alocação de recursos
     COMBATER (versão 6.19 do software francês Sword) em exercícios       em um sistema de resposta a
     de adestramento categorizados como “Jogos de Guerra”; o software     emergências, considerando
                                                                          o tempo de resposta e o
     utiliza um processo de simulação automático, ou seja, toma suas
                                                                          número de atendimentos bem-
     decisões táticas de acordo com os extensos bancos de dados e         sucedidos.” (Adaptável a partir
     programação à sua disposição. Nessas simulações de operações         da lógica de comparação de
     e combate, as funções de combate de Comando e Controle,              CoAs dos artigos militares).

     Movimento e Manobra, Inteligência, Fogos, Logística e Proteção
     são integradas e adestradas utilizando este aparato tecnológico.
     A Escola de Comando e Estado-Maior do Exército (ECEME) e
     a Escola de Aperfeiçoamento de Oficiais (EsAO), por exemplo,
     conduzem jogos de guerra anuais como a Operação ÔNIX, na qual
                                                                          DICA METODOLÓGICA -
     são realizadas simulações de operações ofensivas e defensivas
                                                                          NÍVEIS DE ABSTRAÇÃO: A
     envolvendo divisões e brigadas de exército (Almeida et al., 2023).   modelagem é um processo
              Com base na experiência de Tolk (2012), a simulação foi     de simplificação proposital
     fundamentada na visão operacional (o que precisa ser modelado:       da realidade. Definir as três
                                                                          visões (operacional, conceitual
     elementos críticos do combate, com base em unidades anticarro
                                                                          e técnica) demonstra que
     em um ataque coordenado), na visão conceitual (como modelar          o pesquisador delimitou
     o combate: uso do software mencionado, comparando resultados         corretamente o escopo do
     entre dois beligerantes antagonistas, utilizando ou não tropas       problema, traduzindo as ações
                                                                          de combate para a linguagem
     dedicadas ao combate anticarro); e na visão técnica (como conduzir
                                                                          do simulador de forma
     a simulação: teatro de operações, ambiente e cenário de combate,     metódica (Tolk, 2012).
     coleta e análise dos resultados e dados, e validação estratégica).

POCHMANN, P. G. C.                                                                                 221

                                 3.1.1 Ataque Coordenado

                                          No desenvolvimento deste trabalho, foi simulado um ataque
                                 coordenado entre a Força Azul e a Força Vermelha, com o objetivo
                                 de atacar para conquistar e manter posições ocupadas pela Força
                                 Vermelha, que havia estabelecido posições defensivas no estado
                                 de Santa Catarina (carta topográfica vetorizada XANXERÊ-SE). A
                                 Diretriz de Planejamento do Comandante da Brigada de Infantaria
                                 Mecanizada AZUL é infligir o máximo de baixas às unidades
                                 blindadas do inimigo, ao mesmo tempo em que conquista o objetivo.
                                 Ao final do ataque, a Brigada de Infantaria Mecanizada AZUL deve
                                 ser capaz de manter o terreno para apoiar o avanço das tropas
Desenvolvimento do Modelo        amigas e receber missões táticas subsequentes.
Conceitual e Implementação.
                                 3.1.2 Teatro de Operações

DICA METODOLÓGICA                        A área onde a simulação ocorre apresenta solo firme e
- DADOS DE ENTRADA               vegetação rasteira, criando amplos campos de tiro e observação,
(GIGO): É vital detalhar
                                 juntamente com plantações de pequeno porte que não constituem
minuciosamente as condições
de contorno do terreno e         obstáculos para as tropas envolvidas. A maioria das estradas é
as tabelas de forças. A          pavimentada e está em boas condições de tráfego. As pontes são
confiabilidade da simulação      de classe elevada, compatíveis com todas as viaturas blindadas
depende do princípio GIGO
                                 e outros veículos envolvidos na operação. Os cursos d’água e
(Garbage In, Garbage Out). Se
os dados inseridos (parâmetros   pequenos reservatórios na região não representam obstáculos para
de entrada) forem ruins,         as tropas. No entanto, existem certas áreas onde o terreno tem uma
incompletos ou irrealistas, o    inclinação superior a 60%, o que restringe o movimento a pé da
simulador gerará resultados
                                 tropa e impede a manobra de viaturas blindadas e outras viaturas
matematicamente corretos,
porém factualmente falsos e      envolvidas na operação.
inúteis para a pesquisa (Banks
et al., 2010).                   3.1.3 Composição dos Meios

                                         As tropas Azul e Vermelha empregadas na simulação
                                 construtiva, por possuírem a mesma natureza, foram organizadas
                                 conforme o quadro 1, a seguir:

 222                                                                                  POCHMANN, P. G. C.
                                                            PESQUISA COM SIMULAÇÃO CONSTRUTIVA

                     FORÇA AZUL                  FORÇA VERMELHA
                                              Um Regimento de Cavalaria
      Uma Brigada de Infantaria Mecanizada,
                                               Mecanizado, composto
        composta por três Batalhões de
                                               por três Esquadrões de
            Infantaria Mecanizados.
                                               Cavalaria Mecanizados.
      Um Grupo de Artilharia de Campanha
      Mecanizado (155 mm autopropulsado).
          Um Batalhão de Engenharia de
             Combate Mecanizado.
        Um Batalhão Logístico Mecanizado.
           Um Esquadrão de Cavalaria          Um Esquadrão de Comando
                 Mecanizado.                    e Apoio Mecanizado.
        Uma Companhia de Comunicações
                Mecanizada.
        Uma Bateria de Artilharia Antiaérea
                  Mecanizada.
                                                                          Descrição sumária
      Uma Companhia Anticarro Mecanizada
                                                                          dos agentes, seus
         (presente em apenas uma das
                                                                          comportamentos, o ambiente e
                  simulações).
                                                                          as regras

      Quadro 1. Composição dos Meios das Forças Azul e Vermelha.

     3.1.4 Linhas de Ação (LA)

             Foram estabelecidas duas Linhas de Ação, inseridas no
     mesmo contexto operacional da simulação construtiva. Elas se
     distinguem porque somente na primeira simulação a Companhia
     Anticarro Mecanizada foi empregada, conforme mostrado nas
     Figuras 3 e 4.

      Figura 3. Modelagem da simulação para a Linha de Ação Nº 1.

POCHMANN, P. G. C.                                                                             223

Software utilizado (descrever    Figura 4. Modelagem da simulação para a Linha de Ação Nº 2.
um pouco mais o software
utilizado, sua origem e
justificativa de escolha).      3.2 O Software COMBATER2

                                         A plataforma SWORD é um sistema de simulação
                                construtiva desenvolvido pela empresa francesa MASA Group. O
                                SWORD tem a capacidade de realizar simulação construtiva até
                                o nível Brigada, podendo ser excepcionalmente utilizado no nível
                                Divisão de Exército. Este sistema permite o adestramento de duas
                                formas: uma voltada para o auto-adestramento, o adestramento de
                                Postos de Comando e exercícios cooperativos; e outra destinada à
                                visualização de operações terrestres, à apresentação de análises
                                de Linhas de Ação e ao apoio à tomada de decisão (Cunha, 2011).
                                         Em 2013, o Comando de Operações Terrestres adquiriu o
                                SWORD e, após uma significativa customização com elementos do
                                Exército Brasileiro, como tropas, táticas e equipamentos, passou a
                                ser chamado de COMBATER, sendo este o seu grande diferencial
                                em relação a outros sistemas não customizados. Todas as tabelas
                                e parâmetros de probabilidade de acerto e dano utilizados são
                                nativos deste banco de dados customizado e validado pelo Exército
                                Brasileiro. Nesse contexto, o software francês passou a ser utilizado
                                no adestramento das Brigadas de emprego estratégico e, mais
                                recentemente, pelas Forças de Prontidão do Exército Brasileiro
                                (Menegaz, 2020).
                                         Ademais, segundo Cunha (2011), utilizando como exemplo
                                o sistema francês MASA SWORD, as possibilidades da Simulação

 224                                                                                   POCHMANN, P. G. C.
                                                            PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     Construtiva no adestramento de estados-maiores são inúmeras.
     Ela proporciona o adestramento individual, exercícios cooperativos
     e o adestramento para o exame de situação do comandante tático,
     permitindo a interação entre o comandante e seu estado-maior.
                                                                           Indicadores: Tempo médio
     Além disso, inclui modelos para desastres, incêndios, inundações e
                                                                           de resposta, percentual de
     contaminação química, biológica e nuclear.                            vítimas atendidas dentro de um
                                                                           tempo X.
     3.3 Indicadores Utilizados para Examinar as Linhas de Ação

              Para analisar e comparar as diferentes linhas de
     ação, foram selecionados seis indicadores que representam a
     componente “baixas de viaturas blindadas inimigas”, de acordo com
     a Diretriz de Planejamento do Comandante da Brigada de Infantaria
     Mecanizada Azul, cujo objetivo era maximizar as baixas nas tropas
     blindadas inimigas. A seleção desses indicadores se justifica por
     sua relevância tática e impacto direto no sucesso da missão.
              O foco nas baixas de blindados é crucial pois, em um
     cenário de combate mecanizado, a neutralização das viaturas
     blindadas inimigas não apenas reduz a capacidade ofensiva do
     adversário, mas também assegura maior mobilidade e segurança
     para as tropas próprias. As viaturas blindadas inimigas representam
     uma das maiores ameaças às forças de combate mecanizadas,
     tanto por seu poder de fogo quanto por sua resiliência no campo de
     batalha (Brasil, 2021).
              Além disso, a defesa anticarro desempenha um papel central
     na doutrina militar de operações ofensivas, conforme delineado no
     Manual de Campanha da Brigada de Infantaria Mecanizada (2021),
     que enfatiza a importância de cobrir as prováveis vias de acesso
     das viaturas blindadas inimigas. Portanto, a capacidade de uma
     Companhia Anticarro Mecanizada de infligir baixas substanciais
     às viaturas blindadas inimigas é crucial para o sucesso da missão,
     contribuindo diretamente para a neutralização dessas ameaças e
     para a proteção das tropas envolvidas (Brasil, 2021).
              Dessa forma, os seis indicadores foram cuidadosamente
     selecionados com base em sua relevância para a missão geral
     da Brigada de Infantaria Mecanizada e para a eficácia tática da
     companhia anticarro. Eles representam a capacidade da companhia
     de potencializar o poder de combate e a proteção da brigada,
     permitindo uma ação mais eficaz e segura contra as forças blindadas
     inimigas, que, se não neutralizadas, poderiam comprometer o
     sucesso da operação ofensiva e das fases subsequentes da missão.

POCHMANN, P. G. C.                                                                                225

DICA METODOLÓGICA -
                                3.4 Análise dos Dados
ANÁLISE DE DADOS: Nunca
tire conclusões baseando-se              A fim de verificar os ganhos resultantes do emprego da
apenas no empirismo visual
                                Companhia Anticarro Mecanizada, os dados das simulações no
(olhar a tela da animação do
simulador). A extração dos
                                Sistema COMBATER foram comparados e discutidos. Os dados
dados brutos e a aplicação      brutos foram normalizado e convertidos em percentuais para facilitar
de testes de hipótese e de      o entendimento, com base nos valores máximos de cada indicador.
rigor estatístico (como Teste
                                         Para avaliar com precisão as diferenças entre as linhas de
T, p-value e d de Cohen)
garantem que a superioridade
                                ação, foi verificado o valor-p (p-value) e avaliado o tamanho do efeito
de um cenário sobre o outro é   (effect size) por meio da estatística d de Cohen. Todos os testes
matematicamente significante    foram realizados no software Jamovi, e o nível de significância foi
e não fruto do acaso (Da
                                estabelecido em 95% (alfa = 0,05)
Silva; Pochmann; Neves,
2025; Rolenec; Vlkovsky;
Sedlacek, 2023).

                                        .
                                        .
                                        .

                                4.2 Análise dos Resultados da Simulação

                                         Após a execução de 50 rodadas de simulação para cada
                                Linha de Ação (LA), os dados brutos foram submetidos a testes
                                de hipóteses para verificar se as diferenças observadas entre
                                os cenários possuíam relevância estatística. O foco da análise
                                recaiu sobre o indicador “Baixas de Viaturas Blindadas Inimigas”,
                                variável central para a Diretriz de Planejamento do Comandante da
                                Brigada Azul.
                                         Os resultados demonstram que a Linha de Ação Nº 1 (com
                                o emprego da Companhia Anticarro) apresentou um desempenho
                                superior em todos os indicadores de destruição de meios
                                blindados. No indicador principal de “Carros de Combate Inimigos
                                Neutralizados”, a LA 1 obteve uma média de destruição 28% superior
                                à LA 2. A aplicação do Teste t de Student confirmou a significância
                                desta diferença (p < 0,01), indicando que a probabilidade de tal
                                resultado ter ocorrido ao acaso é inferior a 1%. Complementarmente,
                                o cálculo do tamanho do efeito por meio do d de Cohen resultou em
                                1,15, o que, na escala de referência, é considerado um efeito “muito
                                grande”. Isso sugere que a presença da Companhia Anticarro não
                                apenas causa uma diferença estatística, mas exerce um impacto
                                tático profundo e prático no desfecho do combate.
                                         A interpretação qualitativa dos logs de simulação revelou
                                que a superioridade da LA 1 deveu-se à capacidade da Companhia
                                Anticarro em estabelecer zonas de destruição em profundidade,

 226                                                                                     POCHMANN, P. G. C.
                                                              PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     engajando as viaturas blindadas inimigas antes que estas pudessem       DICA METODOLÓGICA
     entrar no alcance de tiro efetivo dos fuzileiros mecanizados da         - CICLO V&V: Separe
     Brigada Azul. Esse distanciamento aumentou a sobrevivência das          claramente os dois conceitos.
                                                                             A ‘Verificação’ garante que
     tropas próprias e desarticulou o ímpeto ofensivo da Força Vermelha,
                                                                             o modelo foi construído
     confirmando a tese de que a especialização anticarro potencializa a     corretamente no software,
     proteção da força em operações ofensivas.                               sem erros (bugs) lógicos ou
                                                                             obstáculos irreais importados
     4.2.1 Validação, Verificação e Limitações do Exemplo                    no mapa. A ‘Validação’
                                                                             responde se o modelo
                                                                             construído representa a
             Para garantir que os resultados gerados no COMBATER             realidade militar de forma
     possuam fidedignidade, o modelo foi submetido a um processo             razoável para os fins
     de validação de face, no qual instrutores e especialistas em tática     propostos, sendo vital o
                                                                             emprego de Especialistas
     da EsAO revisaram as ordens emitidas e os comportamentos
                                                                             no Assunto (Subject Matter
     das unidades simuladas. A convergência entre os resultados da           Experts) para atestar as ações
     simulação e a experiência profissional dos especialistas reforçou       e mitigar o viés do pesquisador
     a validade conceitual do experimento. Antes da validação de face,       (Sokolowski; Banks, 2009;
                                                                             Banks et al., 2010).
     o modelo passou por uma etapa de verificação (depuração) para
     assegurar que não havia erros de configuração de parâmetros
     ou obstáculos invisíveis no terreno importado (XANXERÊ-SE),             DICA METODOLÓGICA
     garantindo que o software executasse as regras logicamente              - ESTOCASTICIDADE:
             Contudo, é fundamental reconhecer as limitações inerentes       O combate possui muitos
                                                                             eventos probabilísticos (taxas
     a este estudo de caso. A simulação foi conduzida sob condições
                                                                             de acerto, falhas, atrito).
     climáticas ideais e em um terreno com visibilidade desimpedida,         Por isso, rodar o simulador
     o que pode ter inflado a eficácia dos sistemas de armas anticarro.      apenas uma vez fornecerá
     Além disso, o software utiliza modelos probabilísticos para o cálculo   uma amostra sem validade. É
                                                                             obrigatório planejar um número
     de danos que, embora baseados em tabelas técnicas, simplificam
                                                                             adequado de “replicações
     a complexidade do “atrito” no campo de batalha real. Portanto,          independentes”, utilizando
     as conclusões aqui apresentadas devem ser interpretadas como            diferentes sementes para
     tendências doutrinárias e não como previsões determinísticas para       alimentar o gerador de
                                                                             números pseudoaleatórios
     qualquer cenário real de combate.
                                                                             em cada rodada, garantindo
                                                                             amostras estatisticamente
     4.2.2 Contribuições da Simulação para a Pesquisa no Exemplo             válidas para a análise (Law,
                                                                             2015; Banks et al., 2010)
             O uso da simulação construtiva neste exemplo permitiu
     a realização de uma pesquisa experimental que seria inviável
     no mundo real devido aos custos proibitivos e aos riscos de
     segurança. O ambiente virtual forneceu um laboratório controlado
     onde foi possível isolar a variável “Companhia Anticarro” e repetir o
     experimento dezenas de vezes sob condições idênticas, utilizando
     diferentes sementes de números aleatórios para cada repetição a
     fim de garantir a independência estatística das amostras, isolando
     a estocasticidade inerente ao COMBATER, algo impossível em um
     exercício de campanha tradicional.

POCHMANN, P. G. C.                                                                                   227

 DICA METODOLÓGICA -
                                             As principais contribuições geradas por este método
 OBJETIVO DA PESQUISA               incluem a geração de insights quantitativos sobre a economia de
 COM SIMULAÇÃO: O                   forças e a otimização do poder de combate. A simulação permitiu
 propósito final de utilizar o
                                    visualizar graficamente o “ponto de culminação” do ataque inimigo
 simulador como “laboratório
 controlado” não é prever
                                    em função do desgaste causado pelos meios anticarro, fornecendo
 o futuro determinístico do         dados robustos que podem embasar futuras revisões de manuais
 combate em qualquer cenário        de campanha e apoiar o processo de tomada de decisão dos
 real, mas sim extrair evidências
                                    comandantes em níveis táticos e operacionais. Em última análise, a
 baseadas em tendências
 robustas. A simulação permite
                                    simulação transformou uma intuição doutrinária em uma evidência
 visualizar o fenômeno, testar      científica quantificável.
 as variáveis operacionais
 e subsidiar o processo de
 tomada de decisão ou revisões
 de manuais com segurança
 matemática (Havlík et al., 2022;
 Law, 2015

CONCLUSÃO
       A simulação construtiva consolida-se como uma ferramenta metodológica
indispensável para a pesquisa científica contemporânea, transcendendo o
adestramento tático tradicional para se afirmar como um laboratório virtual
rigoroso. Ao longo deste capítulo, ficou evidente que a utilização de sistemas como
o COMBATER e o MASA SWORD permite o teste de hipóteses e a validação
de conceitos operacionais sob condições que seriam impossíveis de replicar no
mundo real. Esta abordagem não é apenas uma tendência nacional, mas uma
prática consolidada em centros de excelência internacionais.
       Estudos desenvolvidos na Tchéquia, nomeadamente na Universidade de
Defesa em Brno, exemplificam o rigor científico que a simulação pode conferir
às ciências militares. Autores como Rolenec, Vlkovsky e Sedlacek (2023)
demonstraram a eficácia do MASA SWORD na verificação de cenários de suporte
de engenharia, enquanto as investigações de Hoika e Korecki (2025) sobre a
integração da defesa antiaérea evidenciaram como a simulação permite quantificar
o aumento da sobrevivência das tropas através de métricas estatísticas robustas.
Complementarmente, os trabalhos de Havlík et al. (2022) reforçam o papel destas
plataformas como ambientes complexos para a produção de conhecimento
auditável, validando modelos matemáticos que seriam de difícil verificação em
exercícios de campo.
       A robustez deste método reside no compromisso do investigador com a
transparência e a precisão. O sucesso da aplicação desta ferramenta depende

  228                                                                                    POCHMANN, P. G. C.
                                                     PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     do equilíbrio constante entre a simplificação necessária para a modelagem e
     a fidedignidade requerida para a validade dos resultados. Como observado, o
     emprego da simulação exige uma mentalidade científica que prioriza a verificação
     sistemática e a validação por especialistas, garantindo que as tendências
     observadas no ambiente sintético possuam uma correspondência útil com a
     realidade. Ao observar os cuidados contra vieses e erros comuns de amostragem, o
     investigador transforma dados brutos de combate em evidências científicas sólidas.
            Em última análise, a simulação construtiva não substitui o julgamento crítico,
     mas potencia-o por meio de insights quantificáveis. Ela permite que a tomada de
     decisão e o refinamento da doutrina sejam embasados em análises exaustivas de
     cenários e probabilidades, em vez de dependerem exclusivamente da intuição ou
     de precedentes históricos isolados. Este capítulo oferece, assim, a base para que
     novos investigadores explorem o ambiente simulado como um catalisador para a
     inovação e para a excelência na produção de conhecimento em Defesa.

     SOBRE O AUTOR
     Pablo Gustavo Cogo Pochmann, Mestre em Engenharia de Defesa (IME).
     Mestre em Ciências Militares (EsAO).
     Chefe da Seção de Pós-Graduação (SPG) da Escola de Aperfeiçoamento de
     Oficiais (EsAO) do Exército Brasileiro, Rio de Janeiro, Brasil.
     E-mail: pochmann.pablo@eb.mil.br

     COMO CITAR ESTE CAPÍTULO
     POCHMANN, P. G. C. Pesquisa com Simulação Construtiva. In: NEVES, E. B.;
     POCHMANN, P. G. C.; SCHMIDT, R. P. B. (org.). Abordagens metodológicas em
     Ciências Militares. Rio de Janeiro: Traço Leal Comunicação, 2026. p. 199-232.

     REFERÊNCIAS
     ALMEIDA, A. M. et al. The use of constructive simulation based on COMBATER
     software to enhance the learning of Brazilian army officers at the tactical
     level. In: 2023 15th IEEE International Conference on Industry Applications
     (INDUSCON). IEEE, 2023.

     BANKS, J. et al. Discrete-Event System Simulation. 5. ed. Upper Saddle River,
     NJ: Pearson, 2010.

POCHMANN, P. G. C.                                                                  229

BOX, G. E. P. Robustness in the strategy of scientific model building. In:
LAUNER, R. L.; WILKINSON, G. N. (eds.). Robustness in Statistics. New York:
Academic Press, 1979. p. 201-236.

DA SILVA, J. P. M. V.; POCHMANN, P. G. C.; NEVES, E. B. Maximizing Tactical
Success: The Impact of the Mechanized Anti-Tank Company in a Coordinated
Attack Assessed Through Constructive Simulation. In: Proceedings of the 15th
International Conference on Simulation and Modeling Methodologies, Technologies
and Applications (SIMULTECH 2025).

EINSTEIN, Albert. On the Method of Theoretical Physics. Philosophy of Science,
Chicago, v. 1, n. 2, p. 163-169, 1934.

FALCÃO, J. P. et al. Implementation of Armored Personnel Carriers in the
Employment of the Armored Task Force as a Strategy for Achieving
Superiority in Unit-Level Engagements within the Brazilian Army. In: 2025 16th
IEEE International Conference on Industry Applications (INDUSCON). IEEE, 2025.

FOUNTA, K. Modeling and Simulating of Combat: An Empirical Application.
In: Proceedings of the 15th International Conference on Simulation and Modeling
Methodologies, Technologies and Applications (SIMULTECH 2025).

HAVLÍK, T. et al. Wargaming Simulator MASA SWORD for Training and
Education of Czech Army Officers. In: Proceedings of the 16th European
Conference on Games Based Learning (ECGBL). 2022.

HOIKA, T.; KORECKI, Z. The Effect of Air Defence Support on the Offensive
Operation of the Battalion Task Force. In: 2025 International Conference on
Military Technologies (ICMT). IEEE, 2025.

LAW, A. M. Simulation Modeling and Analysis. 5. ed. New York: McGraw-Hill
Education, 2015.

MORGERO, C. A. de F. Sistema de Simulação Militar de Operações Conjuntas
para o nível Operacional: uma proposta de Requisitos Operacionais Conjuntos.

 230                                                                POCHMANN, P. G. C.
                                                    PESQUISA COM SIMULAÇÃO CONSTRUTIVA

     2016. Tese (Doutorado em Ciências Militares) – Escola de Comando e Estado-
     Maior do Exército, Rio de Janeiro, 2016.

     NEYLAND, D. L. Virtual combat: a guide to distributed interactive simulation.
     Mechanicsburg: Stackpole Books, 1997.

     NOHEL, J. et al. Possibilities of Modelling the Coordinated Maneuver of
     Units in Difficult Terrain Conditions. In: 2021 Communication and Information
     Technologies (KIT). IEEE, 2021.

     ROLENEC, O.; VLKOVSKY, M.; SEDLACEK, M. The Use of Constructive
     Simulation in the Educational Process of Military Engineers. In: 2023 27th
     International Conference on Circuits, Systems, Communications and Computers
     (CSCC). IEEE, 2023.

     SCHMIDT, R. Possibilidades e limitações da simulação para o ensino tático
     de artilharia de campanha. 2017. Trabalho Acadêmico (Especialização em
     Ciências Militares) – Escola de Aperfeiçoamento de Oficiais, Rio de Janeiro, 2017.

     SCHWAB, K. A Quarta Revolução Industrial. São Paulo: Edipro, 2016.

     SOKOLOWSKI, J. A.; BANKS, C. M. (ed.). Principles of Modeling and Simulation:
     A Multidisciplinary Approach. Hoboken, NJ: John Wiley & Sons, 2009.

     TOLK, A. Engineering Principles of Combat Modeling and Distributed
     Simulation. Hoboken, NJ: John Wiley & Sons, 2012.

     TOLK, A. Tutorial on the engineering principles of combat modeling and
     distributed simulation. In: ROEDER, T. M. K. et al. (Ed.). Proceedings of the
     2016 Winter Simulation Conference. Piscataway, NJ: IEEE Press, 2016. p. 255-
     269. DOI: 10.1109/WSC.2016.7822094.

     TOLK, A. Tutorial on the engineering principles of combat modeling and
     distributed simulation. In: MUSTAFEE, N. et al. (Ed.). Proceedings of the 2019
     Winter Simulation Conference, 2019.

POCHMANN, P. G. C.                                                                231

WINSBERG, Eric. Science in the Age of Computer Simulation. Chicago:
University of Chicago Press, 2010.

ZEIGLER, B. P.; MUZY, A.; KOFMAN, E. Theory of Modeling and Simulation:
Discrete Event and Iterative System Computational Foundations. 3. ed. London:
Academic Press, 2019.

 232                                                              POCHMANN, P. G. C.
                                                                                        NEV
                                                                                        POC
                                                                                        SCH
