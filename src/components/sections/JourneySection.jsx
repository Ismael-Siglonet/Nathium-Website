import styles from './JourneySection.module.css'

const milestones = [
  {
    year: '2024',
    items: [
      'A Nathium nasce em Maputo para encurtar a distância entre uma oportunidade e o dinheiro necessário para a aproveitar.',
      'Os primeiros créditos colocam mais poder de compra nas mãos de clientes particulares.',
    ],
  },
  {
    year: '2025',
    items: [
      'Oito produtos passam a financiar comércio, consumo, protecção, garantias e saúde.',
      'O simulador online torna o valor, a prestação e o custo visíveis antes do pedido.',
    ],
  },
  {
    year: '2026',
    items: [
      'Mais clientes, em mais zonas de Moçambique, ganham acesso a capital de curto prazo.',
      'Novas parcerias aceleram a forma como o dinheiro entra, circula e regressa.',
    ],
  },
]

function JourneySection() {
  return (
    <section id="historia" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-reveal="heading">
          Uma história de capital em movimento
        </h2>

        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={styles.entry}
              data-reveal="item"
              style={{ '--reveal-index': index }}
            >
              <span className={styles.year}>{milestone.year}</span>
              <ul className={styles.items}>
                {milestone.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
