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
    alt: 'Mulher sorridente com sacos de compras numa loja.',
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
    alt: 'Médica com estetoscópio sentada à secretária.',
    title: 'A conta médica não decide o seu futuro',
    text: 'Tenha capital para consultas, internamentos e cirurgias quando a prioridade é cuidar.',
  },
]

function HighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-reveal="heading">
          Liquidez para viver, trabalhar e crescer
        </h2>

        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <a
              key={item.id}
              href={`/produtos#${item.id}`}
              className={styles.card}
              data-reveal="item"
              style={{ '--reveal-index': index }}
            >
              <div className={styles.imageWrap}>
                <img src={resolveImage(item.image)} alt={item.alt} className={styles.image} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
