'use client'
import Link from 'next/link'
import { useState } from 'react'
import BlogArticleModal from '@/components/BlogArticleModal'

const POSTS = [
{
title: "5 Reasons to Outsource Your Customer Service in 2025",
date: "March 15, 2026",
cat: "Strategy",
img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
excerpt: "Discover why more and more SMEs are choosing to outsource their customer relationships.",
content: "Outsourcing customer service is experiencing unprecedented growth in 2025. Many SMEs recognize the strategic advantages of this approach, going well beyond simple cost reduction. In this article, we explore the five main reasons pushing Quebec and French companies to take the leap.",
author: "Marie-Claire Beaumont",
keywords: "outsourcing, customer service, SME, Quebec, France"
},
{
title: "AI Agent vs Human Agent: Which to Choose?",
date: "March 8, 2026",
cat: "AI",
img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80",
excerpt: "Complete comparison to help you make the right choice based on your business and budget.",
content: "The arrival of AI voice agents has changed the call center industry. But do you really have to choose between AI and human, or can you benefit from the best of both worlds? We analyze the strengths and limitations of each approach to help you make a decision.",
author: "Jean-François Lambert",
keywords: "AI agent, human agent, voice AI, call center"
},
{
title: "How to Qualify Leads Over the Phone: Complete Guide",
date: "March 1, 2026",
cat: "Prospecting",
img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
excerpt: "Techniques and scripts used by our best advisors to qualify effectively.",
content: "Effective lead qualification is the art of transforming a simple phone call into a qualified business opportunity. In this guide, we share the techniques and scripts our advisors use to maximize your conversion rates.",
author: "Sophie Mercier",
keywords: "lead qualification, phone prospecting, scripts, conversion"
},
{
title: "Customer Satisfaction: Key KPIs to Monitor",
date: "February 22, 2026",
cat: "Metrics",
img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
excerpt: "CSAT, NPS, FCR — understand and improve your satisfaction metrics.",
content: "In a market where customer experience makes the difference, measuring and improving customer satisfaction is no longer optional. We break down the essential KPIs (CSAT, NPS, FCR, CES) that every SME should monitor, with practical tips to improve them sustainably.",
author: "Patrick Gagnon",
keywords: "CSAT, NPS, FCR, customer satisfaction, KPIs"
},
{
title: "Restaurant Industry: Why a Call Center Changes Everything",
date: "February 14, 2026",
cat: "Sectors",
img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
excerpt: "Testimonials from 3 restaurants that doubled their reservations in 30 days.",
content: "The restaurant industry faces unique challenges in managing reservations and customer service. Through three concrete testimonials from Montreal restaurants, we show how a call center can save you time and money.",
author: "Marie-Lucie Boucher",
keywords: "restaurant, reservations, call center, Montreal"
},
{
title: "GDPR and Call Centers: What You Need to Know",
date: "February 5, 2026",
cat: "Compliance",
img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
excerpt: "Practical guide to staying compliant while optimizing customer relationships.",
content: "GDPR represents a major challenge for call centers, but also an opportunity to significantly improve customer trust. We guide you through essential requirements, best practices and technical tools to ensure full compliance while optimizing your operations.",
author: "Claire Dupont",
keywords: "GDPR, compliance, data protection, call center"
},
{
title: "How to Choose the Right Call Center for Your SME",
date: "January 28, 2026",
cat: "Strategy",
img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
excerpt: "Essential criteria for selecting a partner that truly understands your business.",
content: "Choosing a call center is a strategic decision that impacts your customer relationships for years. In this article, we share the essential criteria to consider: industry expertise, language capabilities, technology stack, and pricing transparency. We also reveal red flags to avoid.",
author: "François Martel",
keywords: "call center selection, SME, outsourcing partner"
},
{
title: "Outsourcing ROI: Real Numbers from Quebec Businesses",
date: "January 20, 2026",
cat: "Data",
img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
excerpt: "Concrete case studies showing actual returns from outsourcing customer service.",
content: "What's the real ROI of outsourcing customer service? We analyzed data from 50 Quebec SMEs that outsourced their call handling. Results: average cost reduction of 35%, satisfaction increase of 22%, and average payback period of 4 months. Discover the detailed numbers.",
author: "Isabelle Morin",
keywords: "ROI, outsourcing, Quebec, cost reduction"
},
{
title: "5 Mistakes to Avoid in Your Outbound Calling Campaigns",
date: "January 12, 2026",
cat: "Prospecting",
img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
excerpt: "Pitfalls that cost businesses thousands in lost opportunities.",
content: "Outbound calling campaigns can generate impressive results—or waste your budget entirely. After analyzing hundreds of campaigns, we identified 5 common mistakes: poor targeting, weak opening scripts, no follow-up system, ignoring compliance, and measuring wrong metrics. Here's how to avoid them.",
author: "Thomas Girard",
keywords: "outbound calls, mistakes, prospecting campaign"
},
{
title: "The Future of Customer Relations: AI and Human in Perfect Collaboration",
date: "January 5, 2026",
cat: "Trends",
img: "https://images.unsplash.com/photo-1485827404703-89b55fcc5950?w=400&q=80",
excerpt: "How hybrid models are revolutionizing customer experience.",
content: "The future isn't AI replacing humans—it's AI handling simple queries while humans focus on complex relationships. We explore how leading companies are implementing hybrid models that combine AI efficiency with human empathy. The result: 24/7 availability, lower costs, and happier customers.",
author: "Pierre Houde",
keywords: "AI, human agents, hybrid model, customer experience"
}
]

const FAQ = [
{
question: "What types of businesses benefit most from your services?",
answer: "Our services are particularly suited for SMEs with 5 to 200 employees across various sectors: restaurants, retail, professional services, healthcare, technology, and e-commerce. We adapt our solutions based on your size, sector, and specific goals."
},
{
question: "How do you ensure service quality with AI agents?",
answer: "Our AI agents are continuously supervised and trained. They handle simple, repetitive queries, while complex cases are transferred to human agents. We maintain a satisfaction rate above 92% thanks to this hybrid approach."
},
{
question: "What's the typical implementation timeline?",
answer: "We're operational within 48 hours after contract signing. This includes configuring your scripts, integrating with your existing systems, and training the team dedicated to your account."
},
{
question: "Do you offer flexible contracts without long-term commitment?",
answer: "Absolutely! We believe in partnerships based on satisfaction, not binding commitments. Our contracts are monthly renewable with just 30 days notice."
}
]

const TESTIMONIALS = [
{ quote: "Smart Hotline changed how we handle calls. We gained 30% efficiency and our customers are more satisfied.", name: "Marie-Chantal Dubois", role: "Operations Director, Clinique SantéPlus", avatar: "MC" },
{ quote: "The flexibility of their hybrid AI/human approach allowed us to reduce costs by 40% while improving our availability.", name: "Jean-Michel Leclerc", role: "CEO, Boutique Mode Urbaine", avatar: "JL" },
{ quote: "During the storm of the century, their agents ensured perfect service continuity. No missed calls, no frustrated customers.", name: "Sophie Bertrand", role: "Owner, Bistro Le Petit Coin", avatar: "SB" },
{ quote: "Their team understood our sector in 2 weeks. We tripled our appointments without increasing costs.", name: "François Martel", role: "Sales Director, Immobilière du Quartier", avatar: "FM" }
]

const STATS = [
{ value: "92%", label: "Customer satisfaction rate" },
{ value: "40%", label: "Average cost reduction" },
{ value: "24/7", label: "Guaranteed availability" },
{ value: "5+", label: "Years of average agent experience" }
]

export default function BlogEn() {
const [selectedPost, setSelectedPost] = useState<typeof POSTS[0] | null>(null)

return (
<>
{/* SECTION 1: LIGHT HERO */}
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-[55%]">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
          Resources & Expertise
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
          Smart Hotline Blog<br/>
          <span className="text-blue-700">Expert Advice</span><br/>
          for Your Customer Relations
        </h1>
        <p className="text-slate-600 text-lg mb-6">
          Discover our analyses, strategies and best practices to optimize your customer service and phone prospecting.
        </p>
      </div>
      <div className="w-full lg:w-[40%]">
        <img src="/images/main-hero.jpg" alt="Smart Hotline Blog" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
      </div>
    </div>
  </div>
</section>

{/* SECTION 2: DARK - FEATURED POSTS */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-black mb-4">Featured Articles</h2>
      <p className="text-blue-200 text-lg max-w-2xl mx-auto">
        Selection of our best articles to inspire your customer relationship strategy
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {POSTS.slice(0, 2).map((post) => (
        <article key={post.title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer" onClick={() => setSelectedPost(post)}>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{post.cat}</span>
            <span className="text-blue-200 text-xs">{post.date}</span>
          </div>
          <h2 className="font-bold text-white mb-3 hover:text-blue-200 transition-colors">{post.title}</h2>
          <p className="text-blue-200 text-sm mb-4">{post.excerpt}</p>
          <span className="text-blue-200 text-sm font-semibold hover:underline">Read more →</span>
        </article>
      ))}
    </div>
  </div>
</section>

{/* SECTION 3: NEWSLETTER */}
<section className="bg-white border-b border-slate-100 py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-bold mb-3 text-slate-900">Get our weekly tips</h2>
    <p className="text-gray-600 mb-6">Subscribe to our newsletter — 100% useful, 0% spam.</p>
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
      <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">Subscribe</button>
    </div>
  </div>
</section>

{/* SECTION 4: FAQ */}
<section className="bg-slate-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
      <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
    </div>
    <div className="space-y-8">
      {FAQ.map(({ question, answer }, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
          <h3 className="font-bold text-slate-900 text-lg mb-3">{question}</h3>
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 5: TESTIMONIALS */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-3">What Our Clients Say</h2>
      <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {TESTIMONIALS.map(({ quote, name, role, avatar }) => (
        <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
          <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{avatar}</div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{name}</p>
              <p className="text-slate-500 text-xs">{role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 6: STATS */}
<section className="bg-slate-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {STATS.map(({ value, label }) => (
      <div key={label}>
        <p className="text-4xl font-black text-blue-700">{value}</p>
        <p className="text-slate-500 text-sm mt-1 font-medium">{label}</p>
      </div>
    ))}
  </div>
</section>

{/* SECTION 7: ALL POSTS */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-black mb-4">All Our Articles</h2>
      <p className="text-blue-200 text-lg max-w-2xl mx-auto">
        Explore our complete collection of articles on customer relations, voice AI, and phone prospecting
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {POSTS.map((post) => (
        <article key={post.title} className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all group cursor-pointer" onClick={() => setSelectedPost(post)}>
          <img src={post.img} alt={post.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{post.cat}</span>
              <span className="text-blue-200 text-xs">{post.date}</span>
            </div>
            <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{post.title}</h2>
            <p className="text-blue-200 text-sm mb-4">{post.excerpt}</p>
            <span className="text-blue-200 text-sm font-semibold group-hover:underline block w-fit">Read more →</span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* SECTION 8: CTA */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
  <div className="max-w-4xl mx-auto px-4 text-center text-white">
    <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Better Manage Your Calls?</h2>
    <p className="text-blue-200 text-lg mb-10">Discover how our solutions can help your business.</p>
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Link href="/en/inbound" className="flex-1 bg-white/20 backdrop-blur hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/20 text-center">
        Inbound Calls
      </Link>
      <Link href="/en/outbound" className="flex-1 bg-white/20 backdrop-blur hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/20 text-center">
        Outbound Calls
      </Link>
    </div>
  </div>
</section>

{/* MODAL */}
{selectedPost && (
  <BlogArticleModal article={{
    slug: selectedPost.title.toLowerCase().replace(/\s+/g, '-'),
    title: selectedPost.title,
    date: selectedPost.date,
    cat: selectedPost.cat,
    img: selectedPost.img,
    excerpt: selectedPost.excerpt,
    author: selectedPost.author,
    readTime: '5 min',
    metaDesc: selectedPost.excerpt,
    keywords: selectedPost.keywords.split(', '),
    content: selectedPost.content
  }} onClose={() => setSelectedPost(null)} />
)}
</>
)
}
