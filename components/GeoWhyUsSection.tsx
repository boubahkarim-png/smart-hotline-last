'use client'
import { useGeo } from '@/hooks/useGeo'
import { getCountryContent } from '@/lib/geo-localization'
import { CheckIcon } from '@/components/Icons'

export default function GeoWhyUsSection({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  const countryCode = loading ? 'OTHER' : (
    geo.country === 'Canada' ? 'CA' :
    geo.country === 'France' ? 'FR' :
    geo.country === 'Belgique' ? 'BE' :
    geo.country === 'Suisse' ? 'CH' :
    geo.country === 'United States' ? 'US' : 'OTHER'
  )
  
  const content = getCountryContent(countryCode)
  const fr = lang === 'fr'
  
  const getFeatures = () => {
    if (countryCode === 'CA') {
      return fr ? [
        { title: 'Reponse en moins de 3 sonneries', desc: 'Vos clients patientent jamais — meme le dimanche soir' },
        { title: 'Francais du Quebec', desc: 'Des conseillers qui parlent comme vos clients' },
        { title: 'Scripts qui vous ressemblent', desc: 'Pas de robot — on adopte votre ton, votre style' },
        { title: 'Rapports que vous comprenez', desc: 'Pas de jargon. Des chiffres clairs, c\'est tout' },
        { title: 'Operationnel en 48h', desc: 'Pas d\'infrastructure, pas de casse-tete' },
        { title: 'Prix PME, pas prix enterprise', desc: '40-60% moins cher qu\'un poste interne' }
      ] : [
        { title: 'Answer in under 3 rings', desc: 'Your clients never wait' },
        { title: 'Native Quebec French', desc: 'Agents who speak like your clients' },
        { title: 'Custom scripts', desc: 'We sound like you' },
        { title: 'Clear reports', desc: 'No jargon, just clear numbers' },
        { title: 'Setup in 48h', desc: 'No infrastructure needed' },
        { title: 'SMB pricing', desc: '40-60% cheaper than in-house' }
      ]
    } else if (countryCode === 'US') {
      return [
        { title: 'Answer in under 3 rings', desc: 'Your clients never wait' },
        { title: 'Bilingual French-English', desc: 'Native agents from Montreal' },
        { title: 'Custom scripts', desc: 'We sound like you' },
        { title: 'Real-time reports', desc: 'Detailed dashboards 24/7' },
        { title: 'Setup in 48h', desc: 'No infrastructure required' },
        { title: 'SMB pricing', desc: 'Up to 60% cheaper than in-house' }
      ]
    } else if (countryCode === 'FR') {
      return [
        { title: 'Reponse en moins de 3 sonneries', desc: 'Vos clients ne patientent jamais' },
        { title: 'Francais de France', desc: 'Des conseillers qui parlent comme vos clients' },
        { title: 'Scripts personnalises', desc: 'On adopte votre ton et votre style' },
        { title: 'Rapports clairs', desc: 'Pas de jargon, des resultats concrets' },
        { title: 'Operationnel en 48h', desc: 'Pas d\'infrastructure requise' },
        { title: 'Tarifs PME', desc: 'Jusqu\'a 60% moins cher qu\'un poste interne' }
      ]
    } else if (countryCode === 'BE') {
      return [
        { title: 'Reponse en moins de 3 sonneries', desc: 'Vos clients ne patientent jamais' },
        { title: 'Francais de Belgique', desc: 'Des conseillers qui comprennent votre marche' },
        { title: 'Scripts personnalises', desc: 'On adopte votre ton et votre style' },
        { title: 'Rapports clairs', desc: 'Pas de jargon, des resultats concrets' },
        { title: 'Operationnel en 48h', desc: 'Pas d\'infrastructure requise' },
        { title: 'Tarifs PME', desc: 'Jusqu\'a 60% moins cher qu\'un poste interne' }
      ]
    } else if (countryCode === 'CH') {
      return [
        { title: 'Reponse en moins de 3 sonneries', desc: 'Vos clients ne patientent jamais' },
        { title: 'Francais de Suisse romande', desc: 'Des conseillers qui parlent comme vos clients' },
        { title: 'Scripts personnalises', desc: 'On adopte votre ton et votre style' },
        { title: 'Rapports detailles', desc: 'Qualite suisse dans chaque rapport' },
        { title: 'Operationnel en 48h', desc: 'Pas d\'infrastructure requise' },
        { title: 'Tarifs competitifs', desc: 'Service premium a prix abordable' }
      ]
    } else {
      return fr ? [
        { title: 'Reponse en moins de 3 sonneries', desc: 'Vos clients ne patientent jamais' },
        { title: 'Conseillers francophones', desc: 'Des agents qui comprennent votre marche' },
        { title: 'Scripts personnalises', desc: 'On adopte votre ton et votre style' },
        { title: 'Rapports clairs', desc: 'Pas de jargon, des resultats concrets' },
        { title: 'Operationnel en 48h', desc: 'Pas d\'infrastructure requise' },
        { title: 'Tarifs PME', desc: 'Jusqu\'a 60% moins cher qu\'un poste interne' }
      ] : [
        { title: 'Answer in under 3 rings', desc: 'Your clients never wait' },
        { title: 'French-speaking agents', desc: 'Agents who understand your market' },
        { title: 'Custom scripts', desc: 'We sound like you' },
        { title: 'Clear reports', desc: 'No jargon, just results' },
        { title: 'Setup in 48h', desc: 'No infrastructure required' },
        { title: 'SMB pricing', desc: 'Up to 60% cheaper than in-house' }
      ]
    }
  }
  
  const features = getFeatures()
  
  const getTitle = () => {
    if (fr) {
      if (countryCode === 'CA') return `Pourquoi 500+ PME du Quebec nous font confiance`
      if (countryCode === 'FR') return `Pourquoi ${content.stats.clientsCount}+ PME en France nous font confiance`
      if (countryCode === 'BE') return `Pourquoi ${content.stats.clientsCount}+ PME en Belgique nous font confiance`
      if (countryCode === 'CH') return `Pourquoi ${content.stats.clientsCount}+ PME en Suisse nous font confiance`
      return `Pourquoi 500+ PME nous font confiance`
    } else {
      if (countryCode === 'US') return `Why ${content.stats.clientsCount}+ US businesses trust us`
      return `Why 500+ businesses trust us`
    }
  }
  
  const getSubtitle = () => {
    if (fr) {
      if (countryCode === 'CA') return `Des restaurants de la Main aux startups du Mile-End. On comprend la realite des PME d'ici.`
      if (countryCode === 'FR') return `Des PME parisiennes aux entreprises de province. On comprend la realite du marche francais.`
      if (countryCode === 'BE') return `Des PME bruxelloises aux entreprises wallonnes. On comprend le marche belge.`
      if (countryCode === 'CH') return `De Geneve a Lausanne, on comprend les exigences du marche suisse.`
      return `On comprend les besoins des PME francophones.`
    } else {
      if (countryCode === 'US') return `From NYC to San Francisco, we understand the US market.`
      return `We understand the needs of SMBs.`
    }
  }
  
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            {getTitle()}
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, desc }, i) => (
            <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-blue-200 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
