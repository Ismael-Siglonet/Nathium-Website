import SimulatorForm from './SimulatorForm'
import styles from './SimulatorSection.module.css'

function SimulatorSection() {
  return (
    <section id="simular" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.panel} data-reveal="panel">
          <SimulatorForm />
        </div>
      </div>
    </section>
  )
}

export default SimulatorSection
