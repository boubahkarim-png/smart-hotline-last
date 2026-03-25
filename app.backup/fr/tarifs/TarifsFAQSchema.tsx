import { FAQSchema } from '@/components/FAQSchema'

const FAQS = [
  { question: 'Combien de temps pour démarrer?', answer: 'La mise en service prend 48h maximum après signature. Nous configurons vos scripts, formons les conseillers et testons ensemble avant le lancement.' },
  { question: 'Y a-t-il un engagement minimum?', answer: 'Non. Tous nos forfaits sont sans engagement. Vous pouvez modifier ou annuler à tout moment avec un préavis de 7 jours.' },
  { question: 'Comment sont facturés les appels?', answer: 'Appels sortants: facturés à l\'heure réellement utilisée. Appels entrants: forfait mensuel incluant un volume d\'appels. Agents IA: facturation à la minute.' },
  { question: 'Quelles langues parlez-vous?', answer: 'Français natif (Québec, France, Belgique, Suisse) et anglais. Nos agents IA supportent ces 2 langues avec des accents régionaux.' },
  { question: 'Puis-je changer de forfait en cours?', answer: 'Absolument. Vous pouvez upgrader ou downgrader à tout moment. La facturation est ajustée au prorata.' },
  { question: 'Mes données sont-elles sécurisées?', answer: '100% RGPD conforme. Hébergement au Canada/UE. Chiffrement bout en bout. Aucune donnée vendue ou partagée.' },
]

export function TarifsFAQSchema() {
  return <FAQSchema faqs={FAQS} />
}
