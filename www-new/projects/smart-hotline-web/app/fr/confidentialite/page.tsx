     1|import basePath from '@/lib/basePath'

export const metadata = {
  title: "Smart Hotline | Politique de Confidentialité",
  description: "Politique de confidentialité de Smart Hotline. Conforme à la Loi 25 (Québec) et au RGPD. Protégez vos données.",
}

     2|import Link from 'next/link'
     3|
     4|export const metadata = { title: "Politique de Confidentialité | Smart Hotline Agency" }
     5|
     6|export default function Confidentialite() {
     7|  return (
     8|    <>
     9|<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
    10|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    11|<div className="flex flex-col lg:flex-row items-center gap-12">
    12|<div className="w-full lg:w-[55%]">
    13|<h1 className="text-4xl lg:text-5xl font-black mb-4">Politique de Confidentialité</h1>
    14|<p className="text-slate-600 text-lg mb-6">Protection et gestion de vos données personnelles</p>
    15|</div>
    16|<div className="w-full lg:w-[40%]">
    17|<img src={`${basePath}/images/main-hero.webp`} alt="Politique de Confidentialité" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
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
    28|            <h2 className="text-2xl font-bold text-gray-900">1. Collecte des données</h2>
    29|            <p>Smart Hotline Agency collecte uniquement les informations nécessaires à la fourniture de ses services: nom, email, téléphone, nom d&apos;entreprise et informations relatives à vos besoins en communication.</p>
    30|
    31|            <h2 className="text-2xl font-bold text-gray-900">2. Utilisation</h2>
    32|            <p>Vos données sont utilisées pour vous fournir nos services, vous contacter concernant votre compte, améliorer nos services et vous envoyer des communications marketing si vous y avez consenti.</p>
    33|
    34|            <h2 className="text-2xl font-bold text-gray-900">3. Protection</h2>
    35|            <p>Nous utilisons des mesures de sécurité conformes aux normes de l&apos;industrie pour protéger vos informations personnelles contre tout accès non autorisé.</p>
    36|
    37|            <h2 className="text-2xl font-bold text-gray-900">4. Vos droits</h2>
    38|            <p>Conformément au RGPD et à la Loi 25 (Québec), vous avez le droit d&apos;accéder, corriger ou supprimer vos données personnelles. Contactez-nous à direction@smart-hotline.com.</p>
    39|
    40|            <h2 className="text-2xl font-bold text-gray-900">5. Conservation</h2>
    41|            <p>Vos données sont conservées pendant la durée de notre relation contractuelle, puis archivées conformément aux obligations légales avant suppression définitive.</p>
    42|
    43|            <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
    44|            <p>Notre site utilise des cookies techniques et de mesure d&apos;audience. Vous pouvez refuser les cookies en modifiant les paramètres de votre navigateur.</p>
    45|
    46|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    47|            <p>Pour toute question: direction@smart-hotline.com | +1 514 819-0559</p>
    48|          </div>
    49|        </div>
    50|      </section>
    51|
    52|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    53|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    54|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Questions sur vos données?</h2>
    55|          <p className="text-white mb-8">Notre équipe est disponible pour répondre à toutes vos questions sur la protection de vos données.</p>
    56|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    57|            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    58|              Nous contacter
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