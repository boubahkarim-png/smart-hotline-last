     1|import { getPageMetadata } from '@/lib/seo'
     2|
     3|export const metadata = {
     5|}
     6|
     7|import Link from 'next/link'
     8|
    10|
    13|}
    14|
    15|export default function FrCgv() {
    16|  return (
    17|    <>
    18|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
    19|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
    20|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    21|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    22|        </div>
    23|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    24|          <h1 className="text-4xl lg:text-5xl font-black mb-4">Conditions Générales de Vente</h1>
    25|          <p className="text-blue-200 text-lg">Termes et conditions de nos services</p>
    26|        </div>
    27|      </section>
    28|
    29|      <section className="bg-white py-16">
    30|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    31|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    32|            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>
    33|
    34|            <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
    35|            <p>Les présentes CGV régissent les relations contractuelles entre Smart Hotline Agency et ses clients pour la fournition de services de communication externalisés.</p>
    36|
    37|            <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
    38|            <p>Smart Hotline Agency propose des services de centre d&apos;appels, d&apos;agents IA vocaux, de support client et de CRM pour les PME.</p>
    39|
    40|            <h2 className="text-2xl font-bold text-gray-900">3. Tarifs et paiement</h2>
    41|            <p>Les tarifs sont indiqués en dollars canadiens (CA$) hors taxes. Le paiement est mensuel par carte de crédit ou virement bancaire. Les factures sont émises le 1er de chaque mois.</p>
    42|
    43|            <h2 className="text-2xl font-bold text-gray-900">4. Engagement</h2>
    44|            <p>Les contrats sont sans engagement minimum. L&apos;essai gratuit de 2 semaines permet d&apos;évaluer nos services sans risque.</p>
    45|
    46|            <h2 className="text-2xl font-bold text-gray-900">5. Résiliation</h2>
    47|            <p>Tout contrat peut être résilié avec un préavis de 30 jours. L&apos;essai gratuit de 2 semaines peut être annulé à tout moment sans frais.</p>
    48|
    49|            <h2 className="text-2xl font-bold text-gray-900">6. Responsabilité</h2>
    50|            <p>Smart Hotline Agency s&apos;engage à fournir ses services avec diligence. Notre responsabilité est limitée aux dommages directs et prévisibles.</p>
    51|
    52|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    53|            <p>Smart Hotline Agency | direction@smart-hotline.com | +1 514 819-0559</p>
    54|          </div>
    55|        </div>
    56|      </section>
    57|
    58|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    59|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    60|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Prêt à démarrer?</h2>
    61|          <p className="text-blue-200 mb-8">Essai gratuit de 2 semaines. Sans engagement.</p>
    62|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    63|            <Link href="/fr/tarifs" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    64|              Voir nos tarifs
    65|            </Link>
    66|            <Link href="/fr" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
    67|              Retour à l&apos;accueil
    68|            </Link>
    69|          </div>
    70|        </div>
    71|      </section>
    72|    </>
    73|  )
    74|}
    75|