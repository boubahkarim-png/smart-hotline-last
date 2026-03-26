import Link from 'next/link'

export const metadata = { title: "Mentions Légales | Smart Hotline Agency" }

export default function MentionsLegales() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Mentions Légales</h1>
<p className="text-slate-600 text-lg mb-6">Informations légales concernant Smart Hotline Agency</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/smart-hotline-last/images/main-hero.png" alt="Mentions Légales" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>
            
            <h2 className="text-2xl font-bold text-gray-900">1. Éditeur du site</h2>
            <p><strong>Smart Hotline Agency</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Siège social: Montréal, Québec, Canada</li>
              <li>Email: direction@smart-hotline.com</li>
              <li>Téléphone: +1 514 819-0559</li>
              <li>Directeur de la publication: Karim Boubah</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">2. Hébergement</h2>
            <p>Ce site est hébergé par:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>GitHub Pages</strong></li>
              <li>GitHub, Inc.</li>
              <li>88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis</li>
              <li>https://github.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">3. Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Smart Hotline Agency, à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.</p>
            <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord exprès par écrit de Smart Hotline Agency.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Limitation de responsabilité</h2>
            <p>Smart Hotline Agency s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            <p>Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Cookies</h2>
            <p>Le site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et mesurer l&apos;audience. Vous pouvez configurer votre navigateur pour refuser les cookies. Pour plus d&apos;informations, consultez notre <Link href="/fr/confidentialite" className="text-blue-700 hover:underline">Politique de Confidentialité</Link>.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Droit applicable</h2>
            <p>Les présentes mentions légales sont régies par le droit canadien et québécois. En cas de litige, les tribunaux de Montréal, Québec, seront seuls compétents.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>Pour toute question concernant ces mentions légales:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: direction@smart-hotline.com</li>
              <li>Téléphone: +1 514 819-0559</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Besoin d&apos;informations supplémentaires?</h2>
          <p className="text-blue-200 mb-8">Notre équipe est disponible pour répondre à toutes vos questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Nous contacter par email
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
