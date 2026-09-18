import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './ProductCarousel.module.css'

function ProductCarousel({ items, renderItem }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index) => {
    const track = trackRef.current
    const card = track?.children[index]
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  const next = () => scrollToIndex(Math.min(active + 1, items.length - 1))
  const prev = () => scrollToIndex(Math.max(active - 1, 0))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      let closest = 0
      let closestDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.carousel}>
      <div className={styles.track} ref={trackRef}>
        {items.map((item, i) => (
          <div className={styles.item} key={item.id ?? i}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prev}
        aria-label="Produtos anteriores"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={next}
        aria-label="Mais produtos"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className={styles.dots}>
        {items.map((item, i) => (
          <button
            key={item.id ?? i}
            type="button"
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir para produto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
