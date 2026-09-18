import { useState } from 'react'
import Button from '../ui/Button'
import SimulatorModal from './SimulatorModal'
import styles from './FeatureSection.module.css'

const images = import.meta.glob('../../assets/images/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

function resolveImage(filename) {
  const entry = Object.entries(images).find(([path]) => path.endsWith(filename))
  return entry ? entry[1] : undefined
}

function FeatureSection({ id, dark, eyebrow, title, text, cta, image, alt, imageSide }) {
  const [simulatorOpen, setSimulatorOpen] = useState(false)
  const sectionClass = `${styles.section} ${dark ? styles.dark : styles.light}`
  const reversed = imageSide === 'left'

  return (
    <section id={id} className={sectionClass}>
      <div className={`${styles.inner} ${reversed ? styles.reversed : ''}`}>
        <div className={styles.text} data-reveal="copy">
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{text}</p>
          <Button
            variant="secondary"
            type="button"
            onClick={() => setSimulatorOpen(true)}
          >
            {cta}
          </Button>
        </div>
        <div className={styles.imageWrap} data-reveal="image">
          <img src={resolveImage(image)} alt={alt} className={styles.image} loading="lazy" />
        </div>
      </div>
      {simulatorOpen && (
        <SimulatorModal initialProductId={id} onClose={() => setSimulatorOpen(false)} />
      )}
    </section>
  )
}

export default FeatureSection
