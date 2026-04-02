'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent } from '@/lib/geo-localization'
import { CheckIcon } from '@/components/Icons'

export default function GeoHeroStats({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  const countryCode = loading ? 'OTHER' : (
    geo.country === 'Canada' ? 'CA' :
    geo.country === 'France' ? 'FR' :
    geo.country === 'Belgique' ? 'BE' :
    geo.country === 'Suisse' ? 'CH' :
    geo.country === 'United States' ? 'US' : 'OTHER'
  )
  
  const content = getCountryContent(countryCode)
  const stats = content.stats
  const fr = lang === 'fr'
  
  const count = stats.clientsCount
  const label = stats.clientsLabel
  
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
        <CheckIcon className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <p className="font-black text-slate-900 text-xl leading-none">{count}</p>
        <p className="text-slate-500 text-xs mt-0.5">{label}</p>
      </div>
    </div>
  )
}
