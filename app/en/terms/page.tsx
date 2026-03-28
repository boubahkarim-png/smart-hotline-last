import Link from 'next/link'

export const metadata = { title: "Terms & Conditions | Smart Hotline Agency" }

export default function Terms() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Terms & Conditions</h1>
<p className="text-slate-600 text-lg mb-6">Terms and conditions of our services</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/images/main-hero.jpg" alt="Terms & Conditions" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>

            <h2 className="text-2xl font-bold text-gray-900">1. Purpose</h2>
            <p>These Terms & Conditions govern the contractual relationship between Smart Hotline Agency and its clients for the provision of outsourced communication services.</p>

            <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
            <p>Smart Hotline Agency offers call center services, voice AI agents, customer support and CRM services for SMEs.</p>

            <h2 className="text-2xl font-bold text-gray-900">3. Pricing and Payment</h2>
            <p>Prices are indicated in Canadian dollars (CA$) excluding taxes. Payment is monthly by credit card or bank transfer. Invoices are issued on the 1st of each month.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Commitment</h2>
            <p>Contracts have no minimum commitment. The free 2-week trial allows you to evaluate our services risk-free.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Termination</h2>
            <p>Any contract can be terminated with 30 days notice. The free 2-week trial can be cancelled at any time without fees.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Liability</h2>
            <p>Smart Hotline Agency undertakes to provide its services with due care. Our liability is limited to direct and foreseeable damages.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>Smart Hotline Agency | direction@smart-hotline.com | +1 514 819-0559</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">Free 2-week trial. No commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/pricing" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/en" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
