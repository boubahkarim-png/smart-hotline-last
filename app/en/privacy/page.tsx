import basePath from '@/lib/basePath'
import Link from 'next/link'

export const metadata = { title: "Privacy Policy | Smart Hotline Agency" }

export default function Privacy() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Privacy Policy</h1>
<p className="text-slate-600 text-lg mb-6">Protection and management of your personal data</p>
</div>
<div className="w-full lg:w-[40%]">
<img src={`${basePath}/images/main-hero.webp`} alt="Privacy Policy" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>

            <h2 className="text-2xl font-bold text-gray-900">1. Data Collection</h2>
            <p>Smart Hotline Agency collects only the information necessary to provide its services: name, email, phone, company name and information related to your communication needs.</p>

            <h2 className="text-2xl font-bold text-gray-900">2. Usage</h2>
            <p>Your data is used to provide our services, contact you about your account, improve our services and send marketing communications if you have consented.</p>

            <h2 className="text-2xl font-bold text-gray-900">3. Protection</h2>
            <p>We use industry-standard security measures to protect your personal information from unauthorized access.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Your Rights</h2>
            <p>Under GDPR and Law 25 (Quebec), you have the right to access, correct or delete your personal data. Contact us at direction@smart-hotline.com.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Retention</h2>
            <p>Your data is retained for the duration of our contractual relationship, then archived according to legal requirements before permanent deletion.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
            <p>Our site uses technical cookies and audience measurement. You can refuse cookies by changing your browser settings.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>For any questions: direction@smart-hotline.com | +1 514 819-0559</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Questions About Your Data?</h2>
          <p className="text-white mb-8">Our team is available to answer all your questions about data protection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Contact Us
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
