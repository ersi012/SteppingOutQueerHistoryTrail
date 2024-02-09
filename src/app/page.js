import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
// import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-full container ">
      <Navbar />
      <div className=' '>
        <Header />
        <ProjectsSection />
      </div>
    </main>
  )
}
