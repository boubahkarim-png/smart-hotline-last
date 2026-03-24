import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tarifs Centre d'Appels PME | À partir de 15$/h | Smart Hotline Quebec",
  description: "Tarifs transparents centre d'appels pour PME. À partir de 15$/h. Essai gratuit 2 semaines. Offres flexibles 20h à 120h/semaine. CAD, EUR, USD, CHF.",
  keywords: ['tarifs centre appels', 'prix externalisation téléphonique', 'coût call center', 'tarif réception appels', 'devis centre appels quebec'],
  openGraph: {
    title: "Tarifs Centre d'Appels PME | À partir de 15$/h | Smart Hotline Quebec",
    description: "Tarifs transparents centre d'appels pour PME. À partir de 15$/h. Essai gratuit 2 semaines.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/tarifs/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/tarifs/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/pricing/',
    },
  },
}

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
