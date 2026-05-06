'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent } from '@/lib/geo-localization'

export default function GeoAddress({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  const countryCode = loading ? 'OTHER' : (
    geo.country === 'Canada' ? 'CA' :
    geo.country === 'France' ? 'FR' :
    geo.country === 'Belgique' ? 'BE' :
    geo.country === 'Suisse' ? 'CH' :
    geo.country === 'United States' ? 'US' : 'OTHER'
  )
  
  const content = getCountryContent(countryCode)
  const address = content.addresses[0]
  const fr = lang === 'fr'
  
  return (
    <div className="text-sm text-slate-400">
      <p className="font-semibold text-slate-300 mb-1">{fr ? 'Adresse' : 'Address'}</p>
      <p>{address.type}</p>
      <p>{address.street}</p>
      <p>{address.city}</p>
      <p>{address.country}</p>
    </div>
  )
}
