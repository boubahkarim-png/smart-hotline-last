import { siteUrl } from '@/lib/siteConfig'
import type { Metadata} from 'next'

export const metadata: Metadata = {
  title: "Émission d'Appels & Prospection | Partenaire Téléphonique Quebec | Smart Hotline",
  description: "Service d'émission d'appels pour PME. Leads qualifiés, prise de rendez-vous, prospection téléphonique. Scripts optimisés. À partir de 15$/h. Essai gratuit.",
  keywords: ['émission appels', 'prospection téléphonique', 'leads qualifiés', 'call center outbound', 'prise rendez-vous quebec', 'appel sortant prospection', 'centre d\'appels émission pme', 'service télémarketing externalisé', 'prospection b2b quebec', 'génération de leads montreal'],
  openGraph: {
    title: "Émission d'Appels & Prospection | Partenaire Téléphonique Quebec | Smart Hotline",
    description: "Service d'émission d'appels pour PME. Leads qualifiés, prise de rendez-vous, prospection téléphonique.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: `${siteUrl}/fr/emission/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/emission/`,
      'en-CA': `${siteUrl}/en/outbound/`,
    },
  },
}

export default function EmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
