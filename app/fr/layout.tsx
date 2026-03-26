import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
  description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h. Essai gratuit 2 semaines. Quebec, Montreal, Canada.",
  keywords: ['centre d\'appels quebec', 'centre d\'appels pme', 'externalisation centre d\'appels', 'réception d\'appels 24/7', 'agents ia vocaux', 'call center quebec', 'service téléconseiller', 'call center montreal', 'réception téléphonique PME', 'agents virtuels quebec', 'externalisation appels', 'réceptionniste virtuelle', 'centre appel pas cher', 'support client quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
    description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
    images: [
      {
        url: 'https://boubahkarim-png.github.io/smart-hotline-last/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Centre d\'Appels Quebec',
      },
    ],
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/',
    },
  },
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="fr"/>
      <main className="pt-16">{children}</main>
      <Footer lang="fr"/>
      <TawkToChat />
    </>
  )
}
