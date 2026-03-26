import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Call Center Quebec | 24/7 Services for SMEs | Smart Hotline",
  description: "Quebec call center services. 24/7 inbound calls, AI voice agents, customer support. Outsource your customer relations from $11/hr. Free 2-week trial. Montreal, Canada.",
  keywords: ['call center quebec', 'call center services canada', 'call center outsourcing', 'inbound call center', 'ai voice agents', 'customer support services', 'call center montreal', 'answering service montreal', 'virtual receptionist canada', 'phone answering service', 'customer support outsourcing', 'AI voice agents', 'call center services', 'outsourced customer service'],
  robots: 'index, follow',
  openGraph: {
    title: "Call Center Quebec | 24/7 Services for SMEs | Smart Hotline",
    description: "Quebec call center services. 24/7 inbound calls, AI voice agents, customer support. Outsource your customer relations from $11/hr.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: 'https://boubahkarim-png.github.io/smart-hotline-last/en/',
    images: [
      {
        url: 'https://boubahkarim-png.github.io/smart-hotline-last/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Call Center Quebec',
      },
    ],
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/en/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/',
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en"/>
      <main className="pt-16">{children}</main>
      <Footer lang="en"/>
      <TawkToChat />
    </>
  )
}
