'use client'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'
import GeoTestimonials from '@/components/GeoTestimonials'
import GeoStats from '@/components/GeoStats'
import GeoHeroStats from '@/components/GeoHeroStats'
import GeoComplianceBadge from '@/components/GeoComplianceBadge'
import GeoWhyUsSection from '@/components/GeoWhyUsSection'
import { useGeo } from '@/hooks/useGeo'

import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, ClockIcon } from '@/components/Icons'

const SERVICES = [
  { Icon: PhoneIcon, title: 'Appels Entrants', desc: 'Reception 24/7. Zero appel manque.', href: '/fr/reception', bg: 'bg-blue-100', color: 'text-blue-700' },
  { Icon: MegaphoneIcon, title: 'Appels Sortants', desc: 'Prospection & leads qualifies.', href: '/fr/emission', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { Icon: BotIcon, title: 'Agents IA Vocaux', desc: 'Sophie repond en 2 sec, 24/7.', href: '/fr/agents-ia', bg: 'bg-violet-100', color: 'text-violet-700', badge: 'Nouveau' },
  { Icon: HeadphonesIcon, title: 'Support Client', desc: 'Tickets, email, chat, WhatsApp.', href: '/fr/support', bg: 'bg-teal-100', color: 'text-teal-700' },
  { Icon: DatabaseIcon, title: 'CRM & Listes', desc: 'SuiteCRM + listes B2B/B2C.', href: '/fr/crm', bg: 'bg-indigo-100', color: 'text-indigo-700' },
  { Icon: MegaphoneIcon, title: 'Secteurs Expertise', desc: 'Restauration, sante, immobilier...', href: '/fr/secteurs', bg: 'bg-orange-100', color: 'text-orange-700' },
]

const STEPS = [
  { n: '1', t: 'Consultation', d: 'Analyse gratuite de vos besoins en 30 min' },
  { n: '2', t: 'Personnalisation', d: 'Scripts et configuration a votre image' },
  { n: '3', t: 'Demarrage 48h', d: 'Vos appels pris en charge rapidement' },
  { n: '4', t: 'Suivi continu', d: 'Rapports, optimisation et support dedie' },
]

function GeoLocationBadge({ lang }: { lang: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  if (loading) return <span className="text-blue-200 text-sm">...</span>
  
  const countryCode = geo.country === 'Canada' ? 'CA' :
                      geo.country === 'France' ? 'FR' :
                      geo.country === 'Belgique' ? 'BE' :
                      geo.country === 'Suisse' ? 'CH' : 'OTHER'
  
  const labels: Record<string, string> = {
    'CA': 'Montreal, Canada',
    'FR': 'Paris, France',
    'BE': 'Bruxelles, Belgique',
    'CH': 'Geneve, Suisse',
    'OTHER': 'Europe francophone'
  }
  
  return (
    <span className="text-blue-200 text-sm">{labels[countryCode] || 'Europe francophone'}</span>
  )
}

export default function FrHome() {
  return (
    <>
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%] animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-float">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Conseillers & IA disponibles 24/7
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-slate-900">
                Le Centre d&apos;Appels<br/>
                <span className="gradient-text-animated">Qui Comprend</span><br/>
                les PME d&apos;Ici
              </h1>
              <GeoHeroSubtitle lang="fr"/>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-4">
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">*****</span>
                  <GeoLocationBadge lang="fr" />
                </span>
              </div>
              <div className="mt-6 mb-8">
                <GeoAwareCTA lang="fr"/>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <ClockIcon className="w-4 h-4" /> Essai 2 semaines
                </span>
                <GeoComplianceBadge lang="fr" />
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <ClockIcon className="w-4 h-4" /> 24/7
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <CheckIcon className="w-4 h-4" /> Setup 48h
                </span>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/main-hero.webp"
                  alt="Equipe Smart Hotline"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'420px', objectFit:'cover'}}/>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                  <GeoHeroStats lang="fr" />
                </div>
                <div className="absolute -top-5 -right-5 bg-blue-700 rounded-2xl p-4 shadow-xl text-white">
                  <p className="font-black text-2xl leading-none">98%</p>
                  <p className="text-blue-200 text-xs mt-0.5">renouvellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeoWhyUsSection lang="fr" />

      <section className="bg-white border-b border-slate-100 py-10">
        <GeoStats lang="fr" />
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Solutions</h2>
            <p className="text-slate-500 text-lg">Tout ce dont votre PME a besoin pour sa relation client</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }: any, i: number) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover-lift transition-all group animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">{badge}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-700 text-sm font-semibold group-hover:underline">En savoir plus &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1.5 rounded-full mb-5">
                Nouveau Service
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
                Sophie, l&apos;Agente IA<br/>Qui Parle comme Nous
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Elle repond en moins de 2 secondes. Avec l&apos;accent de votre region — au choix. Et ca coute une fraction d&apos;un salaire.
              </p>
              <ul className="space-y-3 mb-8">
                {[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => {
                  const features = ['Reponse en moins de 2 secondes — pas de musique d\'attente', 'Accents adaptes a votre region', 'Transfert vers un humain si c\'est complique', 'Cout? Environ 30% d\'un salaire standard', 'Dispo 24/7, meme pendant les periodes de pointe']
                  return (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      {features[i]}
                    </li>
                  )})}
              </ul>
              <Link href="/fr/agents-ia" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-violet-700 transition-colors">
                Decouvrir les Agents IA &rarr;
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/agents-ia-hero.webp"
                alt="Agent IA Sophie"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Comment ca marche</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map(({ n, t, d }) => (
              <div key={n} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Ce que nos clients disent vraiment</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <GeoTestimonials lang="fr" />
        </div>
      </section>

      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Pret a ne plus rater un appel?</h2>
          <p className="text-slate-600 text-lg mb-10">En place en 48h. Pas d'engagement longue duree. On commence quand vous voulez.</p>
          <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block pulse-cta">Demarrer Maintenant</Link>
        </div>
      </section>
      <div className="sr-only" aria-hidden="true">
        centre d&apos;appels montreal, call center quebec, reception telephonique PME, externalisation appels quebec, agents virtuels quebec, service teleconseiller, answering service montreal, virtual receptionist canada, outbound calling services
      </div>
    </>
  )
}
