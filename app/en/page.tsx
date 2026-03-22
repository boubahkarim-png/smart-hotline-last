import Link from 'next/link'
import Hero from '@/components/Hero'

export default function EnHome() {
  return (
    <>
      <Hero
        title="Call Center & AI for SMBs"
        subtitle="Outsource your customer relations. Professional agents and AI voice agents 24/7. 2-week free trial, no commitment."
        cta1="Free Demo"
        cta1href="/en/contact"
        cta2="Our Solutions"
        cta2href="/en/services"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
        imageAlt="Smart Hotline Call Center"
        badge="Agents & AI Voice"
        badges={['2 week free trial', 'GDPR', '24/7', 'No commitment']}
      />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📞', title: 'Inbound Calls', href: '/en/inbound' },
              { icon: '📢', title: 'Outbound Calls', href: '/en/outbound' },
              { icon: '🤖', title: 'AI Voice Agents', href: '/en/ai-agents' },
              { icon: '🗄️', title: 'CRM & Lists', href: '/en/crm' },
            ].map(({ icon, title, href }) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold">{title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
