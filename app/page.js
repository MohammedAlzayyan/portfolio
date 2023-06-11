import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import OurServices from './sections/OurServices'
import Portfolio from './sections/Portfolio'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <OurServices />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
