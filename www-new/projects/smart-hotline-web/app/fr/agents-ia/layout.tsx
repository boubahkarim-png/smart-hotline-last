import { siteUrl } from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline Quebec",
  description: "Agents IA vocaux 24/7. Sophie répond en moins de 2 secondes. Français natif Quebec, France. Jusqu'à 70% moins cher qu'un conseiller. Essai gratuit.",
  keywords: ['agents ia vocaux', 'intelligence artificielle téléphonique', 'sophie ia', 'répondeur automatique ia', 'call center ia quebec', 'agent ia répondeur téléphonique', 'assistants vocaux ia entreprises', 'robots téléphoniques intelligents', 'ia pour centre d\'appels', 'agent vocal intelligent quebec'],
  robots: 'index, follow',
  openGraph: {
    title: "Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline Quebec",
    description: "Agents IA vocaux 24/7. Sophie répond en moins de 2 secondes. Français natif Quebec, France.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
    url: `${siteUrl}/fr/agents-ia/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Agents IA Vocaux Sophie - Smart Hotline Quebec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline",
    description: "Agents IA vocaux 24/7. Sophie répond en moins de 2 secondes. Français natif.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${siteUrl}/fr/agents-ia/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/agents-ia/`,
      'en-CA': `${siteUrl}/en/ai-agents/`,
    },
  },
}

export default function AgentsIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
