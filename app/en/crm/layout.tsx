import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec",
  description: "SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing. Complete lead and pipeline management. Setup included.",
  keywords: ['suitecrm crm', 'b2b lists quebec', 'lead management', 'mautic email marketing', 'crm for sme'],
  openGraph: {
    title: "CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec",
    description: "SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing. Complete lead management.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/en/crm/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/crm/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/crm/',
    },
  },
}

export default function EnCrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
