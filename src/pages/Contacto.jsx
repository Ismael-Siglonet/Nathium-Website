import PageHero from '../components/sections/PageHero'
import ContactFormSection from '../components/sections/ContactFormSection'
import { useLocation } from 'react-router-dom'
import creditoPessoal from '../assets/images/nathium/credito-pessoal.jpg'

function Contacto() {
  const location = useLocation()

  return (
    <>
      <PageHero
        title="Vamos falar de dinheiro"
        subtitle="Diga-nos quanto precisa e onde quer chegar. A nossa equipa ajuda a encontrar o crédito certo para si ou para o seu negócio."
        image={creditoPessoal}
        alt="Mulher a sorrir a trabalhar num portátil."
      />
      <ContactFormSection key={location.search} />
    </>
  )
}

export default Contacto
