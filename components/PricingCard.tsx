'use client'
import Link from 'next/link'
import { useCurrency } from '@/hooks/useCurrency'

interface Props {
  name: string
  description: string
  priceKey: 'outbound' | 'ai' | 'inbound' | 'support' | 'crm'
  priceIndex: number
  perUnit: string
  popular?: boolean
  ctaHref: string
  ctaLabel: string
  features?: string[]
}

export default function PricingCard({
  name, description, priceKey, priceIndex,
  perUnit, popular, ctaHref, ctaLabel, features
}: Props) {
  const { prices, loading } = useCurrency()

  const price = prices?.[priceKey]?.[priceIndex]
  const symbol = prices?.symbol || ''

  return (
    <div className={[
      'bg-white rounded-2xl p-6 relative flex flex-col',
      popular
        ? 'border-2 border-blue-500 shadow-xl'
        : 'border border-gray-200 shadow-sm',
    ].join(' ')}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Populaire
          </span>
        </div>
      )}
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="mb-1">
        {loading ? (
          <div className="h-10 bg-gray-100 rounded animate-pulse w-24"/>
        ) : (
          <span className="text-4xl font-extrabold text-blue-600">
            {symbol}{price}
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-5">/{perUnit}</p>
      {features && (
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span> {f}
            </li>
          ))}
        </ul>
      )}
      <Link href={ctaHref}
        className={[
          'block text-center py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors',
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
        ].join(' ')}>
        {ctaLabel}
      </Link>
    </div>
  )
}
