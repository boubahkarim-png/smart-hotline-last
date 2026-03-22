'use client'
import { useState, useEffect } from 'react'
import { PRICES, detectCurrency, type Currency, type CurrencyConfig } from '@/lib/prices'

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [prices, setPrices] = useState<CurrencyConfig>(PRICES.EUR)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    detectCurrency().then((c) => {
      setCurrency(c)
      setPrices(PRICES[c])
      setLoading(false)
    })
  }, [])

  const changeCurrency = (c: Currency) => {
    setCurrency(c)
    setPrices(PRICES[c])
  }

  return { currency, prices, loading, changeCurrency }
}
