import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('terms', 'en'),
}

     1|import Link from 'next/link'
     2|
     3|export const metadata = { title: "Terms & Conditions | Smart Hotline Agency" }
     4|
     5|export default function Terms() {
     6|  return (
     7|    <>
     8|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
     9|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
    10|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    11|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    12|        </div>
    13|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    14|          <h1 className="text-4xl lg:text-5xl font-black mb-4">Terms & Conditions</h1>
    15|          <p className="text-blue-200 text-lg">Terms and conditions of our services</p>
    16|        </div>
    17|      </section>
    18|
    19|      <section className="bg-white py-16">
    20|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    21|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    22|            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
    23|
    24|            <h2 className="text-2xl font-bold text-gray-900">1. Purpose</h2>
    25|            <p>These Terms & Conditions govern the contractual relationship between Smart Hotline Agency and its clients for the provision of outsourced communication services.</p>
    26|
    27|            <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
    28|            <p>Smart Hotline Agency offers call center services, voice AI agents, customer support and CRM services for SMEs.</p>
    29|
    30|            <h2 className="text-2xl font-bold text-gray-900">3. Pricing and Payment</h2>
    31|            <p>Prices are indicated in Canadian dollars (CA$) excluding taxes. Payment is monthly by credit card or bank transfer. Invoices are issued on the 1st of each month.</p>
    32|
    33|            <h2 className="text-2xl font-bold text-gray-900">4. Commitment</h2>
    34|            <p>Contracts have no minimum commitment. The free 2-week trial allows you to evaluate our services risk-free.</p>
    35|
    36|            <h2 className="text-2xl font-bold text-gray-900">5. Termination</h2>
    37|            <p>Any contract can be terminated with 30 days notice. The free 2-week trial can be cancelled at any time without fees.</p>
    38|
    39|            <h2 className="text-2xl font-bold text-gray-900">6. Liability</h2>
    40|            <p>Smart Hotline Agency undertakes to provide its services with due care. Our liability is limited to direct and foreseeable damages.</p>
    41|
    42|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    43|            <p>Smart Hotline Agency | direction@smart-hotline.com | +1 514 819-0559</p>
    44|          </div>
    45|        </div>
    46|      </section>
    47|
    48|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    49|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    50|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Ready to Get Started?</h2>
    51|          <p className="text-blue-200 mb-8">Free 2-week trial. No commitment.</p>
    52|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    53|            <Link href="/en/pricing" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    54|              View Pricing
    55|            </Link>
    56|            <Link href="/en" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
    57|              Back to Home
    58|            </Link>
    59|          </div>
    60|        </div>
    61|      </section>
    62|    </>
    63|  )
    64|}
    65|