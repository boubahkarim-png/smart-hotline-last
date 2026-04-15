import type { Metadata } from 'next'
import { siteUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "AI Voice Agents | Sophie answers in 2 sec | Smart Hotline Quebec",
  description: "AI voice agents 24/7. Sophie answers in under 2 seconds. Native French Quebec, France. Up to 70% cheaper than traditional agents. Free trial.",
  keywords: ['ai voice agents', 'artificial intelligence phone', 'ai call center', 'voice ai quebec', 'automated phone answering', 'ai voice agents for customer service', 'ai receptionist canada', 'automated call answering', 'voice assistant for business', 'ai phone agent montreal'],
  openGraph: {
    title: "AI Voice Agents | Sophie answers in 2 sec | Smart Hotline Quebec",
    description: "AI voice agents 24/7. Sophie answers in under 2 seconds. Native French Quebec, France.",
    type: 'website',
    locale: 'en_CA',
    siteName: 'Smart Hotline',
  },
  alternates: {
    canonical: `${siteUrl}/en/ai-agents/`,
    languages: {
      'fr-CA': `${siteUrl}/fr/agents-ia/`,
      'en-CA': `${siteUrl}/en/ai-agents/`,
    },
  },
}

export default function AiAgentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
