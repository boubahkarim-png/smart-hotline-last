import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import TawkToChat from '@/components/TawkToChat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
  description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h. Essai gratuit 2 semaines. Quebec, Montreal, Canada.",
  keywords: ['centre d\'appels quebec', 'centre d\'appels pme', 'externalisation centre d\'appels', 'réception d\'appels 24/7', 'agents ia vocaux', 'call center quebec', 'service téléconseiller', 'call center montreal', 'réception téléphonique PME', 'agents virtuels quebec', 'externalisation appels', 'réceptionniste virtuelle', 'centre appel pas cher', 'support client quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Centre d'Appels Quebec | Externalisation PME | Smart Hotline 24/7",
    description: "Centre d'appels à Quebec. Réception 24/7, agents IA vocaux, support client. Externalisez votre relation client à partir de 15$/h.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
    images: [
      {
        url: 'https://boubahkarim-png.github.io/smart-hotline-last/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Centre d\'Appels Quebec',
      },
    ],
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/',
    },
  },
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="fr" otherLangHref="/en"/>
      <main className="pt-16">{children}</main>
      <Footer lang="fr"/>
      <Popup lang="fr"/>
      <TawkToChat />
      {/* Floating WhatsApp - Mobile Only */}
      <a
        href="https://wa.me/15148190559"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.09 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.866 9.866 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-19.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.403z"/>
        </svg>
      </a>
    </>
  )
}
