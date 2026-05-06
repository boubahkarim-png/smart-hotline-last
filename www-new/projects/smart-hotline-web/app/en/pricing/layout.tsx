import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Call Center Pricing for SMEs | From $11/hr | Smart Hotline Quebec",
  description: "Transparent call center pricing for SMEs. From $11/hr. Free 2-week trial. Flexible plans 20h to 120h/week. CAD, EUR, USD, CHF accepted.",
  keywords: ['call center pricing', 'outsourcing cost', 'call center rates', 'phone answering price', 'call center quote quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Call Center Pricing for SMEs | From $11/hr | Smart Hotline Quebec",
    description: "Transparent call center pricing for SMEs. From $11/hr. Free 2-week trial.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/en/pricing/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Call Center Pricing - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Call Center Pricing | From $11/hr | Smart Hotline Quebec",
    description: "Transparent call center pricing for SMEs. From $11/hr. Free 2-week trial.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/en/pricing/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/tarifs/`,
      'en-CA': `${siteUrl}/en/pricing/`,
    },
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
