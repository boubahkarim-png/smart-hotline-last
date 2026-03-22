import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Hotline Agency | Centre d\'Appels & IA pour PME',
  description: 'Services de communication externalisee pour PME. Agents professionnels et agents IA 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
