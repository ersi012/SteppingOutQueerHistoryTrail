import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SiteSection from './components/SiteSection'
import About from './components/About'
import Donate from './components/Donate'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen container">
      <Navbar />
      <div>
        <Header />
        <section id="sites">
          <SiteSection/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="donate">
          <Donate/>
        </section>
      </div>
    </main>
  )
}
