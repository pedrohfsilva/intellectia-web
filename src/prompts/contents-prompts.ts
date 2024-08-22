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

const content1: ContentType = {
  id: 'ecologia-e-meio-ambiente',
  subject: 'Biologia',
  topic: 'Ecologia e Meio Ambiente',
  description: 'Descrição do conteúdo fhiehf hefih ijfhi hfeihfioehfie hghihi',
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

const content2: ContentType = {
  id: 'grerra-fria',
  subject: 'Biologia',
  topic: 'Guerra fria',
  description: 'Descrição do conteúdo fhiehf hefih ijfhi hfeihfioehfie hghihi',
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

const content3: ContentType = {
  id: 'fisica-quantica',
  subject: 'Biologia',
  topic: 'Física quântica',
  description: 'Descrição do conteúdo fhiehf hefih ijfhi hfeihfioehfie hghihi',
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

const content4: ContentType = {
  id: 'funcoes-logaritmicas',
  subject: 'Biologia',
  topic: 'Funções logarítmicas',
  description: 'Descrição do conteúdo fhiehf hefih ijfhi hfeihfioehfie hghihi',
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

export const contents: ContentType[] = [
  content1,
  content2,
  content3,
  content4,
]