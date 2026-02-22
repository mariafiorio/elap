-- Seed sample posts for the ELAP blog
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES
(
  'O que e o programa ELAP e como funciona',
  'o-que-e-o-programa-elap',
  'Descubra tudo sobre o Emerging Leaders in the Americas Program, um programa de bolsas do governo canadense para estudantes latino-americanos.',
  '<h2>Introducao ao ELAP</h2>
<p>O ELAP (Emerging Leaders in the Americas Program) e um dos programas de bolsas mais importantes oferecidos pelo governo do Canada para estudantes de paises da America Latina e Caribe. Criado para fortalecer lacos academicos entre o Canada e a regiao, o programa oferece a oportunidade unica de estudar em universidades e colleges canadenses.</p>

<h2>Como o programa funciona</h2>
<p>O programa permite que estudantes de graduacao e pos-graduacao realizem intercambio academico por periodos de 4 a 6 meses em instituicoes canadenses parceiras. Durante esse periodo, os bolsistas podem cursar disciplinas, participar de projetos de pesquisa e vivenciar a cultura academica canadense.</p>

<h2>Quem pode participar</h2>
<p>Para ser elegivel ao ELAP, o candidato deve ser cidadao de um pais da America Latina ou Caribe (incluindo o Brasil), estar matriculado em uma instituicao de ensino superior no pais de origem, e ter obtido uma carta de aceite de uma instituicao canadense participante do programa.</p>

<h2>Proximos passos</h2>
<p>Se voce tem interesse em se candidatar ao ELAP, recomendamos comecar a pesquisar universidades canadenses parceiras e entrar em contato com professores que trabalham em sua area de interesse. O processo de candidatura geralmente abre no inicio do ano, entao se planeje com antecedencia.</p>',
  'guia',
  ARRAY['ELAP', 'bolsa', 'Canada', 'intercambio'],
  true,
  true,
  'Admin',
  now() - interval '5 days'
),
(
  'Dicas para escrever uma carta de motivacao forte',
  'dicas-carta-de-motivacao-elap',
  'Aprenda como escrever uma carta de motivacao que vai destacar sua candidatura ao programa ELAP.',
  '<h2>A importancia da carta de motivacao</h2>
<p>A carta de motivacao e um dos documentos mais importantes da sua candidatura ao ELAP. E atraves dela que o comite de selecao vai entender suas motivacoes, objetivos academicos e por que voce merece ser selecionado para o programa.</p>

<h2>Estrutura recomendada</h2>
<p>Uma boa carta de motivacao deve ter entre 1 e 2 paginas e seguir uma estrutura clara:</p>
<ul>
<li><strong>Introducao:</strong> Apresente-se brevemente e mencione o programa e a universidade de destino.</li>
<li><strong>Motivacao academica:</strong> Explique como o intercambio se encaixa em seus objetivos academicos e profissionais.</li>
<li><strong>Por que o Canada:</strong> Demonstre conhecimento sobre a instituicao e o pais, e explique por que escolheu aquele destino especifico.</li>
<li><strong>Contribuicao:</strong> Mostre como voce pretende contribuir e o que planeja fazer apos o retorno ao Brasil.</li>
<li><strong>Conclusao:</strong> Reforce seu interesse e agradeca a consideracao.</li>
</ul>

<h2>Erros comuns para evitar</h2>
<p>Evite textos genericos que poderiam servir para qualquer programa. Seja especifico sobre seus objetivos e demonstre que pesquisou sobre a universidade de destino. Tambem evite erros gramaticais - peca para alguem revisar sua carta antes de enviar.</p>',
  'dicas',
  ARRAY['carta de motivacao', 'candidatura', 'ELAP', 'dicas'],
  true,
  false,
  'Admin',
  now() - interval '3 days'
),
(
  'Como conseguir a carta de aceite de uma universidade canadense',
  'como-conseguir-carta-de-aceite',
  'Guia pratico sobre como entrar em contato com universidades canadenses e obter a carta de aceite necessaria para o ELAP.',
  '<h2>O primeiro passo crucial</h2>
<p>Antes de se candidatar ao ELAP, voce precisa obter uma carta de aceite (letter of acceptance) de uma instituicao canadense parceira do programa. Essa e frequentemente a parte mais desafiadora do processo, mas com a estrategia certa, e totalmente possivel.</p>

<h2>Como encontrar universidades parceiras</h2>
<p>Comece pesquisando no site do EduCanada e no site da Universities Canada quais instituicoes participam do programa. Foque em universidades que tenham programas e professores alinhados com sua area de pesquisa ou estudo.</p>

<h2>Entrando em contato com professores</h2>
<p>Envie emails profissionais e personalizados para professores que trabalham em sua area. Inclua:</p>
<ul>
<li>Uma breve apresentacao sua e de sua pesquisa</li>
<li>Por que voce se interessa pelo trabalho daquele professor especificamente</li>
<li>Como a colaboracao seria mutuamente benefica</li>
<li>Seu curriculo atualizado em anexo</li>
</ul>

<h2>Dicas importantes</h2>
<p>Envie emails com bastante antecedencia (pelo menos 6 meses antes). Nao desanime se nao receber resposta imediatamente - professores sao muito ocupados. Envie para varios professores, mas sempre personalize cada mensagem.</p>',
  'guia',
  ARRAY['carta de aceite', 'universidade', 'Canada', 'ELAP'],
  true,
  false,
  'Admin',
  now() - interval '1 day'
);
