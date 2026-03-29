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
    canonical: 'https://smart-hotline.com/fr/crm/',
    languages: {
      'fr-CA': 'https://smart-hotline.com/fr/crm/',
      'en-CA': 'https://smart-hotline.com/en/crm/',
    },
  },
}

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
