import { siteUrl } from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tarifs Partenaire Téléphonique PME | À partir de 15$/h | Smart Hotline Quebec",
  description: "Tarifs transparents pour PME. À partir de 15$/h. Essai gratuit 2 semaines. Offres flexibles 20h à 120h/semaine. CAD, EUR, USD, CHF.",
  keywords: ['tarifs téléphoniste', 'prix externalisation téléphonique', 'coût réception appels', 'tarif réception appels', 'devis partenaire téléphonique quebec'],
  openGraph: {
    title: "Tarifs Partenaire Téléphonique PME | À partir de 15$/h | Smart Hotline Quebec",
    description: "Tarifs transparents pour PME. À partir de 15$/h. Essai gratuit 2 semaines.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: `${siteUrl}/fr/tarifs/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/tarifs/`,
      'en-CA': `${siteUrl}/en/pricing/`,
    },
  },
}

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
