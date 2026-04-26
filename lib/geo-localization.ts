import type { GeoConfig } from './prices'

export interface Testimonial {
  quote: string
  quoteEn?: string
  name: string
  role: string
  roleEn?: string
  location: string
  initials: string
  img?: string
}

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
  testimonials: Array<Testimonial>
  stats: {
    clientsCount: string
    clientsLabel: string
    clientsLabelEn?: string
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

/** Get a testimonial's quote in the requested language */
export function getTestimonialQuote(t: Testimonial, lang: 'fr' | 'en'): string {
  return lang === 'en' && t.quoteEn ? t.quoteEn : t.quote
}

/** Get a testimonial's role in the requested language */
export function getTestimonialRole(t: Testimonial, lang: 'fr' | 'en'): string {
  return lang === 'en' && t.roleEn ? t.roleEn : t.role
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
        quoteEn: "Honestly, I was skeptical at first. But after 3 months, we capture 100% of calls. Even Sunday night at 10pm. That really changes the game for a restaurant.",
        name: 'Jean-Pierre Tremblay',
        role: 'Proprietaire, Resto La Maison',
        roleEn: 'Owner, Resto La Maison',
        location: 'Rue Saint-Denis, Montreal',
        initials: 'JT',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "On a essaye deux autres centres d'appels avant. La difference? Ici, les agents connaissent vraiment notre metier de comptable. Un client m'a dit 'votre receptionniste est super', c'etait Sophie l'IA!",
        quoteEn: "We tried two other call centers before. The difference? Here, agents really know our accounting business. A client told me 'your receptionist is great' — it was Sophie the AI!",
        name: 'Sophie Dubois',
        role: 'Directrice, Cabinet DuBois & Associes',
        roleEn: 'Director, DuBois & Associates',
        location: 'Plateau Mont-Royal, Montreal',
        initials: 'SD',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "Pendant la tempete de neige de fevrier, nos lignes ont sonne 47 fois. Smart Hotline a tout gere. Pas un appel manque. C'est ca qui m'a convaincu de continuer.",
        quoteEn: "During the February snowstorm, our lines rang 47 times. Smart Hotline handled everything. Not a single missed call. That's what convinced me to stay.",
        name: 'Marc Lefebvre',
        role: 'Fondateur, TechInnov QC',
        roleEn: 'Founder, TechInnov QC',
        location: 'Quartier des Spectacles, Montreal',
        initials: 'ML',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '512',
      clientsLabel: 'PME au Quebec',
      clientsLabelEn: 'Quebec SMEs',
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
        quoteEn: "We were looking for a solution to handle calls during peak times. Smart Hotline understood our Parisian catering business right away. Our clients think it's our in-house team!",
        name: 'Marie Fontaine',
        role: 'Gerante, Traiteur Fontaine',
        roleEn: 'Manager, Traiteur Fontaine',
        location: '15eme arrondissement, Paris',
        initials: 'MF',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "Le passage aux agents IA a revolutionne notre accueil. Sophie repond en 2 secondes, 24h/24. Nos clients de la Defense sont impressionnes par la qualite du service.",
        quoteEn: "Switching to AI agents revolutionized our reception. Sophie answers in 2 seconds, 24/7. Our clients in La Defense are impressed by the service quality.",
        name: 'Pierre Lefranc',
        role: 'DG, Cabinet Conseil Lefranc',
        roleEn: 'CEO, Cabinet Conseil Lefranc',
        location: 'La Defense, Paris',
        initials: 'PL',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "On a hesite entre embaucher une receptionniste et externaliser. Le choix est vite fait: avec Smart Hotline, on paie 60% moins cher et on a un service 24/7 conforme RGPD.",
        quoteEn: "We hesitated between hiring a receptionist and outsourcing. Easy choice: with Smart Hotline, we pay 60% less and get 24/7 GDPR-compliant service.",
        name: 'Catherine Martin',
        role: 'Fondatrice, Studio Martin Design',
        roleEn: 'Founder, Studio Martin Design',
        location: 'Le Marais, Paris',
        initials: 'CM',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '287',
      clientsLabel: 'PME en France',
      clientsLabelEn: 'French SMEs',
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
        quoteEn: "As a Brussels lawyer, confidentiality is paramount. Smart Hotline understood our needs and their GDPR compliance convinced us. Our clients appreciate the personalized reception.",
        name: 'Jean-Paul Dubois',
        role: 'Avocat, Cabinet Dubois & Associes',
        roleEn: 'Lawyer, Cabinet Dubois & Associates',
        location: 'Avenue Louise, Bruxelles',
        initials: 'JD',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "Notre cabinet comptable a Bruxelles recoit des dizaines d'appels par jour. Smart Hotline les gere tous avec professionnalisme. Le retour des clients est excellent.",
        quoteEn: "Our Brussels accounting firm receives dozens of calls daily. Smart Hotline handles them all professionally. Client feedback is excellent.",
        name: 'Sophie Lambert',
        role: 'Directrice, Comptabilite Lambert',
        roleEn: 'Director, Comptabilite Lambert',
        location: 'Woluwe, Bruxelles',
        initials: 'SL',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "On a teste plusieurs services avant de trouver Smart Hotline. La difference? Ils comprennent le marche belge et parlent vraiment notre langue. Pas de centre d'appels decontracte ici.",
        quoteEn: "We tested several services before finding Smart Hotline. The difference? They understand the Belgian market and really speak our language. No offshore call center here.",
        name: 'Marc Vandermeer',
        role: 'Gerant, PME Services BV',
        roleEn: 'Manager, PME Services BV',
        location: 'Centre-ville, Bruxelles',
        initials: 'MV',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '89',
      clientsLabel: 'PME en Belgique',
      clientsLabelEn: 'Belgian SMEs',
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
        quoteEn: "Our Geneva firm was looking for quality telephone reception. Smart Hotline exceeded our expectations. Their AI Sophie is impressive and reports are very detailed.",
        name: 'Pierre Muller',
        role: 'Associe, Cabinet Juridique Muller',
        roleEn: 'Partner, Cabinet Juridique Muller',
        location: 'Rue du Rhone, Geneve',
        initials: 'PM',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "En Suisse, la qualite de service est non negociable. Smart Hotline a compris ca. Nos clients de Lausanne et Geneve sont toujours satisfaits de l'accueil telephonique.",
        quoteEn: "In Switzerland, service quality is non-negotiable. Smart Hotline understood that. Our Lausanne and Geneva clients are always satisfied with the telephone reception.",
        name: 'Claire Rochat',
        role: 'Directrice, Clinique Rochat',
        roleEn: 'Director, Clinique Rochat',
        location: 'Lausanne, Suisse',
        initials: 'CR',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "Le service client suisse exige de la precision. Smart Hotline livre ca et plus encore. Nos clients apprecient l'accent suisse-romand et le service personnalise.",
        quoteEn: "Swiss customer service demands precision. Smart Hotline delivers that and more. Our clients appreciate the Swiss-French touch and personalized service.",
        name: 'Thomas Favre',
        role: 'CEO, Tech Solutions Suisse SA',
        roleEn: 'CEO, Tech Solutions Suisse SA',
        location: 'Eaux-Vives, Geneve',
        initials: 'TF',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '67',
      clientsLabel: 'PME en Suisse',
      clientsLabelEn: 'Swiss SMEs',
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
        initials: 'MJ',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "The AI agent Sophie is incredible. She handles initial inquiries and only transfers to humans when needed. Our real estate firm in Boston saves hours every week.",
        name: 'Sarah Williams',
        role: 'Broker, Williams Realty',
        location: 'Boston, Massachusetts',
        initials: 'SW',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "As a Canadian company expanding to the US, we needed 24/7 coverage. Smart Hotline delivers. Their Montreal team understands both markets perfectly.",
        name: 'David Chen',
        role: 'Founder, TechStart Inc.',
        location: 'San Francisco, California',
        initials: 'DC',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '156',
      clientsLabel: 'PME aux USA',
      clientsLabelEn: 'US Businesses',
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
        quoteEn: "Smart Hotline understood our international needs. Their service is impeccable and their team responsive. Highly recommended!",
        name: 'Paul Durand',
        role: 'Directeur, PME International',
        roleEn: 'Director, PME International',
        location: 'Europe',
        initials: 'PD',
        img: '/images/testimonial-pierre-new.jpg'
      },
      {
        quote: "Le service client est au rendez-vous. Nos appels sont geres professionnellement, 24h/24. Parfait pour notre activite.",
        quoteEn: "Customer service is on point. Our calls are handled professionally, 24/7. Perfect for our business.",
        name: 'Marie Lefevre',
        role: 'Gerante, Services Plus',
        roleEn: 'Manager, Services Plus',
        location: 'Europe',
        initials: 'ML',
        img: '/images/testimonial-sophie-new.jpg'
      },
      {
        quote: "On cherchait une solution flexible et abordable. Smart Hotline nous a offert les deux avec un service personnalise.",
        quoteEn: "We were looking for a flexible and affordable solution. Smart Hotline gave us both with personalized service.",
        name: 'Jean Martin',
        role: 'Fondateur, Startup Europe',
        roleEn: 'Founder, Startup Europe',
        location: 'Europe',
        initials: 'JM',
        img: '/images/testimonial-marc-new.jpg'
      }
    ],
    stats: {
      clientsCount: '500+',
      clientsLabel: 'PME',
      clientsLabelEn: 'SMEs',
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
