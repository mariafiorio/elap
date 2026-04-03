import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, FileText, Globe, BookOpen, Users, Building, Plane, Heart, DollarSign, GraduationCap, Search, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recursos Uteis",
  description: "Links, ferramentas e recursos essenciais para candidatos e bolsistas ELAP. Sites oficiais, grupos de apoio e materiais de estudo.",
}

const officialResources = [
  {
    title: "EduCanada - Pagina Oficial do ELAP",
    description: "Site oficial do governo canadense com todas as informacoes sobre o programa ELAP, criterios de elegibilidade, paises participantes e processo de candidatura. Este deve ser sua fonte primaria de informacao oficial sobre o programa. Aqui voce encontra a lista atualizada de universidades participantes e os requisitos especificos para cada nivel de estudo.",
    url: "https://www.educanada.ca/scholarships-bourses/can/elap-pfla.aspx",
    icon: Globe,
  },
  {
    title: "CBIE - Canadian Bureau for International Education",
    description: "Organizacao responsavel pela administracao do programa ELAP em parceria com o governo canadense. O CBIE coordena o processo de selecao, comunica resultados e oferece suporte aos bolsistas. Aqui voce encontra informacoes detalhadas sobre cronogramas e pode tirar duvidas oficiais sobre o programa.",
    url: "https://www.cbie.ca/",
    icon: Building,
  },
  {
    title: "IRCC - Immigration, Refugees and Citizenship Canada",
    description: "Portal oficial de imigracao do Canada onde voce faz a solicitacao do Study Permit (visto de estudante). Crie sua conta GCKey, acompanhe o status da sua aplicacao, e encontre informacoes atualizadas sobre requisitos de entrada, biometria e tempos de processamento. Essencial para a fase pos-aprovacao da bolsa.",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    icon: FileText,
  },
  {
    title: "Universities Canada",
    description: "Diretorio completo de todas as universidades canadenses reconhecidas. Use esta ferramenta para pesquisar instituicoes por provincia, programa de estudo ou area de pesquisa. Cada perfil de universidade inclui informacoes de contato, programas oferecidos e links para os sites oficiais das instituicoes.",
    url: "https://www.univcan.ca/",
    icon: GraduationCap,
  },
  {
    title: "Consulado Geral do Canada no Brasil",
    description: "Informacoes consulares para brasileiros, incluindo servicos de visto, alertas de viagem e contatos de emergencia. Importante ter esse contato salvo caso precise de assistencia consular durante o intercambio ou tenha duvidas especificas sobre documentacao.",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices.html",
    icon: Building,
  },
]

const researchResources = [
  {
    title: "Google Scholar",
    description: "Ferramenta essencial para encontrar artigos academicos e identificar professores que trabalham na sua area de pesquisa. Use filtros de data para encontrar publicacoes recentes, veja citacoes para avaliar impacto, e clique nos perfis dos autores para encontrar suas afiliaccoes institucionais e informacoes de contato.",
    url: "https://scholar.google.com/",
    icon: Search,
  },
  {
    title: "ResearchGate",
    description: "Rede social academica onde pesquisadores compartilham publicacoes e interagem. Voce pode seguir professores de interesse, ver seus projetos atuais, e ate enviar mensagens diretamente pela plataforma. Muitos professores respondem mensagens no ResearchGate mais rapidamente que emails institucionais.",
    url: "https://www.researchgate.net/",
    icon: Users,
  },
  {
    title: "Academia.edu",
    description: "Plataforma para compartilhamento de artigos academicos com milhoes de pesquisadores cadastrados. Crie um perfil, siga pesquisadores da sua area, e receba notificacoes quando publicarem novos trabalhos. Otimo para se manter atualizado sobre a producao de potenciais orientadores.",
    url: "https://www.academia.edu/",
    icon: BookOpen,
  },
  {
    title: "ORCID - Identificador de Pesquisador",
    description: "Sistema de identificacao unico para pesquisadores. Ter um ORCID demonstra profissionalismo e facilita que professores encontrem seu perfil completo. Inclua seu ORCID na assinatura dos emails para professores. E gratuito e leva poucos minutos para criar.",
    url: "https://orcid.org/",
    icon: Globe,
  },
  {
    title: "Web of Science",
    description: "Base de dados de citacoes cientificas. Util para avaliar o impacto de pesquisadores e encontrar artigos altamente citados na sua area. Acesso pode ser disponivel gratuitamente atraves da biblioteca da sua universidade brasileira.",
    url: "https://www.webofscience.com/",
    icon: Search,
  },
  {
    title: "Scopus",
    description: "Outra importante base de dados academica com metricas de citacao e perfis de autores. Junto com Web of Science, oferece uma visao completa da producao academica de potenciais orientadores. Verifique se sua universidade oferece acesso.",
    url: "https://www.scopus.com/",
    icon: BookOpen,
  },
]

const practicalResources = [
  {
    title: "Kijiji - Classificados Canada",
    description: "O maior site de classificados do Canada, equivalente ao OLX brasileiro. Essencial para encontrar moradia, moveis usados, eletronicos e diversos itens. Filtre por cidade e categoria. Cuidado com golpes: nunca pague antecipadamente sem ver o produto ou imovel, e desconfie de precos muito abaixo do mercado.",
    url: "https://www.kijiji.ca/",
    icon: Building,
  },
  {
    title: "Wise (antigo TransferWise)",
    description: "Plataforma para transferencias internacionais com taxas muito menores que bancos tradicionais. Oferece tambem cartao de debito multimoeda que voce pode usar no Canada. Configure sua conta antes de viajar e faca uma transferencia teste para garantir que tudo funciona.",
    url: "https://wise.com/",
    icon: DollarSign,
  },
  {
    title: "Numbeo - Comparador de Custo de Vida",
    description: "Compare detalhadamente o custo de vida entre cidades canadenses e brasileiras. Veja precos medios de aluguel, supermercado, transporte e restaurantes. Ferramenta essencial para planejar seu orcamento e decidir entre diferentes cidades para o intercambio.",
    url: "https://www.numbeo.com/cost-of-living/",
    icon: DollarSign,
  },
  {
    title: "Google Flights - Passagens Aereas",
    description: "Compare precos de passagens aereas de multiplas companhias. Use o recurso de datas flexiveis para encontrar os melhores precos. Configure alertas de preco para ser notificado quando passagens ficarem mais baratas. Lembre-se: so compre passagens apos ter o visto aprovado.",
    url: "https://www.google.com/flights",
    icon: Plane,
  },
  {
    title: "XE Currency Converter",
    description: "Conversor de moedas em tempo real. Use para acompanhar a cotacao do dolar canadense e planejar suas financas. O app mobile funciona offline, util para quando voce chegar no Canada e precisar converter precos rapidamente.",
    url: "https://www.xe.com/",
    icon: DollarSign,
  },
  {
    title: "Rentals.ca - Aluguel de Imoveis",
    description: "Agregador de anuncios de aluguel de diversas fontes. Oferece filtros detalhados por preco, numero de quartos, e comodidades. Mais focado em apartamentos completos, mas tambem lista quartos em alguns casos.",
    url: "https://rentals.ca/",
    icon: Building,
  },
]

const communityResources = [
  {
    title: "Grupos Facebook - Brasileiros no Canada",
    description: "Comunidades ativas de brasileiros em praticamente todas as cidades canadenses. Busque por 'Brasileiros em Toronto', 'Brasileiros em Vancouver', etc. Otimos para dicas locais, venda de itens, e encontrar moradia. Muitos grupos tem milhares de membros ativos dispostos a ajudar recem-chegados.",
    url: "https://www.facebook.com/",
    icon: Users,
  },
  {
    title: "Reddit r/ImmigrationCanada",
    description: "Comunidade no Reddit dedicada a questoes de imigracao canadense. Otimo para perguntas especificas sobre vistos, processos e experiencias. A comunidade e ativa e inclui tanto imigrantes quanto profissionais da area que oferecem orientacoes.",
    url: "https://www.reddit.com/r/ImmigrationCanada/",
    icon: MessageCircle,
  },
  {
    title: "Reddit r/Canada",
    description: "Comunidade geral sobre o Canada com discussoes sobre noticias, cultura e vida no pais. Util para entender o contexto canadense e se familiarizar com assuntos locais antes e durante o intercambio.",
    url: "https://www.reddit.com/r/canada/",
    icon: MessageCircle,
  },
  {
    title: "InterNations",
    description: "Rede global de expatriados com comunidades ativas em cidades canadenses. Organizam eventos presenciais e oferecem forum de discussao. Bom para networking com pessoas de diversas nacionalidades vivendo no Canada.",
    url: "https://www.internations.org/",
    icon: Users,
  },
]

const healthResources = [
  {
    title: "Health Canada - Saude Publica",
    description: "Portal oficial de saude do governo canadense com informacoes sobre o sistema de saude, alertas sanitarios, vacinas recomendadas e regulamentacoes. Consulte antes de viajar para verificar se ha alguma exigencia especifica de saude.",
    url: "https://www.canada.ca/en/health-canada.html",
    icon: Heart,
  },
  {
    title: "Canadian Mental Health Association",
    description: "Recursos sobre saude mental no Canada, incluindo linhas de apoio e servicos disponiveis. O choque cultural pode afetar sua saude mental - e importante conhecer os recursos disponiveis antes de precisar deles.",
    url: "https://cmha.ca/",
    icon: Heart,
  },
  {
    title: "Telehealth Ontario (e equivalentes provinciais)",
    description: "Servicos de orientacao medica por telefone disponiveis em cada provincia. Util para tirar duvidas de saude sem precisar ir a uma clinica. Pesquise o equivalente na provincia onde vai estudar.",
    url: "https://www.ontario.ca/page/get-medical-advice-telehealth-ontario",
    icon: Heart,
  },
]

function ResourceSection({ 
  title, 
  description,
  resources 
}: { 
  title: string
  description: string
  resources: typeof officialResources 
}) {
  return (
    <section className="mb-16">
      <h2 className="mb-3 text-2xl font-bold text-foreground">{title}</h2>
      <p className="mb-8 text-muted-foreground leading-relaxed">{description}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <resource.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function RecursosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">Recursos Uteis</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Uma curadoria completa de links, ferramentas e recursos essenciais para ajudar voce em cada etapa da sua jornada ELAP, desde a pesquisa inicial ate a vida no Canada.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl lg:px-6">
            
            <div className="mb-16 rounded-xl bg-primary/5 border border-primary/10 p-8">
              <h2 className="mb-4 text-xl font-bold text-foreground">Como Usar Esta Pagina</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Organizei os recursos em categorias para facilitar sua navegacao. Cada link foi testado e selecionado com base na minha experiencia e na de outros bolsistas. Recomendo salvar esta pagina nos favoritos e consultar sempre que precisar de uma referencia rapida durante seu processo de candidatura ou intercambio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Dica importante:</strong> Sempre priorize informacoes dos sites oficiais (governo canadense, CBIE e universidades) sobre informacoes de terceiros. Regras e procedimentos podem mudar sem aviso previo, e os sites oficiais sao as unicas fontes garantidamente atualizadas.
              </p>
            </div>

            <ResourceSection 
              title="Sites Oficiais e Governamentais" 
              description="Fontes primarias e confiaveis de informacao sobre o programa ELAP, processo de visto e universidades canadenses. Consulte esses sites para informacoes atualizadas e oficiais antes de tomar qualquer decisao importante."
              resources={officialResources} 
            />
            
            <ResourceSection 
              title="Pesquisa Academica e Networking" 
              description="Ferramentas essenciais para encontrar professores, ler artigos academicos e construir sua rede de contatos. Use esses recursos na fase de busca por carta de aceite - quanto mais voce conhecer o trabalho dos professores, melhores serao seus emails de contato."
              resources={researchResources} 
            />
            
            <ResourceSection 
              title="Vida Pratica e Financas" 
              description="Recursos para questoes do dia a dia como moradia, transferencias de dinheiro e planejamento financeiro. Familiarize-se com essas ferramentas antes de viajar para facilitar sua adaptacao."
              resources={practicalResources} 
            />

            <ResourceSection 
              title="Comunidades e Redes de Apoio" 
              description="Conecte-se com outros brasileiros no Canada e comunidades de imigrantes. Ter uma rede de apoio faz enorme diferenca na adaptacao, especialmente nas primeiras semanas quando tudo ainda e novo e desafiador."
              resources={communityResources} 
            />

            <ResourceSection 
              title="Saude e Bem-estar" 
              description="Informacoes sobre o sistema de saude canadense e recursos de apoio. Conheca essas opcoes antes de precisar delas - em uma emergencia, voce nao quer estar pesquisando o que fazer."
              resources={healthResources} 
            />

            <div className="mt-16 rounded-xl border border-border bg-card p-8">
              <h2 className="mb-4 text-xl font-bold text-foreground">Conhece Algum Recurso Util que Nao Esta Aqui?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Esta lista e constantemente atualizada com novos recursos baseados em feedback de leitores e bolsistas. Se voce conhece algum site, ferramenta ou comunidade que foi especialmente util na sua experiencia com o ELAP e acha que deveria estar listado aqui, adoraria saber.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Entre em contato pelas minhas redes sociais (disponiveis na <a href="/sobre" className="text-primary hover:underline">pagina Sobre</a>) para sugerir novos recursos. Meu objetivo e criar a lista mais completa e util possivel para estudantes brasileiros que sonham com o intercambio no Canada.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
