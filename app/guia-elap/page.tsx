import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdContainer } from "@/components/ad-container"
import { CheckCircle, FileText, Clock, DollarSign, Globe, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guia Completo ELAP",
  description: "Guia passo a passo sobre como se candidatar ao programa ELAP (Emerging Leaders in the Americas Program) para estudar no Canada.",
}

export default function GuiaElapPage() {
  const sections = [
    {
      id: "o-que-e",
      title: "O que e o ELAP?",
      icon: Globe,
      content: `O ELAP (Emerging Leaders in the Americas Program) e um programa de bolsas oferecido pelo governo canadense 
      atraves do Global Affairs Canada. Ele permite que estudantes de paises da America Latina e do Caribe realizem 
      intercambio academico em universidades e colleges canadenses por periodos de 4 a 6 meses.`,
      highlights: [
        "Programa financiado pelo governo do Canada",
        "Aberto para estudantes de graduacao e pos-graduacao",
        "Duracao de 4 a 6 meses",
        "Disponivel para paises da America Latina e Caribe",
      ],
    },
    {
      id: "beneficios",
      title: "Beneficios da Bolsa",
      icon: DollarSign,
      content: `A bolsa ELAP oferece suporte financeiro generoso para que os estudantes possam focar em seus estudos 
      sem preocupacoes financeiras durante o intercambio.`,
      highlights: [
        "Auxilio mensal para custo de vida",
        "Seguro saude durante toda a estadia",
        "Isencao de taxas academicas na universidade canadense",
        "Auxilio para passagem aerea",
        "Suporte para obtencao do visto",
      ],
    },
    {
      id: "requisitos",
      title: "Requisitos",
      icon: FileText,
      content: `Para se candidatar ao ELAP, e necessario atender a alguns requisitos basicos estabelecidos pelo programa.`,
      highlights: [
        "Ser cidadao de um pais elegivel (inclui Brasil)",
        "Estar matriculado em instituicao de ensino superior no pais de origem",
        "Ter obtido carta de aceite de uma instituicao canadense parceira",
        "Dominio do ingles ou frances (dependendo da universidade)",
        "Bom desempenho academico",
      ],
    },
    {
      id: "como-aplicar",
      title: "Como Aplicar",
      icon: Clock,
      content: `O processo de candidatura exige planejamento e organizacao. Aqui esta o passo a passo para maximizar suas chances.`,
      highlights: [
        "Identifique universidades canadenses parceiras do programa",
        "Entre em contato com professores e obtenha carta de aceite",
        "Prepare carta de motivacao detalhada",
        "Reuna todos os documentos necessarios",
        "Preencha o formulario de candidatura no prazo",
        "Acompanhe o resultado e prepare-se para o visto",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-primary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <span className="mb-3 inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-sm font-medium text-primary-foreground">
              Guia Atualizado 2026
            </span>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-primary-foreground">
              Guia Completo ELAP
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Tudo que voce precisa saber para se candidatar e conquistar a bolsa ELAP no Canada.
            </p>
          </div>
        </section>

        <AdContainer className="mx-auto my-8 max-w-4xl px-4" slot="guia-top" />

        <section className="px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <nav className="mb-12 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Neste guia:</h2>
              <ul className="flex flex-col gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {sections.map((section, index) => (
              <div key={section.id} className="mb-12">
                <div id={section.id} className="scroll-mt-24">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <section.icon className="h-5 w-5 text-primary" />
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                  </div>
                  <p className="mb-6 leading-relaxed text-foreground/85">{section.content}</p>
                  <ul className="flex flex-col gap-3">
                    {section.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index === 1 && <AdContainer className="mt-8" slot="guia-mid" />}
              </div>
            ))}

            <div className="rounded-xl bg-accent/10 p-8 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h2 className="mb-2 text-xl font-bold text-foreground">Quer saber mais?</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Confira nossos artigos detalhados no blog com dicas e experiencias reais.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver Posts do Blog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <AdContainer className="mx-auto mb-8 max-w-4xl px-4" slot="guia-bottom" />
      </main>
      <Footer />
    </div>
  )
}
