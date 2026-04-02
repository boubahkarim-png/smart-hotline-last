'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent } from '@/lib/geo-localization'

export default function GeoStats({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
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
  
  const items = [
    { n: stats.clientsCount, l: stats.clientsLabel },
    { n: stats.retention, l: fr ? 'Renouvellent' : 'Stay' },
    { n: stats.savings, l: fr ? 'Economie vs interne' : 'Savings vs in-house' },
    { n: '24/7', l: fr ? 'Meme la nuit' : 'Even at night' }
  ]
  
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {items.map(({ n, l }) => (
        <div key={l}>
          <p className="text-4xl font-black text-blue-700">{n}</p>
          <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
        </div>
      ))}
    </div>
  )
}
