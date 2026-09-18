import clockIcon from '../../assets/icons/clock.svg'
import styles from './StatementSection.module.css'

function StatementSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text} data-reveal="heading">
          <h2 className={styles.statement}>
            Dinheiro parado custa oportunidades
          </h2>
          <p className={styles.body}>
            Uma encomenda, uma emergência ou um bom negócio não ficam à espera. Analisamos a
            maioria dos pedidos em poucos dias úteis para que o seu capital chegue quando ainda
            pode fazer diferença. Com uma resposta rápida, consegue proteger o fluxo de caixa,
            cumprir compromissos e aproveitar oportunidades sem imobilizar todas as suas reservas.
            Mostramos o valor, o prazo, a prestação e os custos com clareza para que avance com
            confiança e mantenha o controlo do seu dinheiro.
          </p>
        </div>
        <div className={styles.badge} data-reveal="image">
          <img src={clockIcon} alt="" className={styles.badgeIcon} />
        </div>
      </div>
    </section>
  )
}

export default StatementSection
