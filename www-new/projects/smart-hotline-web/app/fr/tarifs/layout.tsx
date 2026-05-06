import { siteUrl } from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tarifs Partenaire Téléphonique PME | À partir de 15$/h | Smart Hotline Quebec",
  description: "Tarifs transparents pour PME. À partir de 15$/h. Essai gratuit 2 semaines. Offres flexibles 20h à 120h/semaine. CAD, EUR, USD, CHF.",
  keywords: ['tarifs téléphoniste', 'prix externalisation téléphonique', 'coût réception appels', 'tarif réception appels', 'devis partenaire téléphonique quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Tarifs Partenaire Téléphonique PME | À partir de 15$/h | Smart Hotline Quebec",
    description: "Tarifs transparents pour PME. À partir de 15$/h. Essai gratuit 2 semaines.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/fr/tarifs/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tarifs Smart Hotline - Partenaire Téléphonique Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tarifs Partenaire Téléphonique | À partir de 15$/h | Smart Hotline",
    description: "Tarifs transparents pour PME. À partir de 15$/h. Essai gratuit 2 semaines.",
    images: [`${siteUrl}/og-image.png`],
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
