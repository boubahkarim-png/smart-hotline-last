'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': FolderIcon, 'title': 'Gestion des leads', 'desc': 'Capture, qualification et suivi de tous vos prospects.'},
  {'icon': MailIcon, 'title': 'Email marketing', 'desc': 'Campagnes automatisées avec Mautic. Nurturing et relances.'},
  {'icon': PhoneIcon, 'title': 'Click-to-call', 'desc': 'Appelez vos prospects en un clic depuis le CRM.'},
  {'icon': TrendingIcon, 'title': 'Pipeline de ventes', 'desc': 'Visualisez et gérez votre tunnel de vente en temps réel.'},
  {'icon': DatabaseIcon, 'title': 'Listes qualifiées', 'desc': 'Listes B2B et B2C selon secteur, région, taille entreprise.'},
  {'icon': LinkIcon, 'title': 'Intégrations', 'desc': 'Connexion avec votre site, Zapier, Google Workspace et plus.'},
]

const STEPS = [
  {'n': '1', 't': 'Audit de votre base de données', 'd': 'Analyse de vos données existantes et nettoyage.'},
  {'n': '2', 't': 'Configuration SuiteCRM', 'd': 'Personnalisation des modules selon votre processus de vente.'},
  {'n': '3', 't': 'Import des données', 'd': 'Migration de vos contacts et historique sans perte.'},
  {'n': '4', 't': 'Formation & suivi', 'd': 'Formation de votre équipe et support continu.'},
]

const TESTIMONIALS = [
    {q: "Avant, nos leads étaient dans 3 fichiers Excel différents. Maintenant, tout est au même endroit. On perd plus rien.", name: 'Marie-Claire Beaumont', role: 'Directrice commerciale, Solutions Pro QC', av: 'MB'},
    {q: "Les listes B2B qu\'ils nous ont fournies? Propres, à jour. Pas comme celles qu\'on achetait avant à 500$ pour des courriels qui n\'existaient plus.", name: 'François Gagnon', role: 'Fondateur, InnoTech Montreal', av: 'FG'},
    {q: "On a doublé notre taux de conversion en 4 mois. Le CRM + les appels sortants, ça fait une différence énorme.", name: 'Isabelle Tremblay', role: 'Responsable ventes, Groupe Nordik', av: 'IT'},
    {q: "La formation a pris 2 heures. Le lendemain, on était opérationnels. Vraiment, c\'est pas compliqué comme ils disent.", name: 'Michel Richard', role: 'PDG, Richard & Fils Construction', av: 'MR'},
  ]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`} className="bg-purple-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-purple-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-purple-600 text-purple-600 font-bold px-7 py-3.5 rounded-xl hover:bg-purple-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-purple-600 text-purple-600 font-bold px-7 py-3.5 rounded-xl hover:bg-purple-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: LIGHT - Hero */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-5">
                <CRMIcon className="w-4 h-4" /> CRM & Listes
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                CRM Intégré &<br/>Listes de Prospects
              </h1>
              <p className="text-lg text-slate-600 mb-8">Centralisez vos leads, suivez vos opportunités et maximisez vos conversions avec SuiteCRM et nos listes B2B/B2C qualifiées.</p>
              <CTAButtons slug="crm"/>
              <div className="flex flex-wrap gap-3">
                {['SuiteCRM inclus', 'Listes B2B/B2C', 'Mautic intégré', 'Rapports auto'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-purple-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/crm-interface.jpg" alt="CRM dashboard" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<TrendingIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div><p className="font-black text-sm">+35% conversion</p><p className="text-slate-500 text-xs">moyenne clients</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - Features */}
<section className="bg-gradient-to-br from-slate-900 via-purple-950 to-purple-900 text-white py-20 lg:py-24 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Ce qui est inclus</h2>
<p className="text-purple-200 text-lg max-w-2xl mx-auto">Tout ce dont vous avez besoin pour gérer vos contacts et vos ventes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{FEATURES.map(({icon: Icon, title, desc}: any) => (
<div key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-purple-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">{title}</h3>
<p className="text-purple-200 text-sm">{desc}</p>
</div>
))}
</div>
</div>
</section>

      {/* SECTION 3: LIGHT - Stats */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div><p className="text-4xl font-black text-purple-600">250K+</p><p className="text-slate-500 text-sm mt-1">Contacts B2B</p></div>
<div><p className="text-4xl font-black text-purple-600">98%</p><p className="text-slate-500 text-sm mt-1">Données validées</p></div>
<div><p className="text-4xl font-black text-purple-600">+35%</p><p className="text-slate-500 text-sm mt-1">Taux conversion</p></div>
<div><p className="text-4xl font-black text-purple-600">48h</p><p className="text-slate-500 text-sm mt-1">Setup complet</p></div>
        </div>
      </section>

      {/* SECTION 4: LIGHT - How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Comment ça fonctionne</h2>
<div className="w-16 h-1 bg-purple-600 mx-auto rounded"></div>
</div>
{STEPS.map(({n, t, d}: any) => (
<div key={n} className="flex gap-5 mb-8 items-start">
<div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LIGHT - Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">Pourquoi choisir notre CRM?</h2>
              <p className="text-slate-600 text-lg mb-6">On ne vous vend pas juste un logiciel. On vous aide à structurer votre processus de vente de A à Z.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Formation incluse — pas de courbes d'apprentissage interminables</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Support francophone basé au Québec</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Mises à jour automatiques, sans frais cachés</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Intégré à nos services d'appels sortants</li>
              </ul>
              <Link href="/fr/contact?service=crm" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                Voir une démo →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="w-6 h-6 text-purple-600" />
                  <span className="font-bold text-slate-900">Gain de temps</span>
                </div>
                <p className="text-slate-600 mb-6">Nos clients économisent en moyenne 8h par semaine sur la gestion de leurs contacts.</p>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                  <span className="font-bold text-slate-900">Données sécurisées</span>
                </div>
                <p className="text-slate-600">Hébergement au Canada, conforme RGPD et PIPEDA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LIGHT - Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce que nos clients disent</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed italic">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{t.av}</div>
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

      {/* SECTION 7: DARK - Final CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-purple-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à centraliser vos leads?</h2>
          <p className="text-purple-200 text-lg mb-10 max-w-2xl mx-auto">CRM + listes qualifiées + support francophone. Tout ce qu'il vous faut pour vendre plus.</p>
          <CTAButtons slug="crm"/>
          <p className="text-purple-300 text-sm mt-6">
            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link> · <Link href="/fr/contact" className="underline hover:text-white">Nous contacter</Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: LIGHT - FAQ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
          <p className="text-slate-600 mb-8">Tout ce que vous devez savoir avant de démarrer.</p>
          <div className="text-left space-y-4">
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Est-ce que je peux importer mes contacts existants?</summary>
              <p className="text-slate-600 mt-2">Oui, on s'occupe de la migration. Excel, CSV, Google Contacts, ancien CRM — on importe tout sans perte de données.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Les listes B2B sont-elles à jour?</summary>
              <p className="text-slate-600 mt-2">On les met à jour mensuellement. Taux de rebond garanti sous 5%, sinon on les remplace.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Combien de temps prend la formation?</summary>
              <p className="text-slate-600 mt-2">Environ 2 heures. On vous montre les bases, et on reste disponible pour les questions.</p>
            </details>
          </div>
          <Link href="/fr/contact?service=crm" className="inline-block mt-8 bg-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-700">
            Démarrer Maintenant
          </Link>
        </div>
      </section>
    </>
  )
}
