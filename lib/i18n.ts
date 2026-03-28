
// ============================================================
// TRANSLATIONS — FR/EN
// ============================================================

export type Lang = 'fr' | 'en'

// Path mappings between FR and EN (for pages with different slugs)
const PATH_MAPPINGS: Record<string, string> = {
  // FR -> EN
  '/fr/reception': '/en/inbound',
  '/fr/emission': '/en/outbound',
  '/fr/tarifs': '/en/pricing',
  '/fr/a-propos': '/en/about',
  '/fr/agents-ia': '/en/ai-agents',
  '/fr/mentions-legales': '/en/legal',
  '/fr/confidentialite': '/en/privacy',
  '/fr/cgv': '/en/terms',
  '/fr/secteurs': '/en/sectors',
  '/fr/services': '/en/services',
  '/fr/support': '/en/support',
  '/fr/crm': '/en/crm',
  '/fr/contact': '/en/contact',
  '/fr/blog': '/en/blog',
  '/fr': '/en',
  
  // EN -> FR
  '/en/inbound': '/fr/reception',
  '/en/outbound': '/fr/emission',
  '/en/pricing': '/fr/tarifs',
  '/en/about': '/fr/a-propos',
  '/en/ai-agents': '/fr/agents-ia',
  '/en/legal': '/fr/mentions-legales',
  '/en/privacy': '/fr/confidentialite',
  '/en/terms': '/fr/cgv',
  '/en/sectors': '/fr/secteurs',
  '/en/services': '/fr/services',
  '/en/support': '/fr/support',
  '/en/crm': '/fr/crm',
  '/en/contact': '/fr/contact',
  '/en/blog': '/fr/blog',
  '/en': '/fr',
}

export function getOtherLangPath(pathname: string, currentLang: Lang): string {
  // Normalize pathname - remove trailing slash and ensure it starts with /
  let normalizedPath = pathname.replace(/\/$/, '') || '/'
  
  // Check if we have a direct mapping
  if (PATH_MAPPINGS[normalizedPath]) {
    return PATH_MAPPINGS[normalizedPath]
  }
  
  // Fallback: simple language swap for unmapped paths
  const otherLang = currentLang === 'fr' ? 'en' : 'fr'
  const segments = normalizedPath.split('/').filter(Boolean)
  
  if (segments.length === 0) {
    return `/${otherLang}`
  }
  
  if (segments[0] === 'fr' || segments[0] === 'en') {
    segments[0] = otherLang
  } else {
    segments.unshift(otherLang)
  }
  
  return '/' + segments.join('/')
}

export const T = {
  fr: {
    hero_title: "Centre d'Appels & IA pour PME",
    hero_sub: "Externalisez votre relation client. Agents professionnels et agents IA 24/7. Essai 2 semaines sans engagement.",
    hero_cta1: "Demo Gratuite",
    hero_cta2: "Nos Solutions",
    trial_badge: "2 semaines essai gratuit",
    no_commit: "Sans engagement",
    stats_pme: "PME Satisfaites",
    stats_satis: "Satisfaction",
    stats_economy: "Economie de temps",
    stats_avail: "Disponibilite",
    services_title: "Nos Solutions",
    ai_section_title: "Agents IA Vocaux 24/7",
    ai_section_sub: "Sophie repond en 2 secondes en francais natif. Transfert vers conseiller si besoin.",
    how_title: "Comment Ca Marche",
    testimonials_title: "Ce Que Disent Nos Clients",
    cta_title: "Pret a Transformer Votre Communication?",
    cta_sub: "2 semaines d'essai gratuit. Sans engagement.",
    cta_btn1: "Demarrer l'Essai",
    cta_btn2: "+1 514 819-0559",
    pricing_title: "Tarifs Competitifs",
    pricing_sub: "20 a 40% moins cher que le marche",
    per_hour: "heure",
    per_month: "mois",
    trial_offer: "Offre Essai",
    trial_or: "OU 1 semaine gratuite - payez seulement 3 semaines",
    start_trial: "Commencer l'Essai",
    choose: "Choisir",
    contact_title: "Contactez-Nous",
    contact_sub: "Consultation gratuite sans engagement",
    send_msg: "Envoyer",
    form_success: "Message envoye! Nous vous repondons sous 24h.",
    nav_cta: "Demo Gratuite",
    footer_rights: "Tous droits reserves.",
    privacy: "Confidentialite",
    terms: "CGV",
    learn_more: "En savoir plus",
    new_badge: "Nouveau",
  },
  en: {
    hero_title: "Call Center & AI for SMBs",
    hero_sub: "Outsource your customer relations. Professional agents and AI agents 24/7. 2-week free trial, no commitment.",
    hero_cta1: "Free Demo",
    hero_cta2: "Our Solutions",
    trial_badge: "2 week free trial",
    no_commit: "No commitment",
    stats_pme: "Happy SMBs",
    stats_satis: "Satisfaction",
    stats_economy: "Time saved",
    stats_avail: "Availability",
    services_title: "Our Solutions",
    ai_section_title: "AI Voice Agents 24/7",
    ai_section_sub: "Sophie responds in 2 seconds in native French. Transfer to advisor when needed.",
    how_title: "How It Works",
    testimonials_title: "What Our Clients Say",
    cta_title: "Ready to Transform Your Communication?",
    cta_sub: "2 week free trial. No commitment.",
    cta_btn1: "Start Trial",
    cta_btn2: "+1 514 819-0559",
    pricing_title: "Competitive Pricing",
    pricing_sub: "20 to 40% below market",
    per_hour: "hour",
    per_month: "month",
    trial_offer: "Trial Offer",
    trial_or: "OR 1 week free - pay for 3 weeks only",
    start_trial: "Start Trial",
    choose: "Choose",
    contact_title: "Contact Us",
    contact_sub: "Free consultation, no commitment",
    send_msg: "Send",
    form_success: "Message sent! We will reply within 24h.",
    nav_cta: "Free Demo",
    footer_rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    learn_more: "Learn more",
    new_badge: "New",
  },
}
