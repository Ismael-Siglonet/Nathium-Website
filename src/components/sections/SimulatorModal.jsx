import Modal from '../ui/Modal'
import SimulatorForm from './SimulatorForm'
import styles from './SimulatorSection.module.css'

function SimulatorModal({ onClose, initialProductId }) {
  return (
    <Modal onClose={onClose} label="Simulador de crédito">
      <div className={styles.modalPanel}>
        <SimulatorForm initialProductId={initialProductId} />
      </div>
    </Modal>
  )
}

export default SimulatorModal
