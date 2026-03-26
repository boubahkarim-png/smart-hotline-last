'use client'
import { useGeo } from '@/hooks/useGeo'

export default function GeoHeroSubtitle({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { content, loading } = useGeo(lang)

  if (loading) return (
    <p className="text-lg text-slate-300 leading-relaxed">
      Professional agents and AI voice agents 24/7. Simple outsourcing, immediate results.
    </p>
  )

  return (
    <p className="text-lg text-slate-300 leading-relaxed">
      {content.heroSubtitle}
    </p>
  )
}
