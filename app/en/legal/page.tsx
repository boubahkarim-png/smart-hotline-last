import Link from 'next/link'

export const metadata = { title: "Legal Notice | Smart Hotline Agency" }

export default function Legal() {
  return (
    <>
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<h1 className="text-4xl lg:text-5xl font-black mb-4">Legal Notice</h1>
<p className="text-slate-600 text-lg mb-6">Legal information regarding Smart Hotline Agency</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/smart-hotline-last/images/main-hero.jpg" alt="Legal Notice" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
            
            <h2 className="text-2xl font-bold text-gray-900">1. Publisher</h2>
            <p><strong>Smart Hotline Agency</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Registered office: Montreal, Quebec, Canada</li>
              <li>Email: direction@smart-hotline.com</li>
              <li>Phone: +1 514 819-0559</li>
              <li>Publication Director: Karim Boubah</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">2. Hosting</h2>
            <p>This website is hosted by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>GitHub Pages</strong></li>
              <li>GitHub, Inc.</li>
              <li>88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA</li>
              <li>https://github.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
            <p>All content on this website (texts, images, graphics, logos, icons, etc.) is the exclusive property of Smart Hotline Agency, except for trademarks, logos, or content belonging to other partner companies or authors.</p>
            <p>Any reproduction, distribution, modification, adaptation, retransmission, or publication of these elements is strictly prohibited without the express written consent of Smart Hotline Agency.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Limitation of Liability</h2>
            <p>Smart Hotline Agency strives to provide accurate information on this website. However, it cannot be held responsible for omissions, inaccuracies, or deficiencies in updates, whether caused by itself or third-party partners providing this information.</p>
            <p>All information on this website is provided for guidance purposes and is subject to change. The information on this website is not exhaustive.</p>

            <h2 className="text-2xl font-bold text-gray-900">5. Cookies</h2>
            <p>This website may use cookies to improve user experience and measure traffic. You can configure your browser to refuse cookies. For more information, see our <Link href="/en/privacy" className="text-blue-700 hover:underline">Privacy Policy</Link>.</p>

            <h2 className="text-2xl font-bold text-gray-900">6. Applicable Law</h2>
            <p>This legal notice is governed by Canadian and Quebec law. In case of dispute, the courts of Montreal, Quebec, shall have exclusive jurisdiction.</p>

            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
            <p>For any questions regarding this legal notice:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: direction@smart-hotline.com</li>
              <li>Phone: +1 514 819-0559</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Need additional information?</h2>
          <p className="text-blue-200 mb-8">Our team is available to answer all your questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Contact us by email
            </Link>
            <Link href="/en" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
