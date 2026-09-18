import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullseye,
  faEye,
  faMagnifyingGlass,
  faPersonRunning,
  faHandshake,
  faFeather,
} from '@fortawesome/free-solid-svg-icons'
import styles from './MissionVisionValuesSection.module.css'

const pillars = [
  {
    title: 'Missão',
    icon: faBullseye,
    text: 'Fazer o dinheiro chegar onde cria movimento: às famílias que precisam de poder de compra e aos negócios que precisam de capital para crescer.',
  },
  {
    title: 'Visão',
    icon: faEye,
    text: 'Ser a primeira escolha de quem procura capital rápido, contas claras e uma relação financeira construída para durar em Moçambique.',
  },
]

const values = [
  {
    title: 'Transparência',
    icon: faMagnifyingGlass,
    text: 'Você vê a taxa, a prestação e o custo antes de movimentar um único metical.',
  },
  {
    title: 'Rapidez',
    icon: faPersonRunning,
    text: 'Analisamos depressa porque uma boa oportunidade perde valor quando o dinheiro demora.',
  },
  {
    title: 'Proximidade',
    icon: faHandshake,
    text: 'Falamos de dinheiro em linguagem directa e encontramos consigo a estrutura certa.',
  },
  {
    title: 'Simplicidade',
    icon: faFeather,
    text: 'Menos passos entre o pedido e o capital. Só o que é necessário para decidir bem.',
  },
]

function MissionVisionValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={styles.pillar}
              data-reveal="item"
              style={{ '--reveal-index': index }}
            >
              <span className={styles.pillarIcon} aria-hidden="true">
                <FontAwesomeIcon icon={pillar.icon} />
              </span>
              <h2 className={styles.pillarTitle}>{pillar.title}</h2>
              <p className={styles.pillarText}>{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesTitle} data-reveal="heading">Os nossos valores</h2>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div
              key={value.title}
              className={styles.valueCard}
              data-reveal="item"
              style={{ '--reveal-index': index }}
            >
              <span className={styles.valueIcon} aria-hidden="true">
                <FontAwesomeIcon icon={value.icon} />
              </span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueText}>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValuesSection
