'use client'
import { useGeo } from '@/hooks/useGeo'

const CONTACT_INFO = {
  CAD: {
    phone: '+1 514 819-0559',
    phoneFormatted: '+1 514 819-0559',
    phoneLink: 'tel:+15148190559',
    email: 'direction@smart-hotline.com',
    whatsapp: 'https://wa.me/15148190559',
    showPhone: true,
  },
  USD: {
    phone: '+1 514 819-0559',
    phoneFormatted: '+1 514 819-0559',
    phoneLink: 'tel:+15148190559',
    email: 'direction@smart-hotline.com',
    whatsapp: 'https://wa.me/15148190559',
    showPhone: true,
  },
  EUR: {
    phone: null,
    phoneFormatted: null,
    phoneLink: null,
    email: 'direction@smart-hotline.com',
    whatsapp: 'https://wa.me/15148190559',
    showPhone: false,
  },
  CHF: {
    phone: null,
    phoneFormatted: null,
    phoneLink: null,
    email: 'direction@smart-hotline.com',
    whatsapp: 'https://wa.me/15148190559',
    showPhone: false,
  },
}

interface GeoContactInfoProps {
  lang?: 'fr' | 'en'
}

export function GeoContactInfo({ lang = 'fr' }: GeoContactInfoProps) {
  const { geo, loading } = useGeo()
  
  if (loading) {
    return null
  }
  
  const info = CONTACT_INFO[geo.currency]
  const isEn = lang === 'en'
  
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-lg font-bold mb-4">{isEn ? 'Contact' : 'Contact'}</h3>
      
      <div className="space-y-3">
        {info.showPhone && info.phone && (
          <a href={info.phoneLink!} className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
            <span className="text-xl">📞</span>
            <span className="font-semibold">{info.phoneFormatted}</span>
          </a>
        )}
        
        <a href={`mailto:${info.email}`} className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
          <span className="text-xl">📧</span>
          <span>{info.email}</span>
        </a>
        
        <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
          <span className="text-xl">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export function GeoContactCTA({ lang = 'fr' }: GeoContactInfoProps) {
  const { geo, loading } = useGeo()
  
  if (loading) {
    return null
  }
  
  const info = CONTACT_INFO[geo.currency]
  const isEn = lang === 'en'
  
  if (info.showPhone) {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={info.phoneLink!} className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
          <span>📞</span>
          <span>{info.phoneFormatted}</span>
        </a>
        <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={`mailto:${info.email}`} className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
        <span>📧</span>
        <span>{isEn ? 'Send a Message' : 'Envoyer un Email'}</span>
      </a>
      <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
