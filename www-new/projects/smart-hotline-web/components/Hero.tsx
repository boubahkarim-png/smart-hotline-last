import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  cta1: string
  cta1href: string
  cta2?: string
  cta2href?: string
  imageSrc: string
  imageAlt: string
  badge?: string
  badges?: string[]
}

export default function Hero({
  title, subtitle, cta1, cta1href, cta2, cta2href,
  imageSrc, imageAlt, badge, badges
}: Props) {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Text LEFT — 55% width */}
          <div className="w-full lg:w-[55%] flex-shrink-0">
            {badge && (
              <span className="inline-flex items-center gap-1.5 bg-blue-500 bg-opacity-50 text-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-5">
                ✨ {badge}
              </span>
            )}
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={cta1href}
                className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all text-center shadow-lg">
                {cta1}
              </Link>
              {cta2 && cta2href && (
                <Link href={cta2href}
                  className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-blue-700 transition-all text-center">
                  {cta2}
                </Link>
              )}
            </div>
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {badges.map((b) => (
                  <span key={b} className="flex items-center gap-1.5 bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">
                    ✓ {b}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image RIGHT — 40% width, max 380px height */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div className="relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={380}
                className="rounded-2xl shadow-2xl object-cover w-full"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
                unoptimized
                priority
              />
              {/* Trust badge overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">✅</div>
                  <div>
                    <p className="font-bold text-sm">500+ PME</p>
                    <p className="text-xs text-gray-500">Font confiance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
