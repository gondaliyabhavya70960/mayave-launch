import Image from "next/image";
import { cx } from "@/lib/cx";
import mapIndia from "@/assets/images/map-india-glow.png";
import Reveal from "./Reveal";
import styles from "./Locations.module.css";

const cities = ["Noida", "Ghaziabad", "Gurugram"];

export default function Locations() {
  return (
    <section className={cx("may-section", styles.locations)}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <div className="may-eyebrow may-eyebrow--light">Mayavérse</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>Get immersed.</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.body}>
              A world where jewellery feels connected and personal. Step into
              the Mayavérse at one of our homes across Delhi NCR.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className={styles.cities}>
              {cities.map((city) => (
                <li key={city} className={styles.city}>
                  <span className={styles.cityName}>{city}</span>
                  <span className={styles.cityMeta}>Delhi NCR</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.soon}>New destinations, coming soon.</p>
          </Reveal>
        </div>

        <Reveal direction="right" delay={140}>
          <div className={styles.mapCol}>
            <span className={styles.mapGlow} aria-hidden="true" />
            <Image
              src={mapIndia}
              alt="Map of India with Mayavé's Delhi NCR homes marked"
              className={styles.map}
              sizes="(max-width: 860px) 78vw, 480px"
              placeholder="blur"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
