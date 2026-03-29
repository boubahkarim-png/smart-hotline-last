import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Call Center Pricing for SMEs | From $11/hr | Smart Hotline Quebec",
  description: "Transparent call center pricing for SMEs. From $11/hr. Free 2-week trial. Flexible plans 20h to 120h/week. CAD, EUR, USD, CHF accepted.",
  keywords: ['call center pricing', 'outsourcing cost', 'call center rates', 'phone answering price', 'call center quote quebec'],
  openGraph: {
    title: "Call Center Pricing for SMEs | From $11/hr | Smart Hotline Quebec",
    description: "Transparent call center pricing for SMEs. From $11/hr. Free 2-week trial.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://smart-hotline.com/en/pricing/',
    languages: {
      'fr-CA': 'https://smart-hotline.com/fr/tarifs/',
      'en-CA': 'https://smart-hotline.com/en/pricing/',
    },
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
