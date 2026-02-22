import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Globe, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-foreground" />
      </div>
      <div className="relative mx-auto max-w-6xl lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Guia Completo 2026
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl">
            Como conquistar a bolsa ELAP no Canada
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85 text-pretty md:text-xl">
            Tudo o que voce precisa saber sobre o Emerging Leaders in the Americas Program. 
            Dicas, processo de candidatura e experiencias reais de bolsistas brasileiros.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/guia-elap"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Comece Aqui
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Ver Todos os Posts
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { icon: GraduationCap, label: "Bolsa integral", desc: "Sem custos de inscricao" },
            { icon: Globe, label: "6 meses no Canada", desc: "Intercambio academico" },
            { icon: BookOpen, label: "Guia completo", desc: "Passo a passo detalhado" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3 backdrop-blur-sm"
            >
              <item.icon className="h-5 w-5 shrink-0 text-primary-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">{item.label}</p>
                <p className="text-xs text-primary-foreground/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GuideSection() {
  const steps = [
    {
      number: "01",
      title: "Entenda o programa",
      description: "Saiba o que e o ELAP, quem pode participar e quais sao os beneficios oferecidos pelo governo canadense.",
    },
    {
      number: "02",
      title: "Prepare sua candidatura",
      description: "Documentos necessarios, carta de motivacao e como conseguir a carta de aceite da universidade canadense.",
    },
    {
      number: "03",
      title: "Processo seletivo",
      description: "Prazos, formularios e dicas para aumentar suas chances de aprovacao no programa.",
    },
    {
      number: "04",
      title: "Pos-aprovacao",
      description: "Visto, passagem, moradia e tudo que voce precisa saber para se preparar para o Canada.",
    },
  ]

  return (
    <section className="px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground">
            Guia Completo ELAP
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Siga nosso passo a passo para maximizar suas chances de aprovacao na bolsa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="mb-3 inline-block text-3xl font-bold text-primary/30">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/guia-elap"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver Guia Completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function AboutPreview() {
  const highlights = [
    "Ex-bolsista ELAP no Canada",
    "Experiencia real e dicas praticas",
    "Conteudo atualizado regularmente",
    "Comunidade de estudantes brasileiros",
  ]

  return (
    <section className="border-t border-border bg-secondary px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-sm font-medium text-primary">Sobre o Blog</span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance">
              Ajudando estudantes brasileiros a conquistar bolsas no Canada
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Este blog foi criado para compartilhar experiencias reais e informacoes detalhadas sobre o programa 
              ELAP. Nosso objetivo e ajudar mais estudantes brasileiros a terem acesso a essa oportunidade incrivel 
              de estudar no Canada com bolsa integral.
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Saiba mais sobre nos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-primary/5 p-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <GraduationCap className="h-16 w-16 text-primary" />
              <p className="text-4xl font-bold text-foreground">ELAP</p>
              <p className="text-sm text-muted-foreground">Emerging Leaders in the Americas Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
