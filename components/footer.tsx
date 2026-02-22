import Link from "next/link"
import { MapPin } from "lucide-react"

const footerLinks = {
  blog: [
    { href: "/blog", label: "Todos os Posts" },
    { href: "/guia-elap", label: "Guia ELAP" },
    { href: "/recursos", label: "Recursos Gratuitos" },
  ],
  sobre: [
    { href: "/sobre", label: "Sobre" },
  ],
  legal: [
    { href: "/privacidade", label: "Politica de Privacidade" },
    { href: "/termos", label: "Termos de Uso" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Bolsa ELAP
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Seu guia completo para conquistar a bolsa ELAP e estudar no Canada.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Conteudo</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.blog.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Sobre</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.sobre.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Bolsa ELAP Canada. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
