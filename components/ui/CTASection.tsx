import GeoAwareCTA from '@/components/GeoAwareCTA'

interface CTASectionProps {
  title: string
  subtitle: string
  lang: 'fr' | 'en'
}

export function CTASection({ title, subtitle, lang }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-black mb-4">{title}</h2>
        <p className="text-blue-200 text-lg mb-10">{subtitle}</p>
        <GeoAwareCTA lang={lang} />
      </div>
    </section>
  )
}
