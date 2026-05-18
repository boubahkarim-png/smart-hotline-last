import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import TawkToChat from '@/components/TawkToChat'
import LangSetter from '@/components/LangSetter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
  description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h. Essai gratuit 2 semaines. Quebec, Montreal, Canada.",
  keywords: ['centre d\'appels quebec', 'centre d\'appels pme', 'externalisation centre d\'appels', 'réception d\'appels 24/7', 'agents ia vocaux', 'call center quebec', 'service téléconseiller'],
  openGraph: {
    title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
    description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://www.smart-hotline.com/fr/',
    languages: {
      'fr-CA': 'https://www.smart-hotline.com/fr/',
      'fr-FR': 'https://www.smart-hotline.com/fr/',
      'fr-BE': 'https://www.smart-hotline.com/fr/',
      'fr-CH': 'https://www.smart-hotline.com/fr/',
      'en-CA': 'https://www.smart-hotline.com/en/',
      'en-US': 'https://www.smart-hotline.com/en/',
      'x-default': 'https://www.smart-hotline.com/fr/',
    },
  },
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="fr" />
      <Header lang="fr" otherLangHref="/en"/>
      <main className="pt-16">{children}</main>
      <Footer lang="fr"/>
      <Popup lang="fr"/>
      <TawkToChat />
    </>
  )
}