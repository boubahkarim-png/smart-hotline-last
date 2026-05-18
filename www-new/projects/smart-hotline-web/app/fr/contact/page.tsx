     1|'use client'

export const metadata = {
  title: "Smart Hotline | Contactez-Nous | Consultation Gratuite",
  description: "Contactez Smart Hotline. Consultation gratuite sans engagement. Réponse sous 2h. Démarrez votre essai gratuit de 2 semaines.",
}

     2|import GeoTestimonials from '@/components/GeoTestimonials'
     3|import basePath from '@/lib/basePath'
     4|import { useState, useEffect } from 'react'
     5|import Link from 'next/link'
     6|import { useGeo } from '@/hooks/useGeo'
     7|import { GeoContactInfo, GeoContactCTA } from '@/components/GeoContactInfo'
     8|import { CaptchaField } from '@/components/CaptchaField'
     9|
    10|const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.smart-hotline.com'
    11|const RATE_LIMIT_KEY = 'smart-hotline-submissions'
    12|const MAX_SUBMISSIONS_PER_HOUR = 10
    13|
    14|
    15|function getSubmissionCount(): { count: number; resetTime: number } {
    16|  if (typeof window === 'undefined') return { count: 0, resetTime: Date.now() + 3600000 }
    17|  
    18|  const stored = localStorage.getItem(RATE_LIMIT_KEY)
    19|  if (!stored) return { count: 0, resetTime: Date.now() + 3600000 }
    20|  
    21|  try {
    22|    const data = JSON.parse(stored)
    23|    if (Date.now() > data.resetTime) {
    24|      return { count: 0, resetTime: Date.now() + 3600000 }
    25|    }
    26|    return data
    27|  } catch {
    28|    return { count: 0, resetTime: Date.now() + 3600000 }
    29|  }
    30|}
    31|
    32|function incrementSubmissionCount() {
    33|  if (typeof window === 'undefined') return
    34|  const current = getSubmissionCount()
    35|  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
    36|    count: current.count + 1,
    37|    resetTime: current.resetTime
    38|  }))
    39|}
    40|
    41|export default function FrContact() {
    42|  const [sent, setSent] = useState(false)
    43|  const [sending, setSending] = useState(false)
    44|  const [error, setError] = useState('')
    45|  const [rateLimited, setRateLimited] = useState(false)
    46|  const [remainingSubmissions, setRemainingSubmissions] = useState(MAX_SUBMISSIONS_PER_HOUR)
    47|  const { geo, loading } = useGeo()
    48|  const showPhone = !loading && geo.showPhone
    49|
    50|  useEffect(() => {
    51|    const { count, resetTime } = getSubmissionCount()
    52|    const remaining = MAX_SUBMISSIONS_PER_HOUR - count
    53|    setRemainingSubmissions(Math.max(0, remaining))
    54|    setRateLimited(count >= MAX_SUBMISSIONS_PER_HOUR)
    55|  }, [])
    56|
    57|  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    58|    e.preventDefault()
    59|
    60|    if (rateLimited) {
    61|      setError('Trop de soumissions. Veuillez attendre avant de réessayer.')
    62|      return
    63|    }
    64|
    65|    const form = e.currentTarget
    66|    const formData = new FormData(form)
    67|
    68|    const honeypot = formData.get('website') as string
    69|    const formTimestamp = parseInt(formData.get('form_timestamp') as string || '0')
    70|
    71|    if (honeypot) {
    72|      setError('Erreur de vérification. Veuillez réessayer.')
    73|      return
    74|    }
    75|
    76|    const timeDiff = Date.now() - formTimestamp
    77|    if (timeDiff < 2000 || timeDiff > 3600000) {
    78|      setError('Le formulaire a expiré. Veuillez rafraîchir la page.')
    79|      return
    80|    }
    81|
    82|    setSending(true)
    83|    setError('')
    84|
    85|    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
    86|    const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)
    87|
    88|const data = {
    89|                name: sanitize(formData.get('name') as string || ''),
    90|                email: sanitizeEmail(formData.get('email') as string || ''),
    91|                phone: sanitize(formData.get('phone') as string || ''),
    92|                company: sanitize(formData.get('company') as string || ''),
    93|                service: sanitize(formData.get('service') as string || ''),
    94|                volume: sanitize(formData.get('volume') as string || ''),
    95|                message: sanitize(formData.get('message') as string || ''),
    96|                source: 'contact-form-fr',
    97|                language: 'fr'
    98|            }
    99|
   100|    if (!data.name || !data.email) {
   101|      setError('Le nom et l\'email sont requis.')
   102|      setSending(false)
   103|      return
   104|    }
   105|
   106|    try {
   107|      const response = await fetch(`${API_URL}/leads/contact.php`, {
   108|        method: 'POST',
   109|        headers: { 'Content-Type': 'application/json' },
   110|        body: JSON.stringify(data)
   111|      })
   112|
   113|      if (response.ok) {
   114|        incrementSubmissionCount()
   115|        setSent(true)
   116|        setRemainingSubmissions(prev => Math.max(0, prev - 1))
   117|      } else {
   118|        const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
   119|        const body = encodeURIComponent(
   120|          `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
   121|        )
   122|        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
   123|        setSent(true)
   124|      }
   125|    } catch (err) {
   126|      const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
   127|      const body = encodeURIComponent(
   128|        `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
   129|      )
   130|      window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
   131|      setSent(true)
   132|    }
   133|
   134|    setSending(false)
   135|  }
   136|
   137|  return (
   138|    <>
   139|      {/* SECTION 1: LIGHT HERO */}
   140|      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
   141|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   142|          <div className="flex flex-col lg:flex-row items-center gap-12">
   143|<div className="w-full lg:w-[40%]">
   144|								<h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
   145|                Contactez-Nous
   146|              </h1>
   147|              <p className="text-lg text-slate-600 mb-8">Consultation sans engagement — réponse sous 2h. Notre équipe est prête à répondre à toutes vos questions.</p>
   148|              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
   149|                Envoyer un Message →
   150|              </Link>
   151|            </div>
   152|<div className="w-full lg:w-[60%]">
   153|								<img src={`${basePath}/images/contact-hero.webp`} alt="Contactez Smart Hotline" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
   154|            </div>
   155|          </div>
   156|        </div>
   157|      </section>
   158|
   159|      {/* SECTION 2: DARK - CONTACT INFO */}
   160|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
   161|        <div className="max-w-4xl mx-auto px-4 text-center">
   162|          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nous sommes là pour vous aider</h2>
   163|<p className="text-lg text-white mb-8 max-w-2xl mx-auto">
   164|Que vous ayez une question sur nos services, besoin d'une démonstration,
   165|ou simplement envie de discuter de vos besoins en relation client,
   166|notre équipe est prête à vous répondre.
   167|</p>
   168|
   169|          {/* GEO-AWARE CONTACT INFO */}
   170|          <div className="max-w-md mx-auto mt-8">
   171|            <GeoContactInfo lang="fr" />
   172|          </div>
   173|
   174|          {/* GEO-AWARE CTA BUTTONS */}
   175|          <div className="mt-8 flex justify-center">
   176|            <GeoContactCTA lang="fr" />
   177|          </div>
   178|        </div>
   179|      </section>
   180|
   181|      {/* SECTION 3: LIGHT - HOW WE HELP */}
   182|      <section className="py-20 bg-white">
   183|        <div className="max-w-4xl mx-auto px-4">
   184|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   185|            <div className="text-center">
   186|              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analyse Gratuite</h3>
   187|              <p className="text-gray-600">
   188|                Consultation de 30 minutes pour comprendre vos besoins spécifiques
   189|                et vous proposer une solution adaptée.
   190|              </p>
   191|            </div>
   192|            <div className="text-center">
   193|              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mise en Place Rapide</h3>
   194|              <p className="text-gray-600">
   195|                Opérationnel en moins de 48 heures après validation de la solution.
   196|                Formation incluse pour votre équipe.
   197|              </p>
   198|            </div>
   199|            <div className="text-center">
   200|              <h3 className="text-2xl font-bold text-slate-900 mb-4">Support Continu</h3>
   201|              <p className="text-gray-600">
   202|                Rapports mensuels, optimisation constante et support dédié
   203|                pour garantir votre succès à long terme.
   204|              </p>
   205|            </div>
   206|          </div>
   207|        </div>
   208|      </section>
   209|
   210|      {/* SECTION 4: DARK - TRUST BADGES */}
   211|      <section className="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white">
   212|        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
   213|          {[
   214|            {n:'500+', l:'PME accompagnées'},
   215|            {n:'98%', l:'Taux de satisfaction'},
   216|            {n:'24/7', l:'Disponibilité'},
   217|            {n:'70%', l:'Économie moyenne'}
   218|          ].map(({n,l}) => (
   219|            <div key={l}>
   220|              <div className="text-4xl lg:text-5xl font-extrabold text-sky-400">{n}</div>
   221|              <div className="text-sky-100 mt-2">{l}</div>
   222|            </div>
   223|          ))}
   224|        </div>
   225|      </section>
   226|
   227|      {/* SECTION 5: LIGHT - CONTACT FORM */}
   228|      <section className="py-20 bg-slate-50" id="contact-form">
   229|        <div className="max-w-4xl mx-auto px-4">
   230|          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Envoyez-nous un Message</h2>
   231|          <p className="text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
   232|            Décrivez vos besoins et nous vous répondrons sous 2 heures avec
   233|            une recommandation personnalisée.
   234|          </p>
   235|
   236|          {sent ? (
   237|            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
   238|              <div className="text-6xl mb-4">✅</div>
   239|              <h3 className="text-2xl font-black text-green-800 mb-2">Message envoyé!</h3>
   240|              <p className="text-green-700 text-lg">Nous vous répondons sous 2h.</p>
   241|            </div>
   242|          ) : (
   243|            <form
   244|              onSubmit={handleSubmit}
   245|              className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
   246|            >
   247|              <CaptchaField onValidChange={() => {}} />
   248|
   249|              {rateLimited && (
   250|                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
   251|                  Trop de soumissions. Veuillez attendre avant de réessayer.
   252|                </div>
   253|              )}
   254|
   255|              <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>
   256|
   257|<div className="space-y-4 mb-6">
   258|                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   259|                            <div>
   260|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom Complet *</label>
   261|                                <input
   262|                                    type="text"
   263|                                    name="name"
   264|                                    required
   265|                                    maxLength={100}
   266|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   267|                                    placeholder="Votre nom"
   268|                                />
   269|                            </div>
   270|                            <div>
   271|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Entreprise</label>
   272|                                <input
   273|                                    type="text"
   274|                                    name="company"
   275|                                    maxLength={100}
   276|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   277|                                    placeholder="Votre entreprise"
   278|                                />
   279|                            </div>
   280|                        </div>
   281|                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   282|                            <div>
   283|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
   284|                                <input
   285|                                    type="email"
   286|                                    name="email"
   287|                                    required
   288|                                    maxLength={254}
   289|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   290|                                    placeholder="votre@email.com"
   291|                                />
   292|                            </div>
   293|                            <div>
   294|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Téléphone</label>
   295|                                <input
   296|                                    type="tel"
   297|                                    name="phone"
   298|                                    maxLength={20}
   299|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   300|                                    placeholder="+1 514 123-4567"
   301|                                />
   302|                            </div>
   303|                        </div>
   304|                        <div>
   305|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service d'intérêt</label>
   306|                            <select
   307|                                name="service"
   308|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   309|                            >
   310|                                <option value="">Sélectionnez un service...</option>
   311|                                <option value="reception">Appels Entrants / Réception 24/7</option>
   312|                                <option value="emission">Appels Sortants / Prospection</option>
   313|                                <option value="agents-ia">Agents IA Vocaux</option>
   314|                                <option value="support">Support Client</option>
   315|                                <option value="crm">CRM & Listes</option>
   316|                                <option value="other">Autre</option>
   317|                            </select>
   318|                        </div>
   319|                        <div>
   320|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Volume d'appels estimé</label>
   321|                            <select
   322|                                name="volume"
   323|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   324|                            >
   325|                                <option value="">Sélectionnez le volume...</option>
   326|                                <option value="small">Moins de 50 appels/mois</option>
   327|                                <option value="medium">50-200 appels/mois</option>
   328|                                <option value="large">200-500 appels/mois</option>
   329|                                <option value="enterprise">500+ appels/mois</option>
   330|                            </select>
   331|                        </div>
   332|                        <div>
   333|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
   334|                            <textarea
   335|                                name="message"
   336|                                required
   337|                                rows={4}
   338|                                maxLength={2000}
   339|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
   340|                                placeholder="Décrivez vos besoins..."
   341|                            />
   342|                        </div>
   343|                    </div>
   344|
   345|              {error && (
   346|                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
   347|                  {error}
   348|                </div>
   349|              )}
   350|
   351|              <button
   352|                type="submit"
   353|                disabled={sending}
   354|                className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg"
   355|              >
   356|                {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
   357|              </button>
   358|              <p className="text-center text-slate-500 text-sm mt-4">Réponse sous 2h • Sans engagement</p>
   359|            </form>
   360|          )}
   361|        </div>
   362|      </section>
   363|
   364|      {/* SECTION 6: DARK - WHY CHOOSE US */}
   365|      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white">
   366|        <div className="max-w-4xl mx-auto px-4">
   367|          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   368|            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
   369|              <h3 className="text-2xl font-bold mb-4">Notre Engagement Qualité</h3>
   370|              <ul className="space-y-4">
   371|                <li className="flex items-center gap-3 text-sky-100">
   372|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   373|                    ✓
   374|                  </span>
   375|                  <span>Disponibilité 24/7, même les weekends et jours fériés</span>
   376|                </li>
   377|                <li className="flex items-center gap-3 text-sky-100">
   378|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   379|                    ✓
   380|                  </span>
   381|                  <span>Aucun engagement à long terme</span>
   382|                </li>
   383|                <li className="flex items-center gap-3 text-sky-100">
   384|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   385|                    ✓
   386|                  </span>
   387|                  <span>Reporting transparent et accès aux données en temps réel</span>
   388|                </li>
   389|                <li className="flex items-center gap-3 text-sky-100">
   390|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   391|                    ✓
   392|                  </span>
   393|                  <span>Amélioration continue basée sur vos retours</span>
   394|                </li>
   395|              </ul>
   396|            </div>
   397|            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
   398|              <h3 className="text-2xl font-bold mb-4">Technologie Qui Marche</h3>
   399|              <ul className="space-y-4">
   400|                <li className="flex items-center gap-3 text-sky-100">
   401|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   402|                    ✓
   403|                  </span>
   404|                  <span>IA vocale avancée avec compréhension contextuelle</span>
   405|                </li>
   406|                <li className="flex items-center gap-3 text-sky-100">
   407|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   408|                    ✓
   409|                  </span>
   410|                  <span>Intégrations simples avec vos outils existants</span>
   411|                </li>
   412|                <li className="flex items-center gap-3 text-sky-100">
   413|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   414|                    ✓
   415|                  </span>
   416|                  <span>Sécurité solide et conformité RGPD</span>
   417|                </li>
   418|                <li className="flex items-center gap-3 text-sky-100">
   419|                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
   420|                    ✓
   421|                  </span>
   422|                  <span>Applications mobiles pour gérer votre service où que vous soyez</span>
   423|                </li>
   424|              </ul>
   425|            </div>
   426|          </div>
   427|        </div>
   428|      </section>
   429|
   430|      {/* SECTION 7: LIGHT - FAQ */}
   431|      <section className="py-20 bg-white">
   432|        <div className="max-w-4xl mx-auto px-4">
   433|          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Questions Fréquentes</h2>
   434|          <div className="space-y-4">
   435|            {[
   436|              { q: 'Combien de temps prend la mise en place ?', a: 'Notre service est opérationnel en moins de 48 heures après validation de la solution.' },
   437|              { q: 'Proposez-vous un essai gratuit ?', a: 'Oui, nous offrons un essai de 2 semaines à notre tarif d\'entrée ou 1 semaine gratuite suivie de 3 semaines payantes.' },
   438|              { q: 'Quel est votre taux de disponibilité ?', a: 'Nous garantissons un taux de disponibilité de 99.9% avec une infrastructure redondante.' },
   439|              { q: 'Comment garantissez-vous la qualité du service ?', a: 'Grâce à notre recrutement sélectif, formation continue et suivi qualité quotidien.' },
   440|            ].map(({ q, a }) => (
   441|              <div key={q} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
   442|                <h3 className="font-bold text-lg text-slate-900 mb-2">{q}</h3>
   443|                <p className="text-slate-600">{a}</p>
   444|              </div>
   445|            ))}
   446|          </div>
   447|        </div>
   448|      </section>
   449|
   450|{/* SECTION 8: DARK - TESTIMONIALS MARQUEE */}
   451|<section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white overflow-hidden">
   452|<div className="max-w-7xl mx-auto px-4 mb-10">
   453|<h2 className="text-3xl lg:text-4xl font-bold text-center">Ce que disent nos clients</h2>
   454|<p className="text-sky-200 text-center mt-3">Plus de 500 entreprises nous font confiance</p>
   455|</div>
   456|<GeoTestimonials lang="fr" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
   457|</section>
   458|
   459|      {/* SECTION 9: DARK - FINAL CTA */}
   460|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
   461|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
   462|          <h2 className="text-3xl font-bold mb-4">Prêt à ne plus rater un appel?</h2>
   463|<p className="text-lg text-white mb-8">
   464|En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.
   465|</p>
   466|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   467|            <Link href="#contact-form" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">
   468|              Consultation Gratuite
   469|            </Link>
   470|            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">
   471|              Voir nos tarifs
   472|            </Link>
   473|          </div>
   474|        </div>
   475|      </section>
   476|    </>
   477|  )
   478|}
   479|