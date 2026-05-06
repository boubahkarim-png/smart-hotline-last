import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec",
  description: "SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing. Complete lead and pipeline management. Setup included.",
  keywords: ['suitecrm crm', 'b2b lists quebec', 'lead management', 'mautic email marketing', 'crm for sme'],
  robots: 'index, follow',
  openGraph: {
    title: "CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec",
    description: "SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing. Complete lead management.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/en/crm/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CRM SuiteCRM B2B Lists - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec",
    description: "SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing.",
    images: [`${siteUrl}/og-image.png`],
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
