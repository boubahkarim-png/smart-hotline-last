'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent, getComplianceBadge } from '@/lib/geo-localization'
import { ShieldCheckIcon } from '@/components/Icons'

export default function GeoComplianceBadge({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  if (loading) {
    return (
      <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
        <ShieldCheckIcon className="w-4 h-4" />
        ...
      </span>
    )
  }
  
  const badge = getComplianceBadge(geo, lang)
  
  return (
    <span 
      className="flex items-center gap-1.5 bg-green-100 text-green-700 text-sm px-3 py-1.5 rounded-full"
      title={badge.description}
    >
      <ShieldCheckIcon className="w-4 h-4" />
      {badge.text}
    </span>
  )
}
