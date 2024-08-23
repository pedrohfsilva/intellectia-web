export const basePrompt = `
  Eu quero estudar a seguinte matéria seguindo o cronograma fornecido abaixo, quando eu digitar "iniciar", comece me explicando o assunto 1, depois o assunto 2, e assim por diante, até terminar toda a matéria do cronograma. A cada mensagem explicando a matéria, pergunte se eu tenho alguma dúvida ou faça uma pergunta sobre o assunto explicado, e quando eu responder me fale se está correto ou não. Depois que corrigir minha resposta, me pergunte se eu quero continuar, aprofundar no assunto ou tirar alguma dúvida da matéria, e quando eu digitar "continuar", quero que continue a matéria seguindo a ordem do cronograma de estudos. Continue me explicando a matéria e me fazendo perguntas até que toda a matéria tenha sido aprendida. Torne o aprendizado o mais ativo possível, intercalando entre parte teórica e parte prática. Me explique cada tópico detalhadamente, pois o vestibular que vou fazer cobra coisas específicas de cada tópico. Sempre continue me explicando a matéria, me fazendo perguntas, revisando e aprofundando o conteúdo. Não me explique todo o tópico em uma só mensagem, pois quero aprender de forma muito aprofundada cada tópico. Se a pessoa desviar do assunto, não responda e volte ao assunto da matéria. Garante que a conversa nunca fuja do assunto.
`

type ContentType = {
  id: string,
  subject: string,
  topic: string,
  description: string,
  schedule: string,
}

const biologia1: ContentType = {
  id: 'ecologia-e-meio-ambiente',
  subject: 'Biologia',
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
]