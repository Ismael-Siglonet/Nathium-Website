import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/content'
import styles from './FaqSection.module.css'

function FaqSection() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-reveal="heading">Perguntas frequentes</h2>
        <div data-reveal="panel">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}

export default FaqSection
