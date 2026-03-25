'use client'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'

import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const SERVICES = [
  { Icon: PhoneIcon, title: 'Appels Entrants', desc: 'Réception 24/7. Zéro appel manqué.', href: '/fr/reception', bg: 'bg-blue-100', color: 'text-blue-700' },
  { Icon: MegaphoneIcon, title: 'Appels Sortants', desc: 'Prospection & leads qualifiés.', href: '/fr/emission', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { Icon: BotIcon, title: 'Agents IA Vocaux', desc: 'Sophie répond en 2 sec, 24/7.', href: '/fr/agents-ia', bg: 'bg-violet-100', color: 'text-violet-700', badge: 'Nouveau' },
  { Icon: HeadphonesIcon, title: 'Support Client', desc: 'Tickets, email, chat, WhatsApp.', href: '/fr/support', bg: 'bg-teal-100', color: 'text-teal-700' },
  { Icon: DatabaseIcon, title: 'CRM & Listes', desc: 'SuiteCRM + listes B2B/B2C.', href: '/fr/crm', bg: 'bg-indigo-100', color: 'text-indigo-700' },
]

const STEPS = [
  { n: '1', t: 'Consultation', d: 'Analyse gratuite de vos besoins en 30 min' },
  { n: '2', t: 'Personnalisation', d: 'Scripts et configuration à votre image' },
  { n: '3', t: 'Démarrage 48h', d: 'Vos appels pris en charge rapidement' },
  { n: '4', t: 'Suivi continu', d: 'Rapports, optimisation et support dédié' },
]

const TESTIMONIALS = [
{ q: "Honnêtement, j'étais sceptique au début. Mais après 3 mois, on capte 100% des appels. Même le dimanche soir à 22h. Ça, ça change vraiment l'affaire pour un restaurant.", name: 'Jean-Pierre Tremblay', role: 'Propriétaire, Resto La Maison — Rue Saint-Denis, Montréal', av: 'JT' },
{ q: "On a essayé deux autres centres d'appels avant. La différence? Ici, les agents connaissent vraiment notre métier de comptable. Un client m'a dit 'votre réceptionniste est super', c'était Sophie l'IA!", name: 'Sophie Dubois', role: 'Directrice, Cabinet DuBois & Associés — Plateau Mont-Royal', av: 'SD' },
{ q: "Pendant la tempête de neige de février, nos lignes ont sonné 47 fois. Smart Hotline a tout géré. Pas un appel manqué. C'est ça qui m'a convaincu de continuer.", name: 'Marc Lefebvre', role: 'Fondateur, TechInnov QC — Quartier des Spectacles', av: 'ML' },
]

export default function FrHome() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Conseillers & IA disponibles 24/7
              </div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-slate-900">
Le Centre d&#39;Appels<br/>
<span className="text-blue-700">Qui Comprend</span><br/>
les PME d&#39;Ici
</h1>
              <GeoHeroSubtitle lang="fr"/>
              <div className="mt-6 mb-8">
                <GeoAwareCTA lang="fr"/>
              </div>
              <div className="flex flex-wrap gap-3">
                {[{icon: ClockIcon, text: 'Essai 2 semaines'}, {icon: ShieldCheckIcon, text: 'RGPD conforme'}, {icon: ClockIcon, text: '24/7'}, {icon: CheckIcon, text: 'Setup 48h'}].map(({icon: Icon, text}: any) => (
                  <span key={text} className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                    <Icon className="w-4 h-4" /> {text}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/main-hero.jpg"
                  alt="Equipe Smart Hotline"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'420px', objectFit:'cover'}}/>
<div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
<CheckIcon className="w-6 h-6 text-green-600" />
</div>
<div>
<p className="font-black text-slate-900 text-xl leading-none">512</p>
<p className="text-slate-500 text-xs mt-0.5">PME au Québec et en France</p>
</div>
</div>
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

{/* SECTION 2: DARK - NO IMAGE */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">
Pourquoi 500+ PME Québecoises<br/>Nous Font Confiance
</h2>
<p className="text-blue-200 text-lg max-w-2xl mx-auto">
Des restaurants de la Main aux startups du Mile-End. On comprend la réalité des PME d'ici.
</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{icon: CheckIcon, title: 'Réponse en moins de 3 sonneries', desc: 'Vos clients patientent jamais — même le dimanche soir'},
{icon: CheckIcon, title: 'Français du Québec et de France', desc: 'Des conseillers qui parlent comme vos clients'},
{icon: CheckIcon, title: 'Scripts qui vous ressemblent', desc: 'Pas de robot — on adopte votre ton, votre style'},
{icon: CheckIcon, title: 'Rapports que vous comprenez', desc: 'Pas de jargon. Des chiffres clairs, c\'est tout'},
{icon: CheckIcon, title: 'Opérationnel en 48h', desc: 'Pas d\'infrastructure, pas de casse-tête'},
{icon: CheckIcon, title: 'Prix PME, pas prix enterprise', desc: '40-60% moins cher qu\'un poste interne'},
].map(({icon: Icon, title, desc}, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{n:'512',l:'PME actives'},{n:'98%',l:'Renouvellent'},{n:'40%',l:'Économie vs interne'},{n:'24/7',l:'Même la nuit'}].map(({n,l}) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-700">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Solutions</h2>
            <p className="text-slate-500 text-lg">Tout ce dont votre PME a besoin pour sa relation client</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }: any) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">{badge}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-700 text-sm font-semibold group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURE - WITH IMAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1.5 rounded-full mb-5">
                Nouveau Service
              </span>
<h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
Sophie, l'Agente IA<br/>Qui Parle comme Nous
</h2>
<p className="text-slate-600 text-lg mb-6">
Elle répond en moins de 2 secondes. Avec l'accent du Québec, de France, de Belgique — au choix. Et ça coûte une fraction d'un salaire.
</p>
              <ul className="space-y-3 mb-8">
{[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => {
const features = ['Réponse en moins de 2 secondes — pas de musique d\'attente', 'Accents du Québec, France, Belgique, Suisse au choix', 'Transfert vers un humain si c\'est compliqué', 'Coût? Environ 30% d\'un salaire standard', 'Dispo 24/7, même pendant les tempêtes de neige']
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
                Découvrir les Agents IA →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/agents-ia-hero.jpg"
                alt="Agent IA Sophie"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Comment ça marche</h2>
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

      {/* SECTION 7: DARK - TESTIMONIALS */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Ce que nos clients disent vraiment</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ q, name, role, av }) => (
              <div key={name} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-blue-100 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-white text-sm">{name}</p>
                    <p className="text-blue-200 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHITE - FINAL CTA */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Prêt à ne plus rater un appel?</h2>
          <p className="text-slate-600 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
          <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Démarrer Maintenant</Link>
        </div>
      </section>
    </>
  )
}
