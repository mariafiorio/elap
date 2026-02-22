import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, FileText, Globe, BookOpen, Video } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recursos Gratuitos",
  description: "Links uteis, documentos e recursos gratuitos para sua candidatura ao ELAP e intercambio no Canada.",
}

const resources = [
  {
    category: "Links Oficiais",
    icon: Globe,
    items: [
      {
        title: "ELAP - Global Affairs Canada",
        description: "Pagina oficial do programa ELAP no site do governo canadense.",
        url: "https://www.educanada.ca/scholarships-bourses/can/institutions/elap-pfla.aspx",
      },
      {
        title: "EduCanada",
        description: "Portal oficial de educacao do Canada para estudantes internacionais.",
        url: "https://www.educanada.ca/",
      },
      {
        title: "IRCC - Immiigration Canada",
        description: "Informacoes sobre vistos e permissoes de estudo para o Canada.",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      },
    ],
  },
  {
    category: "Documentos Uteis",
    icon: FileText,
    items: [
      {
        title: "Modelo de Carta de Motivacao",
        description: "Dicas e estrutura para escrever uma carta de motivacao forte para o ELAP.",
        url: "/blog",
      },
      {
        title: "Checklist de Documentos",
        description: "Lista completa dos documentos necessarios para a candidatura.",
        url: "/guia-elap#requisitos",
      },
      {
        title: "Cronograma de Candidatura",
        description: "Prazos e datas importantes para nao perder nenhuma etapa.",
        url: "/guia-elap#como-aplicar",
      },
    ],
  },
  {
    category: "Conteudo Educativo",
    icon: BookOpen,
    items: [
      {
        title: "Blog - Dicas ELAP",
        description: "Artigos detalhados com dicas para aprovacao no programa.",
        url: "/blog",
      },
      {
        title: "Guia Completo ELAP",
        description: "Passo a passo completo do processo de candidatura.",
        url: "/guia-elap",
      },
    ],
  },
  {
    category: "Recursos Externos",
    icon: Video,
    items: [
      {
        title: "Universities Canada",
        description: "Lista de universidades canadenses participantes do programa.",
        url: "https://www.univcan.ca/",
      },
      {
        title: "CAPES - Bolsas no Exterior",
        description: "Informacoes sobre bolsas internacionais para brasileiros.",
        url: "https://www.gov.br/capes/",
      },
    ],
  },
]

export default function RecursosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
              Recursos Gratuitos
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Links, documentos e ferramentas para ajudar em sua candidatura ao ELAP.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-12">
              {resources.map((group) => (
                <div key={group.category}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <group.icon className="h-5 w-5 text-primary" />
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">{group.category}</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    {group.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target={item.url.startsWith("http") ? "_blank" : undefined}
                        rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-start justify-between rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                      >
                        <div className="flex-1">
                          <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ExternalLink className="ml-4 mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
