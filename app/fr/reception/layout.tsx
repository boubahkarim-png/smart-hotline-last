import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Réception d'Appels 24/7 | Centre d'Appels Quebec | Smart Hotline",
  description: "Service de réception d'appels 24/7 pour PME. Zéro appel manqué. Conseillers bilingues, scripts personnalisés. À partir de 15$/h. Essai gratuit 2 semaines.",
  keywords: ['réception appels 24/7', 'réception téléphonique pme', 'externalisation réception', 'call center inbound', 'service téléphonique quebec'],
  openGraph: {
    title: "Réception d'Appels 24/7 | Centre d'Appels Quebec | Smart Hotline",
    description: "Service de réception d'appels 24/7 pour PME. Zéro appel manqué. Conseillers bilingues, scripts personnalisés.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/reception/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/reception/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/inbound/',
    },
  },
}

export default function ReceptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
