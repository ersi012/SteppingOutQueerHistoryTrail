import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SiteSection from './components/SiteSection'
import About from './components/About'
import Donate from './components/Donate'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Header />
        <section id="sites" className="flex flex-1">
          <SiteSection/>
        </section>
        <section id="about" className="flex flex-1">
          <About/>
        </section>
        <section id="donate" className="flex flex-1">
          <Donate/>
        </section>
      </div>
    </div>
  )
}
