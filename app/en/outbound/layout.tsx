import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Outbound Call Center | Lead Generation | Smart Hotline Quebec",
  description: "Outbound call center for SMEs. Qualified leads, appointment setting, phone prospecting. Optimized scripts. From $11/hr. Free trial.",
  keywords: ['outbound call center', 'lead generation quebec', 'telemarketing services', 'appointment setting', 'phone prospecting', 'outbound calls sme', 'lead qualification call center', 'b2b telemarketing canada', 'appointment scheduling service', 'cold calling services montreal'],
  openGraph: {
    title: "Outbound Call Center | Lead Generation | Smart Hotline Quebec",
    description: "Outbound call center for SMEs. Qualified leads, appointment setting, phone prospecting.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: `${siteUrl}/en/outbound/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/emission/`,
      'en-CA': `${siteUrl}/en/outbound/`,
    },
  },
}

export default function OutboundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
