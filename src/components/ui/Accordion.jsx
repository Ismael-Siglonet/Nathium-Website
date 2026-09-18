import { useState } from 'react'
import styles from './Accordion.module.css'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className={styles.item}>
            <button
              className={styles.trigger}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
            </button>
            {isOpen && <p className={styles.answer}>{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
