export const basePrompt = `
  Eu quero estudar a seguinte matéria seguindo o cronograma fornecido abaixo, quando eu digitar "iniciar", comece me explicando o assunto 1, depois o assunto 2, e assim por diante, até terminar toda a matéria do cronograma. A cada mensagem explicando a matéria, pergunte se eu tenho alguma dúvida ou faça uma pergunta sobre o assunto explicado, e quando eu responder me fale se está correto ou não. Depois que corrigir minha resposta, me pergunte se eu quero continuar, aprofundar no assunto ou tirar alguma dúvida da matéria, e quando eu digitar "continuar", quero que continue a matéria seguindo a ordem do cronograma de estudos. Continue me explicando a matéria e me fazendo perguntas até que toda a matéria tenha sido aprendida. Torne o aprendizado o mais ativo possível, intercalando entre parte teórica e parte prática. Me explique cada tópico detalhadamente, pois o vestibular que vou fazer cobra coisas específicas de cada tópico. Sempre continue me explicando a matéria, me fazendo perguntas, revisando e aprofundando o conteúdo. Não me explique todo o tópico em uma só mensagem, pois quero aprender de forma muito aprofundada cada tópico. Se a pessoa desviar do assunto, não responda e volte ao assunto da matéria. Garante que a conversa nunca fuja do assunto.
`

type ContentType = {
  id: string,
  subject: string,
  subjectId: string,
  topic: string,
  description: string,
  schedule: string,
}

const biologia1: ContentType = {
  id: 'ecologia-e-meio-ambiente',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Ecologia e Meio Ambiente',
  description: 'Estudo das interações entre organismos e o meio ambiente, abordando ecossistemas, ciclos biogeoquímicos, biodiversidade, e os impactos das atividades humanas no planeta.',
  schedule: `
    Disciplina: Biologia
    Matéria: Ecologia e Meio Ambiente

    Cronograma de estudos por tópicos:
    1 - Conceitos básicos de ecologia
    2- Níveis de organização biológica (populações, comunidades, ecossistemas, biomas)
    3 - Fluxo de energia no ecossistema (cadeias e teias alimentares)
    4 - Ciclos biogeoquímicos (carbono, oxigênio, nitrogênio, água)
    5 - Revisão dos conteúdos aprendidos anteriormente
    6 - Diversidade biológica e sua importância
    7 - Principais biomas do mundo e do Brasil
    8 - Serviços ecossistêmicos e sua importância para a humanidade
    9 - Ameaças à biodiversidade (perda de habitat, poluição, espécies invasoras, mudanças climáticas)
    10 - Estratégias de conservação da biodiversidade (áreas protegidas, corredores ecológicos)
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Aquecimento global e mudanças climáticas
    13 - Poluição da água, do ar e do solo
    14 - Desmatamento e degradação de terras
    15 - Escassez de água e gestão de recursos hídricos
    16 - Sustentabilidade e desenvolvimento sustentável
    17 - Revisão dos conteúdos aprendidos anteriormente
  `,
}

const biologia2: ContentType = {
  id: 'citologia',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Citologia',
  description: 'Análise das células, suas estruturas, funções e processos, incluindo transporte celular, ciclo celular, síntese de proteínas, e suas aplicações na biotecnologia e medicina.',
  schedule: `
    Disciplina: Biologia
    Matéria: Citologia

    Cronograma de estudos por tópicos:
    1 - Conceitos básicos de citologia
    2 - Estrutura e função das células procarióticas e eucarióticas
    3 - Membrana plasmática e transporte celular (difusão, osmose, transporte ativo)
    4 - Organelas celulares e suas funções (núcleo, mitocôndrias, ribossomos, etc.)
    5 - Revisão dos conteúdos aprendidos anteriormente
    6 - Ciclo celular: interfase, mitose e meiose
    7 - Controle do ciclo celular e apoptose
    8 - Síntese de proteínas e o papel do DNA e RNA
    9 - Metabolismo celular: catabolismo e anabolismo
    10 - Fotossíntese e respiração celular
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Diferenciação celular e tipos de células especializadas
    13 - Células-tronco e potencial terapêutico
    14 - Câncer: alterações celulares e mecanismos de tumorogênese
    15 - Tecnologia celular: cultura de células, clonagem e engenharia genética
    16 - Aplicações da citologia na biotecnologia e na medicina
    17 - Revisão dos conteúdos aprendidos anteriormente
  `,
}

const biologia3: ContentType = {
  id: 'genetica',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Genética',
  description: 'Exploração da hereditariedade e variação genética, cobrindo DNA, RNA, leis de Mendel, mutações, e as aplicações da genética na biotecnologia e medicina.',
  schedule: `
    Disciplina: Biologia
    Matéria: Genética

    Cronograma de estudos por tópicos:
    1 - Introdução à genética: conceitos básicos
    2 - Estrutura e função do DNA e RNA
    3 - Replicação do DNA, transcrição e tradução
    4 - Revisão dos conteúdos aprendidos anteriormente
    5 - Leis de Mendel e padrões de herança
    6 - Herança ligada ao sexo e determinação do sexo
    7 - Mutação genética e suas causas
    8 - Engenharia genética e clonagem
    9 - Revisão dos conteúdos aprendidos anteriormente
    10 - Genética de populações e evolução
    11 - Análise de pedigrees e herança de doenças genéticas
    12 - Polimorfismos genéticos e sua importância
    13 - Genômica e biotecnologia
    14 - Edição de genes e CRISPR
    15 - Ética e implicações sociais da genética
    16 - Aplicações da genética na medicina e agricultura
    17 - Revisão dos conteúdos aprendidos anteriormente
  `,
}

const biologia4: ContentType = {
  id: 'evolucao',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Evolução',
  description: 'Evolução é o estudo das mudanças nas características hereditárias das populações ao longo do tempo. Essa matéria aborda as teorias evolutivas, os mecanismos de evolução, as evidências que sustentam o processo evolutivo, e a relação entre evolução e biodiversidade.',
  schedule: `
    Disciplina: Biologia
    Matéria: Evolução

    Cronograma de estudos por tópicos:
    1 - Introdução à teoria da evolução
    2 - Lamarckismo e Darwinismo: comparações e diferenças
    3 - Seleção natural e adaptação
    4 - Revisão dos conteúdos aprendidos anteriormente
    5 - Evidências da evolução: fósseis, biogeografia, anatomia comparada
    6 - Genética de populações: conceito de pool gênico
    7 - Mutações e variabilidade genética
    8 - Especiação: mecanismos de formação de novas espécies
    9 - Revisão dos conteúdos aprendidos anteriormente
    10 - Deriva genética e efeito fundador
    11 - Coevolução e seleção sexual
    12 - Evolução convergente e divergente
    13 - Padrões evolutivos: gradualismo e equilíbrio pontuado
    14 - Evolução humana: da origem dos primatas aos Homo sapiens
    15 - A evolução e a biodiversidade
    16 - Aplicações da teoria da evolução na biotecnologia e medicina
    17 - Revisão dos conteúdos aprendidos anteriormente
  `,
}

const biologia5: ContentType = {
  id: 'fisiologia-humana',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Fisiologia Humana',
  description: 'Fisiologia Humana é o estudo do funcionamento dos sistemas do corpo humano e como eles interagem para manter a homeostase. A matéria abrange os principais sistemas fisiológicos, como o sistema nervoso, endócrino, cardiovascular, respiratório, digestivo, entre outros, explorando suas funções, regulações e interações.',
  schedule: `
    Disciplina: Biologia
    Matéria: Fisiologia Humana

    Cronograma de estudos por tópicos:
    1 - Introdução à fisiologia humana e homeostase
    2 - Sistema nervoso: neurônios, sinapses, e funções do sistema nervoso central e periférico
    3 - Sistema endócrino: glândulas e hormônios, mecanismos de ação hormonal
    4 - Revisão dos conteúdos aprendidos anteriormente
    5 - Sistema cardiovascular: estrutura do coração, circulação sanguínea, regulação da pressão arterial
    6 - Sistema respiratório: mecânica respiratória, trocas gasosas, controle da respiração
    7 - Sistema digestivo: digestão, absorção de nutrientes, controle e regulação digestiva
    8 - Sistema excretor: funções dos rins, filtração, reabsorção e excreção
    9 - Revisão dos conteúdos aprendidos anteriormente
    10 - Sistema imunológico: resposta imune inata e adaptativa, imunidade humoral e celular
    11 - Sistema reprodutor: fisiologia da reprodução, hormônios sexuais, ciclo menstrual
    12 - Sistema tegumentar: pele e anexos cutâneos, funções e regulação
    13 - Sistema muscular: tipos de músculos, contração muscular, regulação e controle
    14 - Sistema esquelético: estrutura óssea, função e remodelação dos ossos
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Regulação da temperatura corporal e equilíbrio hídrico
    17 - Revisão final e integração dos sistemas fisiológicos
  `,
}

const biologia6: ContentType = {
  id: 'botanica',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Botânica',
  description: 'Botânica é o estudo das plantas, abrangendo desde a morfologia e fisiologia vegetal até a ecologia e evolução das espécies. A matéria inclui a análise das estruturas vegetativas e reprodutivas, processos metabólicos, e a importância das plantas nos ecossistemas e para a humanidade.',
  schedule: `
    Disciplina: Biologia
    Matéria: Botânica

    Cronograma de estudos por tópicos:
    1 - Introdução à botânica e classificação das plantas
    2 - Morfologia vegetal: raízes, caules, folhas, flores, frutos e sementes
    3 - Fisiologia vegetal: fotossíntese, respiração e transpiração
    4 - Revisão dos conteúdos aprendidos anteriormente
    5 - Nutrição e transporte de substâncias nas plantas
    6 - Reprodução das plantas: reprodução sexuada e assexuada, ciclo de vida das angiospermas e gimnospermas
    7 - Hormônios vegetais: auxinas, giberelinas, citocininas, etileno e ácido abscísico
    8 - Fotoperiodismo e respostas vegetais ao ambiente
    9 - Revisão dos conteúdos aprendidos anteriormente
    10 - Evolução das plantas: das algas verdes às angiospermas
    11 - Diversidade vegetal: briófitas, pteridófitas, gimnospermas e angiospermas
    12 - Ecologia vegetal: interações planta-ambiente, sucessão ecológica
    13 - Biomas vegetais: principais biomas e suas características
    14 - Importância econômica das plantas: agricultura, indústria e medicina
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Conservação da flora e uso sustentável dos recursos vegetais
    17 - Revisão final e integração dos conteúdos de botânica
  `,
}

const biologia7: ContentType = {
  id: 'zoologia',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Zoologia',
  description: 'Zoologia é o estudo dos animais, incluindo sua classificação, morfologia, fisiologia, comportamento e ecologia. A matéria explora a diversidade do reino animal, abordando desde os invertebrados até os vertebrados, e a importância dos animais nos ecossistemas.',
  schedule: `
    Disciplina: Biologia
    Matéria: Zoologia

    Cronograma de estudos por tópicos:
    1 - Introdução à zoologia e classificação dos animais
    2 - Invertebrados: características gerais, principais filos (poríferos, cnidários, platelmintos, nematelmintos, anelídeos, moluscos, artrópodes, equinodermos)
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Vertebrados: características gerais e classificação (peixes, anfíbios, répteis, aves, mamíferos)
    5 - Sistema circulatório e respiratório nos animais
    6 - Sistema digestório e excretório nos animais
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Reprodução e desenvolvimento animal
    9 - Comportamento animal: instinto, aprendizado, comunicação
    10 - Evolução dos animais: teorias e evidências
    11 - Relações ecológicas: predatismo, parasitismo, mutualismo
    12 - Adaptações dos animais ao ambiente
    13 - Biodiversidade e conservação dos animais
    14 - Importância dos animais para os ecossistemas e para o ser humano
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Impactos ambientais e ameaças à fauna
    17 - Revisão final e integração dos conteúdos de zoologia
  `,
}

const biologia8: ContentType = {
  id: 'microbiologia',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Microbiologia',
  description: 'Microbiologia é o estudo dos microrganismos, incluindo bactérias, vírus, fungos e protozoários. A matéria explora a morfologia, fisiologia, genética, ecologia e patogenicidade desses organismos, bem como suas aplicações na medicina, agricultura e indústria.',
  schedule: `
    Disciplina: Biologia
    Matéria: Microbiologia

    Cronograma de estudos por tópicos:
    1 - Introdução à microbiologia: história e importância
    2 - Classificação e morfologia dos microrganismos: bactérias, vírus, fungos e protozoários
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Estrutura e função das células procarióticas e eucarióticas
    5 - Crescimento e reprodução dos microrganismos
    6 - Genética microbiana: mutação, recombinação e transferência genética
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Ecologia microbiana: microrganismos no ambiente e suas interações
    9 - Patogenicidade e doenças infecciosas: mecanismos de infecção e resistência
    10 - Sistemas imunológicos e defesa contra microrganismos
    11 - Controle de microrganismos: esterilização, desinfecção, antibióticos e resistência microbiana
    12 - Aplicações da microbiologia: biotecnologia, indústria alimentícia, agricultura e medicina
    13 - Revisão dos conteúdos aprendidos anteriormente
    14 - Microbiologia ambiental e bioremediação
    15 - Virologia: características e ciclo de vida dos vírus
    16 - Microbiologia clínica: diagnóstico e tratamento de doenças infecciosas
    17 - Revisão final e integração dos conteúdos de microbiologia
  `,
}

const biologia9: ContentType = {
  id: 'genetica',
  subject: 'Biologia',
  subjectId: 'biologia',
  topic: 'Genética',
  description: 'Genética é o estudo da hereditariedade e da variação dos organismos. A matéria abrange os princípios da transmissão genética, a estrutura e função dos genes, a biotecnologia e suas aplicações, e a importância da genética na evolução e saúde humana.',
  schedule: `
    Disciplina: Biologia
    Matéria: Genética

    Cronograma de estudos por tópicos:
    1 - Introdução à genética: conceitos básicos e terminologias
    2 - Estrutura e função do DNA e RNA
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Replicação do DNA, transcrição e tradução
    5 - Leis de Mendel e herança mendeliana
    6 - Herança não mendeliana: codominância, dominância incompleta e herança ligada ao sexo
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Mutação genética: tipos, causas e efeitos
    9 - Engenharia genética: clonagem, transgenia e CRISPR
    10 - Genética de populações e evolução
    11 - Genômica e sequenciamento de DNA
    12 - Análise de pedigrees e herança de doenças genéticas
    13 - Revisão dos conteúdos aprendidos anteriormente
    14 - Aplicações da genética na medicina: diagnóstico e terapia gênica
    15 - Bioética e implicações sociais da genética
    16 - Genética e biotecnologia na agricultura e indústria
    17 - Revisão final e integração dos conteúdos de genética
  `,
}

const portugues1: ContentType = {
  id: 'generos-textuais',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Gêneros Textuais',
  description: 'Gêneros Textuais é o estudo das diferentes formas de textos que circulam na sociedade, cada um com sua estrutura, função e características específicas. A matéria explora a diversidade dos gêneros, como narrativos, descritivos, argumentativos, e suas aplicações em diferentes contextos de comunicação.',
  schedule: `
    Disciplina: Português
    Matéria: Gêneros Textuais

    Cronograma de estudos por tópicos:
    1 - Introdução aos gêneros textuais: conceitos e classificações
    2 - Gêneros narrativos: conto, crônica, fábula, e novela
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Gêneros descritivos: descrição objetiva e subjetiva
    5 - Gêneros argumentativos: dissertação, artigo de opinião, carta argumentativa
    6 - Gêneros expositivos: relatório, resenha, e resumo
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Gêneros injuntivos: manual de instruções, receita, regras de jogo
    9 - Gêneros digitais: blogs, e-mails, posts em redes sociais
    10 - Análise e produção de gêneros textuais diversos
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Adequação dos gêneros textuais ao contexto comunicativo
    13 - Multimodalidade nos gêneros textuais: uso de imagens, som e texto
    14 - Gêneros textuais na mídia: propaganda, notícia, reportagem
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Estratégias de leitura e interpretação de gêneros textuais
    17 - Revisão final e integração dos conteúdos de gêneros textuais
  `,
}

const portugues2: ContentType = {
  id: 'funcoes-da-linguagem',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Funções da Linguagem',
  description: 'Funções da Linguagem é o estudo das diferentes maneiras pelas quais a linguagem pode ser utilizada para alcançar determinados objetivos de comunicação. A matéria explora as seis principais funções da linguagem (referencial, emotiva, conativa, fática, metalinguística e poética), suas características e exemplos práticos de cada uma.',
  schedule: `
    Disciplina: Português
    Matéria: Funções da Linguagem

    Cronograma de estudos por tópicos:
    1 - Introdução às funções da linguagem: conceitos e importância
    2 - Função referencial: objetividade e transmissão de informações
    3 - Função emotiva: expressão de sentimentos e emoções
    4 - Revisão dos conteúdos aprendidos anteriormente
    5 - Função conativa ou apelativa: influência e persuasão do receptor
    6 - Função fática: estabelecimento e manutenção da comunicação
    7 - Função metalinguística: reflexão sobre a própria linguagem
    8 - Revisão dos conteúdos aprendidos anteriormente
    9 - Função poética: estética e criação de efeitos expressivos
    10 - Identificação das funções da linguagem em textos variados
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Aplicação das funções da linguagem em diferentes contextos comunicativos
    13 - Análise de textos publicitários e suas funções predominantes
    14 - Funções da linguagem em mídias digitais e interativas
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Estratégias para reconhecer e utilizar as funções da linguagem na produção textual
    17 - Revisão final e integração dos conteúdos de funções da linguagem
  `,
}

const portugues3: ContentType = {
  id: 'figuras-de-linguagem',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Figuras de Linguagem',
  description: 'Figuras de Linguagem são recursos estilísticos que tornam a comunicação mais expressiva e eficaz. A matéria explora as diferentes figuras de linguagem, como metáfora, metonímia, antítese, eufemismo, entre outras, e suas aplicações em textos literários e cotidianos.',
  schedule: `
    Disciplina: Português
    Matéria: Figuras de Linguagem

    Cronograma de estudos por tópicos:
    1 - Introdução às figuras de linguagem: conceitos e importância
    2 - Figuras de palavras: metáfora, metonímia, catacrese, sinestesia
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Figuras de pensamento: antítese, paradoxo, eufemismo, hipérbole, personificação, ironia
    5 - Figuras de sintaxe: elipse, zeugma, pleonasmo, anáfora
    6 - Figuras de som: aliteração, assonância, onomatopeia, paronomásia
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Análise de figuras de linguagem em textos literários
    9 - Aplicação das figuras de linguagem na produção textual
    10 - Identificação e interpretação de figuras de linguagem em textos publicitários
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Figuras de linguagem no discurso cotidiano e na oralidade
    13 - Estratégias para criar efeitos expressivos com figuras de linguagem
    14 - Figuras de linguagem e suas funções em diferentes gêneros textuais
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Exercícios práticos de reconhecimento e uso de figuras de linguagem
    17 - Revisão final e integração dos conteúdos de figuras de linguagem
  `,
}

const portugues4: ContentType = {
  id: 'morfologia',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Morfologia',
  description: 'Morfologia é o estudo da estrutura, formação e classificação das palavras na língua portuguesa. A matéria abrange a análise dos elementos que compõem as palavras, como radicais, afixos e desinências, além da classificação das palavras em classes gramaticais e seus processos de formação.',
  schedule: `
    Disciplina: Português
    Matéria: Morfologia

    Cronograma de estudos por tópicos:
    1 - Introdução à morfologia: conceitos básicos e importância
    2 - Estrutura das palavras: radical, tema, afixos, desinências, vogal temática
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Classes de palavras: substantivo, adjetivo, artigo, pronome, numeral
    5 - Verbo: estrutura, conjugação e classificação dos verbos
    6 - Advérbio, preposição, conjunção e interjeição: funções e classificações
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Processos de formação de palavras: derivação, composição, abreviação, neologismo
    9 - Análise morfológica em diferentes tipos de textos
    10 - Flexão de gênero, número e grau das palavras
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Concordância nominal e verbal: regras e exceções
    13 - Morfologia e variação linguística: aspectos regionais e sociais
    14 - Aplicação da morfologia na produção e interpretação textual
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Exercícios práticos de análise morfológica
    17 - Revisão final e integração dos conteúdos de morfologia
  `,
}

const portugues5: ContentType = {
  id: 'sintaxe',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Sintaxe',
  description: 'Sintaxe é o estudo da estrutura das frases e orações, e das relações entre os termos que as compõem. A matéria explora a organização das palavras em orações, a concordância e regência, além das funções sintáticas e dos tipos de orações na língua portuguesa.',
  schedule: `
    Disciplina: Português
    Matéria: Sintaxe

    Cronograma de estudos por tópicos:
    1 - Introdução à sintaxe: conceitos básicos e importância
    2 - Termos essenciais da oração: sujeito e predicado
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Termos integrantes da oração: complemento verbal (objeto direto e indireto), complemento nominal, agente da passiva
    5 - Termos acessórios da oração: adjunto adnominal, adjunto adverbial, aposto e vocativo
    6 - Período simples e período composto: coordenação e subordinação
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Orações subordinadas: substantivas, adjetivas, adverbiais
    9 - Orações coordenadas: aditivas, adversativas, alternativas, conclusivas, explicativas
    10 - Concordância verbal e nominal: regras e exceções
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Regência verbal e nominal: normas e desvios
    13 - Colocação pronominal: próclise, mesóclise, ênclise
    14 - Análise sintática de frases complexas
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Exercícios práticos de análise sintática
    17 - Revisão final e integração dos conteúdos de sintaxe
  `,
}

const portugues6: ContentType = {
  id: 'concordancia-verbal-e-nominal',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Concordância Verbal e Nominal',
  description: 'Concordância Verbal e Nominal é o estudo das regras que regem a relação de concordância entre os termos de uma oração. A matéria abrange as normas que determinam a concordância do verbo com o sujeito e dos adjetivos, artigos e pronomes com os substantivos, além das principais exceções e casos especiais.',
  schedule: `
    Disciplina: Português
    Matéria: Concordância Verbal e Nominal

    Cronograma de estudos por tópicos:
    1 - Introdução à concordância: conceitos básicos e importância
    2 - Concordância verbal: regras gerais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Concordância verbal em casos especiais: sujeito composto, sujeito oracional, expressões partitivas
    5 - Concordância verbal com verbos impessoais
    6 - Concordância nominal: regras gerais
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Concordância nominal em casos especiais: adjetivos compostos, pronomes, coletivos
    9 - Concordância de nomes com mais de um determinante
    10 - Concordância com expressões indicativas de quantidade
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Casos de concordância facultativa
    13 - Exercícios práticos de concordância verbal e nominal
    14 - Análise de concordância em textos variados
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Aplicação das regras de concordância na produção textual
    17 - Revisão final e integração dos conteúdos de concordância verbal e nominal
  `,
}

const portugues7: ContentType = {
  id: 'pontuacao',
  subject: 'Português',
  subjectId: 'portugues',
  topic: 'Pontuação',
  description: 'Pontuação é o estudo dos sinais gráficos que organizam e estruturam a escrita, garantindo clareza e coerência ao texto. A matéria explora o uso correto de vírgula, ponto, ponto e vírgula, dois-pontos, travessão, parênteses, entre outros, em diferentes contextos comunicativos.',
  schedule: `
    Disciplina: Português
    Matéria: Pontuação

    Cronograma de estudos por tópicos:
    1 - Introdução à pontuação: conceitos básicos e importância
    2 - Uso da vírgula: separação de termos, orações coordenadas e subordinadas
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Uso do ponto: final de frase, abreviaturas
    5 - Uso do ponto e vírgula: separação de itens em listagens, orações coordenadas extensas
    6 - Uso dos dois-pontos: introdução de fala, explicações, listagens
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Uso do travessão: destaque de informações, diálogos, interrupções
    9 - Uso dos parênteses: inserção de explicações, datas, referências
    10 - Uso das reticências: interrupções, continuidade, suspense
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Uso do ponto de exclamação e ponto de interrogação: ênfase e questionamentos
    13 - Pontuação em textos formais e informais
    14 - Exercícios práticos de pontuação em diferentes tipos de texto
    15 - Revisão dos conteúdos aprendidos anteriormente
    16 - Pontuação e estilo: como a pontuação altera o sentido e o ritmo do texto
    17 - Revisão final e integração dos conteúdos de pontuação
  `,
}

const geografia1: ContentType = {
  id: 'climatologia',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Climatologia',
  description: 'Climatologia é o estudo do clima e dos fenômenos atmosféricos, abrangendo os fatores climáticos, a classificação climática e as variações climáticas ao longo do tempo e espaço.',
  schedule: `
    Disciplina: Geografia
    Matéria: Climatologia

    Cronograma de estudos por tópicos:
    1 - Introdução à climatologia: conceitos básicos e importância
    2 - Fatores climáticos: latitude, altitude, maritimidade, correntes marítimas
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Tipos de clima no Brasil e no mundo
    5 - Circulação geral da atmosfera e massas de ar
    6 - Fenômenos climáticos: El Niño, La Niña, efeito estufa
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Mudanças climáticas: causas e consequências
    9 - Impactos das mudanças climáticas na sociedade
    10 - Estudo de casos: secas, inundações e desertificação
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Previsão do tempo e climatologia aplicada
    13 - Climatologia urbana: ilhas de calor e poluição do ar
    14 - Exercícios práticos de análise climática
    15 - Revisão final e integração dos conteúdos de climatologia
  `,
}

const geografia2: ContentType = {
  id: 'hidrografia',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Hidrografia',
  description: 'Hidrografia é o estudo das águas do planeta, incluindo rios, lagos, oceanos e aquíferos, com foco na distribuição, dinâmica, e importância desses recursos para o meio ambiente e a sociedade.',
  schedule: `
    Disciplina: Geografia
    Matéria: Hidrografia

    Cronograma de estudos por tópicos:
    1 - Introdução à hidrografia: conceitos básicos e importância
    2 - Ciclo hidrológico: processos e componentes
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Bacias hidrográficas: estrutura e funcionamento
    5 - Rios: tipos, regimes e importância econômica
    6 - Oceanos e mares: características, correntes marítimas e impactos climáticos
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Aquíferos e águas subterrâneas: importância e gestão sustentável
    9 - Problemas hídricos: escassez, poluição e uso inadequado da água
    10 - Estudo de casos: gestão de recursos hídricos no Brasil e no mundo
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Hidrelétricas e sua importância para a economia e o meio ambiente
    13 - Gestão integrada dos recursos hídricos
    14 - Exercícios práticos de análise hidrográfica
    15 - Revisão final e integração dos conteúdos de hidrografia
  `,
}

const geografia3: ContentType = {
  id: 'relevo',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Relevo',
  description: 'Relevo é o estudo das formas da superfície terrestre, incluindo montanhas, planaltos, planícies e depressões, e os processos geológicos que moldam essas formas.',
  schedule: `
    Disciplina: Geografia
    Matéria: Relevo

    Cronograma de estudos por tópicos:
    1 - Introdução ao relevo: conceitos básicos e classificação
    2 - Estrutura geológica da Terra: placas tectônicas e suas interações
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Principais formas de relevo: montanhas, planaltos, planícies, depressões
    5 - Agentes internos do relevo: tectonismo, vulcanismo e abalos sísmicos
    6 - Agentes externos do relevo: intemperismo, erosão, sedimentação
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Relevo brasileiro: características, regiões e influência no clima e vegetação
    9 - Impactos das atividades humanas no relevo
    10 - Estudo de casos: deslizamentos de terra, erosão costeira
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Técnicas de mapeamento do relevo: curvas de nível, fotografias aéreas, satélites
    13 - Exercícios práticos de análise do relevo
    14 - Relevo e sua influência nas atividades econômicas
    15 - Revisão final e integração dos conteúdos de relevo
  `,
}

const geografia4: ContentType = {
  id: 'vegetacao',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Vegetação',
  description: 'Vegetação é o estudo das diferentes formações vegetais presentes no planeta, seus processos ecológicos, e a importância das plantas para o equilíbrio ambiental e a economia.',
  schedule: `
    Disciplina: Geografia
    Matéria: Vegetação

    Cronograma de estudos por tópicos:
    1 - Introdução à vegetação: conceitos básicos e classificação
    2 - Biomas terrestres: características e distribuição
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Vegetação do Brasil: características dos principais biomas (Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampas, Pantanal)
    5 - Dinâmica da vegetação: sucessão ecológica e recuperação de áreas degradadas
    6 - Impactos das atividades humanas na vegetação: desmatamento, queimadas, agropecuária
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Vegetação e clima: interações e influências mútuas
    9 - Políticas de conservação e uso sustentável dos recursos vegetais
    10 - Estudo de casos: desmatamento da Amazônia, recuperação de áreas de cerrado
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Técnicas de mapeamento da vegetação: imagens de satélite, fotografias aéreas
    13 - Importância econômica da vegetação: madeira, produtos não madeireiros, serviços ambientais
    14 - Exercícios práticos de análise da vegetação
    15 - Revisão final e integração dos conteúdos de vegetação
  `,
}

const geografia5: ContentType = {
  id: 'urbanizacao',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Urbanização',
  description: 'Urbanização é o estudo do crescimento das cidades, seus impactos sociais, econômicos e ambientais, e os desafios relacionados ao planejamento urbano e à qualidade de vida nas áreas urbanas.',
  schedule: `
    Disciplina: Geografia
    Matéria: Urbanização

    Cronograma de estudos por tópicos:
    1 - Introdução à urbanização: conceitos básicos e processos históricos
    2 - Crescimento das cidades: causas e consequências
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Problemas urbanos: favelização, transporte, saneamento, segregação socioespacial
    5 - Urbanização no Brasil: processos históricos e principais cidades
    6 - Globalização e metropolização: cidades globais, regiões metropolitanas
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Planejamento urbano: conceitos e desafios
    9 - Mobilidade urbana: transporte público, ciclovias, transporte sustentável
    10 - Sustentabilidade urbana: cidades inteligentes, eco bairros
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Urbanização e meio ambiente: poluição, áreas verdes, enchentes
    13 - Estudo de casos: São Paulo, Rio de Janeiro, Nova York, Tóquio
    14 - Exercícios práticos de análise urbana
    15 - Revisão final e integração dos conteúdos de urbanização
  `,
}

const geografia6: ContentType = {
  id: 'populacao',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'População',
  description: 'População é o estudo da distribuição, crescimento e características demográficas das populações humanas, além das dinâmicas migratórias e seus impactos sociais e econômicos.',
  schedule: `
    Disciplina: Geografia
    Matéria: População

    Cronograma de estudos por tópicos:
    1 - Introdução à demografia: conceitos básicos e indicadores populacionais
    2 - Crescimento populacional: taxas de natalidade, mortalidade, fecundidade
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Distribuição da população mundial: fatores naturais, econômicos e históricos
    5 - Estrutura etária e pirâmides populacionais
    6 - Migrações: tipos, causas e consequências
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Urbanização e concentração populacional
    9 - Políticas populacionais: controle de natalidade, políticas migratórias
    10 - Impactos do crescimento populacional: sustentabilidade, recursos naturais
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - População e desenvolvimento: IDH, desigualdade social, pobreza
    13 - Estudo de casos: China, Índia, Europa, Brasil
    14 - Exercícios práticos de análise demográfica
    15 - Revisão final e integração dos conteúdos de população
  `,
}

const geografia7: ContentType = {
  id: 'geografia-agraria',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Geografia Agrária',
  description: 'Geografia Agrária é o estudo das atividades agrícolas e sua relação com a distribuição da terra, os sistemas de produção, as políticas agrárias, e os impactos socioeconômicos e ambientais.',
  schedule: `
    Disciplina: Geografia
    Matéria: Geografia Agrária

    Cronograma de estudos por tópicos:
    1 - Introdução à geografia agrária: conceitos básicos e importância
    2 - Estrutura fundiária: concentração de terras, latifúndios, minifúndios
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Sistemas agrícolas: agricultura familiar, agronegócio, monocultura, policultura
    5 - Impactos socioeconômicos da agricultura: emprego, renda, êxodo rural
    6 - Revolução verde e suas consequências
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Políticas agrárias: reforma agrária, crédito rural, subsídios
    9 - Agropecuária no Brasil: principais regiões e produtos
    10 - Agricultura sustentável: agroecologia, agricultura orgânica
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Impactos ambientais da agricultura: desmatamento, uso de agrotóxicos, erosão
    13 - Estudo de casos: Cerrado, Amazônia, Pampa, Pantanal
    14 - Exercícios práticos de análise agrária
    15 - Revisão final e integração dos conteúdos de geografia agrária
  `,
}

const geografia8: ContentType = {
  id: 'globalizacao-e-geopolitica',
  subject: 'Geografia',
  subjectId: 'geografia',
  topic: 'Globalização e Geopolítica',
  description: 'Globalização e Geopolítica estudam as relações de poder entre os países, as dinâmicas da economia global, os conflitos territoriais e as organizações internacionais.',
  schedule: `
    Disciplina: Geografia
    Matéria: Globalização e Geopolítica

    Cronograma de estudos por tópicos:
    1 - Introdução à globalização: conceitos básicos e importância
    2 - Dinâmica da globalização: fluxos de capitais, mercadorias, informações e pessoas
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Geopolítica: conceitos básicos e importância
    5 - Conflitos territoriais e disputas geopolíticas
    6 - Organizações internacionais: ONU, OTAN, OMC, FMI
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Economia global: blocos econômicos, neoliberalismo, economias emergentes
    9 - Desigualdade global: IDH, pobreza, desenvolvimento sustentável
    10 - Impactos da globalização: culturais, econômicos, sociais e ambientais
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Geopolítica contemporânea: Oriente Médio, Ásia-Pacífico, América Latina
    13 - Estudo de casos: União Europeia, Brexit, Guerra Fria, Guerra Comercial EUA-China
    14 - Exercícios práticos de análise geopolítica
    15 - Revisão final e integração dos conteúdos de globalização e geopolítica
  `,
}

const historia1: ContentType = {
  id: 'colonizacao-e-escravidao',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Colonização e Escravidão',
  description: 'Estudo do processo de colonização das Américas, com ênfase no Brasil, e o desenvolvimento do sistema escravista, suas consequências sociais, econômicas e culturais.',
  schedule: `
    Disciplina: História
    Matéria: Colonização e Escravidão

    Cronograma de estudos por tópicos:
    1 - Introdução à colonização: conceitos básicos e importância
    2 - Expansão marítima e as grandes navegações
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Colonização portuguesa no Brasil: capitanias hereditárias e o governo geral
    5 - A escravidão indígena e africana: origens e características
    6 - Ciclo do açúcar e a economia colonial
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Sociedade colonial: classes sociais, cultura e religião
    9 - Resistências à escravidão: quilombos e revoltas
    10 - Estudo de casos: Quilombo dos Palmares e Revolta dos Malês
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Crise do sistema colonial e a independência das colônias
    13 - Abolição da escravidão no Brasil e suas consequências
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos de colonização e escravidão
  `,
}

const historia2: ContentType = {
  id: 'independencia-do-brasil',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Independência do Brasil',
  description: 'Análise do processo de independência do Brasil, suas causas, desenvolvimento, figuras históricas envolvidas e consequências para a formação do Estado brasileiro.',
  schedule: `
    Disciplina: História
    Matéria: Independência do Brasil

    Cronograma de estudos por tópicos:
    1 - Introdução à independência: conceitos básicos e contexto internacional
    2 - Revoltas coloniais: Inconfidência Mineira, Conjuração Baiana, Revolta dos Alfaiates
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - A vinda da Família Real para o Brasil e suas consequências
    5 - Processo de independência: movimentos e conflitos
    6 - O Grito do Ipiranga e a proclamação da independência
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - D. Pedro I: Primeiro Reinado e a consolidação da independência
    9 - A reação das províncias e os conflitos internos
    10 - Estudo de casos: Guerra da Cisplatina, Confederação do Equador
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Consequências econômicas e sociais da independência
    13 - Impacto da independência na formação do Estado nacional
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos de independência do Brasil
  `,
}

const historia3: ContentType = {
  id: 'periodo-imperial',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Período Imperial',
  description: 'Exploração do período imperial brasileiro, desde a independência até a Proclamação da República, abordando o desenvolvimento político, econômico e social.',
  schedule: `
    Disciplina: História
    Matéria: Período Imperial

    Cronograma de estudos por tópicos:
    1 - Introdução ao período imperial: conceitos básicos e cronologia
    2 - Primeiro Reinado: governo de D. Pedro I e seus desafios
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Período Regencial: revoltas e instabilidade política
    5 - Segundo Reinado: ascensão de D. Pedro II e a consolidação do Império
    6 - Economia cafeeira e imigração europeia
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Guerra do Paraguai: causas, consequências e impacto na política imperial
    9 - Movimento abolicionista e a abolição da escravatura
    10 - Estudo de casos: Revolta da Balaiada, Sabinada, Cabanagem
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Crise do Império e a Proclamação da República
    13 - Impactos do período imperial na formação do Brasil republicano
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos do período imperial
  `,
}

const historia4: ContentType = {
  id: 'republica-velha',
  subject: 'História',
  subjectId: 'historia',
  topic: 'República Velha',
  description: 'Estudo do período da República Velha no Brasil, que vai da Proclamação da República até a Revolução de 1930, focando nos aspectos políticos, econômicos e sociais.',
  schedule: `
    Disciplina: História
    Matéria: República Velha

    Cronograma de estudos por tópicos:
    1 - Introdução à República Velha: conceitos básicos e cronologia
    2 - Proclamação da República: contexto, figuras envolvidas e consequências
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Política dos Governadores e Coronelismo
    5 - Economia agroexportadora e o ciclo da borracha
    6 - Movimentos sociais e revoltas: Canudos, Contestado, Revolta da Vacina
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - A industrialização e o movimento operário
    9 - Revolução de 1930: causas, desenvolvimento e impacto
    10 - Estudo de casos: Tenentismo, Semana de Arte Moderna
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Cultura e sociedade na República Velha
    13 - Impactos da República Velha na formação da sociedade brasileira
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos da República Velha
  `,
}

const historia5: ContentType = {
  id: 'era-vargas',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Era Vargas',
  description: 'Análise da Era Vargas no Brasil, um período que marcou profundas transformações políticas, econômicas e sociais no país, desde a Revolução de 1930 até o final do Estado Novo.',
  schedule: `
    Disciplina: História
    Matéria: Era Vargas

    Cronograma de estudos por tópicos:
    1 - Introdução à Era Vargas: conceitos básicos e cronologia
    2 - Revolução de 1930 e a ascensão de Getúlio Vargas ao poder
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Governo Provisório: reformas e centralização do poder
    5 - Constituição de 1934 e a AIB (Ação Integralista Brasileira)
    6 - Estado Novo: centralização, autoritarismo e políticas sociais
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Política trabalhista: CLT, sindicatos e controle social
    9 - Nacionalismo econômico: Petrobras, Vale do Rio Doce, industrialização
    10 - Estudo de casos: Revolta Comunista de 1935, Intentona Integralista
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - O fim do Estado Novo e a redemocratização
    13 - Legado de Getúlio Vargas na política e economia brasileira
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos da Era Vargas
  `,
}

const historia6: ContentType = {
  id: 'ditadura-militar',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Ditadura Militar',
  description: 'Estudo do período da Ditadura Militar no Brasil, iniciado com o golpe de 1964 e encerrado com a redemocratização em 1985, focando nas suas causas, características e impactos.',
  schedule: `
    Disciplina: História
    Matéria: Ditadura Militar

    Cronograma de estudos por tópicos:
    1 - Introdução à Ditadura Militar: conceitos básicos e contexto internacional
    2 - Golpe de 1964: causas, figuras envolvidas e consequências
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Atos Institucionais: AI-1, AI-2, AI-5 e a repressão
    5 - Milagre econômico: crescimento e desigualdade
    6 - Movimentos de resistência: guerrilhas, exílio, censura
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Anos de chumbo: repressão, tortura e o DOI-CODI
    9 - Abertura lenta, gradual e segura: governo Geisel, distensão política
    10 - Estudo de casos: Guerrilha do Araguaia, Movimento Diretas Já
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Redemocratização e a Constituição de 1988
    13 - Impactos da Ditadura Militar na sociedade brasileira contemporânea
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos da Ditadura Militar
  `,
}

const historia7: ContentType = {
  id: 'revolucao-industrial',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Revolução Industrial',
  description: 'Exploração das mudanças econômicas, sociais e tecnológicas trazidas pela Revolução Industrial, iniciada na Inglaterra no século XVIII e suas repercussões globais.',
  schedule: `
    Disciplina: História
    Matéria: Revolução Industrial

    Cronograma de estudos por tópicos:
    1 - Introdução à Revolução Industrial: conceitos básicos e contexto histórico
    2 - Primeira Revolução Industrial: desenvolvimento tecnológico e impactos sociais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Segunda Revolução Industrial: inovações tecnológicas, eletricidade, petróleo
    5 - Impactos sociais: urbanização, surgimento da classe operária
    6 - Movimentos operários e as primeiras legislações trabalhistas
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Expansão da Revolução Industrial para outros continentes
    9 - Consequências ambientais e a exploração de recursos naturais
    10 - Estudo de casos: Ludismo, Cartismo, Revoluções de 1848
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - A Revolução Industrial no século XX: Fordismo, Taylorismo
    13 - Impactos da Revolução Industrial no mundo contemporâneo
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos da Revolução Industrial
  `,
}

const historia8: ContentType = {
  id: 'segunda-guerra-mundial-e-guerra-fria',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Segunda Guerra Mundial e Guerra Fria',
  description: 'Análise dos eventos, causas e consequências da Segunda Guerra Mundial e o subsequente período da Guerra Fria, com foco nas relações internacionais e a formação de blocos políticos.',
  schedule: `
    Disciplina: História
    Matéria: Segunda Guerra Mundial e Guerra Fria

    Cronograma de estudos por tópicos:
    1 - Introdução à Segunda Guerra Mundial: causas, alianças e figuras-chave
    2 - Principais batalhas e eventos: Stalingrado, Normandia, Pearl Harbor
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - O Holocausto e os crimes contra a humanidade
    5 - Fim da guerra: Conferências de Yalta e Potsdam, Tribunal de Nuremberg
    6 - Início da Guerra Fria: Doutrina Truman, Plano Marshall, OTAN
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Conflitos da Guerra Fria: Guerra da Coreia, Crise dos Mísseis, Guerra do Vietnã
    9 - Corrida armamentista e corrida espacial
    10 - Estudo de casos: Muro de Berlim, Revolução Cubana, Primavera de Praga
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Fim da Guerra Fria: Perestroika, Glasnost, queda do Muro de Berlim
    13 - Impactos da Segunda Guerra Mundial e da Guerra Fria no mundo contemporâneo
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos da Segunda Guerra Mundial e Guerra Fria
  `,
}

const historia9: ContentType = {
  id: 'renascimento-e-reforma',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Renascimento e Reforma',
  description: 'Estudo do Renascimento cultural e científico na Europa, juntamente com a Reforma Protestante e suas consequências religiosas, políticas e sociais.',
  schedule: `
    Disciplina: História
    Matéria: Renascimento e Reforma

    Cronograma de estudos por tópicos:
    1 - Introdução ao Renascimento: conceitos básicos e contexto histórico
    2 - Renascimento cultural: artes, ciências e humanismo
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Principais figuras do Renascimento: Da Vinci, Michelangelo, Galileu
    5 - A Reforma Protestante: causas, Lutero e a quebra da unidade cristã
    6 - A Contrarreforma: Concílio de Trento e a Inquisição
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Consequências políticas e sociais da Reforma
    9 - Difusão do Renascimento e Reforma pela Europa
    10 - Estudo de casos: Inglaterra, França, Sacro Império Romano-Germânico
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Impactos do Renascimento e da Reforma no pensamento moderno
    13 - A Reforma e a formação das religiões protestantes no mundo
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos de Renascimento e Reforma
  `,
}

const historia10: ContentType = {
  id: 'revolucoes-inglesas-e-francesa',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Revoluções Inglesas e Francesa',
  description: 'Exploração das Revoluções Inglesas e da Revolução Francesa, com foco nas mudanças políticas, sociais e econômicas que elas promoveram e suas influências no mundo.',
  schedule: `
    Disciplina: História
    Matéria: Revoluções Inglesas e Francesa

    Cronograma de estudos por tópicos:
    1 - Introdução às Revoluções Inglesas: conceitos básicos e contexto histórico
    2 - Revolução Puritana: causas, desenvolvimento e consequências
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Revolução Gloriosa e a ascensão do parlamentarismo
    5 - Revolução Francesa: causas, Iluminismo e figuras-chave
    6 - Fases da Revolução Francesa: Assembleia Nacional, Convenção, Diretório
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Impactos sociais da Revolução Francesa: abolição do feudalismo, Declaração dos Direitos do Homem e do Cidadão
    9 - Ascensão e queda de Napoleão Bonaparte
    10 - Estudo de casos: Revoltas Camponesas, Terror, Napoleônicas
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Consequências das Revoluções Inglesas e Francesa para a Europa
    13 - Influências das Revoluções Inglesas e Francesa nas independências americanas
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos das Revoluções Inglesas e Francesa
  `,
}

const historia11: ContentType = {
  id: 'imperialismo-e-primeira-guerra-mundial',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Imperialismo e Primeira Guerra Mundial',
  description: 'Análise do período do Imperialismo e da Primeira Guerra Mundial, suas causas, características e consequências, e como esses eventos moldaram o século XX.',
  schedule: `
    Disciplina: História
    Matéria: Imperialismo e Primeira Guerra Mundial

    Cronograma de estudos por tópicos:
    1 - Introdução ao Imperialismo: conceitos básicos e contexto histórico
    2 - Causas e características do Imperialismo: econômicas, políticas, culturais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Conflitos e disputas territoriais entre as potências imperialistas
    5 - Primeira Guerra Mundial: causas imediatas, alianças e início da guerra
    6 - Principais batalhas e frentes de combate
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - A participação do Brasil e outros países na Primeira Guerra Mundial
    9 - Fim da guerra: Tratado de Versalhes e seus impactos
    10 - Estudo de casos: Revolução Russa, Guerra das Trincheiras
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Consequências da Primeira Guerra Mundial: Liga das Nações, novas fronteiras
    13 - Impactos do Imperialismo e da Primeira Guerra Mundial no século XX
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos de Imperialismo e Primeira Guerra Mundial
  `,
}

const historia12: ContentType = {
  id: 'globalizacao-e-mundo-contemporaneo',
  subject: 'História',
  subjectId: 'historia',
  topic: 'Globalização e Mundo Contemporâneo',
  description: 'Exploração do fenômeno da globalização e suas consequências econômicas, sociais e culturais no mundo contemporâneo, bem como os desafios e mudanças trazidas por esse processo.',
  schedule: `
    Disciplina: História
    Matéria: Globalização e Mundo Contemporâneo

    Cronograma de estudos por tópicos:
    1 - Introdução à Globalização: conceitos básicos e contexto histórico
    2 - Aspectos econômicos da Globalização: neoliberalismo, capitalismo financeiro
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Aspectos culturais da Globalização: homogeneização e diversificação cultural
    5 - Aspectos sociais da Globalização: desigualdade, migrações, direitos humanos
    6 - Globalização e meio ambiente: impactos e desafios
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - A Nova Ordem Mundial: multipolaridade, organismos internacionais
    9 - Tecnologias e comunicação na era da Globalização
    10 - Estudo de casos: União Europeia, Nações Unidas, G20
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Conflitos contemporâneos: terrorismo, guerras civis, crises humanitárias
    13 - Desafios para o futuro: sustentabilidade, governança global, direitos digitais
    14 - Exercícios práticos de análise histórica
    15 - Revisão final e integração dos conteúdos de Globalização e Mundo Contemporâneo
  `,
}

const ingles1: ContentType = {
  id: 'compreensao-de-texto',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Compreensão de Texto',
  description: 'Desenvolvimento de habilidades de leitura e interpretação de textos em inglês, focando em diferentes gêneros textuais e estratégias de compreensão.',
  schedule: `
    Disciplina: Inglês
    Matéria: Compreensão de Texto

    Cronograma de estudos por tópicos:
    1 - Introdução à compreensão de texto: estratégias básicas
    2 - Identificação do tema e ideias principais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Compreensão de detalhes específicos: skimming e scanning
    5 - Inferência de significados: contexto e dedução
    6 - Interpretação de opiniões e argumentos
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Análise de diferentes gêneros textuais: artigos, reportagens, ensaios
    9 - Identificação de coesão e coerência no texto
    10 - Estudo de casos: interpretação de textos de exames anteriores
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Compreensão de textos literários e não literários
    13 - Exercícios práticos de interpretação de texto
    14 - Estratégias avançadas de leitura e interpretação
    15 - Revisão final e integração dos conteúdos de compreensão de texto
  `,
}

const ingles2: ContentType = {
  id: 'vocabulario',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Vocabulário',
  description: 'Expansão do vocabulário em inglês, com foco em palavras e expressões mais usadas em diferentes contextos, além de técnicas de memorização e uso adequado.',
  schedule: `
    Disciplina: Inglês
    Matéria: Vocabulário

    Cronograma de estudos por tópicos:
    1 - Introdução ao vocabulário: estratégias de aprendizagem
    2 - Vocabulário essencial: palavras e expressões do dia a dia
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Vocabulário acadêmico e profissional: palavras-chave e expressões
    5 - Phrasal verbs: significados e usos mais comuns
    6 - Expressões idiomáticas e seus significados
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Palavras e expressões relacionadas a tópicos específicos (viagens, negócios, saúde)
    9 - Técnicas de memorização e prática de vocabulário
    10 - Estudo de casos: análise de vocabulário em textos de exames anteriores
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Prática de vocabulário em diferentes contextos (escrita e fala)
    13 - Exercícios práticos de expansão de vocabulário
    14 - Revisão final e integração dos conteúdos de vocabulário
  `,
}

const ingles3: ContentType = {
  id: 'false-friends',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'False Friends',
  description: 'Estudo de palavras em inglês que são semelhantes a palavras em português, mas têm significados diferentes, e como evitar erros comuns ao usá-las.',
  schedule: `
    Disciplina: Inglês
    Matéria: False Friends

    Cronograma de estudos por tópicos:
    1 - Introdução aos false friends: conceitos básicos e importância
    2 - Principais false friends e seus significados em inglês e português
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Como identificar false friends em textos e falas
    5 - Técnicas para evitar erros comuns com false friends
    6 - Exercícios de identificação e correção de false friends
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Análise de textos com exemplos de false friends
    9 - Prática de substituição de false friends por palavras corretas
    10 - Estudo de casos: erros comuns em exames e como corrigi-los
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Técnicas de memorização de false friends e seus significados
    13 - Exercícios práticos com false friends em contextos variados
    14 - Revisão final e integração dos conteúdos de false friends
  `,
}

const ingles4: ContentType = {
  id: 'verbos-modais',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Verbos Modais',
  description: 'Exploração dos verbos modais em inglês, suas funções, significados e usos em diferentes contextos, incluindo habilidade, possibilidade, permissão, e obrigação.',
  schedule: `
    Disciplina: Inglês
    Matéria: Verbos Modais

    Cronograma de estudos por tópicos:
    1 - Introdução aos verbos modais: conceitos básicos e importância
    2 - Modal verbs para expressar habilidade: can, could
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Modal verbs para expressar permissão e possibilidade: may, might
    5 - Modal verbs para expressar obrigação e proibição: must, have to, mustn't
    6 - Modal verbs para conselhos e sugestões: should, ought to
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Uso dos modais em diferentes tempos verbais
    9 - Diferenças de uso entre modais com significados semelhantes
    10 - Estudo de casos: análise de uso de modais em textos de exames
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Prática de construção de frases com verbos modais
    13 - Exercícios práticos de aplicação dos verbos modais em contextos variados
    14 - Revisão final e integração dos conteúdos de verbos modais
  `,
}

const ingles5: ContentType = {
  id: 'preposicoes',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Preposições',
  description: 'Estudo das preposições em inglês, seus usos e combinações mais comuns, e como aplicá-las corretamente em frases e expressões.',
  schedule: `
    Disciplina: Inglês
    Matéria: Preposições

    Cronograma de estudos por tópicos:
    1 - Introdução às preposições: conceitos básicos e funções
    2 - Preposições de lugar: in, on, at
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Preposições de tempo: in, on, at, during, for, since
    5 - Preposições de movimento: to, into, onto, through
    6 - Combinações comuns de verbos com preposições (phrasal verbs)
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Diferenças entre preposições semelhantes: in/on, by/with
    9 - Uso das preposições em expressões idiomáticas
    10 - Estudo de casos: análise de uso de preposições em textos de exames
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Prática de construção de frases com preposições
    13 - Exercícios práticos de aplicação das preposições em contextos variados
    14 - Revisão final e integração dos conteúdos de preposições
  `,
}

const ingles6: ContentType = {
  id: 'pronomes',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Pronomes',
  description: 'Análise dos diferentes tipos de pronomes em inglês (pessoais, possessivos, reflexivos, demonstrativos, interrogativos, etc.), seus usos e regras gramaticais.',
  schedule: `
    Disciplina: Inglês
    Matéria: Pronomes

    Cronograma de estudos por tópicos:
    1 - Introdução aos pronomes: conceitos básicos e funções
    2 - Pronomes pessoais: sujeito e objeto
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Pronomes possessivos: adjetivos e pronomes possessivos
    5 - Pronomes reflexivos: uso e formação
    6 - Pronomes demonstrativos e interrogativos
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Pronomes relativos: who, which, that
    9 - Diferenças entre pronomes e quando utilizá-los
    10 - Estudo de casos: uso de pronomes em textos e diálogos
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Prática de construção de frases com pronomes variados
    13 - Exercícios práticos de aplicação dos pronomes em contextos variados
    14 - Revisão final e integração dos conteúdos de pronomes
  `,
}

const ingles7: ContentType = {
  id: 'simple-present-e-present-continuous',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Simple Present e Present Continuous',
  description: 'Exploração dos tempos verbais Simple Present e Present Continuous, seus usos, formas afirmativas, negativas e interrogativas, e as diferenças entre eles.',
  schedule: `
    Disciplina: Inglês
    Matéria: Simple Present e Present Continuous

    Cronograma de estudos por tópicos:
    1 - Introdução ao Simple Present: conceitos básicos e formação
    2 - Uso do Simple Present: hábitos, rotinas e verdades universais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Formas afirmativas, negativas e interrogativas no Simple Present
    5 - Introdução ao Present Continuous: conceitos básicos e formação
    6 - Uso do Present Continuous: ações em andamento, planos futuros
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Formas afirmativas, negativas e interrogativas no Present Continuous
    9 - Diferenças e usos corretos do Simple Present e Present Continuous
    10 - Estudo de casos: análise de textos e diálogos com ambos os tempos verbais
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Prática de construção de frases com Simple Present e Present Continuous
    13 - Exercícios práticos de aplicação dos tempos verbais em contextos variados
    14 - Revisão final e integração dos conteúdos de Simple Present e Present Continuous
  `,
}

const ingles8: ContentType = {
  id: 'reported-speech',
  subject: 'Inglês',
  subjectId: 'ingles',
  topic: 'Reported Speech',
  description: 'Estudo do Reported Speech (Discurso Indireto) em inglês, suas regras gramaticais, mudanças necessárias nos tempos verbais, pronomes e advérbios.',
  schedule: `
    Disciplina: Inglês
    Matéria: Reported Speech

    Cronograma de estudos por tópicos:
    1 - Introdução ao Reported Speech: conceitos básicos e importância
    2 - Regras para mudança de tempos verbais no Reported Speech
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Mudanças em pronomes e advérbios no Reported Speech
    5 - Reported Speech com perguntas: mudanças necessárias
    6 - Reported Speech com ordens e pedidos: mudanças necessárias
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Diferenças entre Reported Speech e Direct Speech
    9 - Prática de conversão de frases do Direct Speech para o Reported Speech
    10 - Estudo de casos: análise de diálogos e narrativas com Reported Speech
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Exercícios práticos de aplicação do Reported Speech em contextos variados
    13 - Revisão final e integração dos conteúdos de Reported Speech
  `,
}

const filosofiaSociologia1: ContentType = {
  id: 'etica-e-moral',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Ética e Moral',
  description: 'Exploração dos conceitos de ética e moral, suas diferenças e aplicações em contextos filosóficos e sociais, além das principais teorias éticas.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Ética e Moral

    Cronograma de estudos por tópicos:
    1 - Introdução à ética e moral: conceitos básicos e diferenças
    2 - Principais teorias éticas: utilitarismo, deontologia, ética das virtudes
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - A ética na filosofia clássica: Sócrates, Platão e Aristóteles
    5 - Ética moderna: Kant e a ética do dever
    6 - Ética contemporânea: debates sobre justiça, direitos e bioética
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Aplicações da ética na vida cotidiana: dilemas morais e decisões éticas
    9 - Moralidade e sociedade: normas, valores e padrões morais
    10 - Estudo de casos: dilemas éticos na medicina, tecnologia e política
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Relação entre ética e direito: justiça, equidade e leis
    13 - Exercícios práticos de análise ética e moral
    14 - Revisão final e integração dos conteúdos de ética e moral
  `,
}

const filosofiaSociologia2: ContentType = {
  id: 'filosofia-politica',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Filosofia Política',
  description: 'Estudo das principais teorias e conceitos da filosofia política, incluindo o contrato social, poder, justiça, liberdade e suas aplicações na organização das sociedades.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Filosofia Política

    Cronograma de estudos por tópicos:
    1 - Introdução à filosofia política: conceitos básicos e importância
    2 - O contrato social: Hobbes, Locke e Rousseau
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Teorias sobre o poder: Maquiavel, Weber e Foucault
    5 - Justiça e igualdade: teorias de Rawls, Nozick e outros
    6 - Liberdade e direitos: debates entre liberalismo e republicanismo
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Democracia e participação política: teorias e práticas
    9 - Estado e soberania: relação entre Estado e cidadãos
    10 - Estudo de casos: Revoluções Francesa e Americana, movimentos democráticos
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Filosofia política contemporânea: globalização e novos desafios
    13 - Exercícios práticos de análise política e filosófica
    14 - Revisão final e integração dos conteúdos de filosofia política
  `,
}

const filosofiaSociologia3: ContentType = {
  id: 'teorias-sociologicas-classicas',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Teorias Sociológicas Clássicas',
  description: 'Análise das principais teorias sociológicas clássicas, incluindo o positivismo de Comte, o marxismo, o funcionalismo de Durkheim e a sociologia compreensiva de Weber.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Teorias Sociológicas Clássicas

    Cronograma de estudos por tópicos:
    1 - Introdução às teorias sociológicas clássicas: conceitos e importância
    2 - Positivismo de Auguste Comte: ordem, progresso e leis sociais
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Marxismo: teoria da luta de classes e materialismo histórico
    5 - Funcionalismo de Émile Durkheim: solidariedade social e anomia
    6 - Sociologia compreensiva de Max Weber: ação social e tipos de dominação
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Comparações entre as teorias: semelhanças e diferenças
    9 - Impactos das teorias sociológicas clássicas na sociologia contemporânea
    10 - Estudo de casos: análise de fenômenos sociais usando teorias clássicas
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Críticas e debates sobre as teorias sociológicas clássicas
    13 - Exercícios práticos de aplicação das teorias sociológicas clássicas
    14 - Revisão final e integração dos conteúdos de teorias sociológicas clássicas
  `,
}

const filosofiaSociologia4: ContentType = {
  id: 'cultura-e-ideologia',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Cultura e Ideologia',
  description: 'Exploração dos conceitos de cultura e ideologia, incluindo como as ideologias moldam a sociedade e as culturas influenciam as práticas sociais.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Cultura e Ideologia

    Cronograma de estudos por tópicos:
    1 - Introdução aos conceitos de cultura e ideologia
    2 - Cultura: definições, elementos e diversidade cultural
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Ideologia: Marx, Gramsci e a teoria crítica
    5 - Cultura de massa e indústria cultural: Adorno e Horkheimer
    6 - Multiculturalismo e identidade cultural na contemporaneidade
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - A influência da ideologia nas práticas sociais e políticas
    9 - Cultura e poder: hegemonia cultural e resistência
    10 - Estudo de casos: análise de manifestações culturais e ideológicas
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Cultura digital e novas formas de ideologia na era da internet
    13 - Exercícios práticos de análise cultural e ideológica
    14 - Revisão final e integração dos conteúdos de cultura e ideologia
  `,
}

const filosofiaSociologia5: ContentType = {
  id: 'cidadania-e-democracia',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Cidadania e Democracia',
  description: 'Estudo dos conceitos de cidadania e democracia, seus desenvolvimentos históricos e as práticas democráticas em diferentes contextos sociais.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Cidadania e Democracia

    Cronograma de estudos por tópicos:
    1 - Introdução à cidadania: conceitos e evolução histórica
    2 - Democracia: tipos, características e importância
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Direitos e deveres dos cidadãos em uma democracia
    5 - Participação política e cidadania ativa
    6 - Desafios contemporâneos à democracia: corrupção, populismo, desinformação
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Cidadania e inclusão social: minorias, direitos humanos e justiça social
    9 - Democracia e direitos civis: lutas por igualdade e liberdade
    10 - Estudo de casos: movimentos sociais pela cidadania e democracia
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Educação para a cidadania: formação de cidadãos críticos e conscientes
    13 - Exercícios práticos de análise da cidadania e democracia
    14 - Revisão final e integração dos conteúdos de cidadania e democracia
  `,
}

const filosofiaSociologia6: ContentType = {
  id: 'globalizacao-e-modernidade',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Globalização e Modernidade',
  description: 'Análise dos processos de globalização e suas implicações na modernidade, incluindo os aspectos econômicos, culturais, sociais e políticos.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Globalização e Modernidade

    Cronograma de estudos por tópicos:
    1 - Introdução à globalização: conceitos básicos e importância
    2 - Modernidade: características, desenvolvimento histórico e transformações
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Globalização econômica: capitalismo global, neoliberalismo e desigualdade
    5 - Impactos culturais da globalização: homogeneização e hibridização cultural
    6 - Globalização e política: soberania, organismos internacionais, governança global
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Globalização e sociedade: migrações, multiculturalismo, identidade global
    9 - Modernidade líquida: Bauman e as mudanças na modernidade contemporânea
    10 - Estudo de casos: globalização e modernidade em diferentes regiões do mundo
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Desafios da globalização na modernidade: meio ambiente, ética, direitos humanos
    13 - Exercícios práticos de análise da globalização e modernidade
    14 - Revisão final e integração dos conteúdos de globalização e modernidade
  `,
}

const filosofiaSociologia7: ContentType = {
  id: 'trabalho-e-alienacao',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Trabalho e Alienação',
  description: 'Estudo das relações entre trabalho e alienação, com base nas teorias de Marx, e análise das transformações do trabalho na sociedade contemporânea.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Trabalho e Alienação

    Cronograma de estudos por tópicos:
    1 - Introdução ao conceito de trabalho: definições e evolução histórica
    2 - Teoria da alienação de Karl Marx: fundamentos e implicações
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Trabalho na sociedade industrial e pós-industrial
    5 - Trabalho e divisão social: desigualdade e exploração
    6 - Transformações no mundo do trabalho: automação, precarização, trabalho imaterial
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Trabalho, consumo e identidade: a cultura do trabalho na modernidade
    9 - Alienação no trabalho contemporâneo: novas formas e desafios
    10 - Estudo de casos: análise de situações de alienação no trabalho
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Trabalho e emancipação: alternativas ao modelo capitalista
    13 - Exercícios práticos de análise do trabalho e alienação
    14 - Revisão final e integração dos conteúdos de trabalho e alienação
  `,
}

const filosofiaSociologia8: ContentType = {
  id: 'movimentos-sociais',
  subject: 'Filosofia e Sociologia',
  subjectId: 'filosofia-sociologia',
  topic: 'Movimentos Sociais',
  description: 'Análise dos movimentos sociais, suas causas, tipos, formas de organização e impactos na sociedade, com destaque para os movimentos contemporâneos.',
  schedule: `
    Disciplina: Filosofia e Sociologia
    Matéria: Movimentos Sociais

    Cronograma de estudos por tópicos:
    1 - Introdução aos movimentos sociais: conceitos e importância
    2 - Tipos de movimentos sociais: reformistas, revolucionários, reacionários, identitários
    3 - Revisão dos conteúdos aprendidos anteriormente
    4 - Causas dos movimentos sociais: desigualdade, injustiça, opressão
    5 - Formas de organização e estratégias dos movimentos sociais
    6 - Impactos dos movimentos sociais: mudanças políticas, sociais e culturais
    7 - Revisão dos conteúdos aprendidos anteriormente
    8 - Movimentos sociais históricos: feminismo, direitos civis, anticolonialismo
    9 - Movimentos sociais contemporâneos: ambientalismo, direitos LGBTQ+, antiglobalização
    10 - Estudo de casos: análise de movimentos sociais no Brasil e no mundo
    11 - Revisão dos conteúdos aprendidos anteriormente
    12 - Desafios e perspectivas dos movimentos sociais na atualidade
    13 - Exercícios práticos de análise de movimentos sociais
    14 - Revisão final e integração dos conteúdos de movimentos sociais
  `,
}

export const contents: ContentType[] = [
  biologia1,
  biologia2,
  biologia3,
  biologia4,
  biologia5,
  biologia6,
  biologia7,
  biologia8,
  biologia9,
  portugues1,
  portugues2,
  portugues3,
  portugues4,
  portugues5,
  portugues6,
  portugues7,
  geografia1,
  geografia2,
  geografia3,
  geografia4,
  geografia5,
  geografia6,
  geografia7,
  geografia8,
  historia1,
  historia2,
  historia3,
  historia4,
  historia5,
  historia6,
  historia7,
  historia8,
  historia9,
  historia10,
  historia11,
  historia12,
  ingles1,
  ingles2,
  ingles3,
  ingles4,
  ingles5,
  ingles6,
  ingles7,
  ingles8,
  filosofiaSociologia1,
  filosofiaSociologia2,
  filosofiaSociologia3,
  filosofiaSociologia4,
  filosofiaSociologia5,
  filosofiaSociologia6,
  filosofiaSociologia7,
  filosofiaSociologia8,
]



