import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Carousel.module.css'

function Carousel({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((i) => setIndex((i + slides.length) % slides.length), [slides.length])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!interval) return undefined
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(timer)
  }, [interval, slides.length])

  return (
    <div className={styles.carousel}>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
        />
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prev}
        aria-label="Imagem anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={next}
        aria-label="Próxima imagem"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className={styles.dots}>
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
