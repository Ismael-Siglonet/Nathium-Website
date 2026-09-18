import styles from './PageHero.module.css'

function PageHero({ eyebrow, title, subtitle, image, alt, imagePosition }) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text} data-reveal="heading">
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.imageWrap} data-reveal="image">
          <img
            src={image}
            alt={alt}
            className={styles.image}
            style={{ objectPosition: imagePosition || 'center' }}
          />
        </div>
      </div>
    </section>
  )
}

export default PageHero
