import { footerColumns, contactInfo } from "../../data/content";
import logo from "../../assets/logo-white.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contactos</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>{contactInfo.address}</li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className={styles.link}
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.brand}>
            <img src={logo} alt="" className={styles.brandLogo} />
          </span>
          <p className={styles.legal}>
            &copy; {new Date().getFullYear()} Nathium, Lda. Instituição de
            microcrédito sediada em Maputo, Moçambique. Capital com clareza para
            pessoas e negócios em movimento. Este site é uma demonstração.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
