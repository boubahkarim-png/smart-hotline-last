import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Support Client Multicanal | Centre d'Appels Quebec | Smart Hotline",
  description: "Support client multicanal: téléphone, email, chat, WhatsApp. Réponses sous 2h. Score CSAT 98%. À partir de 15$/h. Essai gratuit 2 semaines.",
  keywords: ['support client', 'helpdesk quebec', 'support multicanal', 'service client pme', 'support whatsapp'],
  openGraph: {
    title: "Support Client Multicanal | Centre d'Appels Quebec | Smart Hotline",
    description: "Support client multicanal: téléphone, email, chat, WhatsApp. Réponses sous 2h. Score CSAT 98%.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/fr/support/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/fr/support/',
      'en-CA': 'https://boubahkarim-png.github.io/en/support/',
    },
  },
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
