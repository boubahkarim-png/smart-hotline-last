
// ============================================================
// GEO-AWARE CONTENT
// All text that changes based on visitor location
// ============================================================

import { type GeoConfig } from './prices'

export interface GeoContent {
  // Location display
  city: string
  country: string
  region: string
  // Hero subtitle — mentions local context
  heroSubtitle: string
  // Services we emphasize for this market
  marketNote: string
  // Testimonial location references
  testimonialRegion: string
  // Footer location badge
  locationBadge: string
  // Contact page note
  contactNote: string
}

export function getGeoContent(geo: GeoConfig, lang: 'fr' | 'en'): GeoContent {
  const fr = lang === 'fr'
  const c = geo.country

  // CANADA (default)
  if (geo.currency === 'CAD') return {
    city: 'Montr\u00e9al',
    country: 'Canada',
    region: 'Canada & \u00c9tats-Unis',
    heroSubtitle: fr
      ? 'Externalisez votre relation client depuis Montr\u00e9al. Conseillers bilingues FR/EN et agents IA 24/7.'
      : 'Outsource your customer relations from Montreal. Bilingual FR/EN agents and AI 24/7.',
    marketNote: fr ? 'Service con\u00e7u pour les PME canadiennes' : 'Built for Canadian SMBs',
    testimonialRegion: fr ? 'Qu\u00e9bec' : 'Quebec',
    locationBadge: fr ? ' Montr\u00e9al, Canada' : ' Montreal, Canada',
    contactNote: fr ? 'Disponible par t\u00e9l\u00e9phone, WhatsApp et r\u00e9union en ligne' : 'Available by phone, WhatsApp and online meeting',
  }

  // USA
  if (geo.currency === 'USD') return {
    city: 'Montreal',
    country: 'United States',
    region: 'North America',
    heroSubtitle: 'Outsource your customer relations. Bilingual agents and AI voice agents 24/7. Built for US SMBs.',
    marketNote: 'Built for US & Canadian SMBs',
    testimonialRegion: 'North America',
    locationBadge: ' Serving USA & Canada',
    contactNote: 'Available by phone, WhatsApp and online meeting',
  }

  // SWITZERLAND
  if (geo.currency === 'CHF') return {
    city: 'Gen\u00e8ve',
    country: 'Suisse',
    region: 'Suisse romande',
    heroSubtitle: fr
      ? 'Externalisez votre relation client en Suisse romande. Conseillers fran\u00e7ophones et agents IA 24/7.'
      : 'Outsource your customer relations in Switzerland. French-speaking agents and AI 24/7.',
    marketNote: fr ? 'Service pour PME suisses romandes' : 'For Swiss French-speaking SMBs',
    testimonialRegion: fr ? 'Suisse romande' : 'Switzerland',
    locationBadge: fr ? ' Suisse romande' : ' Switzerland',
    contactNote: fr ? 'Disponible par WhatsApp, email et r\u00e9union en ligne' : 'Available by WhatsApp, email and online meeting',
  }

  // EUROPE — country-specific
  const euroContent: Record<string, Partial<GeoContent>> = {
    'France': {
      city: 'Paris',
      region: 'France',
      heroSubtitle: fr
        ? 'Externalisez votre relation client en France. Conseillers francophones et agents IA 24/7 depuis Montr\u00e9al.'
        : 'Outsource your customer relations in France. French-speaking agents and AI 24/7.',
      marketNote: fr ? 'Service con\u00e7u pour les PME fran\u00e7aises' : 'Built for French SMBs',
      testimonialRegion: fr ? '\u00cele-de-France' : 'France',
      locationBadge: fr ? ' Service France' : ' France',
    },
    'Belgique': {
      city: 'Bruxelles',
      region: 'Belgique',
      heroSubtitle: fr
        ? 'Externalisez votre relation client en Belgique. Conseillers francophones et agents IA 24/7.'
        : 'Outsource your customer relations in Belgium. French-speaking agents and AI 24/7.',
      marketNote: fr ? 'Service pour PME belges' : 'Built for Belgian SMBs',
      testimonialRegion: fr ? 'Belgique' : 'Belgium',
      locationBadge: fr ? ' Service Belgique' : ' Belgium',
    },
    'Maroc': {
      city: 'Casablanca',
      region: 'Maroc',
      heroSubtitle: fr
        ? 'Externalisez votre relation client au Maroc. Conseillers arabophones/francophones et agents IA 24/7.'
        : 'Outsource your customer relations in Morocco. Arabic/French agents and AI 24/7.',
      marketNote: fr ? 'Service pour entreprises marocaines' : 'Built for Moroccan businesses',
      testimonialRegion: 'Maroc',
      locationBadge: fr ? ' Service Maroc' : ' Morocco',
    },
  }

  const specific = euroContent[c] || {}
  return {
    city: specific.city || c || 'Europe',
    country: c || 'Europe',
    region: specific.region || (fr ? 'Europe francophone' : 'French-speaking Europe'),
    heroSubtitle: specific.heroSubtitle || (fr
      ? `Externalisez votre relation client en ${c || 'Europe'}. Conseillers francophones et agents IA 24/7.`
      : `Outsource your customer relations in ${c || 'Europe'}. French-speaking agents and AI 24/7.`),
    marketNote: specific.marketNote || (fr ? `Service pour PME en ${c || 'Europe'}` : `Built for SMBs in ${c || 'Europe'}`),
    testimonialRegion: specific.testimonialRegion || c || 'Europe',
    locationBadge: specific.locationBadge || (fr ? `Service ${c || 'Europe'}` : `Service ${c || 'Europe'}`),
    contactNote: fr
      ? 'Disponible par WhatsApp, email et r\u00e9union en ligne'
      : 'Available by WhatsApp, email and online meeting',
  }
}
