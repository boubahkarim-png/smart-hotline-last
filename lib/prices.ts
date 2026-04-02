
// ============================================================
// PRICES — Premium Monthly Packages (4+ tiers per service)
// Outbound: HOURLY RATE (unchanged) + CRM + autodialer features
// Other services: Monthly packages with included volume
// Geo-adapted pricing per country (not simple conversion)
// ============================================================

export type Currency = 'CAD' | 'EUR' | 'USD' | 'CHF'

export interface CurrencyConfig {
  symbol: string
  code: Currency
  locale: string
  // Outbound - HOURLY RATE (per hour, unchanged from original)
  outbound_trial: number // trial hourly rate
  outbound: number[] // hourly rates [20h, 40h, 80h, 120h, unlimited tiers]
  // AI voice agents - Monthly packages with included minutes
  ai_monthly: number[] // [Starter, Pro, Business, Enterprise]
  ai_minutes: number[] // included minutes per tier
  ai_per_min: number[] // overage rate per tier
  // Inbound reception - Monthly packages with included calls
  inbound: number[] // [Starter, Pro, Business, Enterprise]
  inbound_calls: number[] // included calls per tier
  inbound_per_call: number[] // overage rate per tier
  // CRM - Monthly only (no setup fee)
  crm_monthly: number[] // [Starter, Pro, Business, Enterprise]
  crm_contacts: number[] // contact limit
}

// ============================================================
// CANADA PRICING (CAD) - Premium market
// ============================================================
export const PRICES_CA: CurrencyConfig = {
  symbol: 'CA$',
  code: 'CAD',
  locale: 'fr-CA',
  // Outbound - HOURLY RATE (unchanged)
  outbound_trial: 15,
  outbound: [19, 18, 17, 16, 15], // per hour, more hours = lower rate
  // AI Voice Agents - 4 tiers
  ai_monthly: [324, 799, 1999, 3499],
  ai_minutes: [500, 2000, 6000, 15000],
  ai_per_min: [0.40, 0.32, 0.25, 0.20],
  // Inbound Reception - 4 tiers
  inbound: [699, 999, 2499, 4499],
  inbound_calls: [100, 300, 1000, 2500],
  inbound_per_call: [6.50, 4.00, 2.50, 2.00],
  // CRM - Monthly only
  crm_monthly: [249, 499, 1099, 1999],
  crm_contacts: [500, 2000, 10000, 50000],
}

// ============================================================
// FRANCE/EUROPE PRICING (EUR)
// ============================================================
export const PRICES_EU: CurrencyConfig = {
  symbol: '€',
  code: 'EUR',
  locale: 'fr-FR',
  // Outbound - HOURLY RATE (unchanged)
  outbound_trial: 11,
  outbound: [13, 12, 11, 10, 9], // per hour, more hours = lower rate
  // AI Voice Agents - 4 tiers
  ai_monthly: [259, 649, 1649, 2899],
  ai_minutes: [500, 2000, 6000, 15000],
  ai_per_min: [0.35, 0.28, 0.22, 0.18],
  // Inbound Reception - 4 tiers
  inbound: [599, 899, 2199, 3999],
  inbound_calls: [100, 300, 1000, 2500],
  inbound_per_call: [5.50, 3.50, 2.20, 1.80],
  // CRM - Monthly only
  crm_monthly: [199, 399, 899, 1699],
  crm_contacts: [500, 2000, 10000, 50000],
}

// ============================================================
// USA PRICING (USD)
// ============================================================
export const PRICES_US: CurrencyConfig = {
  symbol: '$',
  code: 'USD',
  locale: 'en-US',
  // Outbound - HOURLY RATE (unchanged)
  outbound_trial: 12,
  outbound: [14, 13, 12, 11, 10], // per hour, more hours = lower rate
  // AI Voice Agents - 4 tiers
  ai_monthly: [259, 649, 1649, 2899],
  ai_minutes: [500, 2000, 6000, 15000],
  ai_per_min: [0.35, 0.28, 0.22, 0.18],
  // Inbound Reception - 4 tiers
  inbound: [599, 899, 2199, 3999],
  inbound_calls: [100, 300, 1000, 2500],
  inbound_per_call: [5.50, 3.50, 2.20, 1.80],
  // CRM - Monthly only
  crm_monthly: [199, 399, 899, 1699],
  crm_contacts: [500, 2000, 10000, 50000],
}

// ============================================================
// SWITZERLAND PRICING (CHF) - Premium market
// ============================================================
export const PRICES_CH: CurrencyConfig = {
  symbol: 'CHF ',
  code: 'CHF',
  locale: 'fr-CH',
  // Outbound - HOURLY RATE (unchanged)
  outbound_trial: 14,
  outbound: [17, 16, 15, 14, 13], // per hour, more hours = lower rate
  // AI Voice Agents - 4 tiers
  ai_monthly: [324, 799, 1999, 3499],
  ai_minutes: [500, 2000, 6000, 15000],
  ai_per_min: [0.45, 0.35, 0.28, 0.22],
  // Inbound Reception - 4 tiers
  inbound: [749, 1099, 2699, 4899],
  inbound_calls: [100, 300, 1000, 2500],
  inbound_per_call: [7.00, 4.50, 2.80, 2.20],
  // CRM - Monthly only
  crm_monthly: [249, 499, 1099, 1999],
  crm_contacts: [500, 2000, 10000, 50000],
}

export const PRICES: Record<Currency, CurrencyConfig> = {
  CAD: PRICES_CA,
  EUR: PRICES_EU,
  USD: PRICES_US,
  CHF: PRICES_CH,
}

// ============================================================
// GEO CONFIGURATION - Different pricing per region
// ============================================================
export interface GeoConfig {
  currency: Currency
  showPhone: boolean // true for CA/US only
  lang: string
  country: string
}

export const COUNTRY_MAP: Record<string, GeoConfig> = {
  // Canada - local pricing
  CA: { currency: 'CAD', showPhone: true, lang: 'fr', country: 'Canada' },
  // USA - competitive market
  US: { currency: 'USD', showPhone: true, lang: 'en', country: 'United States' },
  // France - European pricing
  FR: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'France' },
  // Belgium - European pricing
  BE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Belgique' },
  // Luxembourg - European pricing
  LU: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Luxembourg' },
  // Monaco - European pricing
  MC: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Monaco' },
  // Morocco - European pricing (historic ties)
  MA: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Maroc' },
  // Algeria - European pricing
  DZ: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Algerie' },
  // Tunisia - European pricing
  TN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Tunisie' },
  // Senegal - European pricing
  SN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Senegal' },
  // Ivory Coast - European pricing
  CI: { currency: 'EUR', showPhone: false, lang: 'fr', country: "Cote d'Ivoire" },
  // Switzerland - premium pricing
  CH: { currency: 'CHF', showPhone: false, lang: 'fr', country: 'Suisse' },
  // UK - USD pricing (English market)
  GB: { currency: 'USD', showPhone: false, lang: 'en', country: 'United Kingdom' },
  // Germany - European pricing
  DE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Allemagne' },
  // Spain - European pricing
  ES: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Espagne' },
  // Italy - European pricing
  IT: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Italie' },
}

export const DEFAULT_GEO: GeoConfig = {
  currency: 'EUR',
  showPhone: false,
  lang: 'fr',
  country: ''
}

const GEO_CACHE_KEY = 'smart_hotline_geo_cache'
const GEO_CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

interface GeoCache {
  data: GeoConfig
  timestamp: number
}

export async function detectGeo(): Promise<GeoConfig> {
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(GEO_CACHE_KEY)
      if (cached) {
        const parsed: GeoCache = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < GEO_CACHE_TTL) {
          return parsed.data
        }
      }
    } catch {}
  }

  try {
    const r = await fetch('https://ipapi.co/json/')
    const d = await r.json()
    const result = COUNTRY_MAP[d.country_code] || { ...DEFAULT_GEO, country: d.country_name || '' }

    if (typeof window !== 'undefined') {
      try {
        const cache: GeoCache = { data: result, timestamp: Date.now() }
        localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(cache))
      } catch {}
    }

    return result
  } catch {
    return DEFAULT_GEO
  }
}
