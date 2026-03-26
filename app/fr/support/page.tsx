'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@/components/Icons'

const FEATURES = [
  {icon: HeadphonesIcon, title: 'Support multicanal', desc: 'Téléphone, email, chat, WhatsApp — on gère tout depuis une seule interface.'},
  {icon: MailIcon, title: 'Tickets organisés', desc: 'Chaque demande devient un ticket. Rien ne se perd, tout est tracé.'},
  {icon: ChatIcon, title: 'Chat en temps réel', desc: 'Réponses instantanées pour vos clients qui préfèrent écrire.'},
  {icon: PhoneIcon, title: 'Ligne dédiée', desc: 'Un numéro pour votre support. On répond au nom de votre entreprise.'},
]

const TESTIMONIALS = [
    {q: "On reçoit des questions sur nos produits toute la journée. Avant, c\'était le chaos dans les emails. Maintenant, chaque demande est bien tracée.", name: 'Catherine Rouleau', role: 'Responsable service client, Boutique en ligne QC', av: 'CR'},
    {q: "Ils ont réglé un problème de 3 semaines en 48h. Le fait qu\'ils parlent français correctement — ça aide vraiment avec nos clients.", name: 'Jean-François Poissant', role: 'Directeur, Services Financiers MTL', av: 'JP'},
    {q: "Nos clients sont plus satisfaits. On le voit dans les commentaires. Le support en français, ça fait toute la différence.", name: 'Martine Lévesque', role: 'Fondatrice, Tech Support Quebec', av: 'ML'},
    {q: "On a réduit notre temps de réponse de 4 jours à 2 heures. Nos clients n\'en reviennent pas. L\'équipe est super professionnelle.", name: 'Sylvie Bouchard', role: 'Directrice, Logiciels Bouchard Inc.', av: 'SB'},
  ]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`} className="bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-800 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-emerald-700 text-emerald-700 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-700 text-emerald-700 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full mb-5">
                <HeadphonesIcon className="w-4 h-4" /> Support Client
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">Support Client Qui Ressemble à Vous</h1>
              <p className="text-lg text-slate-600 mb-8">Téléphone, email, chat, WhatsApp — on gère tout. Vos clients obtiennent des réponses rapides, en français, par des vrais humains.</p>
              <CTAButtons slug="support"/>
              <div className="flex flex-wrap gap-3">
                {['Multicanal', 'Tickets organisés', 'Réponses < 2h', 'Équipe dédiée'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-emerald-700" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/support-hero.png" alt="Support client" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<ClockIcon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div><p className="font-black text-sm">Réponse &lt; 2h</p><p className="text-slate-500 text-xs">en moyenne</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 text-white py-20 lg:py-24 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Canaux de support</h2>
<p className="text-emerald-200 text-lg max-w-2xl mx-auto">On répond partout où vos clients vous contactent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{FEATURES.map(({icon: Icon, title, desc}) => (
<div key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-emerald-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">{title}</h3>
<p className="text-emerald-200 text-sm">{desc}</p>
</div>
))}
</div>
</div>
</section>
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div><p className="text-4xl font-black text-emerald-700">98%</p><p className="text-slate-500 text-sm mt-1">Satisfaction client</p></div>
<div><p className="text-4xl font-black text-emerald-700">&lt; 2h</p><p className="text-slate-500 text-sm mt-1">Temps de réponse</p></div>
<div><p className="text-4xl font-black text-emerald-700">50K+</p><p className="text-slate-500 text-sm mt-1">Tickets/mois</p></div>
<div><p className="text-4xl font-black text-emerald-700">24/7</p><p className="text-slate-500 text-sm mt-1">Disponibilité</p></div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Comment ça fonctionne</h2>
<div className="w-16 h-1 bg-emerald-700 mx-auto rounded"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">1</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Analyse</h3>
<p className="text-slate-500 text-sm">On étudie vos types de demandes</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">2</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Base de connaissances</h3>
<p className="text-slate-500 text-sm">On crée les réponses pour chaque cas</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">3</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Démarrage</h3>
<p className="text-slate-500 text-sm">On prend les appels et emails</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">4</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Amélioration</h3>
              <p className="text-slate-500 text-sm">On ajuste selon vos retours</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">Pourquoi externaliser votre support?</h2>
              <p className="text-slate-600 text-lg mb-6">Un client satisfait revient. Un client frustré parle mal de vous. On s'assure que chaque interaction se passe bien.</p>
              <ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Équipe formée sur vos produits</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Réponses en français du Québec ou de France</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Escalade intelligente vers votre équipe</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Rapports hebdomadaires sur les tendances</li>
</ul>
<Link href="/fr/contact?service=support" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-emerald-800 transition-colors">Voir une démo →</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Résultats typiques</h3>
                <ul className="space-y-3">
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-700"/> +40% satisfaction client</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-700"/> -60% temps de réponse</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-700"/> Équipe libérée pour les ventes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce que nos clients disent</h2>
<div className="w-16 h-1 bg-emerald-700 mx-auto rounded"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
{TESTIMONIALS.map((t, i) => (
<div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
<div className="flex gap-0.5 mb-4">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
</div>
<p className="text-slate-600 mb-5 leading-relaxed italic">"{t.q}"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{t.av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="bg-gradient-to-br from-slate-900 to-emerald-800 py-20">
<div className="max-w-4xl mx-auto px-4 text-center text-white">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à améliorer votre support?</h2>
<p className="text-emerald-200 text-lg mb-10 max-w-2xl mx-auto">Des clients plus satisfaits, moins de stress pour votre équipe. On commence ensemble.</p>
<CTAButtons slug="support"/>
<p className="text-emerald-300 text-sm mt-6"><Link href="/fr/tarifs" className="underline hover:text-white">Voir les tarifs</Link> · <Link href="/fr/contact" className="underline hover:text-white">Nous contacter</Link></p>
</div>
</section>
<section className="bg-white py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
<div className="text-left space-y-4 mt-8">
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Quels canaux gérez-vous?</summary><p className="text-slate-600 mt-2">Téléphone, email, chat sur votre site, WhatsApp, et même les réseaux sociaux. Tout est centralisé.</p></details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Comment escaladez-vous les problèmes?</summary><p className="text-slate-600 mt-2">On a un protocole clair. Problème simple = on répond. Problème complexe = on vous transfère avec le contexte.</p></details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Combien de temps pour former l\'équipe?</summary><p className="text-slate-600 mt-2">Environ 1 semaine. On apprend vos produits, vos processus, et votre façon de parler aux clients.</p></details>
</div>
<Link href="/fr/contact?service=support" className="inline-block mt-8 bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-800">Démarrer Maintenant</Link>
</div>
      </section>
    </>
  )
}
