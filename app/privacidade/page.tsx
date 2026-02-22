import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description: "Politica de privacidade do blog Bolsa ELAP Canada.",
}

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
            Politica de Privacidade
          </h1>
          <div className="flex flex-col gap-8 text-foreground/85 leading-relaxed">
            <p>
              <strong className="text-foreground">Ultima atualizacao:</strong> Janeiro de 2026
            </p>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">1. Informacoes que Coletamos</h2>
              <p>
                Coletamos automaticamente certas informacoes quando voce visita nosso site, como endereco IP, 
                tipo de navegador, paginas visitadas e tempo de permanencia.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">2. Uso de Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiencia de navegacao, analisar 
                o trafego do site e exibir anuncios relevantes. Voce pode configurar seu navegador para recusar 
                cookies, mas isso pode afetar a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">3. Google AdSense</h2>
              <p>
                Este site utiliza o Google AdSense para exibir anuncios. O Google pode usar cookies para exibir 
                anuncios com base em visitas anteriores ao nosso site ou a outros sites. Voce pode desativar a 
                publicidade personalizada visitando as Configuracoes de Anuncios do Google.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">4. Google Analytics</h2>
              <p>
                Utilizamos o Google Analytics para entender como os visitantes interagem com nosso site. 
                Essas informacoes nos ajudam a melhorar o conteudo e a experiencia do usuario. Os dados 
                coletados sao anonimos e agregados.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">5. Compartilhamento de Dados</h2>
              <p>
                Nao vendemos, trocamos ou transferimos suas informacoes pessoais para terceiros, exceto 
                conforme descrito nesta politica (por exemplo, provedores de servicos como Google Analytics 
                e Google AdSense).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">6. Seus Direitos</h2>
              <p>
                Voce tem o direito de acessar, corrigir ou excluir suas informacoes pessoais. Para exercer 
                esses direitos, entre em contato conosco atraves das nossas redes sociais na{" "}
                <a href="/sobre" className="text-primary hover:underline">pagina Sobre</a>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">7. Contato</h2>
              <p>
                Se voce tiver duvidas sobre esta politica de privacidade, visite a{" "}
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
