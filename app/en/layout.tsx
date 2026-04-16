import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Smart Hotline | 24/7 Phone Partner Quebec",
  description: "Never miss a call. 24/7 receptionists and AI voice agents for SMEs. From $11/hr. Free 2-week trial — no commitment.",
  keywords: ['receptionist quebec', 'phone partner', 'ai voice agents', 'virtual receptionist 24/7', 'phone answering service', 'voice solutions canada', 'customer support montreal', 'telephone secretary', 'inbound calls', 'virtual assistant', 'ai phone agent', 'phone support team'],
  robots: 'index, follow',
  openGraph: {
    title: "Smart Hotline | 24/7 Phone Partner Quebec",
    description: "Never miss a call. 24/7 receptionists and AI voice agents for SMEs. From $11/hr.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/en/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - 24/7 Phone Partner Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Hotline | 24/7 Phone Partner Quebec",
    description: "Receptionists, phone agents, and AI voice agents 24/7 for SMEs.",
    images: [`${siteUrl}/og-image.png`],
    site: '@SmartHotline',
  },
  alternates: {
    canonical: `${siteUrl}/en/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/`,
      'en-CA': `${siteUrl}/en/`,
      'x-default': `${siteUrl}/fr/`,
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en"/>
      <main id="main-content" className="pt-16">{children}</main>
      <Footer lang="en"/>
      <TawkToChat />
    </>
  )
}
