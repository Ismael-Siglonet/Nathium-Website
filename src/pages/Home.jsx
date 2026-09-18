import Hero from '../components/sections/Hero'
import PartnersSection from '../components/sections/PartnersSection'
import AboutSection from '../components/sections/AboutSection'
import ProductsSection from '../components/sections/ProductsSection'
import HighlightsSection from '../components/sections/HighlightsSection'
import SimulatorSection from '../components/sections/SimulatorSection'
import FaqSection from '../components/sections/FaqSection'

function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <SimulatorSection />
      <ProductsSection />
      <HighlightsSection />
      <FaqSection />
    </>
  )
}

export default Home
