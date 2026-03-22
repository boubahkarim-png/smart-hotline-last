
// ============================================================
// NAVIGATION — single source of truth
// All hrefs are absolute paths (no relative path issues)
// ============================================================

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const NAV_FR: NavItem[] = [
  {
    label: 'Solutions',
    href: '/fr/services',
    children: [
      { label: 'Appels Entrants',  href: '/fr/reception' },
      { label: 'Appels Sortants',  href: '/fr/emission' },
      { label: 'Agents IA Vocaux', href: '/fr/agents-ia' },
      { label: 'Support Client',   href: '/fr/support' },
      { label: 'CRM & Listes',     href: '/fr/crm' },
    ],
  },
  { label: 'Tarifs',    href: '/fr/tarifs' },
  { label: 'Secteurs',  href: '/fr/secteurs' },
  { label: 'A Propos',  href: '/fr/a-propos' },
  { label: 'Blog',      href: '/fr/blog' },
  { label: 'Contact',   href: '/fr/contact' },
]

export const NAV_EN: NavItem[] = [
  {
    label: 'Solutions',
    href: '/en/services',
    children: [
      { label: 'Inbound Calls',   href: '/en/inbound' },
      { label: 'Outbound Calls',  href: '/en/outbound' },
      { label: 'AI Voice Agents', href: '/en/ai-agents' },
      { label: 'Customer Support',href: '/en/support' },
      { label: 'CRM & Lists',     href: '/en/crm' },
    ],
  },
  { label: 'Pricing',  href: '/en/pricing' },
  { label: 'Sectors',  href: '/en/sectors' },
  { label: 'About',    href: '/en/about' },
  { label: 'Blog',     href: '/en/blog' },
  { label: 'Contact',  href: '/en/contact' },
]

export const CONTACT = {
  phone: '+15148190559',
  phoneDisplay: '+1 514 819-0559',
  whatsapp: 'https://wa.me/15148190559',
  email: 'direction@smart-hotline.com',
  calendly: 'https://calendly.com/smart-hotline/30min',
}
