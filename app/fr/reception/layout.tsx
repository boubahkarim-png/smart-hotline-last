import { siteUrl } from '@/lib/siteConfig'
import type { Metadata} from 'next'

export const metadata: Metadata = {
  title: "Réception d'Appels 24/7 | Partenaire Téléphonique Quebec | Smart Hotline",
  description: "Service de réception d'appels 24/7 pour PME. Zéro appel manqué. Conseillers bilingues, scripts personnalisés. À partir de 15$/h. Essai gratuit 2 semaines.",
  keywords: ['réception appels 24/7', 'réception téléphonique pme', 'externalisation réception', 'call center inbound', 'service téléphonique quebec'],
  openGraph: {
    title: "Réception d'Appels 24/7 | Partenaire Téléphonique Quebec | Smart Hotline",
    description: "Service de réception d'appels 24/7 pour PME. Zéro appel manqué. Conseillers bilingues, scripts personnalisés.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: `${siteUrl}/fr/reception/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/reception/`,
      'en-CA': `${siteUrl}/en/inbound/`,
    },
  },
}

export default function ReceptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
