import Image from "next/image";
import { cx } from "@/lib/cx";
import mapIndia from "@/assets/images/map-india.png";
import Reveal from "./Reveal";
import styles from "./Locations.module.css";

const cities = ["Noida", "Ghaziabad", "Gurugram"];

export default function Locations() {
  return (
    <section className={cx("may-section", styles.locations)}>
      <div className={styles.inner}>
        <Reveal>
          <div className="may-eyebrow may-eyebrow--light">Mayavérse</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className={styles.title}>Get immersed.</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className={styles.body}>
            A world where jewellery feels connected and personal. Step into the
            Mayavérse at one of our homes across Delhi NCR.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.mapWrap}>
            <Image
              src={mapIndia}
              alt="Map of India with Mayavé's Delhi NCR locations marked"
              className={styles.map}
              sizes="(max-width: 600px) 80vw, 460px"
              placeholder="blur"
            />
          </div>
        </Reveal>

        <div className={styles.cities}>
          {cities.map((city, i) => (
            <Reveal key={city} delay={i * 120}>
              <div className={styles.city}>
                <span className={styles.cityRule} />
                <span className={styles.cityName}>{city}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className={styles.soon}>New destinations, coming soon.</p>
        </Reveal>
      </div>
    </section>
  );
}
