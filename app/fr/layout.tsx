import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Hotline Agency | Centre d\'Appels & IA pour PME',
  description: 'Externalisez votre relation client. Agents professionnels et IA 24/7. Essai 2 semaines gratuit.',
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="fr" otherLangHref="/en"/>
      <main className="pt-16">{children}</main>
      <Footer lang="fr"/>
    </>
  )
}
