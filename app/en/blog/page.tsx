import Link from 'next/link'

export const metadata = { title: "Blog | Smart Hotline Agency" }

const POSTS = [
  { title: "5 Reasons to Outsource Your Customer Service in 2025", date: "March 15, 2026", cat: "Strategy", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", excerpt: "Discover why more and more SMEs are choosing to outsource their customer relationships." },
  { title: "AI Agent vs Human Agent: Which to Choose?", date: "March 8, 2026", cat: "AI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80", excerpt: "Complete comparison to help you make the right choice based on your business and budget." },
  { title: "How to Qualify Leads Over the Phone: Complete Guide", date: "March 1, 2026", cat: "Prospecting", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80", excerpt: "Techniques and scripts used by our best advisors to qualify effectively." },
  { title: "Customer Satisfaction: Key KPIs to Monitor", date: "February 22, 2026", cat: "Metrics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", excerpt: "CSAT, NPS, FCR — understand and improve your satisfaction metrics." },
  { title: "Restaurant Industry: Why a Call Center Changes Everything", date: "February 14, 2026", cat: "Sectors", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", excerpt: "Testimonials from 3 restaurants that doubled their reservations in 30 days." },
  { title: "GDPR and Call Centers: What You Need to Know", date: "February 5, 2026", cat: "Compliance", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80", excerpt: "Practical guide to staying compliant while optimizing customer relationships." },
]

const TOPICS = [
  { name: "Outsourcing", count: 12 },
  { name: "AI & Automation", count: 8 },
  { name: "Lead Generation", count: 15 },
  { name: "Customer Satisfaction", count: 9 },
  { name: "Industry Insights", count: 7 },
  { name: "Compliance", count: 4 },
]

const CATEGORIES = [
  { name: "Strategy", color: "bg-blue-100 text-blue-700" },
  { name: "AI", color: "bg-purple-100 text-purple-700" },
  { name: "Prospecting", color: "bg-green-100 text-green-700" },
  { name: "Metrics", color: "bg-orange-100 text-orange-700" },
  { name: "Sectors", color: "bg-pink-100 text-pink-700" },
  { name: "Compliance", color: "bg-red-100 text-red-700" },
]

export default function Blog() {
  return (
    <>
{/* Section 1: LIGHT HERO - Text LEFT, Image RIGHT */}
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
Smart Hotline Blog
</h1>
<p className="text-lg text-slate-600 mb-6">Tips, strategies and insights to optimize your customer relationships.</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/smart-hotline-last/images/main-hero.jpg" alt="Smart Hotline Blog" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      {/* Section 2: LIGHT - Blog posts grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {POSTS.map(({title, date, cat, img, excerpt}) => (
              <article key={title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cat}</span>
                    <span className="text-gray-400 text-xs">{date}</span>
                  </div>
                  <h2 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{__html: title}}/>
                  <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{__html: excerpt}}/>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: LIGHT - Newsletter (changed to slate-50) */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Get Our Weekly Tips</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter — 100% useful, 0% spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Section 4: DARK - Popular Topics */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Popular Topics</h2>
            <p className="text-slate-300">Browse our most read subjects</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {TOPICS.map(({name, count}) => (
              <Link key={name} href="#" className="bg-slate-700 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition-colors flex items-center gap-2 group">
                <span className="font-medium">{name}</span>
                <span className="bg-slate-600 group-hover:bg-blue-500 text-sm px-2 py-0.5 rounded-full">{count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: LIGHT - Featured Author */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-center">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Author" className="w-32 h-32 rounded-full object-cover"/>
            <div className="text-center md:text-left">
              <p className="text-blue-600 font-semibold text-sm mb-1">EDITOR'S PICK</p>
              <h3 className="text-2xl font-bold mb-3">Marie Dubois, Head of Customer Success</h3>
              <p className="text-gray-600 mb-4">Marie has spent 12 years helping businesses improve their customer service. Her articles on outsourcing have helped many SMEs make better decisions.</p>
              <Link href="#" className="text-blue-600 font-semibold hover:underline">Read all articles by Marie →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: LIGHT - Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map(({name, color}) => (
              <Link key={name} href="#" className={`${color} rounded-xl p-5 text-center hover:opacity-80 transition-opacity`}>
                <span className="font-semibold">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: DARK - CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Customer Service?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join 200+ businesses that improved their customer satisfaction by 40% with our call center solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">Get a Free Quote</Link>
            <Link href="/en/services" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">See Our Services</Link>
          </div>
        </div>
      </section>

      {/* Section 8: LIGHT - Trust indicators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Trusted by Growing Businesses</h2>
          <p className="text-gray-500 mb-10">Real results from real companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600">200+</p>
              <p className="text-gray-600">Active Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">40%</p>
              <p className="text-gray-600">Avg. Satisfaction Increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">500K+</p>
              <p className="text-gray-600">Calls Handled Monthly</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600">Support Availability</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
