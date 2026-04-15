'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CheckIcon, BuildingIcon, UsersIcon, ClockIcon, StarIcon, MapPinIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema'

const MONTREAL_STATS = [
  { value: '150+', label: 'Entreprises montréalaises servies' },
  { value: '4.9/5', label: 'Note Google moyenne' },
  { value: '98%', label: 'Appels répondus' },
  { value: '24/7', label: 'Disponibilité' },
]

const QUARTIERS = [
  { name: "Plateau-Mont-Royal", desc: "Restaurants, boutiques, services créatifs" },
  { name: "Ville-Marie", desc: "Bureaux, professions libérales, finance" },
  { name: "Rosemont", desc: "Santé, services locaux, commerces" },
  { name: "Outremont", desc: "Services haut de gamme, juristes" },
  { name: "Westmount", desc: "Immobilier de luxe, gestion de patrimoine" },
  { name: "Verdun", desc: "PME en croissance, startups" },
]

const SECTEURS_MONTREAL = [
  { name: "Restauration", count: "5000+", desc: "Bistrots, restaurants, traiteurs du Grand Montréal" },
  { name: "Santé", count: "1200+", desc: "Cliniques, cabinets médicaux, physiothérapie" },
  { name: "Immobilier", count: "800+", desc: "Agences, courtiers, promoteurs" },
  { name: "Juridique", count: "600+", desc: "Cabinets d'avocats, notaires, huissiers" },
  { name: "Tech", count: "3000+", desc: "Startups, SaaS, agences numériques" },
  { name: "Construction", count: "1500+", desc: "Entrepreneurs, rénovation, BTP" },
]

const FAQ_MONTREAL = [
  { question: "Offrez-vous un service en français à Montréal?", answer: "Absolument! Tous nos agents sont parfaitement bilingues français-anglais. Nous comprenons les nuances culturelles du marché québécois et la Loi 25 sur la confidentialité." },
  { question: "Quels quartiers de Montréal dessertes-vous?", answer: "Nous servons tout le Grand Montréal: Plateau, Ville-Marie, Rosemont, Outremont, Westmount, Verdun, Laval, Longueuil et la Rive-Sud. Nos agents connaissent chaque quartier." },
  { question: "Combien coûte le service pour une PME montréalaise?", answer: "Nos tarifs commencent à 15$/heure pour l'essai. Pour une PME montréalaise typique, le coût mensuel varie entre 400$ et 1200$ selon le volume. Essai gratuit de 2 semaines disponible." },
  { question: "Êtes-vous conformes à la Loi 25?", answer: "Oui, nous sommes pleinement conformes à la Loi 25 sur la protection des renseignements personnels du Québec. Tous nos agents sont formés aux exigences de confidentialité québécoises." },
]

function CTAButtons() {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/fr/contact?service=montreal"
        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
        Essai Gratuit 2 Semaines
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

function NotAvailableInRegion() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPinIcon className="w-10 h-10 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">
          Service Non Disponible Dans Votre Région
        </h1>
        <p className="text-slate-600 text-lg mb-8">
          Notre service de réception téléphonique à Montréal est exclusivement réservé aux entreprises du Canada et des États-Unis.
        </p>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8">
          <p className="text-slate-700 mb-4">
            Vous êtes situé ailleurs? Découvrez nos autres services:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/services" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all">
              Voir nos services
            </Link>
            <Link href="/fr/contact" className="border-2 border-indigo-600 text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
        <p className="text-slate-500 text-sm">
          Smart Hotline opère principalement au Canada, aux États-Unis, en France et en Europe.
        </p>
      </div>
    </section>
  )
}

export default function MontrealPage() {
  const { geo, loading } = useGeo()
  const isAllowedRegion = !loading && (geo.country === 'Canada' || geo.country === 'United States')

  if (loading) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement...</p>
        </div>
      </section>
    )
  }

  if (!isAllowedRegion) {
    return <NotAvailableInRegion />
  }

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-600 font-semibold">Montréal & Grand Montréal</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Service de Réception Téléphonique à Montréal
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Votre standardiste externalisé, 100% bilingue, qui comprend le marché québécois. 
                Plus de 150 PME montréalaises nous font confiance.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Français natif', 'Loi 25 conforme', 'Laval & Rive-Sud', '24/7'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full font-medium">
                    <CheckIcon className="w-4 h-4" /> {b}
                  </span>
                ))}
              </div>
              <CTAButtons />
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img 
                  src={`${basePath}/images/montreal-skyline.webp`} 
                  alt="Service téléphonique Montréal - Smart Hotline" 
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'500px', objectFit:'cover'}}
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 rounded-xl p-4 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <StarIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-black text-lg">4.9/5</p>
                      <p className="text-slate-500 text-sm">150+ avis Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {MONTREAL_STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-indigo-400">{value}</p>
                <p className="text-slate-300 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Nous Connaissons Chaque Quartier
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Du Plateau à Westmount, de Laval à la Rive-Sud. Nos agents comprennent 
              les réalités locales de chaque secteur montréalais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUARTIERS.map(({name, desc}) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Expertise Sectorielle Montréalaise
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Chaque secteur a ses particularités. Nous adaptons notre service à votre industrie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTEURS_MONTREAL.map(({name, count, desc}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-slate-900">{name}</h3>
                  <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">
                    {count}
                  </span>
                </div>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Pourquoi les PME Montréalaises Nous Choisissent
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Bilingues Natifs</h3>
              <p className="text-slate-300 text-sm">Français et anglais parfaits. Aucun accent, aucune hésitation.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Loi 25 Conforme</h3>
              <p className="text-slate-300 text-sm">Protection des données conforme aux exigences québécoises.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Disponibilité 24/7</h3>
              <p className="text-slate-300 text-sm">Même après les heures, même les week-ends. Toujours là.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <BuildingIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Compréhension Locale</h3>
              <p className="text-slate-300 text-sm">On connaît Montréal, ses quartiers, ses codes culturels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Questions Fréquentes - Montréal
            </h2>
          </div>
          <div className="space-y-6">
            {FAQ_MONTREAL.map(({question, answer}, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{question}</h3>
                <p className="text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900">
            Prêt à Ne Plus Jamais Manquer un Appel?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Essai gratuit de 2 semaines. Aucun engagement. Installation en 48h.
          </p>
          <CTAButtons />
          <p className="text-slate-500 text-sm mt-6">
            Service disponible à Montréal, Laval, Longueuil, Rive-Sud et tout le Québec.
          </p>
        </div>
      </section>

      <LocalBusinessSchema 
        name="Smart Hotline Montréal"
        description="Service de réception téléphonique externalisée pour PME montréalaises. Bilingue français-anglais, conforme Loi 25."
        address={{
          street: "1001 Boulevard Maisonneuve Ouest",
          city: "Montréal",
          region: "QC",
          postalCode: "H3A 3C8",
          country: "CA"
        }}
        phone={CONTACT.phone}
        geo={{ lat: 45.5017, lng: -73.5673 }}
        areaServed={["Montréal", "Laval", "Longueuil", "Rive-Sud", "Québec"]}
      />
      <FAQSchema faqs={FAQ_MONTREAL} />
    </>
  )
}
