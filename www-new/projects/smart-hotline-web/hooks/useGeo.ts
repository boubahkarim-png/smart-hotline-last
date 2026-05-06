'use client'
import { useState, useEffect } from 'react'
import { PRICES, detectGeo, DEFAULT_GEO, type Currency, type CurrencyConfig, type GeoConfig } from '@/lib/prices'
import { getGeoContent, type GeoContent } from '@/lib/geo-content'

export interface GeoState {
  geo: GeoConfig
  prices: CurrencyConfig
  content: GeoContent
  loading: boolean
}

const defaultContent = getGeoContent(DEFAULT_GEO, 'fr')

export function useGeo(lang: 'fr' | 'en' = 'fr'): GeoState {
  const [geo, setGeo] = useState<GeoConfig>(DEFAULT_GEO)
  const [prices, setPrices] = useState<CurrencyConfig>(PRICES.EUR)
  const [content, setContent] = useState<GeoContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    detectGeo().then((g) => {
      setGeo(g)
      setPrices(PRICES[g.currency])
      setContent(getGeoContent(g, lang))
      setLoading(false)
    })
  }, [lang])

  return { geo, prices, content, loading }
}
