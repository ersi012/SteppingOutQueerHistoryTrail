import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen container">
      <Navbar />
      {/* <div className='container mx-auto px-12 py-4'></div> */}
      <Header />
    
    </main>
  )
}
