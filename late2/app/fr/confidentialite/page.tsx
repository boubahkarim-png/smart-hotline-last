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
    15|export default function FrConfidentialite() {
    16|  return (
    17|    <>
    18|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
    19|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
    20|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    21|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    22|        </div>
    23|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    24|          <h1 className="text-4xl lg:text-5xl font-black mb-4">Politique de Confidentialité</h1>
    25|          <p className="text-blue-200 text-lg">Protection et gestion de vos données personnelles</p>
    26|        </div>
    27|      </section>
    28|
    29|      <section className="bg-white py-16">
    30|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    31|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    32|            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>
    33|
    34|            <h2 className="text-2xl font-bold text-gray-900">1. Collecte des données</h2>
    35|            <p>Smart Hotline Agency collecte uniquement les informations nécessaires à la fourniture de ses services: nom, email, téléphone, nom d&apos;entreprise et informations relatives à vos besoins en communication.</p>
    36|
    37|            <h2 className="text-2xl font-bold text-gray-900">2. Utilisation</h2>
    38|            <p>Vos données sont utilisées pour vous fournir nos services, vous contacter concernant votre compte, améliorer nos services et vous envoyer des communications marketing si vous y avez consenti.</p>
    39|
    40|            <h2 className="text-2xl font-bold text-gray-900">3. Protection</h2>
    41|            <p>Nous utilisons des mesures de sécurité conformes aux normes de l&apos;industrie pour protéger vos informations personnelles contre tout accès non autorisé.</p>
    42|
    43|            <h2 className="text-2xl font-bold text-gray-900">4. Vos droits</h2>
    44|            <p>Conformément au RGPD et à la Loi 25 (Québec), vous avez le droit d&apos;accéder, corriger ou supprimer vos données personnelles. Contactez-nous à direction@smart-hotline.com.</p>
    45|
    46|            <h2 className="text-2xl font-bold text-gray-900">5. Conservation</h2>
    47|            <p>Vos données sont conservées pendant la durée de notre relation contractuelle, puis archivées conformément aux obligations légales avant suppression définitive.</p>
    48|
    49|            <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
    50|            <p>Notre site utilise des cookies techniques et de mesure d&apos;audience. Vous pouvez refuser les cookies en modifiant les paramètres de votre navigateur.</p>
    51|
    52|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    53|            <p>Pour toute question: direction@smart-hotline.com | +1 514 819-0559</p>
    54|          </div>
    55|        </div>
    56|      </section>
    57|
    58|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    59|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    60|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Questions sur vos données?</h2>
    61|          <p className="text-blue-200 mb-8">Notre équipe est disponible pour répondre à toutes vos questions sur la protection de vos données.</p>
    62|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    63|            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    64|              Nous contacter
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