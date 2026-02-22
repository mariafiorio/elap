import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export const viewport: Viewport = {
  themeColor: '#1a56db',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Bolsa ELAP Canada - Guia Completo para Estudantes Brasileiros',
    template: '%s | Bolsa ELAP Canada',
  },
  description: 'Guia completo sobre o programa ELAP (Emerging Leaders in the Americas Program). Dicas, processo de candidatura e experiencias de bolsistas brasileiros no Canada.',
  keywords: ['ELAP', 'bolsa Canada', 'intercambio', 'estudar no Canada', 'Emerging Leaders Americas', 'bolsa de estudos'],
  authors: [{ name: 'Bolsa ELAP Canada' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Bolsa ELAP Canada',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
