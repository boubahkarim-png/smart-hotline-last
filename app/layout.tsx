import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Smart Hotline Agency | Centre d'Appels & IA pour PME",
  description: "Centre d'appels externalisé pour PME. Agents & IA vocaux 24/7.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
