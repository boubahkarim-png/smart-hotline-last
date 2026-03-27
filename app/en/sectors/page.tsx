import Link from 'next/link'
export const metadata = { title: "Sectors We Serve | Smart Hotline Agency" }
const SECTORS = [
 { icon: "🍽️", name: "Restaurants", desc: "Reservations, deliveries, customer service. Never miss an order.", examples: ["Restaurants", "Caterers", "Dark kitchens"] },
 { icon: "🏥", name: "Healthcare", desc: "Appointment scheduling, patient reminders, emergencies. Available 24/7.", examples: ["Clinics", "Doctors", "Physiotherapy"] },
 { icon: "🏢", name: "Real Estate", desc: "Buyer qualification, property tours, lead follow-up.", examples: ["Agencies", "Brokers", "Developers"] },
 { icon: "🚗", name: "Automotive", desc: "After-sales service, workshop appointments, customer follow-up.", examples: ["Dealerships", "Garages", "Rentals"] },
 { icon: "⚖️", name: "Legal Services", desc: "Call screening, appointment scheduling, legal emergencies.", examples: ["Law firms", "Notaries", "Bailiffs"] },
 { icon: "🏗️", name: "Construction", desc: "Quotes, site tracking, subcontractor coordination.", examples: ["Contractors", "Architects", "Renovations"] },
 { icon: "💻", name: "Tech & SaaS", desc: "Tier 1 support, client onboarding, escalations.", examples: ["Startups", "SaaS", "Web agencies"] },
 { icon: "🛒", name: "E-commerce", desc: "Customer support, returns, order tracking, loyalty.", examples: ["Online stores", "Marketplaces", "Dropshipping"] },
 { icon: "🎓", name: "Education", desc: "Enrollments, inquiries, student and parent follow-up.", examples: ["Schools", "Training centers", "Tutors"] },
]
const STATS = [
 { value: "20+", label: "Industries served" },
 { value: "500+", label: "SMEs accompanied" },
 { value: "98%", label: "Client satisfaction" },
 { value: "24/7", label: "Availability" },
]
const TESTIMONIALS = [
  { quote: "As a restaurant owner, I was missing 30% of calls during service. Smart Hotline changed everything. Reservations doubled.", name: "Marco R.", role: "Owner, Trattoria Milano — Little Italy", initials: "MR" },
  { quote: "In healthcare, every call matters. Their team handles scheduling perfectly. My staff can focus on patients.", name: "Dr. Sarah K.", role: "Clinic Director, HealthFirst Medical — Downtown", initials: "SK" },
  { quote: "Real estate is 24/7. Missed calls = missed deals. Since Smart Hotline, I never miss a lead.", name: "James T.", role: "Broker, Prime Realty — Westmount", initials: "JT" },
  { quote: "In legal, every call counts. They filter emergencies perfectly and book appointments just right.", name: "Claire D.", role: "Partner, Dupont & Mercier Law", initials: "CD" },
  ]
const FAQ = [
 { question: "Do you have experience in my industry?", answer: "Yes! We serve over 20 industries across North America and Europe. Our agents are trained specifically for each sector." },
 { question: "How quickly can you adapt to my specific needs?", answer: "Our setup takes 24-48 hours. We create custom scripts and train dedicated agents for your industry." },
 { question: "What if my sector isn't listed?", answer: "We adapt to any industry. Contact us for a free consultation to discuss your specific needs." },
]
export default function Sectors() {
 return (
  <>
{/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
<section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
Expertise Across Industries
</div>
<h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
Sectors We Serve<br/>
<span className="text-amber-700">Industry Expertise</span>
</h1>
<p className="text-slate-600 text-lg mb-6">
Our expertise covers over 20 industries across North America and Europe. Specialized agents for each sector.
</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/smart-hotline-last/images/services-hero.jpg" alt="Sectors We Serve" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'550px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>
   {/* SECTION 2: DARK - STATS */}
   <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-amber-900 text-white py-20 lg:py-24 overflow-hidden relative">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
     <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"/>
     <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
     <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-black mb-4"> Trusted Across Industries </h2>
      <p className="text-amber-200 text-lg max-w-2xl mx-auto"> Numbers that demonstrate our expertise and commitment </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {STATS.map(({value, label}) => (
       <div key={label}>
        <p className="text-4xl font-black text-amber-400">{value}</p>
        <p className="text-slate-400 text-sm mt-1 font-medium">{label}</p>
       </div>
      ))}
     </div>
    </div>
   </section>
   {/* SECTION 3: LIGHT - SECTORS GRID */}
   <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-3">Industries We Specialize In</h2>
      <div className="w-16 h-1 bg-amber-700 mx-auto rounded"/>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SECTORS.map(({icon, name, desc, examples}) => (
       <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
         {examples.map(e => <span key={e} className="bg-blue-50 text-amber-700 text-xs px-2 py-1 rounded-full">{e}</span>)}
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
   {/* SECTION 4: LIGHT - HOW IT WORKS */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
     <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How We Adapt to Your Industry</h2>
     <div className="space-y-6">
      <div className="flex gap-5 items-start">
       <div className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">1</div>
       <div className="pt-1">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Industry Analysis</h3>
        <p className="text-slate-500">We study your sector's specific needs, terminology, and customer expectations.</p>
       </div>
      </div>
      <div className="flex gap-5 items-start">
       <div className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">2</div>
       <div className="pt-1">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Custom Script Development</h3>
        <p className="text-slate-500">We create scripts that reflect your brand voice and industry best practices.</p>
       </div>
      </div>
      <div className="flex gap-5 items-start">
       <div className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">3</div>
       <div className="pt-1">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Specialized Agent Training</h3>
        <p className="text-slate-500">Our agents receive specific training for your industry and business.</p>
       </div>
      </div>
      <div className="flex gap-5 items-start">
       <div className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">4</div>
       <div className="pt-1">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Continuous Optimization</h3>
        <p className="text-slate-500">Regular reviews and adjustments to improve service quality.</p>
       </div>
      </div>
     </div>
    </div>
   </section>
   {/* SECTION 5: LIGHT - TESTIMONIALS */}
   <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-3">Success Stories by Industry</h2>
      <div className="w-16 h-1 bg-amber-700 mx-auto rounded-full"/>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {TESTIMONIALS.map(({quote, name, role, initials}) => (
<div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
<div className="flex gap-0.5 mb-4" role="img" aria-label="5 out of 5 stars">
{[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xl" aria-hidden="true">★</span>)}
</div>
        <p className="text-slate-700 mb-5 leading-relaxed italic">"{quote}"</p>
        <div className="flex items-center gap-3">
         <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{initials}</div>
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
   {/* SECTION 6: LIGHT - FAQ */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
      <div className="w-16 h-1 bg-amber-700 mx-auto rounded-full"/>
     </div>
     <div className="space-y-6">
      {FAQ.map(({question, answer}, index) => (
       <div key={index} className="bg-slate-50 rounded-2xl p-6">
        <h3 className="font-bold text-slate-900 mb-2">{question}</h3>
        <p className="text-slate-500">{answer}</p>
       </div>
      ))}
     </div>
    </div>
   </section>
   {/* SECTION 7: LIGHT - CTA */}
   <section className="py-20 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
     <h2 className="text-3xl font-black text-slate-900 mb-3">Your Sector Not Listed?</h2>
     <p className="text-slate-600 mb-8">We adapt to any industry. Contact us for a personalized consultation.</p>
     <Link href="/en/contact" className="bg-amber-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 inline-block">Talk to an Expert</Link>
    </div>
   </section>
   {/* SECTION 8: DARK - FINAL CTA */}
   <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-amber-900 text-white py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
     <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Transform Your Industry?</h2>
     <p className="text-amber-200 text-lg mb-10">Join 500+ SMEs who trust us with their calls. Free consultation, no commitment.</p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/en/contact" className="bg-white text-amber-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Consultation</Link>
      <Link href="/en/services" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">View All Services</Link>
     </div>
    </div>
   </section>
  </>
 )
}
