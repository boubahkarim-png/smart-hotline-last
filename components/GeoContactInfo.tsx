'use client'
import { useGeo } from '@/hooks/useGeo'

const CONTACT_INFO = {
  CAD: {
    phone: '+1 514 819-0559',
    phoneFormatted: '+1 514 819-0559',
    phoneLink: 'tel:+15148190559',
    email: 'direction@smart-hotline.com',
    address: 'Montreal, QC, Canada',
    hours: '24/7',
    whatsapp: 'https://wa.me/15148190559',
    flag: '🇨🇦',
    locationName: 'Canada',
  },
  USD: {
    phone: '+1 514 819-0559',
    phoneFormatted: '+1 514 819-0559',
    phoneLink: 'tel:+15148190559',
    email: 'direction@smart-hotline.com',
    address: 'Montreal, QC, Canada',
    hours: '24/7',
    whatsapp: 'https://wa.me/15148190559',
    flag: '🇺🇸',
    locationName: 'USA',
  },
  EUR: {
    phone: null, // No phone for EUR
    phoneFormatted: null,
    phoneLink: null,
    email: 'direction@smart-hotline.com',
    address: 'Paris, France',
    hours: '24/7',
    whatsapp: 'https://wa.me/15148190559',
    flag: '🇫🇷',
    locationName: 'France',
  },
  CHF: {
    phone: null, // No phone for CHF
    phoneFormatted: null,
    phoneLink: null,
    email: 'direction@smart-hotline.com',
    address: 'Geneve, Suisse',
    hours: '24/7',
    whatsapp: 'https://wa.me/15148190559',
    flag: '🇨🇭',
    locationName: 'Suisse',
  },
}

export function GeoContactInfo() {
  const { geo, loading } = useGeo()
  
  if (loading) {
    return null
  }
  
  const info = CONTACT_INFO[geo.currency]
  
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{info.flag}</span>
        <h3 className="text-lg font-bold">Contact Local - {info.locationName}</h3>
      </div>
      
      <div className="space-y-3">
        {info.phone && (
          <a href={info.phoneLink} className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors">
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
        
        <div className="flex items-center gap-3 text-sky-100">
          <span className="text-xl">📍</span>
          <span>{info.address}</span>
        </div>
        
        <div className="flex items-center gap-3 text-sky-100">
          <span className="text-xl">🕐</span>
          <span>{info.hours}</span>
        </div>
      </div>
      
      {!info.phone && (
        <p className="text-xs text-sky-200 mt-3 italic">
          Contactez-nous par email ou WhatsApp pour une reponse rapide.
        </p>
      )}
    </div>
  )
}

export function GeoContactCTA() {
  const { geo, loading } = useGeo()
  
  if (loading) {
    return null
  }
  
  const info = CONTACT_INFO[geo.currency]
  
  if (info.phone) {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={info.phoneLink} className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
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
        <span>Envoyer un Email</span>
      </a>
      <a href={info.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
