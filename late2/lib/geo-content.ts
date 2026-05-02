
export interface GeoContent {
  locationBadge: string
  heroSubtitle: string
  marketNote: string
}

import { type GeoConfig } from './prices'

export function getGeoContent(geo: GeoConfig, lang: 'fr' | 'en'): GeoContent {
  const fr = lang === 'fr'
  const c = geo.country

  if (geo.currency === 'CAD') return {
    locationBadge: fr ? 'Montreal, Canada' : 'Montreal, Canada',
    heroSubtitle: fr
      ? 'Externalisez votre relation client depuis Montreal. Conseillers bilingues FR/EN et agents IA 24/7.'
      : 'Outsource your customer relations from Montreal. Bilingual FR/EN agents and AI 24/7.',
    marketNote: fr ? 'Service pour PME canadiennes' : 'Built for Canadian SMBs',
  }

  if (geo.currency === 'USD') return {
    locationBadge: 'Montreal, Canada',
    heroSubtitle: 'Outsource your customer relations. Bilingual agents and AI voice agents 24/7.',
    marketNote: 'Built for US & Canadian SMBs',
  }

  if (geo.currency === 'CHF') return {
    locationBadge: fr ? 'Service Suisse romande' : 'Switzerland',
    heroSubtitle: fr
      ? 'Externalisez votre relation client en Suisse romande. Conseillers francophones et agents IA 24/7.'
      : 'Outsource your customer relations in Switzerland. French agents and AI 24/7.',
    marketNote: fr ? 'Service pour PME suisses' : 'For Swiss SMBs',
  }

  // EUR — country specific
  const map: Record<string, Partial<GeoContent>> = {
    'France': {
      locationBadge: fr ? 'Service France' : 'Service France',
      heroSubtitle: fr
        ? 'Externalisez votre relation client en France. Conseillers francophones et agents IA 24/7.'
        : 'Outsource your customer relations in France. French-speaking agents and AI 24/7.',
      marketNote: fr ? 'Service pour PME francaises' : 'For French SMBs',
    },
    'Belgique': {
      locationBadge: fr ? 'Service Belgique' : 'Service Belgium',
      heroSubtitle: fr
        ? 'Externalisez votre relation client en Belgique. Conseillers francophones et agents IA 24/7.'
        : 'Outsource your customer relations in Belgium.',
      marketNote: fr ? 'Service pour PME belges' : 'For Belgian SMBs',
    },
  }

  const specific = map[c] || {}
  return {
    locationBadge: specific.locationBadge || (c ? `Service ${c}` : 'Europe francophone'),
    heroSubtitle: specific.heroSubtitle || (fr
      ? `Externalisez votre relation client. Conseillers francophones et agents IA 24/7.`
      : `Outsource your customer relations. French-speaking agents and AI 24/7.`),
    marketNote: specific.marketNote || (fr ? `Service pour PME` : 'For SMBs'),
  }
}
