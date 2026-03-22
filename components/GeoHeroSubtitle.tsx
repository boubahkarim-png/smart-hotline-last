'use client'
import { useGeo } from '@/hooks/useGeo'

export default function GeoHeroSubtitle({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { content, loading } = useGeo(lang)

  if (loading) return (
    <p className="text-lg text-slate-300 leading-relaxed">
      Conseillers professionnels et agents IA vocaux 24/7. Externalisation simple, r\u00e9sultats imm\u00e9diats.
    </p>
  )

  return (
    <p className="text-lg text-slate-300 leading-relaxed">
      {content.heroSubtitle}
    </p>
  )
}
