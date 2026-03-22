
// ============================================================
// PRICES — Single source of truth
// All prices in CAD base, converted for display
// ============================================================

export type Currency = 'CAD' | 'EUR' | 'USD' | 'CHF'

export interface CurrencyConfig {
  symbol: string
  code: Currency
  outbound_trial: number
  outbound: number[]   // [Starter, Pro, Business, Enterprise]
  ai_trial: number
  ai: number[]
  inbound: number[]    // [Basic, Advanced, Premium]
  support: number[]    // [Basic, Pro, Premium]
  crm: number[]        // [Starter, Pro, Enterprise]
}

export const PRICES: Record<Currency, CurrencyConfig> = {
  CAD: {
    symbol: 'CA$', code: 'CAD',
    outbound_trial: 15,
    outbound: [19, 18, 17, 16],
    ai_trial: 6,
    ai: [7, 9, 8, 7],
    inbound: [199, 339, 479],
    support: [269, 409, 609],
    crm: [269, 409, 679],
  },
  EUR: {
    symbol: '€', code: 'EUR',
    outbound_trial: 11,
    outbound: [14, 13, 12, 12],
    ai_trial: 5,
    ai: [5, 7, 6, 5],
    inbound: [149, 249, 349],
    support: [199, 299, 449],
    crm: [199, 299, 499],
  },
  USD: {
    symbol: '$', code: 'USD',
    outbound_trial: 11,
    outbound: [13, 12, 12, 11],
    ai_trial: 4,
    ai: [5, 6, 6, 5],
    inbound: [139, 229, 319],
    support: [179, 269, 399],
    crm: [179, 269, 449],
  },
  CHF: {
    symbol: 'CHF', code: 'CHF',
    outbound_trial: 10,
    outbound: [13, 12, 11, 11],
    ai_trial: 4,
    ai: [5, 6, 6, 5],
    inbound: [139, 229, 319],
    support: [189, 279, 419],
    crm: [189, 279, 469],
  },
}

export const COUNTRY_CURRENCY: Record<string, Currency> = {
  CA: 'CAD',
  US: 'USD',
  FR: 'EUR', BE: 'EUR', LU: 'EUR', MC: 'EUR',
  MA: 'EUR', DZ: 'EUR', TN: 'EUR', SN: 'EUR', CI: 'EUR',
  CH: 'CHF',
}

export async function detectCurrency(): Promise<Currency> {
  try {
    const r = await fetch('https://ipapi.co/json/')
    const d = await r.json()
    return COUNTRY_CURRENCY[d.country_code] || 'EUR'
  } catch {
    return 'EUR'
  }
}
