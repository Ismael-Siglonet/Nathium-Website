import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './HighlightsSection.module.css'

const images = import.meta.glob('../../assets/images/nathium/*.jpg', {
  eager: true,
  import: 'default',
})

function resolveImage(filename) {
  const entry = Object.entries(images).find(([path]) => path.endsWith(filename))
  return entry ? entry[1] : undefined
}

const highlights = [
  {
    id: 'credito-consumo',
    image: 'credito-consumo.jpg',
    alt: 'Mulher negra com um saco de compras.',
    focalPoint: 'center 28%',
    title: 'Mais poder de compra com menos espera',
    text: 'Coloque dinheiro nas prioridades de hoje sem esvaziar o orçamento de uma só vez.',
  },
  {
    id: 'credito-pessoal',
    image: 'credito-pessoal.jpg',
    alt: 'Mulher a sorrir a trabalhar num portátil.',
    title: 'Salário estável e crédito mais simples',
    text: 'Converta a estabilidade do salário público em acesso a capital com desconto directo em folha.',
  },
  {
    id: 'credito-importacao',
    image: 'credito-importacao.jpg',
    alt: 'Navio de contentores a ser carregado num porto.',
    title: 'Mercadoria a entrar e negócio a faturar',
    text: 'Financie fornecedores, fretes e alfândega sem retirar dinheiro da operação diária.',
  },
  {
    id: 'credito-hospitalar',
    image: 'credito-hospitalar.jpg',
    alt: 'Médica negra com estetoscópio sentada à secretária.',
    focalPoint: 'center 28%',
    title: 'A conta médica não decide o seu futuro',
    text: 'Tenha capital para consultas, internamentos e cirurgias quando a prioridade é cuidar.',
  },
]

// Loop illusion: clone the last item before the first, and the first after the
// last, so there's always a neighbour to scroll into in both directions.
const extended = [highlights[highlights.length - 1], ...highlights, highlights[0]]

function toRealIndex(extIndex) {
  return (extIndex - 1 + highlights.length) % highlights.length
}

function HighlightsSection() {
  const trackRef = useRef(null)
  const settleTimeout = useRef(null)
  const [activeExt, setActiveExt] = useState(1)

  const scrollToExt = (extIndex, behavior = 'smooth') => {
    const track = trackRef.current
    const card = track?.children[extIndex]
    if (!track || !card) return
    const offset = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2
    track.scrollTo({ left: offset, behavior })
  }

  const next = () => scrollToExt(activeExt + 1)
  const prev = () => scrollToExt(activeExt - 1)

  const goToReal = (realIndex) => scrollToExt(realIndex + 1)

  useEffect(() => {
    // Start on the real first card (index 1 of the extended array), instantly.
    scrollToExt(1, 'auto')
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const closestExtIndex = () => {
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2
        const dist = Math.abs(childCenter - center)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      return closest
    }

    const onScroll = () => {
      setActiveExt(closestExtIndex())

      clearTimeout(settleTimeout.current)
      settleTimeout.current = setTimeout(() => {
        const current = closestExtIndex()
        if (current === 0) {
          scrollToExt(extended.length - 2, 'auto')
        } else if (current === extended.length - 1) {
          scrollToExt(1, 'auto')
        }
      }, 150)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      clearTimeout(settleTimeout.current)
    }
  }, [])

  const activeReal = toRealIndex(activeExt)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.carousel}>
          <div className={styles.track} ref={trackRef}>
            {extended.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={`/produtos#${item.id}`}
                className={`${styles.card} ${index === activeExt ? styles.cardActive : ''}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={resolveImage(item.image)}
                    alt={item.alt}
                    className={styles.image}
                    style={{ objectPosition: item.focalPoint || 'center' }}
                  />
                  <div className={styles.overlay}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={prev}
            aria-label="Destaque anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={next}
            aria-label="Próximo destaque"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className={styles.dots}>
          {highlights.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dot} ${index === activeReal ? styles.dotActive : ''}`}
              onClick={() => goToReal(index)}
              aria-label={`Ir para destaque ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
