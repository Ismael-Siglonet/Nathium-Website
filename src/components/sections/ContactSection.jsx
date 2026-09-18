import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { contactInfo } from '../../data/content'
import styles from './ContactSection.module.css'

const cards = [
  {
    icon: faLocationDot,
    title: 'Morada',
    value: contactInfo.address,
  },
  {
    icon: faPhone,
    title: 'Telefone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: faEnvelope,
    title: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: faClock,
    title: 'Horário',
    value: 'Segunda a Sexta, 08:00 - 17:00',
  },
]

function ContactSection() {
  return (
    <aside className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-reveal="heading">
          <h2 className={styles.title}>Os nossos contactos</h2>
          <p className={styles.subtitle}>
            Fale directamente com a nossa equipa para esclarecer valores, prazos e condições ou
            para dar o próximo passo no seu pedido de crédito
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={styles.card}
              data-reveal="item"
              style={{ '--reveal-index': index }}
            >
              <span className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={card.icon} />
              </span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              {card.href ? (
                <a href={card.href} className={styles.cardValueLink}>
                  {card.value}
                </a>
              ) : (
                <p className={styles.cardValue}>{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default ContactSection
