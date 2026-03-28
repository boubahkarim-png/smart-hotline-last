import basePath from '@/lib/basePath'
import Link from 'next/link'

export const metadata = { title: "Politique de Confidentialité | Smart Hotline Agency" }

export default function Confidentialite() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Politique de Confidentialité</h1>
<p className="text-slate-600 text-lg mb-6">Protection et gestion de vos données personnelles</p>
</div>
<div className="w-full lg:w-[40%]">
<img src={`${basePath}/images/main-hero.jpg`} alt="Politique de Confidentialité" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>

            <h2 className="text-2xl font-bold text-gray-900">1. Collecte des données</h2>
            <p>Smart Hotline Agency collecte uniquement les informations nécessaires à la fourniture de ses services: nom, email, téléphone, nom d&apos;entreprise et informations relatives à vos besoins en communication.</p>

            <h2 className="text-2xl font-bold text-gray-900">2. Utilisation</h2>
            <p>Vos données sont utilisées pour vous fournir nos services, vous contacter concernant votre compte, améliorer nos services et vous envoyer des communications marketing si vous y avez consenti.</p>

            <h2 className="text-2xl font-bold text-gray-900">3. Protection</h2>
            <p>Nous utilisons des mesures de sécurité conformes aux normes de l&apos;industrie pour protéger vos informations personnelles contre tout accès non autorisé.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Vos droits</h2>
            <p>Conformément au RGPD et à la Loi 25, vous avez le droit d&apos;accéder, corriger ou supprimer vos données personnelles. Contactez-nous à direction@smart-hotline.com.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Conservation</h2>
            <p>Vos données sont conservées pendant la durée de notre relation contractuelle, puis archivées conformément aux obligations légales avant suppression définitive.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
            <p>Notre site utilise des cookies techniques et de mesure d&apos;audience. Vous pouvez refuser les cookies en modifiant les paramètres de votre navigateur.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>Pour toute question: direction@smart-hotline.com | +1 514 819-0559</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Questions sur vos données?</h2>
          <p className="text-blue-200 mb-8">Notre équipe est disponible pour répondre à toutes vos questions sur la protection de vos données.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Nous contacter
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
