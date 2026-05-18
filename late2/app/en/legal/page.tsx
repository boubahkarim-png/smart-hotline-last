import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('legal', 'en'),
}

     1|import Link from 'next/link'
     2|
     3|export const metadata = { title: "Legal Notice | Smart Hotline Agency" }
     4|
     5|export default function Legal() {
     6|  return (
     7|    <>
     8|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
     9|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
    10|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
    11|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
    12|        </div>
    13|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    14|          <h1 className="text-4xl lg:text-5xl font-black mb-4">Legal Notice</h1>
    15|          <p className="text-blue-200 text-lg">Legal information regarding Smart Hotline Agency</p>
    16|        </div>
    17|      </section>
    18|
    19|      <section className="bg-white py-16">
    20|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    21|          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
    22|            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
    23|            
    24|            <h2 className="text-2xl font-bold text-gray-900">1. Publisher</h2>
    25|            <p><strong>Smart Hotline Agency</strong></p>
    26|            <ul className="list-disc pl-6 space-y-1">
    27|              <li>Registered office: Montreal, Quebec, Canada</li>
    28|              <li>Email: direction@smart-hotline.com</li>
    29|              <li>Phone: +1 514 819-0559</li>
    30|              <li>Publication Director: Karim Boubah</li>
    31|            </ul>
    32|
    33|            <h2 className="text-2xl font-bold text-gray-900">2. Hosting</h2>
    34|            <p>This website is hosted by:</p>
    35|            <ul className="list-disc pl-6 space-y-1">
    36|              <li><strong>GitHub Pages</strong></li>
    37|              <li>GitHub, Inc.</li>
    38|              <li>88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA</li>
    39|              <li>https://github.com</li>
    40|            </ul>
    41|
    42|            <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
    43|            <p>All content on this website (texts, images, graphics, logos, icons, etc.) is the exclusive property of Smart Hotline Agency, except for trademarks, logos, or content belonging to other partner companies or authors.</p>
    44|            <p>Any reproduction, distribution, modification, adaptation, retransmission, or publication of these elements is strictly prohibited without the express written consent of Smart Hotline Agency.</p>
    45|
    46|            <h2 className="text-2xl font-bold text-gray-900">4. Limitation of Liability</h2>
    47|            <p>Smart Hotline Agency strives to provide accurate information on this website. However, it cannot be held responsible for omissions, inaccuracies, or deficiencies in updates, whether caused by itself or third-party partners providing this information.</p>
    48|            <p>All information on this website is provided for guidance purposes and is subject to change. The information on this website is not exhaustive.</p>
    49|
    50|            <h2 className="text-2xl font-bold text-gray-900">5. Cookies</h2>
    51|            <p>This website may use cookies to improve user experience and measure traffic. You can configure your browser to refuse cookies. For more information, see our <Link href="/en/privacy" className="text-blue-700 hover:underline">Privacy Policy</Link>.</p>
    52|
    53|            <h2 className="text-2xl font-bold text-gray-900">6. Applicable Law</h2>
    54|            <p>This legal notice is governed by Canadian and Quebec law. In case of dispute, the courts of Montreal, Quebec, shall have exclusive jurisdiction.</p>
    55|
    56|            <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
    57|            <p>For any questions regarding this legal notice:</p>
    58|            <ul className="list-disc pl-6 space-y-1">
    59|              <li>Email: direction@smart-hotline.com</li>
    60|              <li>Phone: +1 514 819-0559</li>
    61|            </ul>
    62|          </div>
    63|        </div>
    64|      </section>
    65|
    66|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-16">
    67|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    68|          <h2 className="text-2xl lg:text-3xl font-black mb-4">Need additional information?</h2>
    69|          <p className="text-blue-200 mb-8">Our team is available to answer all your questions.</p>
    70|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    71|            <Link href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors">
    72|              Contact us by email
    73|            </Link>
    74|            <Link href="/en" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-colors">
    75|              Back to home
    76|            </Link>
    77|          </div>
    78|        </div>
    79|      </section>
    80|    </>
    81|  )
    82|}
    83|