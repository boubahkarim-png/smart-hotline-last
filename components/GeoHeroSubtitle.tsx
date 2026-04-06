'use client'
import { useGeo } from '@/hooks/useGeo'

export default function GeoHeroSubtitle({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
const { content, loading } = useGeo(lang)

const defaultText = lang === 'fr' 
  ? 'Des conseillers professionnels et des agents IA 24/7. Externalisation simple, résultats immédiats.'
  : 'Professional agents and AI voice agents 24/7. Simple outsourcing, immediate results.'

if (loading) return (
  <p className="text-lg text-slate-600 leading-relaxed">
    {defaultText}
  </p>
)

return (
  <p className="text-lg text-slate-600 leading-relaxed">
    {content.heroSubtitle}
  </p>
)
}
