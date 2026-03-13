-- Temporarily disable RLS to insert data
ALTER TABLE public.posts DISABLE ROW LEVEL SECURITY;

-- Add post 1: Custo de vida
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES (
  'Quanto custa viver no Canada como estudante ELAP: Guia completo de custos',
  'custo-de-vida-canada-estudante-elap',
  'Um guia detalhado sobre os custos de vida no Canada para bolsistas ELAP, incluindo moradia, alimentacao, transporte e dicas para economizar.',
  '<h2>Introducao aos custos de vida no Canada</h2><p>Uma das maiores preocupacoes de quem esta se preparando para o intercambio ELAP e entender quanto vai precisar gastar durante a estadia no Canada. A boa noticia e que a bolsa ELAP cobre a maior parte dos custos, mas e importante ter uma nocao realista do que esperar para planejar seu orcamento.</p><p>Os custos podem variar significativamente dependendo da cidade onde voce vai estudar. Cidades como Vancouver e Toronto sao conhecidas por serem mais caras, enquanto cidades menores como Halifax, Ottawa ou Calgary podem oferecer um custo de vida mais acessivel.</p><h2>Moradia: o maior custo</h2><p>A moradia e, sem duvida, o maior gasto que voce tera no Canada. Os valores variam muito dependendo da cidade e do tipo de acomodacao escolhida.</p><h3>Opcoes de moradia</h3><p><strong>Residencia universitaria:</strong> Muitas universidades oferecem moradia estudantil, que pode ser uma opcao conveniente. Os precos variam de CAD 800 a 1500 por mes.</p><p><strong>Apartamento compartilhado:</strong> Dividir um apartamento com outros estudantes e uma opcao popular. Voce pode encontrar quartos por CAD 600 a 1200 por mes.</p><p><strong>Homestay:</strong> Morar com uma familia canadense pode ser uma otima forma de praticar ingles. Os precos variam de CAD 800 a 1200 por mes.</p><h2>Alimentacao</h2><p>Seus gastos com alimentacao dependem muito do seu estilo de vida. Se voce cozinha em casa, pode gastar em torno de CAD 300 a 400 por mes. Se prefere comer fora, esse valor pode subir para CAD 600 ou mais.</p><h2>Transporte</h2><p>A maioria das cidades canadenses tem bom transporte publico. Muitas universidades oferecem passe estudantil com desconto, custando em torno de CAD 80 a 150 por mes.</p><h2>Resumo dos custos mensais</h2><p>Considerando uma cidade de custo medio, seus gastos mensais podem ficar assim: Moradia CAD 800-1000, Alimentacao CAD 350-450, Transporte CAD 100-150, Celular CAD 40-50, Lazer CAD 150-200. Total: CAD 1440-1850 por mes.</p>',
  'vida-no-canada',
  ARRAY['custo de vida', 'Canada', 'moradia', 'orcamento', 'dicas'],
  true,
  false,
  'Admin',
  now() - interval '7 days'
);

-- Add post 2: Como escolher universidade
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES (
  'Como escolher a universidade canadense ideal para o ELAP',
  'como-escolher-universidade-canadense-elap',
  'Aprenda a identificar a universidade canadense perfeita para seu intercambio ELAP, considerando sua area de pesquisa, localizacao e oportunidades.',
  '<h2>A importancia de escolher bem</h2><p>Escolher a universidade de destino e uma das decisoes mais importantes do processo de candidatura ao ELAP. Essa escolha vai impactar nao apenas sua experiencia academica, mas tambem sua vida social, financeira e o valor que voce vai extrair do intercambio.</p><p>Muitos estudantes cometem o erro de focar apenas no ranking ou na fama da universidade, mas existem muitos outros fatores que devem ser considerados.</p><h2>Alinhamento academico: o fator mais importante</h2><p>Antes de pensar em qualquer outra coisa, voce precisa encontrar uma universidade que tenha programas e professores alinhados com sua area de estudo ou pesquisa. De nada adianta ir para a universidade mais famosa se la nao tem ninguem trabalhando com seu tema.</p><h3>Como pesquisar</h3><p>Comece fazendo uma lista de palavras-chave relacionadas a sua area de pesquisa. Use o Google Scholar para encontrar artigos recentes sobre seu tema e identifique quais professores estao publicando nessa area.</p><h2>Localizacao e custo de vida</h2><p>O Canada e um pais enorme com realidades muito diferentes. A escolha da cidade vai afetar seu custo de vida, clima, oportunidades de lazer e ate mesmo suas chances de conseguir emprego parcial se precisar.</p><h2>Clima: prepare-se para o inverno</h2><p>O inverno canadense pode ser um choque para brasileiros. Vancouver tem o clima mais ameno do pais, enquanto as prairies podem ter invernos extremamente rigorosos.</p><h2>Minha recomendacao final</h2><p>Nao escolha uma universidade apenas pelo nome. Faca uma pesquisa aprofundada sobre os professores da sua area.</p>',
  'guia',
  ARRAY['universidade', 'Canada', 'escolha', 'pesquisa', 'ELAP'],
  true,
  true,
  'Admin',
  now() - interval '4 days'
);

-- Add post 3: Visto de estudante
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES (
  'Visto de estudante para o Canada: passo a passo completo',
  'visto-estudante-canada-passo-a-passo',
  'Guia completo sobre como tirar o visto de estudante para o Canada apos ser aprovado no ELAP, incluindo documentos, taxas e dicas.',
  '<h2>Entendendo o visto de estudante canadense</h2><p>Apos receber a maravilhosa noticia de aprovacao no ELAP, voce precisara solicitar um visto de estudante (study permit) para entrar no Canada legalmente. Esse processo pode parecer intimidador, mas seguindo os passos corretamente, e bem tranquilo.</p><h2>Documentos necessarios</h2><p>Antes de comecar a aplicacao online, reuna todos os documentos necessarios:</p><p><strong>Passaporte valido:</strong> Deve ser valido por todo o periodo do intercambio.</p><p><strong>Carta de aceite:</strong> A carta oficial da universidade canadense confirmando sua admissao.</p><p><strong>Comprovante de aprovacao no ELAP:</strong> O documento oficial confirmando que voce recebeu a bolsa.</p><h2>Passo a passo da aplicacao</h2><p>Passo 1: Criar conta no IRCC. Passo 2: Preencher o formulario online. Passo 3: Fazer upload dos documentos. Passo 4: Pagar a taxa de CAD 150. Passo 5: Biometria no VAC. Passo 6: Aguardar processamento.</p><h2>Dicas importantes</h2><p>Comece cedo, seja honesto, guarde copias de todos os documentos.</p>',
  'guia',
  ARRAY['visto', 'study permit', 'Canada', 'imigracao', 'documentos'],
  true,
  false,
  'Admin',
  now() - interval '2 days'
);

-- Add post 4: Experiencia pessoal
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES (
  'Minha experiencia no intercambio ELAP: 6 meses que mudaram minha vida',
  'experiencia-intercambio-elap-6-meses',
  'Relato pessoal sobre meus 6 meses de intercambio no Canada pelo programa ELAP, incluindo desafios, aprendizados e dicas para futuros bolsistas.',
  '<h2>O dia que tudo comecou</h2><p>Ainda me lembro do frio na barriga quando o aviao pousou em Toronto. Era janeiro, fazia muito frio la fora, e eu nunca tinha visto neve na vida. Nos meses seguintes, vivi experiencias que transformaram completamente minha visao de mundo.</p><h2>Os primeiros dias: choque cultural e adaptacao</h2><p>Chegar em um pais novo sozinha foi assustador. Tudo era diferente: a lingua, os costumes, a comida. Nos primeiros dias, me senti completamente perdida.</p><h2>A vida academica no Canada</h2><p>Uma das coisas que mais me impressionou foi a relacao entre professores e alunos. No Canada, os professores sao muito acessiveis. Meu supervisor sempre respondia emails rapidamente.</p><h2>Fazendo amizades e construindo conexoes</h2><p>Uma das melhores partes do intercambio foram as amizades que fiz. Conheci pessoas de todos os cantos do mundo.</p><h2>Os desafios que enfrentei</h2><p>Nem tudo foram flores. Houve momentos de solidao, saudade de casa, e duvidas. O inverno longo e escuro afeta o humor de muitas pessoas.</p><h2>O que eu levei para a vida</h2><p>Voltei do Canada uma pessoa diferente. Ganhei confianca em mim mesma, aprendi a me virar sozinha em situacoes novas.</p>',
  'experiencias',
  ARRAY['experiencia', 'relato', 'intercambio', 'vida pessoal', 'dicas'],
  true,
  true,
  'Admin',
  now() - interval '10 days'
);

-- Add post 5: FAQ
INSERT INTO public.posts (title, slug, excerpt, content, category, tags, published, featured, author_name, published_at)
VALUES (
  'Perguntas frequentes sobre o ELAP: tudo que voce precisa saber',
  'perguntas-frequentes-elap-faq',
  'Respostas para as duvidas mais comuns sobre o programa ELAP, desde elegibilidade ate o que fazer apos a aprovacao.',
  '<h2>Sobre o programa</h2><h3>O que e o ELAP?</h3><p>O ELAP (Emerging Leaders in the Americas Program) e um programa de bolsas oferecido pelo governo do Canada para estudantes de graduacao e pos-graduacao de paises da America Latina e Caribe.</p><h3>Quem pode se candidatar?</h3><p>Estudantes cidadaos de paises da America Latina e Caribe que estejam regularmente matriculados em instituicoes de ensino superior no pais de origem.</p><h3>Qual a duracao do intercambio?</h3><p>O intercambio tem duracao de 4 a 6 meses.</p><h3>A bolsa e integral?</h3><p>Sim. A bolsa ELAP cobre auxilio mensal para custo de vida, seguro saude, isencao de taxas academicas, e auxilio para passagem aerea.</p><h2>Sobre a candidatura</h2><h3>Como conseguir a carta de aceite?</h3><p>Voce precisa entrar em contato diretamente com professores ou departamentos de universidades canadenses participantes do ELAP.</p><h3>Preciso de proficiencia em ingles?</h3><p>Sim. Voce precisa ter nivel de proficiencia adequado no idioma de instrucao da universidade de destino.</p><h2>Sobre a vida no Canada</h2><h3>Quanto custa viver no Canada?</h3><p>O custo de vida varia por cidade, mas em media voce pode esperar gastar entre CAD 1400 e 1800 por mes.</p><h3>Preciso de visto?</h3><p>Sim. Apos ser aprovado, voce precisara solicitar um visto de estudante (study permit).</p>',
  'guia',
  ARRAY['FAQ', 'perguntas', 'duvidas', 'ELAP', 'informacoes'],
  true,
  false,
  'Admin',
  now() - interval '6 days'
);

-- Re-enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
