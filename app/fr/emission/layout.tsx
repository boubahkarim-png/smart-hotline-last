import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Émission d'Appels & Prospection | Centre d'Appels Quebec | Smart Hotline",
  description: "Service d'émission d'appels pour PME. Leads qualifiés, prise de rendez-vous, prospection téléphonique. Scripts optimisés. À partir de 15$/h. Essai gratuit.",
  keywords: ['émission appels', 'prospection téléphonique', 'leads qualifiés', 'call center outbound', 'prise rendez-vous quebec'],
  openGraph: {
    title: "Émission d'Appels & Prospection | Centre d'Appels Quebec | Smart Hotline",
    description: "Service d'émission d'appels pour PME. Leads qualifiés, prise de rendez-vous, prospection téléphonique.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/fr/emission/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/fr/emission/',
      'en-CA': 'https://boubahkarim-png.github.io/en/outbound/',
    },
  },
}

export default function EmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
