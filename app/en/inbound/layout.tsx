import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Inbound Call Center 24/7 | Quebec Call Center | Smart Hotline",
  description: "24/7 inbound call center for SMEs. Zero missed calls. Bilingual agents, custom scripts. From $11/hr. Free 2-week trial.",
  keywords: ['inbound call center', '24/7 reception', 'call answering service', 'phone answering quebec', 'inbound calls sme'],
  openGraph: {
    title: "Inbound Call Center 24/7 | Quebec Call Center | Smart Hotline",
    description: "24/7 inbound call center for SMEs. Zero missed calls. Bilingual agents, custom scripts.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://smart-hotline.com/en/inbound/',
    languages: {
      'fr-CA': 'https://smart-hotline.com/fr/reception/',
      'en-CA': 'https://smart-hotline.com/en/inbound/',
    },
  },
}

export default function InboundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
