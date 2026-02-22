import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do blog Bolsa ELAP Canada.",
}

export default function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
            Termos de Uso
          </h1>
          <div className="flex flex-col gap-8 text-foreground/85 leading-relaxed">
            <p>
              <strong className="text-foreground">Ultima atualizacao:</strong> Janeiro de 2026
            </p>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">1. Aceitacao dos Termos</h2>
              <p>
                Ao acessar e utilizar este site, voce concorda com estes termos de uso. Se nao concordar 
                com algum dos termos, recomendamos que nao utilize o site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">2. Conteudo do Site</h2>
              <p>
                O conteudo publicado neste blog tem carater informativo e educacional. Fazemos o possivel 
                para manter as informacoes atualizadas, mas nao garantimos a precisao, completude ou 
                atualidade de todo o conteudo.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteudo original deste site, incluindo textos, imagens e design, e protegido por 
                direitos autorais. Voce pode compartilhar nosso conteudo desde que cite a fonte e inclua 
                um link para o artigo original.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">4. Links Externos</h2>
              <p>
                Este site pode conter links para sites externos. Nao somos responsaveis pelo conteudo, 
                politicas de privacidade ou praticas de sites de terceiros.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">5. Limitacao de Responsabilidade</h2>
              <p>
                Nao nos responsabilizamos por decisoes tomadas com base nas informacoes deste site. 
                Recomendamos sempre consultar fontes oficiais e profissionais qualificados para decisoes 
                importantes sobre sua candidatura a bolsas.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">6. Alteracoes nos Termos</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. Alteracoes serao 
                publicadas nesta pagina com a data de atualizacao.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">7. Contato</h2>
              <p>
                Para duvidas sobre estes termos, visite a{" "}
                <a href="/sobre" className="text-primary hover:underline">pagina Sobre</a> e entre em contato pelas redes sociais.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
