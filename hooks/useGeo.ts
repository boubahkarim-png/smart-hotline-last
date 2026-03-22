'use client'
import { useState, useEffect } from 'react'
import { PRICES, detectGeo, DEFAULT_GEO, type Currency, type CurrencyConfig, type GeoConfig } from '@/lib/prices'

export interface GeoState {
  geo: GeoConfig
  prices: CurrencyConfig
  loading: boolean
}

export function useGeo(): GeoState {
  const [geo, setGeo] = useState<GeoConfig>(DEFAULT_GEO)
  const [prices, setPrices] = useState<CurrencyConfig>(PRICES.EUR)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    detectGeo().then((g) => {
      setGeo(g)
      setPrices(PRICES[g.currency])
      setLoading(false)
    })
  }, [])

  return { geo, prices, loading }
}
