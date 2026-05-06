import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Multichannel Customer Support | Quebec Call Center | Smart Hotline",
  description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT score. From $11/hr. Free 2-week trial.",
  keywords: ['customer support', 'helpdesk quebec', 'multichannel support', 'sme customer service', 'whatsapp support'],
  robots: 'index, follow',
  openGraph: {
    title: "Multichannel Customer Support | Quebec Call Center | Smart Hotline",
    description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT score.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/en/support/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Multichannel Customer Support - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Multichannel Customer Support | Smart Hotline Quebec",
    description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/en/support/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/support/`,
      'en-CA': `${siteUrl}/en/support/`,
    },
  },
}

export default function EnSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
