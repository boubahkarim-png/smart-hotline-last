import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline Quebec",
  description: "Agents IA vocaux 24/7. Sophie répond en moins de 2 secondes. Français natif Quebec, France. Jusqu'à 70% moins cher qu'un conseiller. Essai gratuit.",
  keywords: ['agents ia vocaux', 'intelligence artificielle téléphonique', 'sophie ia', 'répondeur automatique ia', 'call center ia quebec'],
  openGraph: {
    title: "Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline Quebec",
    description: "Agents IA vocaux 24/7. Sophie répond en moins de 2 secondes. Français natif Quebec, France.",
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: 'https://boubahkarim-png.github.io/smart-hotline-last/fr/agents-ia/',
    languages: {
      'fr-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/fr/agents-ia/',
      'en-CA': 'https://boubahkarim-png.github.io/smart-hotline-last/en/ai-agents/',
    },
  },
}

export default function AgentsIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
