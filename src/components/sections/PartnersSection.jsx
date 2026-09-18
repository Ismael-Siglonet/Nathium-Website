import { partners } from "../../data/partners";
import styles from "./PartnersSection.module.css";

const logos = import.meta.glob("../../assets/images/partners/*.svg", {
  eager: true,
  import: "default",
});

function resolveLogo(filename) {
  const entry = Object.entries(logos).find(([path]) => path.endsWith(filename));
  return entry ? entry[1] : undefined;
}

function PartnersSection() {
  const track = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.title}>Nossos parceiros</p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {track.map((partner, i) => (
            <img
              key={`${partner.name}-${i}`}
              src={resolveLogo(partner.file)}
              alt={partner.name}
              className={styles.logoImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
