'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon } from '@/components/Icons'

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

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-center">
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
              <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
                <CRMIcon className="w-4 h-4" /> CRM & Listes
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                CRM Intégré &<br/>Listes de Prospects
              </h1>
              <p className="text-lg text-slate-600 mb-8">Centralisez vos leads, suivez vos opportunités et maximisez vos conversions avec SuiteCRM et nos listes B2B/B2C qualifiées.</p>
              <CTAButtons slug="crm"/>
              <div className="flex flex-wrap gap-3">
                {['SuiteCRM inclus', 'Listes B2B/B2C', 'Mautic intégré', 'Rapports auto'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/crm-interface.jpg" alt="CRM dashboard"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <TrendingIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div><p className="font-black text-sm">+35% conversion</p><p className="text-slate-500 text-xs">moyenne clients</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce qui est inclus</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Comment ça fonctionne</h2>
          {STEPS.map(({n, t, d}: any) => (
            <div key={n} className="flex gap-5 mb-8 items-start">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-indigo-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Prêt à démarrer?</h2>
          <p className="text-white text-opacity-80 mb-8">Essai 2 semaines — sans engagement.</p>
          <CTAButtons slug="crm"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link>
          </p>
        </div>
      </section>
    </>
  )
}
