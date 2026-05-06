import { siteUrl } from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CRM & Listes B2B/B2C | SuiteCRM | Smart Hotline Quebec",
  description: "Intégration CRM SuiteCRM, listes B2B/B2C qualifiées, email marketing Mautic. Gestion complète de vos leads et pipeline. Configuration incluse.",
  keywords: ['crm suitecrm', 'listes b2b quebec', 'gestion leads', 'email marketing mautic', 'crm pme'],
  robots: 'index, follow',
  openGraph: {
    title: "CRM & Listes B2B/B2C | SuiteCRM | Smart Hotline Quebec",
    description: "Intégration CRM SuiteCRM, listes B2B/B2C qualifiées, email marketing Mautic. Gestion complète de vos leads et pipeline.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/fr/crm/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CRM SuiteCRM et Listes B2B - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CRM & Listes B2B/B2C | SuiteCRM | Smart Hotline Quebec",
    description: "Intégration CRM SuiteCRM, listes B2B/B2C qualifiées, email marketing Mautic.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/fr/crm/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/crm/`,
      'en-CA': `${siteUrl}/en/crm/`,
    },
  },
}

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
