import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Smart Hotline | Your 24/7 Phone Partner | Quebec Voice Solutions",
  description: "Your team of receptionists and phone agents 24/7. AI voice agents, virtual assistants, customer support. Partner with us from $11/hr. Free 2-week trial.",
  keywords: ['receptionist quebec', 'phone partner', 'ai voice agents', 'virtual receptionist 24/7', 'phone answering service', 'voice solutions canada', 'customer support montreal', 'telephone secretary', 'inbound calls', 'virtual assistant', 'ai phone agent', 'phone support team'],
  robots: 'index, follow',
  openGraph: {
    title: "Smart Hotline | Your 24/7 Phone Partner | Quebec Voice Solutions",
    description: "Your team of receptionists and phone agents 24/7. AI voice agents, customer support. Partner with us from $11/hr.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
    url: 'https://smart-hotline.com/en/',
    images: [
      {
        url: 'https://smart-hotline.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Your Phone Partner Quebec',
      },
    ],
  },
  alternates: {
    canonical: 'https://smart-hotline.com/en/',
    languages: {
      'fr-CA': 'https://smart-hotline.com/fr/',
      'en-CA': 'https://smart-hotline.com/en/',
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
