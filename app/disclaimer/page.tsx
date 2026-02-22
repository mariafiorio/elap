import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Aviso legal e disclaimer do blog Bolsa ELAP Canada.",
}

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
            Disclaimer
          </h1>
          <div className="flex flex-col gap-8 text-foreground/85 leading-relaxed">
            <p>
              <strong className="text-foreground">Ultima atualizacao:</strong> Janeiro de 2026
            </p>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Aviso Legal</h2>
              <p>
                As informacoes contidas neste blog sao de carater meramente informativo e baseadas em 
                experiencias pessoais e pesquisas. Este site nao possui qualquer vinculo oficial com o 
                programa ELAP, o governo do Canada ou qualquer instituicao governamental.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Informacoes sobre Bolsas</h2>
              <p>
                Os criterios, prazos e requisitos do programa ELAP podem ser alterados a qualquer momento 
                pelo governo canadense. Sempre verifique as informacoes mais atualizadas diretamente nos 
                sites oficiais do programa antes de tomar qualquer decisao.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Conteudo Patrocinado e Anuncios</h2>
              <p>
                Este site pode exibir anuncios atraves do Google AdSense e outros programas de publicidade. 
                Os anuncios exibidos nao representam necessariamente nossa recomendacao ou endosso dos 
                produtos ou servicos anunciados.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Links de Afiliados</h2>
              <p>
                Alguns links neste site podem ser links de afiliados, o que significa que podemos receber 
                uma pequena comissao se voce realizar uma compra atraves deles, sem custo adicional para voce. 
                Recomendamos apenas produtos e servicos que acreditamos serem genuinamente uteis.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Responsabilidade</h2>
              <p>
                Nao nos responsabilizamos por quaisquer danos ou prejuizos resultantes do uso das informacoes 
                deste site. A decisao de se candidatar a bolsas e de tomar quaisquer acoes com base no conteudo 
                publicado e de total responsabilidade do leitor.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
