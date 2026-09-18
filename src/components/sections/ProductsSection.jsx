import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button'
import ProductCarousel from '../ui/ProductCarousel'
import { products } from '../../data/content'
import logo from '../../assets/logo.svg'
import styles from './ProductsSection.module.css'

function ProductsSection() {
  return (
    <section id="produtos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.banner} data-reveal="heading">
          <div className={styles.text}>
            <h2 className={styles.title}>Crédito seguro no momento certo</h2>
            <p className={styles.subtitle}>
              Escolha onde quer avançar com taxas claras, prestações previsíveis e crédito
              responsável para proteger o seu dinheiro em cada decisão.
            </p>
            <Button as="a" href="/contacto" variant="secondary">
              Submeter um inquérito
            </Button>
          </div>
          <div className={styles.badge}>
            <img src={logo} alt="" className={styles.badgeLogo} />
          </div>
        </div>

        <ProductCarousel
          items={products}
          renderItem={(product, index) => (
            <a
              href={`#${product.id}`}
              className={styles.card}
              data-reveal="item"
              style={{ '--reveal-index': Math.min(index, 5) }}
            >
              <h3 className={styles.productName}>{product.name}</h3>
              <span className={styles.cardArrow} aria-hidden="true">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          )}
        />
      </div>
    </section>
  )
}

export default ProductsSection
