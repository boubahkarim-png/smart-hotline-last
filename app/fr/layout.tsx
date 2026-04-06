import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Smart Hotline | Votre Partenaire Téléphonique 24/7 | Quebec",
  description: "Votre équipe de téléphonistes et réceptionnistes virtuels 24/7. Agents IA vocaux, secrétaires téléphoniques, support client. Devenez partenaire dès 15$/h. Essai gratuit 2 semaines.",
  keywords: ['réceptionniste quebec', 'téléphoniste pme', 'agents ia vocaux', 'réception téléphonique 24/7', 'secrétaire virtuelle', 'service téléphonique quebec', 'support client montreal', 'voice solutions', 'partenaire téléphonique', 'réception d\'appels', 'télésecrétariat', 'assistant vocal ia', 'partenaire téléphonique pme'],
  robots: 'index, follow',
  openGraph: {
    title: "Smart Hotline | Votre Partenaire Téléphonique 24/7 | Quebec",
    description: "Votre équipe de téléphonistes et réceptionnistes virtuels 24/7. Agents IA vocaux, support client. Devenez partenaire dès 15$/h.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/fr/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Votre Partenaire Téléphonique Quebec',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/fr/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/`,
      'en-CA': `${siteUrl}/en/`,
    },
  },
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="fr"/>
      <main id="main-content" className="pt-16">{children}</main>
      <Footer lang="fr"/>
      <TawkToChat />
    </>
  )
}
