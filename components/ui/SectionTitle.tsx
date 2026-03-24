interface SectionTitleProps {
  title: string
  subtitle?: string
  dark?: boolean
}

export function SectionTitle({ title, subtitle, dark = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl lg:text-4xl font-black mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-blue-200' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
