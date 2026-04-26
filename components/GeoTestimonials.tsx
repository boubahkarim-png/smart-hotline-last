'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent, getTestimonialQuote, getTestimonialRole } from '@/lib/geo-localization'
import { StarIcon } from '@/components/Icons'

export interface GeoTestimonialsProps {
  lang?: 'fr' | 'en'
  theme?: 'light' | 'dark'
  layout?: 'marquee' | 'grid'
  basePath?: string
  cardSize?: 'sm' | 'lg'
  roleColor?: string
}

export default function GeoTestimonials({
  lang = 'fr',
  theme = 'light',
  layout = 'marquee',
  basePath = '',
  cardSize = 'lg',
  roleColor
}: GeoTestimonialsProps) {
  const { geo, loading } = useGeo(lang)

  const isDark = theme === 'dark'
  const isSm = cardSize === 'sm'

  if (loading) {
    const skel = isDark
      ? 'bg-white/5 backdrop-blur border border-white/10'
      : 'bg-white border border-slate-200 shadow-lg'
    const gridCls = layout === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children'
      : 'grid grid-cols-1 md:grid-cols-3 gap-8'
    return (
      <div className={gridCls}>
        {[1, 2, 3].map(i => (
          <div key={i} className={`${skel} rounded-2xl p-6 animate-pulse`}>
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

  const cardClass = isDark
    ? `bg-white/10 backdrop-blur rounded-2xl border border-white/20 hover:bg-white/15 transition-all ${isSm ? 'p-6' : 'p-8'}`
    : `bg-white rounded-2xl border border-slate-200 shadow-lg ${isSm ? 'p-6' : 'p-8'}`

  const quoteClass = isDark
    ? `text-white mb-5 leading-relaxed italic ${isSm ? '' : 'text-lg'}`
    : 'text-slate-700 mb-6 leading-relaxed text-lg italic'

  const nameClass = isDark
    ? `font-bold text-white ${isSm ? 'text-sm' : ''}`
    : 'font-bold text-slate-900'

  const resolvedRoleColor = roleColor || (isDark ? 'text-white text-xs' : 'text-slate-500 text-sm')

  const imgClass = isSm
    ? 'w-10 h-10 rounded-full object-cover shadow-lg'
    : 'w-14 h-14 rounded-xl object-cover shadow-lg'

  const gapClass = isSm ? 'gap-3' : 'gap-4'

  const starSize = isSm ? 'w-5 h-5' : 'w-6 h-6'

  const renderCard = (t: typeof testimonials[0], index: number) => {
    const quote = getTestimonialQuote(t, lang)
    const role = getTestimonialRole(t, lang)

    const gridAnim = layout === 'grid' ? `modern-box testimonial-card animate-delay-${(index + 1) * 100}` : ''

    return (
      <div key={`${t.name}-${index}`} className={`${cardClass} ${layout === 'marquee' ? 'min-w-[320px] max-w-[320px] flex-shrink-0' : ''} ${gridAnim}`}>
        <div className="flex gap-1 mb-5">
          {[1,2,3,4,5].map(s => <StarIcon key={s} className={`${starSize} text-amber-400`} />)}
        </div>
        <p className={quoteClass}>&ldquo;{quote}&rdquo;</p>
        <div className={`flex items-center ${gapClass}`}>
          {t.img ? (
            <img src={basePath + t.img} alt={t.name} loading="lazy" className={imgClass} />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">
              {t.initials}
            </div>
          )}
          <div>
            <p className={nameClass}>{t.name}</p>
            <p className={resolvedRoleColor}>{role}</p>
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
        {testimonials.map((t, i) => renderCard(t, i))}
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <div className="testimonial-track testimonial-marquee">
        {[...testimonials, ...testimonials].map((t, i) => renderCard(t, i))}
      </div>
    </div>
  )
}
