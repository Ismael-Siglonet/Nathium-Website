import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import Carousel from '../ui/Carousel'
import heroMoney from '../../assets/images/nathium/hero-money.jpg'
import creditoConsumo from '../../assets/images/nathium/credito-consumo.jpg'
import creditoPessoal from '../../assets/images/nathium/credito-pessoal.jpg'
import creditoImportacao from '../../assets/images/nathium/credito-importacao.jpg'
import creditoHospitalar from '../../assets/images/nathium/credito-hospitalar.jpg'
import styles from './Hero.module.css'

const slides = [
  { src: heroMoney, alt: 'Mãos negras a contar notas junto a uma calculadora.' },
  {
    src: creditoConsumo,
    alt: 'Mulher negra com um saco de compras.',
    focalPoint: 'center 28%',
  },
  { src: creditoPessoal, alt: 'Mulher a sorrir a trabalhar num portátil.' },
  { src: creditoImportacao, alt: 'Navio de contentores a ser carregado num porto.' },
  {
    src: creditoHospitalar,
    alt: 'Médica negra com estetoscópio sentada à secretária.',
    focalPoint: 'center 28%',
  },
]

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text} data-reveal="heading">
          <h1 className={styles.title}>Crédito responsável disponível para quem quer crescer</h1>
          <p className={styles.subtitle}>
            Transforme planos em compras, mercadoria, protecção e crescimento com crédito rápido,
            transparente e pensado para Moçambique.
          </p>
          <Button as={Link} to="/contacto" variant="primary">
            Encontrar o meu crédito
          </Button>
        </div>
        <div className={styles.imageWrap} data-reveal="image">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  )
}

export default Hero
