import type { Lang } from './i18n'

export type Country = 'CA' | 'US' | 'FR' | 'BE' | 'CH' | 'OTHER'

export interface CountryContent {
  code: Country
  name: string
  currency: string
  language: string
  phoneVisible: boolean
  testimonialRegion: string
  caseStudy: string
  trustSignal: string
}

export const COUNTRY_CONTENT: Record<Country, CountryContent> = {
  CA: {
    code: 'CA',
    name: 'Canada',
    currency: 'CAD',
    language: 'Français',
    phoneVisible: true,
    testimonialRegion: 'Québec, Ontario',
    caseStudy: 'plus de 200 PME canadiennes',
    trustSignal: 'Entreprise québécoise depuis 2020'
  },
  US: {
    code: 'US',
    name: 'États-Unis',
    currency: 'USD',
    language: 'English',
    phoneVisible: true,
    testimonialRegion: 'New York, California',
    caseStudy: 'over 100 US businesses',
    trustSignal: 'North American operations'
  },
  FR: {
    code: 'FR',
    name: 'France',
    currency: 'EUR',
    language: 'Français',
    phoneVisible: false,
    testimonialRegion: 'Paris, Lyon, Marseille',
    caseStudy: 'plus de 150 entreprises françaises',
    trustSignal: 'RGPD conforme - Hébergement UE'
  },
  BE: {
    code: 'BE',
    name: 'Belgique',
    currency: 'EUR',
    language: 'Français',
    phoneVisible: false,
    testimonialRegion: 'Bruxelles, Wallonie',
    caseStudy: 'PME belges en croissance',
    trustSignal: 'Service bilingue FR/NL'
  },
  CH: {
    code: 'CH',
    name: 'Suisse',
    currency: 'CHF',
    language: 'Français',
    phoneVisible: false,
    testimonialRegion: 'Genève, Lausanne, Zurich',
    caseStudy: 'entreprises suisses premium',
    trustSignal: 'Qualité Swiss Made'
  },
  OTHER: {
    code: 'OTHER',
    name: 'International',
    currency: 'EUR',
    language: 'Français',
    phoneVisible: false,
    testimonialRegion: 'Europe',
    caseStudy: 'PME internationales',
    trustSignal: 'Service multilingue'
  }
}

export function getCountryContent(countryCode: string | null): CountryContent {
  if (!countryCode) return COUNTRY_CONTENT.OTHER
  
  const code = countryCode.toUpperCase() as Country
  return COUNTRY_CONTENT[code] || COUNTRY_CONTENT.OTHER
}

export function getLocalizedTestimonials(lang: Lang, country: Country): Array<{q: string, name: string, role: string, av: string, region?: string}> {
  const baseTestimonials = [
    {
      q: lang === 'fr' 
        ? 'Smart Hotline nous a permis de paraître plus grand. Service vraiment impressionnant.'
        : 'Smart Hotline made us look bigger. Really impressive service.',
      name: 'Marc Lefebvre',
      role: 'Fondateur, TechInnov',
      av: 'ML',
      region: 'Montreal'
    },
    {
      q: lang === 'fr'
        ? 'ROI incroyable. Plus aucune opportunité manquée depuis que nous travaillons ensemble.'
        : 'Incredible ROI. No missed opportunities since we started working together.',
      name: 'Sophie Dubois',
      role: 'Directrice, Cabinet Comptable',
      av: 'SD',
      region: 'Paris'
    },
    {
      q: lang === 'fr'
        ? 'Un des meilleurs investissements. Gestion totale de mes appels et leads qualifiés.'
        : 'One of the best investments. Complete call management and qualified leads.',
      name: 'Jean-Pierre Tremblay',
      role: 'Propriétaire, Restaurant Le Gourmet',
      av: 'JT',
      region: 'Québec'
    }
  ]
  
  return baseTestimonials
}

export function getLocalizedTrustSignals(lang: Lang, country: Country): string[] {
  const content = COUNTRY_CONTENT[country]
  
  const signals = lang === 'fr' ? [
    'Essai 2 semaines gratuit',
    'Setup en 48h',
    'RGPD conforme',
    'Conseillers natifs',
    content.trustSignal,
    '98% satisfaction client',
    '500+ PME satisfaites'
  ] : [
    '2-week free trial',
    '48h setup',
    'GDPR compliant',
    'Native speakers',
    content.trustSignal,
    '98% client satisfaction',
    '500+ happy SMBs'
  ]
  
  return signals
}

export function getLocalizedCaseStudy(lang: Lang, country: Country): {title: string, description: string, metrics: string[]} {
  const content = COUNTRY_CONTENT[country]
  
  if (lang === 'fr') {
    return {
      title: `Une réussite en ${content.name}`,
      description: `Découvrez comment ${content.caseStudy} ont transformé leur relation client avec Smart Hotline.`,
      metrics: [
        '40% de temps économisé',
        '98% taux de satisfaction',
        '48h pour mise en service',
        'ROI en 3 mois'
      ]
    }
  }
  
  return {
    title: `Success in ${content.name}`,
    description: `Discover how ${content.caseStudy} transformed their customer relations with Smart Hotline.`,
    metrics: [
      '40% time saved',
      '98% satisfaction rate',
      '48h to go live',
      'ROI in 3 months'
    ]
  }
}
