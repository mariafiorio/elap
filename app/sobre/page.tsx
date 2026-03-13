import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdContainer } from "@/components/ad-container"
import { GraduationCap, MapPin, Heart, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre - Minha Historia como Bolsista ELAP",
  description: "Conheca a historia por tras do blog Bolsa ELAP Canada. Sou ex-bolsista ELAP e compartilho minha experiencia para ajudar outros estudantes brasileiros.",
}

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">Sobre</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Conheca a historia por tras do Bolsa ELAP Canada e por que criei este projeto.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl">
            {/* Historia Pessoal */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Minha Historia com o ELAP</h2>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Ola! Meu nome e Maria e sou ex-bolsista do programa ELAP. Em 2023, tive a oportunidade 
                  incrivel de realizar um intercambio de 6 meses em uma universidade canadense, uma experiencia 
                  que mudou completamente minha vida academica e pessoal.
                </p>
                <p>
                  Quando decidi me candidatar ao ELAP, enfrentei muitas dificuldades. Encontrar informacoes 
                  claras e organizadas sobre o processo de candidatura foi um desafio enorme. A maioria dos 
                  recursos disponiveis estava em ingles, era fragmentada ou desatualizada. Passei meses 
                  juntando pedacos de informacao de diferentes fontes, conversando com outros estudantes 
                  e tentando entender como o processo realmente funcionava.
                </p>
                <p>
                  Depois de muita persistencia, consegui a carta de aceite de uma universidade em Toronto 
                  e fui selecionada para o programa. Durante meu intercambio, vivi experiencias incriveis: 
                  participei de projetos de pesquisa, fiz amigos de varios paises, conheci uma cultura 
                  academica completamente diferente e cresci muito como pessoa e profissional.
                </p>
                <p>
                  Quando voltei ao Brasil, percebi que muitos estudantes tinham as mesmas duvidas que 
                  eu tive no inicio. Recebia mensagens perguntando sobre o processo, pedindo dicas, 
                  querendo saber como conseguir a carta de aceite. Foi ai que nasceu a ideia deste blog: 
                  criar o recurso que eu gostaria de ter encontrado quando estava me candidatando.
                </p>
              </div>
            </div>

            <AdContainer className="mb-12" slot="sobre-mid" />

            {/* Objetivo do Blog */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Por que Este Blog Existe</h2>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  O Bolsa ELAP Canada foi criado com um objetivo simples: ajudar estudantes brasileiros 
                  a conquistar a bolsa ELAP de forma mais facil e organizada. Aqui voce encontra tudo o 
                  que precisa saber sobre o programa em um so lugar, em portugues, com informacoes 
                  atualizadas e baseadas em experiencia real.
                </p>
                <p>
                  Acredito que a falta de informacao acessivel e um dos maiores obstaculos para estudantes 
                  brasileiros que querem estudar no exterior. Muitos candidatos qualificados desistem 
                  porque nao sabem por onde comecar ou se sentem perdidos no processo. Este blog existe 
                  para mudar isso.
                </p>
                <p>
                  Todo o conteudo aqui e gratuito e baseado na minha experiencia pessoal como bolsista, 
                  alem de pesquisas atualizadas sobre o programa. Meu compromisso e oferecer informacoes 
                  honestas, praticas e realmente uteis para quem quer se candidatar.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Target,
                    title: "Informacao Clara",
                    description: "Guias passo a passo em portugues, sem jargoes complicados ou informacoes fragmentadas.",
                  },
                  {
                    icon: Heart,
                    title: "Experiencia Real",
                    description: "Conteudo baseado na minha vivencia como bolsista, nao apenas teoria.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Foco no Estudante",
                    description: "Tudo pensado para ajudar voce a conquistar sua vaga no programa.",
                  },
                  {
                    icon: MapPin,
                    title: "Sempre Atualizado",
                    description: "Informacoes revisadas regularmente para refletir mudancas no programa.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                    <item.icon className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* O que voce encontra */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">O que Voce Encontra Aqui</h2>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Neste blog, voce vai encontrar conteudos completos e detalhados sobre todos os aspectos 
                  do programa ELAP e do processo de intercambio no Canada:
                </p>
              </div>

              <ul className="mt-4 space-y-3">
                {[
                  "Guia completo do programa ELAP com todas as etapas do processo",
                  "Dicas praticas para escrever a carta de motivacao perfeita",
                  "Estrategias para conseguir a carta de aceite de universidades canadenses",
                  "Informacoes sobre documentos, prazos e requisitos",
                  "Dicas de vida no Canada: moradia, transporte, clima, cultura",
                  "Experiencias reais de bolsistas brasileiros",
                  "Links e recursos uteis para sua candidatura",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fale Comigo */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">Fale Comigo</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Tem alguma duvida sobre o ELAP? Quer trocar uma ideia sobre o processo de candidatura? 
                Quer compartilhar sua propria experiencia? Me manda uma mensagem pelas minhas redes 
                sociais -- eu respondo todas as mensagens que chegam por esses canais e adoro conhecer 
                outros estudantes interessados no programa.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://youtube.com/@bolsaelapcanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 px-5 py-4 transition-colors hover:bg-secondary"
                >
                  <svg className="h-6 w-6 shrink-0 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">YouTube</p>
                    <p className="text-sm text-muted-foreground">Videos com dicas e experiencias</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/bolsaelapcanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 px-5 py-4 transition-colors hover:bg-secondary"
                >
                  <svg className="h-6 w-6 shrink-0 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">Conteudo diario e stories</p>
                  </div>
                </a>

                <a
                  href="https://tiktok.com/@bolsaelapcanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 px-5 py-4 transition-colors hover:bg-secondary"
                >
                  <svg className="h-6 w-6 shrink-0 text-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">TikTok</p>
                    <p className="text-sm text-muted-foreground">Videos curtos e dicas rapidas</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <AdContainer className="mx-auto mb-8 max-w-4xl px-4" slot="sobre-bottom" />
      </main>
      <Footer />
    </div>
  )
}
