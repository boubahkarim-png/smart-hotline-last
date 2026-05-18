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
    15|export default function MentionsLegales() {
    16|  return (
    17|    <>
    18|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
    19|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
    20|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    21|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    22|        </div>
    23|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    24|          <h1 className="text-4xl lg:text-5xl font-black mb-4">Mentions Légales</h1>
    25|          <p className="text-blue-200 text-lg">Informations légales concernant Smart Hotline Agency</p>
    26|        </div>
    27|      </section>
    28|
    29|      <section className="bg-white py-16">
    30|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    31|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    32|            <p className="text-sm text-gray-500">Dernière mise à jour: 1er janvier 2026</p>
    33|            
    34|            <h2 className="text-2xl font-bold text-gray-900">1. Éditeur du site</h2>
    35|            <p><strong>Smart Hotline Agency</strong></p>
    36|            <ul className="list-disc pl-6 space-y-1">
    37|              <li>Siège social: Montréal, Québec, Canada</li>
    38|              <li>Email: direction@smart-hotline.com</li>
    39|              <li>Téléphone: +1 514 819-0559</li>
    40|              <li>Directeur de la publication: Karim Boubah</li>
    41|            </ul>
    42|
    43|            <h2 className="text-2xl font-bold text-gray-900">2. Hébergement</h2>
    44|            <p>Ce site est hébergé par:</p>
    45|            <ul className="list-disc pl-6 space-y-1">
    46|              <li><strong>GitHub Pages</strong></li>
    47|              <li>GitHub, Inc.</li>
    48|              <li>88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis</li>
    49|              <li>https://github.com</li>
    50|            </ul>
    51|
    52|            <h2 className="text-2xl font-bold text-gray-900">3. Propriété intellectuelle</h2>
    53|            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Smart Hotline Agency, à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.</p>
    54|            <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord exprès par écrit de Smart Hotline Agency.</p>
    55|
    56|            <h2 className="text-2xl font-bold text-gray-900">4. Limitation de responsabilité</h2>
    57|            <p>Smart Hotline Agency s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
    58|            <p>Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs.</p>
    59|
    60|            <h2 className="text-2xl font-bold text-gray-900">5. Cookies</h2>
    61|            <p>Le site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et mesurer l&apos;audience. Vous pouvez configurer votre navigateur pour refuser les cookies. Pour plus d&apos;informations, consultez notre <Link href="/fr/confidentialite" className="text-blue-700 hover:underline">Politique de Confidentialité</Link>.</p>
    62|
    63|            <h2 className="text-2xl font-bold text-gray-900">6. Droit applicable</h2>
    64|            <p>Les présentes mentions légales sont régies par le droit canadien et québécois. En cas de litige, les tribunaux de Montréal, Québec, seront seuls compétents.</p>
    65|
    66|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    67|            <p>Pour toute question concernant ces mentions légales:</p>
    68|            <ul className="list-disc pl-6 space-y-1">
    69|              <li>Email: direction@smart-hotline.com</li>
    70|              <li>Téléphone: +1 514 819-0559</li>
    71|            </ul>
    72|          </div>
    73|        </div>
    74|      </section>
    75|
    76|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    77|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    78|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Besoin d&apos;informations supplémentaires?</h2>
    79|          <p className="text-blue-200 mb-8">Notre équipe est disponible pour répondre à toutes vos questions.</p>
    80|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    81|            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    82|              Nous contacter par email
    83|            </Link>
    84|            <Link href="/fr" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
    85|              Retour à l&apos;accueil
    86|            </Link>
    87|          </div>
    88|        </div>
    89|      </section>
    90|    </>
    91|  )
    92|}
    93|