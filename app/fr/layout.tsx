import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Hotline Agency | Centre d’Appels & IA pour PME',
  description: 'Externalisez votre relation client. Conseillers professionnels et IA 24/7.',
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="fr" otherLangHref="/en"/>
      <main className="pt-16">{children}</main>
      <Footer lang="fr"/>
      <Popup lang="fr"/>
    </>
  )
}
