import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Multichannel Customer Support | Quebec Call Center | Smart Hotline",
  description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT score. From $11/hr. Free 2-week trial.",
  keywords: ['customer support', 'helpdesk quebec', 'multichannel support', 'sme customer service', 'whatsapp support'],
  openGraph: {
    title: "Multichannel Customer Support | Quebec Call Center | Smart Hotline",
    description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT score.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/en/support/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/support/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/support/',
    },
  },
}

export default function EnSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
