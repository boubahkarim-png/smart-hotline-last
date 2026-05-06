import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Inbound Call Center 24/7 | Quebec Call Center | Smart Hotline",
  description: "24/7 inbound call center for SMEs. Zero missed calls. Bilingual agents, custom scripts. From $11/hr. Free 2-week trial.",
  keywords: ['inbound call center', '24/7 reception', 'call answering service', 'phone answering quebec', 'inbound calls sme', 'call center quebec', 'after hours answering service', 'virtual receptionist montreal', 'phone answering service canada', '24/7 inbound call center', 'bilingual call center quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Inbound Call Center 24/7 | Quebec Call Center | Smart Hotline",
    description: "24/7 inbound call center for SMEs. Zero missed calls. Bilingual agents, custom scripts.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/en/inbound/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Inbound Call Center 24/7 - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inbound Call Center 24/7 | Smart Hotline Quebec",
    description: "24/7 inbound call center for SMEs. Zero missed calls. Bilingual agents.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/en/inbound/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/reception/`,
      'en-CA': `${siteUrl}/en/inbound/`,
    },
  },
}

export default function InboundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
