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
export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Smart Hotline Blog</h1>
          <p className="text-lg text-blue-100">Tips, strategies and insights to optimize your customer relationships.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Get Our Weekly Tips</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter — 100% useful, 0% spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
