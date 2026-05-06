import { siteUrl } from '@/lib/siteConfig'
import type { Metadata} from 'next'

export const metadata: Metadata = {
  title: "Support Client Multicanal | Partenaire Téléphonique Quebec | Smart Hotline",
  description: "Support client multicanal: téléphone, email, chat, WhatsApp. Réponses sous 2h. Score CSAT 98%. À partir de 15$/h. Essai gratuit 2 semaines.",
  keywords: ['support client', 'helpdesk quebec', 'support multicanal', 'service client pme', 'support whatsapp'],
  robots: 'index, follow',
  openGraph: {
    title: "Support Client Multicanal | Partenaire Téléphonique Quebec | Smart Hotline",
    description: "Support client multicanal: téléphone, email, chat, WhatsApp. Réponses sous 2h. Score CSAT 98%.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/fr/support/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Support Client Multicanal - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Support Client Multicanal | Smart Hotline Quebec",
    description: "Support client multicanal: téléphone, email, chat, WhatsApp. Réponses sous 2h.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/fr/support/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/support/`,
      'en-CA': `${siteUrl}/en/support/`,
    },
  },
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
