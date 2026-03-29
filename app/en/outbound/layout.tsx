import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Outbound Call Center | Lead Generation | Smart Hotline Quebec",
  description: "Outbound call center for SMEs. Qualified leads, appointment setting, phone prospecting. Optimized scripts. From $11/hr. Free trial.",
  keywords: ['outbound call center', 'lead generation quebec', 'telemarketing services', 'appointment setting', 'phone prospecting'],
  openGraph: {
    title: "Outbound Call Center | Lead Generation | Smart Hotline Quebec",
    description: "Outbound call center for SMEs. Qualified leads, appointment setting, phone prospecting.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://smart-hotline.com/en/outbound/',
    languages: {
      'fr-CA': 'https://smart-hotline.com/fr/emission/',
      'en-CA': 'https://smart-hotline.com/en/outbound/',
    },
  },
}

export default function OutboundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
