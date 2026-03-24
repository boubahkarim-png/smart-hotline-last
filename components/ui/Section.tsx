interface SectionProps {
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'muted'
  className?: string
}

export function Section({ children, variant = 'light', className = '' }: SectionProps) {
  const backgrounds = {
    light: 'bg-white',
    dark: 'bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white',
    muted: 'bg-slate-50'
  }

  return (
    <section className={`py-20 ${backgrounds[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
