import { useState } from 'react'
import Button from '../ui/Button'
import ContactSection from './ContactSection'
import { products, contactInfo } from '../../data/content'
import styles from './ContactFormSection.module.css'

function ContactFormSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [productId, setProductId] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const product = products.find((item) => item.id === productId)
    const subject = product ? `Pedido de informação | ${product.name}` : 'Pedido de informação'
    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      product ? `Produto: ${product.name}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <div className={styles.header} data-reveal="heading">
            <h2 className={styles.title}>Diga-nos onde o dinheiro deve chegar</h2>
            <p className={styles.subtitle}>
              Conte-nos o seu objectivo. Deixamos a mensagem pronta para falar com a nossa equipa.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} data-reveal="panel">
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={styles.input}
                placeholder="O seu nome"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
                placeholder="o.seu.email@exemplo.com"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-product" className={styles.label}>
              Produto de interesse (opcional)
            </label>
            <select
              id="contact-product"
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
              className={styles.select}
            >
              <option value="">Assunto geral</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>
              Mensagem
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={styles.textarea}
              placeholder="Como podemos ajudar?"
            />
          </div>

          <Button type="submit" variant="dark" className={styles.submit}>
            Começar a conversa
          </Button>
          </form>
        </div>

        <ContactSection />
      </div>
    </section>
  )
}

export default ContactFormSection
