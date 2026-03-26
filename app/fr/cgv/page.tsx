import Link from 'next/link'

export const metadata = { title: "CGV | Smart Hotline Agency" }

export default function CGV() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Conditions Générales de Vente</h1>
<p className="text-slate-600 text-lg mb-6">Termes et conditions de nos services</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/smart-hotline-last/images/main-hero.jpg" alt="Conditions Générales" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>

            <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
            <p>Les présentes CGV régissent les relations contractuelles entre Smart Hotline Agency et ses clients pour la fournition de services de communication externalisés.</p>

            <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
            <p>Smart Hotline Agency propose des services de centre d&apos;appels, d&apos;agents IA vocaux, de support client et de CRM pour les PME.</p>

            <h2 className="text-2xl font-bold text-gray-900">3. Tarifs et paiement</h2>
            <p>Les tarifs sont indiqués en dollars canadiens (CA$) hors taxes. Le paiement est mensuel par carte de crédit ou virement bancaire. Les factures sont émises le 1er de chaque mois.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Engagement</h2>
            <p>Les contrats sont sans engagement minimum. L&apos;essai gratuit de 2 semaines permet d&apos;évaluer nos services sans risque.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Résiliation</h2>
            <p>Tout contrat peut être résilié avec un préavis de 30 jours. L&apos;essai gratuit de 2 semaines peut être annulé à tout moment sans frais.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Responsabilité</h2>
            <p>Smart Hotline Agency s&apos;engage à fournir ses services avec diligence. Notre responsabilité est limitée aux dommages directs et prévisibles.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>Smart Hotline Agency | direction@smart-hotline.com | +1 514 819-0559</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Prêt à démarrer?</h2>
          <p className="text-blue-200 mb-8">Essai gratuit de 2 semaines. Sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/tarifs" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Voir nos tarifs
            </Link>
            <Link href="/fr" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
