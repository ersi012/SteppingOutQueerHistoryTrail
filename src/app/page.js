import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SiteSection from './components/SiteSection'
import About from './components/About'
import Donate from './components/Donate'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-full container ">
      <Navbar />
      <div className=' '>
        <Header />
        <SiteSection/>
        <About/>
        <Donate/>
      </div>
    </main>
  )
}
