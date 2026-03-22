import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" otherLangHref="/fr"/>
      <main className="pt-16">{children}</main>
      <Footer lang="en"/>
      <Popup lang="en"/>
    </>
  )
}
