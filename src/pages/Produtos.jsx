import PageHero from '../components/sections/PageHero'
import ProductsSection from '../components/sections/ProductsSection'
import FeatureSection from '../components/sections/FeatureSection'
import { featureSections } from '../data/content'
import heroMoney from '../assets/images/nathium/hero-money.jpg'

function Produtos() {
  return (
    <>
      <PageHero
        title="Capital para cada oportunidade"
        subtitle="Oito formas de financiar compras, mercadoria, protecção, saúde e crescimento sem travar o seu fluxo de caixa."
        image={heroMoney}
        alt="Mãos negras a contar notas junto a uma calculadora."
      />
      <ProductsSection />
      {featureSections.map((section) => (
        <FeatureSection key={section.id} {...section} />
      ))}
    </>
  )
}

export default Produtos
