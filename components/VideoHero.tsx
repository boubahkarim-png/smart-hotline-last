'use client'

export default function VideoHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-slate-100">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        poster="/images/main-hero.jpg"
      >
        <source src="/videos/smart_hotline_promo.webm" type="video/webm" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Smart Hotline
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl">
          Votre partenaire call center au Québec
        </p>
      </div>
    </section>
  )
}
