'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent } from '@/lib/geo-localization'
import { StarIcon } from '@/components/Icons'

export default function GeoTestimonials({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 animate-pulse">
            <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
            <div className="h-20 bg-white/10 rounded mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }
  
  const countryCode = geo.country === 'Canada' ? 'CA' :
                      geo.country === 'France' ? 'FR' :
                      geo.country === 'Belgique' ? 'BE' :
                      geo.country === 'Suisse' ? 'CH' :
                      geo.country === 'United States' ? 'US' : 'OTHER'
  
  const content = getCountryContent(countryCode)
  const testimonials = content.testimonials
  const fr = lang === 'fr'
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map(({ quote, name, role, location, initials }) => (
        <div key={name} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="flex gap-0.5 mb-4">
            {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => (
              <Icon key={i} className="w-5 h-5 text-amber-400" />
            ))}
          </div>
          <p className="text-blue-100 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">
              {initials}
            </div>
            <div>
              <p className="font-bold text-white text-sm">{name}</p>
              <p className="text-blue-200 text-xs">{role}</p>
              <p className="text-blue-300 text-xs">{location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
