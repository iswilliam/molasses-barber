import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Craft from './components/Craft'
import Reviews from './components/Reviews'
import { CtaBand, Footer } from './components/CtaFooter'
import StickyCallBar from './components/StickyCallBar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Craft />
        <Reviews />
        <CtaBand />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
