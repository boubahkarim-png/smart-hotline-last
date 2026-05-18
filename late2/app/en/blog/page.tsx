import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('blog', 'en'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "Blog | Smart Hotline Agency" }
     3|const POSTS = [
     4|  { title: "5 Reasons to Outsource Your Customer Service in 2025", date: "March 15, 2026", cat: "Strategy", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", excerpt: "Discover why more and more SMEs are choosing to outsource their customer relationships." },
     5|  { title: "AI Agent vs Human Agent: Which to Choose?", date: "March 8, 2026", cat: "AI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80", excerpt: "Complete comparison to help you make the right choice based on your business and budget." },
     6|  { title: "How to Qualify Leads Over the Phone: Complete Guide", date: "March 1, 2026", cat: "Prospecting", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80", excerpt: "Techniques and scripts used by our best advisors to qualify effectively." },
     7|  { title: "Customer Satisfaction: Key KPIs to Monitor", date: "February 22, 2026", cat: "Metrics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", excerpt: "CSAT, NPS, FCR — understand and improve your satisfaction metrics." },
     8|  { title: "Restaurant Industry: Why a Call Center Changes Everything", date: "February 14, 2026", cat: "Sectors", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", excerpt: "Testimonials from 3 restaurants that doubled their reservations in 30 days." },
     9|  { title: "GDPR and Call Centers: What You Need to Know", date: "February 5, 2026", cat: "Compliance", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80", excerpt: "Practical guide to staying compliant while optimizing customer relationships." },
    10|]
    11|export default function Blog() {
    12|  return (
    13|    <>
    14|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    15|        <div className="max-w-4xl mx-auto px-4 text-center">
    16|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Smart Hotline Blog</h1>
    17|          <p className="text-lg text-blue-100">Tips, strategies and insights to optimize your customer relationships.</p>
    18|        </div>
    19|      </section>
    20|      <section className="py-20">
    21|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    22|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    23|            {POSTS.map(({title, date, cat, img, excerpt}) => (
    24|              <article key={title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
    25|                <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    26|                <div className="p-6">
    27|                  <div className="flex items-center gap-2 mb-3">
    28|                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cat}</span>
    29|                    <span className="text-gray-400 text-xs">{date}</span>
    30|                  </div>
    31|                  <h2 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{__html: title}}/>
    32|                  <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{__html: excerpt}}/>
    33|                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">Read more →</span>
    34|                </div>
    35|              </article>
    36|            ))}
    37|          </div>
    38|        </div>
    39|      </section>
    40|      <section className="bg-blue-50 py-16">
    41|        <div className="max-w-4xl mx-auto px-4 text-center">
    42|          <h2 className="text-2xl font-bold mb-3">Get Our Weekly Tips</h2>
    43|          <p className="text-gray-600 mb-6">Subscribe to our newsletter — 100% useful, 0% spam.</p>
    44|          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
    45|            <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
    46|            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">Subscribe</button>
    47|          </div>
    48|        </div>
    49|      </section>
    50|    </>
    51|  )
    52|}
    53|