
// ============================================================
// PRICES — Premium Monthly Packages (50% increase)
// Outbound: UNCHANGED - per hour pricing works well
// AI/Inbound/Support/CRM: Monthly packages with included volume
// ============================================================

export type Currency = 'CAD' | 'EUR' | 'USD' | 'CHF'

export interface CurrencyConfig {
  symbol: string
  code: Currency
  locale: string
  // Outbound human agents per hour (appointment setting) - UNCHANGED
  outbound_trial: number
  outbound: number[] // [Starter 20h, Pro 40h, Business 80h, Enterprise 120h]
  // AI voice agents - Monthly packages with included minutes
  ai_monthly: number[] // [Starter, Pro, Business]
  ai_minutes: number[] // included minutes per tier
  ai_per_min: number[] // overage rate per tier
  // Inbound reception - Monthly packages with included calls
  inbound: number[] // [Starter, Pro, Business]
  inbound_calls: number[] // included calls per tier
  inbound_per_call: number[] // overage rate per tier
  // Support - Monthly packages by channels
  support: number[] // [Starter, Pro, Business]
  support_channels: number[] // channels included
  // CRM - Setup fee + Monthly
  crm_setup: number[] // one-time setup fee
  crm_monthly: number[] // monthly fee
  crm_contacts: number[] // contact limit
}

// ============================================================
// CANADA PRICING (CAD) - Premium market
// ============================================================
export const PRICES_CA: CurrencyConfig = {
  symbol: 'CA$',
  code: 'CAD',
  locale: 'fr-CA',
  // Outbound - UNCHANGED
  outbound_trial: 15,
  outbound: [19, 18, 17, 16, 15],
  // AI Voice Agents - Premium monthly packages
  ai_monthly: [249, 799, 1999],
  ai_minutes: [500, 2000, 6000],
  ai_per_min: [0.40, 0.32, 0.25],
  // Inbound Reception - Starter high, Pro/Business lower
  inbound: [699, 700, 1700],
  inbound_calls: [100, 300, 1000],
  inbound_per_call: [5.50, 2.00, 1.50],
  // Customer Support - Multi-channel
  support: [849, 1799, 4199],
  support_channels: [1, 3, 5],
  // CRM Integration
  crm_setup: [699, 1399, 2799],
  crm_monthly: [249, 499, 1099],
  crm_contacts: [500, 2000, 10000],
}

// ============================================================
// FRANCE/EUROPE PRICING (EUR)
// ============================================================
export const PRICES_EU: CurrencyConfig = {
  symbol: '€',
  code: 'EUR',
  locale: 'fr-FR',
  // Outbound - UNCHANGED
  outbound_trial: 11,
  outbound: [13, 12, 11, 10, 9],
  // AI Voice Agents
  ai_monthly: [199, 649, 1649],
  ai_minutes: [500, 2000, 6000],
  ai_per_min: [0.35, 0.28, 0.22],
  // Inbound Reception - Starter high, Pro/Business lower
  inbound: [599, 600, 1500],
  inbound_calls: [100, 300, 1000],
  inbound_per_call: [5.00, 1.80, 1.30],
  // Customer Support
  support: [699, 1499, 3499],
  support_channels: [1, 3, 5],
  // CRM Integration
  crm_setup: [599, 1199, 2399],
  crm_monthly: [199, 399, 899],
  crm_contacts: [500, 2000, 10000],
}

// ============================================================
// USA PRICING (USD)
// ============================================================
export const PRICES_US: CurrencyConfig = {
  symbol: '$',
  code: 'USD',
  locale: 'en-US',
  // Outbound - UNCHANGED
  outbound_trial: 12,
  outbound: [14, 13, 12, 11, 10],
  // AI Voice Agents
  ai_monthly: [199, 649, 1649],
  ai_minutes: [500, 2000, 6000],
  ai_per_min: [0.35, 0.28, 0.22],
  // Inbound Reception - Starter high, Pro/Business lower
  inbound: [599, 600, 1500],
  inbound_calls: [100, 300, 1000],
  inbound_per_call: [5.00, 1.80, 1.30],
  // Customer Support
  support: [699, 1499, 3499],
  support_channels: [1, 3, 5],
  // CRM Integration
  crm_setup: [599, 1199, 2399],
  crm_monthly: [199, 399, 899],
  crm_contacts: [500, 2000, 10000],
}

// ============================================================
// SWITZERLAND PRICING (CHF) - Premium market
// ============================================================
export const PRICES_CH: CurrencyConfig = {
  symbol: 'CHF ',
  code: 'CHF',
  locale: 'fr-CH',
  // Outbound - UNCHANGED
  outbound_trial: 14,
  outbound: [17, 16, 15, 14, 13],
  // AI Voice Agents - Premium Swiss pricing
  ai_monthly: [249, 799, 1999],
  ai_minutes: [500, 2000, 6000],
  ai_per_min: [0.45, 0.35, 0.28],
  // Inbound Reception - Starter high, Pro/Business lower
  inbound: [749, 750, 1800],
  inbound_calls: [100, 300, 1000],
  inbound_per_call: [6.00, 2.20, 1.60],
  // Customer Support
  support: [849, 1799, 4199],
  support_channels: [1, 3, 5],
  // CRM Integration
  crm_setup: [749, 1499, 2999],
  crm_monthly: [249, 499, 1099],
  crm_contacts: [500, 2000, 10000],
}

export const PRICES: Record<Currency, CurrencyConfig> = {
  CAD: PRICES_CA,
  EUR: PRICES_EU,
  USD: PRICES_US,
  CHF: PRICES_CH,
}

// ============================================================
// GEO CONFIGURATION
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

export async function detectGeo(): Promise<GeoConfig> {
  try {
    const r = await fetch('https://ipapi.co/json/')
    const d = await r.json()
    return COUNTRY_MAP[d.country_code] || { ...DEFAULT_GEO, country: d.country_name || '' }
  } catch {
    return DEFAULT_GEO
  }
}
