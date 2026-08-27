import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Acafro | Gestão que fortalece raízes',
  description: 'Sistema de controle de aulas, alunos e gestão administrativa da Acafro.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f4738',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${dmSans.variable} ${fraunces.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
