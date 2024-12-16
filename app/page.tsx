import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}

