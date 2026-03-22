import Link from 'next/link'

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🏢</div>
          <h1 className="text-4xl font-bold mb-3">Secteurs d'Activite</h1>
          <p className="text-blue-100">Smart Hotline Agency</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg mb-8">
            Cette page est en cours de developpement. Contactez-nous pour plus d'informations.
          </p>
          <Link href="/fr/contact"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700">
            Nous Contacter
          </Link>
        </div>
      </section>
    </>
  )
}
