import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col min-h-full container ">
      <Navbar />
      <div className=' '>
        <Header />
      </div>
    </main>
  )
}
