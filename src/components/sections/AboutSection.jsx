import financeImage from '../../assets/images/nathium/about-finance.jpg'
import styles from './AboutSection.module.css'

const stats = [
  { value: '8', label: 'Formas de pôr o dinheiro a trabalhar' },
  { value: '500 mil MT', label: 'Até ao seu próximo movimento' },
  { value: '36 meses', label: 'Para pagar com controlo' },
]

function AboutSection() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text} data-reveal="copy">
          <h2 className={styles.title}>Capital para avançar sem deixar a oportunidade escapar</h2>
          <p className={styles.body}>
            A Nathium coloca poder financeiro nas mãos de famílias e negócios moçambicanos.
            Quando falta liquidez para comprar, importar, proteger ou crescer, criamos uma rota
            clara entre a necessidade de hoje e o dinheiro que a faz acontecer.
          </p>
          <p className={styles.body}>
            São oito soluções de crédito para desbloquear mercadoria, fluxo de caixa, compras,
            garantias e despesas urgentes. Você escolhe o objectivo; nós mostramos o valor, o
            prazo e o custo com total transparência.
          </p>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={styles.stat}
                data-reveal="item"
                style={{ '--reveal-index': stats.indexOf(stat) }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageWrap} data-reveal="image">
          <img
            src={financeImage}
            alt="Empresária a analisar documentos financeiros junto ao computador."
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
