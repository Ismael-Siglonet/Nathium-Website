import PageHero from '../components/sections/PageHero'
import AboutSection from '../components/sections/AboutSection'
import StatementSection from '../components/sections/StatementSection'
import JourneySection from '../components/sections/JourneySection'
import MissionVisionValuesSection from '../components/sections/MissionVisionValuesSection'
import sobreEquipa from '../assets/images/nathium/sobre-equipa.jpg'

function Sobre() {
  return (
    <>
      <PageHero
        title="Moçambique avança quando o dinheiro circula"
        subtitle="Conheça a instituição que transforma necessidades reais em capital claro, rápido e responsável."
        image={sobreEquipa}
        alt="Três profissionais reunidos a conversar sobre negócios."
      />
      <AboutSection />
      <StatementSection />
      <JourneySection />
      <MissionVisionValuesSection />
    </>
  )
}

export default Sobre
