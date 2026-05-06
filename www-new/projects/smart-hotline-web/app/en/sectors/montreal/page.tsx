'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CheckIcon, BuildingIcon, UsersIcon, ClockIcon, StarIcon, MapPinIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema'

const MONTREAL_STATS = [
  { value: '150+', label: 'Montreal businesses served' },
  { value: '4.9/5', label: 'Google rating' },
  { value: '98%', label: 'Calls answered' },
  { value: '24/7', label: 'Availability' },
]

const NEIGHBORHOODS = [
  { name: "Plateau-Mont-Royal", desc: "Restaurants, boutiques, creative services" },
  { name: "Ville-Marie", desc: "Offices, professional services, finance" },
  { name: "Rosemont", desc: "Healthcare, local services, retail" },
  { name: "Outremont", desc: "Premium services, legal firms" },
  { name: "Westmount", desc: "Luxury real estate, wealth management" },
  { name: "Verdun", desc: "Growing SMEs, startups" },
]

const MONTREAL_SECTORS = [
  { name: "Restaurants", count: "5000+", desc: "Bistros, restaurants, caterers in Greater Montreal" },
  { name: "Healthcare", count: "1200+", desc: "Clinics, medical offices, physiotherapy" },
  { name: "Real Estate", count: "800+", desc: "Agencies, brokers, developers" },
  { name: "Legal", count: "600+", desc: "Law firms, notaries, bailiffs" },
  { name: "Tech", count: "3000+", desc: "Startups, SaaS, digital agencies" },
  { name: "Construction", count: "1500+", desc: "Contractors, renovation, construction" },
]

const FAQ_MONTREAL = [
  { question: "Do you offer French service in Montreal?", answer: "Absolutely! All our agents are perfectly bilingual French-English. We understand the cultural nuances of the Quebec market and Law 25 privacy requirements." },
  { question: "Which Montreal neighborhoods do you serve?", answer: "We serve all of Greater Montreal: Plateau, Ville-Marie, Rosemont, Outremont, Westmount, Verdun, Laval, Longueuil, and the South Shore. Our agents know every neighborhood." },
  { question: "How much does the service cost for a Montreal SME?", answer: "Our rates start at $15/hour for trial. For a typical Montreal SME, monthly costs range from $400 to $1200 depending on volume. 2-week free trial available." },
  { question: "Are you compliant with Law 25?", answer: "Yes, we are fully compliant with Quebec's Law 25 on personal information protection. All our agents are trained on Quebec privacy requirements." },
]

function CTAButtons() {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/en/contact?service=montreal"
        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
        Free 2-Week Trial
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
          Service Not Available In Your Region
        </h1>
        <p className="text-slate-600 text-lg mb-8">
          Our Montreal phone reception service is exclusively available to businesses in Canada and the United States.
        </p>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8">
          <p className="text-slate-700 mb-4">
            Located elsewhere? Discover our other services:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/services" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all">
              View our services
            </Link>
            <Link href="/en/contact" className="border-2 border-indigo-600 text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
              Contact us
            </Link>
          </div>
        </div>
        <p className="text-slate-500 text-sm">
          Smart Hotline operates primarily in Canada, United States, France, and Europe.
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
          <p className="text-slate-600">Loading...</p>
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
                <span className="text-indigo-600 font-semibold">Montreal & Greater Montreal</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Phone Reception Service in Montreal
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Your outsourced receptionist, 100% bilingual, who understands the Quebec market. 
                Over 150 Montreal SMEs trust us.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Native French', 'Law 25 compliant', 'Laval & South Shore', '24/7'].map(b => (
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
                  alt="Montreal phone service - Smart Hotline" 
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
                      <p className="text-slate-500 text-sm">150+ Google reviews</p>
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
                <p className="text-slate-200 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              We Know Every Neighborhood
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From Plateau to Westmount, Laval to South Shore. Our agents understand 
              the local realities of each Montreal area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map(({name, desc}) => (
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
              Montreal Sector Expertise
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each sector has its particularities. We adapt our service to your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MONTREAL_SECTORS.map(({name, count, desc}) => (
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
              Why Montreal SMEs Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-indigo-300" />
              </div>
<h3 className="font-bold text-lg text-white mb-2">Native Bilinguals</h3>
						<p className="text-slate-200 text-sm">Perfect French and English. No accent, no hesitation.</p>
					</div>
					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
							<CheckIcon className="w-6 h-6 text-indigo-300" />
						</div>
						<h3 className="font-bold text-lg text-white mb-2">Law 25 Compliant</h3>
						<p className="text-slate-200 text-sm">Data protection meeting Quebec requirements.</p>
					</div>
					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
							<ClockIcon className="w-6 h-6 text-indigo-300" />
						</div>
						<h3 className="font-bold text-lg text-white mb-2">24/7 Availability</h3>
						<p className="text-slate-200 text-sm">After hours, weekends, always there.</p>
					</div>
					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
							<BuildingIcon className="w-6 h-6 text-indigo-300" />
						</div>
						<h3 className="font-bold text-lg text-white mb-2">Local Understanding</h3>
						<p className="text-slate-200 text-sm">We know Montreal, its neighborhoods, its culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Frequently Asked Questions - Montreal
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
            Ready to Never Miss a Call Again?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Free 2-week trial. No commitment. Setup in 48h.
          </p>
          <CTAButtons />
          <p className="text-slate-500 text-sm mt-6">
            Service available in Montreal, Laval, Longueuil, South Shore, and all of Quebec.
          </p>
        </div>
      </section>

      <LocalBusinessSchema 
        name="Smart Hotline Montreal"
        description="Outsourced phone reception service for Montreal SMEs. Bilingual French-English, Law 25 compliant."
        address={{
          street: "1001 Boulevard Maisonneuve West",
          city: "Montreal",
          region: "QC",
          postalCode: "H3A 3C8",
          country: "CA"
        }}
        phone={CONTACT.phone}
        geo={{ lat: 45.5017, lng: -73.5673 }}
        areaServed={["Montreal", "Laval", "Longueuil", "South Shore", "Quebec"]}
      />
      <FAQSchema faqs={FAQ_MONTREAL} />
    </>
  )
}
