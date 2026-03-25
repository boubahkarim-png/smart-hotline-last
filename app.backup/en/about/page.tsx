import Link from 'next/link'
export const metadata = { title: "About Us | Smart Hotline Agency" }
export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">Our Story</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">The Agency That Gives SMEs Enterprise-Grade Tools</h1>
              <p className="text-lg text-blue-100 mb-6">Founded in Montreal, Smart Hotline Agency believes every SME deserves world-class customer service — without the prohibitive costs of an in-house department.</p>
              <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Contact Us</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Smart Hotline Team" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
            {[{n:"2018", l:"Founded"},{n:"500+", l:"SME Clients"},{n:"98%", l:"Satisfaction"},{n:"24/7", l:"Availability"}].map(({n,l}) => (
              <div key={l}><p className="text-4xl font-extrabold text-blue-600">{n}</p><p className="text-gray-600 mt-1">{l}</p></div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Smart Hotline Call Center" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'360px', objectFit:'cover'}}/>
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">We believe customer relationships are the heart of every successful business. Our mission is to enable SMEs to deliver excellent customer experiences — without recruiting, training or managing in-house teams.</p>
              <p className="text-gray-600 mb-6">Combined with the power of voice AI agents, our human advisors form a unique hybrid system that handles every situation, 24/7.</p>
              <div className="space-y-3">
                {["Trained and certified advisors","Cutting-edge AI technology","GDPR and Law 25 compliant","Dedicated customer support"].map(v => (
                  <div key={v} className="flex items-center gap-3"><span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span><span className="text-gray-700">{v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Join 500+ Satisfied SMEs</h2>
          <p className="text-blue-100 mb-8">Free 2-week trial. No credit card required.</p>
          <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Get Started Now</Link>
        </div>
      </section>
    </>
  )
}
