import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

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
    canonical: `${siteUrl}/en/crm/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/crm/`,
      'en-CA': `${siteUrl}/en/crm/`,
    },
  },
}

export default function EnCrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
