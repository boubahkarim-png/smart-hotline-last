'use client'
import Link from 'next/link'

export default function Footer({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const fr = lang === 'fr'
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-lg text-blue-400 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-black">SH</span>
              </div>
              Smart Hotline
            </div>
            <p className="text-slate-400 text-sm">
              {fr 
                ? 'Centre d\'appels IA pour restaurants. Service client 24/7.' 
                : 'AI call center for restaurants. 24/7 customer service.'}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-3">
              {fr ? 'Navigation' : 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={fr ? '/fr' : '/en'} className="text-slate-400 hover:text-white transition-colors">{fr ? 'Accueil' : 'Home'}</Link></li>
              <li><Link href={fr ? '/fr/tarifs' : '/en/pricing'} className="text-slate-400 hover:text-white transition-colors">{fr ? 'Tarifs' : 'Pricing'}</Link></li>
              <li><Link href={fr ? '/fr/contact' : '/en/contact'} className="text-slate-400 hover:text-white transition-colors">{fr ? 'Contact' : 'Contact'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-3">
              {fr ? 'Légal' : 'Legal'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={fr ? '/fr/mentions-legales' : '/en/legal'} className="text-slate-400 hover:text-white transition-colors">{fr ? 'Mentions légales' : 'Legal Notice'}</Link></li>
              <li><Link href={fr ? '/fr/confidentialite' : '/en/privacy'} className="text-slate-400 hover:text-white transition-colors">{fr ? 'Confidentialité' : 'Privacy'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-3">
              {fr ? 'Contact' : 'Contact'}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📧 contact@smart-hotline.com</li>
              <li>💬 WhatsApp: +1 (514) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          © {year} Smart Hotline. {fr ? 'Tous droits réservés.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  )
}
