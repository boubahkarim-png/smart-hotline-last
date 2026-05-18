     1|import basePath from '@/lib/basePath'

export const metadata = {
  title: "Smart Hotline | Conditions Générales de Vente",
  description: "Conditions générales de vente et d'utilisation des services Smart Hotline pour PME.",
}

     2|import Link from 'next/link'
     3|
     4|export const metadata = { title: "CGV | Smart Hotline Agency" }
     5|
     6|export default function CGV() {
     7|  return (
     8|    <>
     9|<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
    10|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    11|<div className="flex flex-col lg:flex-row items-center gap-12">
    12|<div className="w-full lg:w-[55%]">
    13|<h1 className="text-4xl lg:text-5xl font-black mb-4">Conditions Générales de Vente</h1>
    14|<p className="text-slate-600 text-lg mb-6">Termes et conditions de nos services</p>
    15|</div>
    16|<div className="w-full lg:w-[40%]">
    17|<img src={`${basePath}/images/main-hero.webp`} alt="Conditions Générales" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
    18|</div>
    19|</div>
    20|</div>
    21|</section>
    22|
    23|      <section className="bg-white py-16">
    24|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    25|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    26|            <p className="text-sm text-gray-600">Dernière mise à jour: 1er janvier 2026</p>
    27|
    28|            <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
    29|            <p>Les présentes CGV régissent les relations contractuelles entre Smart Hotline Agency et ses clients pour la fournition de services de communication externalisés.</p>
    30|
    31|            <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
    32|            <p>Smart Hotline Agency propose des services de centre d&apos;appels, d&apos;agents IA vocaux, de support client et de CRM pour les PME.</p>
    33|
    34|            <h2 className="text-2xl font-bold text-gray-900">3. Tarifs et paiement</h2>
    35|            <p>Les tarifs sont indiqués en dollars canadiens (CA$) hors taxes. Le paiement est mensuel par carte de crédit ou virement bancaire. Les factures sont émises le 1er de chaque mois.</p>
    36|
    37|            <h2 className="text-2xl font-bold text-gray-900">4. Engagement</h2>
    38|            <p>Les contrats sont sans engagement minimum. L&apos;essai gratuit de 2 semaines permet d&apos;évaluer nos services sans risque.</p>
    39|
    40|            <h2 className="text-2xl font-bold text-gray-900">5. Résiliation</h2>
    41|            <p>Tout contrat peut être résilié avec un préavis de 30 jours. L&apos;essai gratuit de 2 semaines peut être annulé à tout moment sans frais.</p>
    42|
    43|            <h2 className="text-2xl font-bold text-gray-900">6. Responsabilité</h2>
    44|            <p>Smart Hotline Agency s&apos;engage à fournir ses services avec diligence. Notre responsabilité est limitée aux dommages directs et prévisibles.</p>
    45|
    46|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    47|            <p>Smart Hotline Agency | direction@smart-hotline.com | +1 514 819-0559</p>
    48|          </div>
    49|        </div>
    50|      </section>
    51|
    52|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    53|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    54|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Prêt à démarrer?</h2>
    55|          <p className="text-white mb-8">Essai gratuit de 2 semaines. Sans engagement.</p>
    56|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    57|            <Link href="/fr/tarifs" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    58|              Voir nos tarifs
    59|            </Link>
    60|            <Link href="/fr" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
    61|              Retour à l&apos;accueil
    62|            </Link>
    63|          </div>
    64|        </div>
    65|      </section>
    66|    </>
    67|  )
    68|}
    69|