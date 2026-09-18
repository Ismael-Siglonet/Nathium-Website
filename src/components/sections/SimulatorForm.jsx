import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { products, primeRate } from '../../data/content'
import styles from './SimulatorSection.module.css'

const MIN_AMOUNT = 5000
const MAX_AMOUNT = 500000
const AMOUNT_STEP = 5000
const MIN_MONTHS = 1
const MAX_MONTHS = 36

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-MZ', { maximumFractionDigits: 0 }).format(Math.round(value))
}

function SimulatorForm({ initialProductId = products[0].id }) {
  const [amount, setAmount] = useState(100000)
  const [months, setMonths] = useState(12)
  const [productId, setProductId] = useState(() =>
    products.some((item) => item.id === initialProductId) ? initialProductId : products[0].id
  )

  const product = products.find((item) => item.id === productId) ?? products[0]
  const spread = Number((product.annualRate - primeRate).toFixed(1))
  const monthlyRate = product.annualRate / 100 / 12

  const installment = useMemo(() => {
    const factor = (1 + monthlyRate) ** months
    return (amount * monthlyRate * factor) / (factor - 1)
  }, [amount, months, monthlyRate])

  return (
    <>
      <div className={styles.left}>
        <h2 className={styles.title}>Veja o dinheiro antes de decidir</h2>
        <p className={styles.subtitle}>
          Defina quanto precisa e em quanto tempo quer pagar. A prestação aparece na hora.
        </p>

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <span>Produto</span>
          </div>
          <select
            className={styles.select}
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
            aria-label="Produto de crédito"
          >
            {products.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <span>Montante</span>
            <div className={styles.amountInputWrap}>
              <input
                type="number"
                min={MIN_AMOUNT}
                step={AMOUNT_STEP}
                value={amount}
                onChange={(event) => {
                  const next = Number(event.target.value)
                  setAmount(Number.isNaN(next) ? MIN_AMOUNT : Math.max(next, 0))
                }}
                className={styles.amountInput}
                aria-label="Montante do crédito em Meticais"
              />
              <span className={styles.amountSuffix}>MT</span>
            </div>
          </div>
          <input
            type="range"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={AMOUNT_STEP}
            value={Math.min(amount, MAX_AMOUNT)}
            onChange={(event) => setAmount(Number(event.target.value))}
            className={styles.slider}
            aria-label="Montante do crédito (selecção rápida)"
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <span>Prazo</span>
            <div className={styles.amountInputWrap}>
              <input
                type="number"
                min={MIN_MONTHS}
                step={1}
                value={months}
                onChange={(event) => {
                  const next = Number(event.target.value)
                  setMonths(Number.isNaN(next) ? MIN_MONTHS : Math.max(next, 0))
                }}
                className={styles.amountInput}
                aria-label="Prazo do crédito em meses"
              />
              <span className={styles.amountSuffix}>meses</span>
            </div>
          </div>
          <input
            type="range"
            min={MIN_MONTHS}
            max={MAX_MONTHS}
            step={1}
            value={Math.min(months, MAX_MONTHS)}
            onChange={(event) => setMonths(Number(event.target.value))}
            className={styles.slider}
            aria-label="Prazo do crédito em meses (selecção rápida)"
          />
        </div>

        <div className={styles.helpBox}>
          <span className={styles.helpIcon} aria-hidden="true">
            ?
          </span>
          <div>
            <strong className={styles.helpTitle}>Quer fazer as contas connosco?</strong>
            <p>
              Fale com a nossa equipa e encontre uma estrutura que faça sentido para o seu bolso.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.rightTitle}>{product.name}</h3>
        <p className={styles.rightSubtitle}>{product.description}</p>

        <div className={styles.results}>
          <div className={styles.resultRow}>
            <span>Montante</span>
            <strong>{formatCurrency(amount)} MT</strong>
          </div>
          <div className={styles.resultRow}>
            <span>Prazo</span>
            <strong>{months} meses</strong>
          </div>
          <div className={styles.resultRow}>
            <span>TAEG indicativa</span>
            <strong>{product.annualRate}% ao ano</strong>
          </div>
          <div className={styles.resultRow}>
            <span>Prestação mensal estimada</span>
            <strong>{formatCurrency(installment)} MT</strong>
          </div>
        </div>

        <Button
          as={Link}
          to={`/contacto?produto=${product.id}`}
          variant="secondary"
          className={styles.cta}
        >
          Quero este crédito
        </Button>

        <p className={styles.disclaimer}>
          Taxa indicativa calculada a partir da Prime Rate do Sistema Financeiro Moçambicano (
          {primeRate}%, Banco de Moçambique) acrescida de um spread de risco de {spread}%
          específico deste produto. Simulação meramente indicativa e sem valor contratual; a taxa
          final depende da avaliação de risco do cliente. Enquanto instituição supervisionada pelo
          Banco de Moçambique, a Nathium divulga de forma clara as taxas e os custos associados a
          cada crédito antes da contratação.
        </p>
      </div>
    </>
  )
}

export default SimulatorForm
