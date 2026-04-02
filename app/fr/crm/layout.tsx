import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CRM & Listes B2B/B2C | SuiteCRM | Smart Hotline Quebec",
  description: "Intégration CRM SuiteCRM, listes B2B/B2C qualifiées, email marketing Mautic. Gestion complète de vos leads et pipeline. Configuration incluse.",
  keywords: ['crm suitecrm', 'listes b2b quebec', 'gestion leads', 'email marketing mautic', 'crm pme'],
  openGraph: {
    title: "CRM & Listes B2B/B2C | SuiteCRM | Smart Hotline Quebec",
    description: "Intégration CRM SuiteCRM, listes B2B/B2C qualifiées, email marketing Mautic. Gestion complète de vos leads et pipeline.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/fr/crm/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/fr/crm/',
      'en-CA': 'https://boubahkarim-png.github.io/en/crm/',
    },
  },
}

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
