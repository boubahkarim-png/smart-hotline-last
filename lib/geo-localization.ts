import type { GeoConfig } from './prices'

export interface CountryContent {
  code: 'CA' | 'FR' | 'BE' | 'CH' | 'US' | 'OTHER'
  name: string
  nameLocal: string
  city: string
  region: string
  compliance: {
    name: string
    shortName: string
    description: string
  }
  currency: 'CAD' | 'EUR' | 'CHF' | 'USD'
  testimonials: Array<{
    quote: string
    name: string
    role: string
    location: string
    initials: string
  }>
  stats: {
    clientsCount: string
    clientsLabel: string
    retention: string
    savings: string
  }
  addresses: Array<{
    type: string
    street: string
    city: string
    country: string
  }>
}

export const COUNTRY_CONTENT: Record<string, CountryContent> = {
  CA: {
    code: 'CA',
    name: 'Canada',
    nameLocal: 'Canada',
    city: 'Montreal',
    region: 'Quebec',
    compliance: {
      name: 'Loi 25',
      shortName: 'Loi 25',
      description: 'Conforme a la Loi 25 sur la protection des renseignements personnels du Quebec'
    },
    currency: 'CAD',
    testimonials: [
      {
        quote: "Honnetement, j'etais sceptique au debut. Mais apres 3 mois, on capte 100% des appels. Meme le dimanche soir a 22h. Ca, ca change vraiment l'affaire pour un restaurant.",
        name: 'Jean-Pierre Tremblay',
        role: 'Proprietaire, Resto La Maison',
        location: 'Rue Saint-Denis, Montreal',
        initials: 'JT'
      },
      {
        quote: "On a essaye deux autres centres d'appels avant. La difference? Ici, les agents connaissent vraiment notre metier de comptable. Un client m'a dit 'votre receptionniste est super', c'etait Sophie l'IA!",
        name: 'Sophie Dubois',
        role: 'Directrice, Cabinet DuBois & Associes',
        location: 'Plateau Mont-Royal, Montreal',
        initials: 'SD'
      },
      {
        quote: "Pendant la tempete de neige de fevrier, nos lignes ont sonne 47 fois. Smart Hotline a tout gere. Pas un appel manque. C'est ca qui m'a convaincu de continuer.",
        name: 'Marc Lefebvre',
        role: 'Fondateur, TechInnov QC',
        location: 'Quartier des Spectacles, Montreal',
        initials: 'ML'
      }
    ],
    stats: {
      clientsCount: '512',
      clientsLabel: 'PME au Quebec',
      retention: '98%',
      savings: '40%'
    },
    addresses: [
      {
        type: 'Siege social',
        street: '1234 Rue Saint-Denis',
        city: 'Montreal, QC',
        country: 'Canada H2X 3C7'
      }
    ]
  },
  FR: {
    code: 'FR',
    name: 'France',
    nameLocal: 'France',
    city: 'Paris',
    region: 'Ile-de-France',
    compliance: {
      name: 'RGPD',
      shortName: 'RGPD',
      description: 'Conforme au Reglement General sur la Protection des Donnees (RGPD)'
    },
    currency: 'EUR',
    testimonials: [
      {
        quote: "On cherchait une solution pour gerer nos appels pendant les pics d'activite. Smart Hotline a compris notre metier de traiteur parisien du premier coup. Nos clients pensent que c'est notre equipe interne!",
        name: 'Marie Fontaine',
        role: 'Gerante, Traiteur Fontaine',
        location: '15eme arrondissement, Paris',
        initials: 'MF'
      },
      {
        quote: "Le passage aux agents IA a revolutionne notre accueil. Sophie repond en 2 secondes, 24h/24. Nos clients de la Defense sont impressionnes par la qualite du service.",
        name: 'Pierre Lefranc',
        role: 'DG, Cabinet Conseil Lefranc',
        location: 'La Defense, Paris',
        initials: 'PL'
      },
      {
        quote: "On a hesite entre embaucher une receptionniste et externaliser. Le choix est vite fait: avec Smart Hotline, on paie 60% moins cher et on a un service 24/7 conforme RGPD.",
        name: 'Catherine Martin',
        role: 'Fondatrice, Studio Martin Design',
        location: 'Le Marais, Paris',
        initials: 'CM'
      }
    ],
    stats: {
      clientsCount: '287',
      clientsLabel: 'PME en France',
      retention: '97%',
      savings: '45%'
    },
    addresses: [
      {
        type: 'Bureau Paris',
        street: '45 Avenue des Champs-Elysees',
        city: 'Paris 8eme',
        country: 'France 75008'
      }
    ]
  },
  BE: {
    code: 'BE',
    name: 'Belgique',
    nameLocal: 'Belgique',
    city: 'Bruxelles',
    region: 'Bruxelles-Capitale',
    compliance: {
      name: 'RGPD',
      shortName: 'RGPD',
      description: 'Conforme au Reglement General sur la Protection des Donnees (RGPD)'
    },
    currency: 'EUR',
    testimonials: [
      {
        quote: "En tant qu'avocat bruxellois, la confidentialite est primordiale. Smart Hotline a compris nos besoins et leur conformite RGPD nous a convaincus. Nos clients apprecient l'accueil personnalise.",
        name: 'Jean-Paul Dubois',
        role: 'Avocat, Cabinet Dubois & Associes',
        location: 'Avenue Louise, Bruxelles',
        initials: 'JD'
      },
      {
        quote: "Notre cabinet comptable a Bruxelles recoit des dizaines d'appels par jour. Smart Hotline les gere tous avec professionnalisme. Le retour des clients est excellent.",
        name: 'Sophie Lambert',
        role: 'Directrice, Comptabilite Lambert',
        location: 'Woluwe, Bruxelles',
        initials: 'SL'
      },
      {
        quote: "On a teste plusieurs services avant de trouver Smart Hotline. La difference? Ils comprennent le marche belge et parlent vraiment notre langue. Pas de centre d'appels decontracte ici.",
        name: 'Marc Vandermeer',
        role: 'Gerant, PME Services BV',
        location: 'Centre-ville, Bruxelles',
        initials: 'MV'
      }
    ],
    stats: {
      clientsCount: '89',
      clientsLabel: 'PME en Belgique',
      retention: '96%',
      savings: '42%'
    },
    addresses: [
      {
        type: 'Bureau Bruxelles',
        street: '78 Avenue Louise',
        city: 'Bruxelles',
        country: 'Belgique 1050'
      }
    ]
  },
  CH: {
    code: 'CH',
    name: 'Suisse',
    nameLocal: 'Suisse',
    city: 'Geneve',
    region: 'Suisse Romande',
    compliance: {
      name: 'RGPD',
      shortName: 'RGPD',
      description: 'Conforme au Reglement General sur la Protection des Donnees (RGPD)'
    },
    currency: 'CHF',
    testimonials: [
      {
        quote: "Notre cabinet a Geneve cherchait un service d'accueil telephonique de qualite. Smart Hotline a depasse nos attentes. Leur IA Sophie est impressionnante et les rapports sont tres detailles.",
        name: 'Pierre Muller',
        role: 'Associe, Cabinet Juridique Muller',
        location: 'Rue du Rhone, Geneve',
        initials: 'PM'
      },
      {
        quote: "En Suisse, la qualite de service est non negociable. Smart Hotline a compris ca. Nos clients de Lausanne et Geneve sont toujours satisfaits de l'accueil telephonique.",
        name: 'Claire Rochat',
        role: 'Directrice, Clinique Rochat',
        location: 'Lausanne, Suisse',
        initials: 'CR'
      },
      {
        quote: "Le service client suisse exige de la precision. Smart Hotline livre ca et plus encore. Nos clients apprecient l'accent suisse-romand et le service personnalise.",
        name: 'Thomas Favre',
        role: 'CEO, Tech Solutions Suisse SA',
        location: 'Eaux-Vives, Geneve',
        initials: 'TF'
      }
    ],
    stats: {
      clientsCount: '67',
      clientsLabel: 'PME en Suisse',
      retention: '99%',
      savings: '35%'
    },
    addresses: [
      {
        type: 'Bureau Geneve',
        street: '12 Rue du Rhone',
        city: 'Geneve',
        country: 'Suisse 1204'
      }
    ]
  },
  US: {
    code: 'US',
    name: 'United States',
    nameLocal: 'USA',
    city: 'New York',
    region: 'United States',
    compliance: {
      name: 'CCPA',
      shortName: 'CCPA',
      description: 'Compliant with California Consumer Privacy Act (CCPA)'
    },
    currency: 'USD',
    testimonials: [
      {
        quote: "We were skeptical about outsourcing our calls, but Smart Hotline proved us wrong. Their bilingual agents handle our NYC clients perfectly. No more missed opportunities.",
        name: 'Michael Johnson',
        role: 'CEO, Johnson & Associates',
        location: 'Manhattan, New York',
        initials: 'MJ'
      },
      {
        quote: "The AI agent Sophie is incredible. She handles initial inquiries and only transfers to humans when needed. Our real estate firm in Boston saves hours every week.",
        name: 'Sarah Williams',
        role: 'Broker, Williams Realty',
        location: 'Boston, Massachusetts',
        initials: 'SW'
      },
      {
        quote: "As a Canadian company expanding to the US, we needed 24/7 coverage. Smart Hotline delivers. Their Montreal team understands both markets perfectly.",
        name: 'David Chen',
        role: 'Founder, TechStart Inc.',
        location: 'San Francisco, California',
        initials: 'DC'
      }
    ],
    stats: {
      clientsCount: '156',
      clientsLabel: 'US Businesses',
      retention: '95%',
      savings: '50%'
    },
    addresses: [
      {
        type: 'US Office',
        street: '350 Fifth Avenue, Suite 4500',
        city: 'New York, NY',
        country: 'USA 10118'
      }
    ]
  },
  OTHER: {
    code: 'OTHER',
    name: 'International',
    nameLocal: 'International',
    city: 'Paris',
    region: 'Europe',
    compliance: {
      name: 'RGPD',
      shortName: 'RGPD',
      description: 'Conforme au Reglement General sur la Protection des Donnees (RGPD)'
    },
    currency: 'EUR',
    testimonials: [
      {
        quote: "Smart Hotline a compris nos besoins internationaux. Leur service est impeccable et leur equipe reactive. On recommande!",
        name: 'Paul Durand',
        role: 'Directeur, PME International',
        location: 'Europe',
        initials: 'PD'
      },
      {
        quote: "Le service client est au rendez-vous. Nos appels sont geres professionnellement, 24h/24. Parfait pour notre activite.",
        name: 'Marie Lefevre',
        role: 'Gerante, Services Plus',
        location: 'Europe',
        initials: 'ML'
      },
      {
        quote: "On cherchait une solution flexible et abordable. Smart Hotline nous a offert les deux avec un service personnalise.",
        name: 'Jean Martin',
        role: 'Fondateur, Startup Europe',
        location: 'Europe',
        initials: 'JM'
      }
    ],
    stats: {
      clientsCount: '500+',
      clientsLabel: 'PME',
      retention: '97%',
      savings: '40%'
    },
    addresses: [
      {
        type: 'Siege Europe',
        street: '45 Avenue des Champs-Elysees',
        city: 'Paris',
        country: 'France 75008'
      }
    ]
  }
}

export function getCountryContent(countryCode: string): CountryContent {
  return COUNTRY_CONTENT[countryCode] || COUNTRY_CONTENT.OTHER
}

export function getComplianceBadge(geo: GeoConfig, lang: 'fr' | 'en'): { text: string; description: string } {
  const content = getCountryContent(geo.country)
  const isFR = lang === 'fr'
  
  const countryCode = geo.country === 'Canada' ? 'CA' :
                      geo.country === 'France' ? 'FR' :
                      geo.country === 'Belgique' ? 'BE' :
                      geo.country === 'Suisse' ? 'CH' :
                      geo.country === 'United States' ? 'US' : 'OTHER'
  
  const countryContent = COUNTRY_CONTENT[countryCode] || COUNTRY_CONTENT.OTHER
  
  if (countryCode === 'CA') {
    return {
      text: isFR ? 'Loi 25 conforme' : 'Law 25 Compliant',
      description: isFR 
        ? 'Conforme a la Loi 25 sur la protection des renseignements personnels du Quebec'
        : 'Compliant with Quebec Law 25 on personal information protection'
    }
  } else if (countryCode === 'US') {
    return {
      text: 'CCPA Compliant',
      description: 'Compliant with California Consumer Privacy Act'
    }
  } else {
    return {
      text: isFR ? 'RGPD conforme' : 'GDPR Compliant',
      description: isFR 
        ? 'Conforme au Reglement General sur la Protection des Donnees (RGPD)'
        : 'Compliant with General Data Protection Regulation (GDPR)'
    }
  }
}
