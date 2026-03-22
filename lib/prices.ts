
// ============================================================
// PRICES — Single source of truth
// Currency detected by IP — no UI switcher
// ============================================================

export type Currency = 'CAD' | 'EUR' | 'USD' | 'CHF'

export interface CurrencyConfig {
  symbol: string
  code: Currency
  locale: string
  // Outbound human agents per hour
  outbound_trial: number
  outbound: number[]       // [Starter 20h, Pro 40h, Business 80h, Enterprise 120h]
  // AI voice agents per minute (market rate -30%)
  ai_per_min: number[]     // [Starter, Pro, Business, Enterprise]
  // Inbound monthly packages (market rate -30%)
  inbound: number[]        // [Basic, Advanced, Premium]
  // Support monthly
  support: number[]        // [Basic, Pro, Premium]
  // CRM monthly
  crm: number[]            // [Starter, Pro, Enterprise]
}

export const PRICES: Record<Currency, CurrencyConfig> = {
  CAD: {
    symbol: 'CA$', code: 'CAD', locale: 'fr-CA',
    outbound_trial: 15,
    outbound: [19, 18, 17, 16],
    ai_per_min: [0.12, 0.15, 0.11, 0.09],
    inbound: [249, 389, 549],
    support: [289, 439, 649],
    crm: [289, 439, 699],
  },
  EUR: {
    symbol: '\u20ac', code: 'EUR', locale: 'fr-FR',
    outbound_trial: 11,
    outbound: [13, 12, 11, 10],
    ai_per_min: [0.09, 0.11, 0.08, 0.07],
    inbound: [189, 299, 419],
    support: [219, 329, 489],
    crm: [219, 329, 529],
  },
  USD: {
    symbol: '$', code: 'USD', locale: 'en-US',
    outbound_trial: 11,
    outbound: [14, 13, 12, 11],
    ai_per_min: [0.10, 0.13, 0.09, 0.08],
    inbound: [219, 339, 479],
    support: [249, 379, 559],
    crm: [249, 379, 599],
  },
  CHF: {
    symbol: 'CHF\u00a0', code: 'CHF', locale: 'fr-CH',
    outbound_trial: 12,
    outbound: [15, 14, 13, 12],
    ai_per_min: [0.11, 0.14, 0.10, 0.08],
    inbound: [229, 359, 499],
    support: [269, 409, 599],
    crm: [269, 409, 649],
  },
}

// Country → currency + phone preference
export interface GeoConfig {
  currency: Currency
  showPhone: boolean   // true for CA/US only
  lang: string         // preferred language
  country: string
}

export const COUNTRY_MAP: Record<string, GeoConfig> = {
  CA: { currency: 'CAD', showPhone: true,  lang: 'fr', country: 'Canada' },
  US: { currency: 'USD', showPhone: true,  lang: 'en', country: 'United States' },
  FR: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'France' },
  BE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Belgique' },
  LU: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Luxembourg' },
  MC: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Monaco' },
  MA: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Maroc' },
  DZ: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Algerie' },
  TN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Tunisie' },
  SN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Senegal' },
  CI: { currency: 'EUR', showPhone: false, lang: 'fr', country: "Cote d'Ivoire" },
  CH: { currency: 'CHF', showPhone: false, lang: 'fr', country: 'Suisse' },
  GB: { currency: 'EUR', showPhone: false, lang: 'en', country: 'United Kingdom' },
  DE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Allemagne' },
  ES: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Espagne' },
  IT: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Italie' },
}

export const DEFAULT_GEO: GeoConfig = { currency: 'EUR', showPhone: false, lang: 'fr', country: '' }

export async function detectGeo(): Promise<GeoConfig> {
  try {
    const r = await fetch('https://ipapi.co/json/')
    const d = await r.json()
    return COUNTRY_MAP[d.country_code] || { ...DEFAULT_GEO, country: d.country_name || '' }
  } catch {
    return DEFAULT_GEO
  }
}
