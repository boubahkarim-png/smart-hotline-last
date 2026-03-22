import Link from 'next/link'
import { NAV_FR, NAV_EN, CONTACT } from '@/lib/nav'
import { T, type Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const t = T[lang]
  const services = (lang === 'fr' ? NAV_FR : NAV_EN)[0].children || []

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">SH</span>
              </div>
              Smart Hotline
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {lang === 'fr'
                ? "Centre d'appels & IA pour PME. 24/7."
                : "Call center & AI for SMBs. 24/7."}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={"tel:" + CONTACT.phone} className="hover:text-white flex items-center gap-2">
                  📞 {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} className="hover:text-white flex items-center gap-2">
                  💬 WhatsApp 24/7
                </a>
              </li>
              <li>
                <a href={"mailto:" + CONTACT.email} className="hover:text-white flex items-center gap-2">
                  ✉️ {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.calendly} className="hover:text-white flex items-center gap-2">
                  📅 {lang === 'fr' ? 'Reserver 30 min' : 'Book 30 min'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Smart Hotline Agency. {t.footer_rights}</p>
          <div className="flex gap-6">
            <Link href={lang === 'fr' ? '/fr/confidentialite' : '/en/privacy'}
              className="hover:text-white">{t.privacy}</Link>
            <Link href={lang === 'fr' ? '/fr/cgv' : '/en/terms'}
              className="hover:text-white">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
