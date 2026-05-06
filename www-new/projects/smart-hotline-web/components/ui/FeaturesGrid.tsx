import { CheckIcon } from '@/components/Icons'

interface Feature {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}

interface FeaturesGridProps {
  features: Feature[]
  accentBg?: string
  accentColor?: string
  dark?: boolean
}

export function FeaturesGrid({ features, accentBg = 'bg-blue-100', accentColor = 'text-blue-700', dark = false }: FeaturesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) => {
        const Icon = feature.icon || CheckIcon
        return (
          <div key={i} className={`rounded-2xl p-6 border ${dark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-slate-100 hover:shadow-lg'} transition-all`}>
            <div className={`w-12 h-12 ${accentBg} rounded-xl flex items-center justify-center mb-4`}>
              <Icon className={`w-6 h-6 ${accentColor}`} />
            </div>
            <h3 className={`font-bold text-lg mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
            <p className={`text-sm ${dark ? 'text-blue-200' : 'text-slate-500'}`}>{feature.desc}</p>
          </div>
        )
      })}
    </div>
  )
}
