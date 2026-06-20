import Image from "next/image";
import { cx } from "@/lib/cx";
import floracious from "@/assets/images/product-floracious.jpg";
import lumen from "@/assets/images/product-lumen.jpg";
import presDuCoeur from "@/assets/images/product-pres-du-coeur.jpg";
import Reveal from "./Reveal";
import styles from "./Products.module.css";

const sideFeatures = [
  {
    name: "Asymmetry Drops",
    tagline: "Defy convention.",
    image: presDuCoeur,
  },
  {
    name: "The Stacking Suite",
    tagline: "More is more.",
    image: lumen,
  },
];

export default function Products() {
  return (
    <section id="collection" className={cx("may-section", styles.products)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow">The Collection</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>Pieces with a point of view.</h2>
          </Reveal>
        </div>

        <Reveal>
          <div className={styles.grid}>
            <a href="#join-the-circle" className={styles.large}>
              <div className={styles.largeMedia}>
                <Image
                  src={floracious}
                  alt="The Architect Cuff — a statement Mayavé piece"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 860px) 100vw, 60vw"
                  className={styles.img}
                />
                <span className={styles.overlay} />
              </div>
              <div className={styles.largeFoot}>
                <div>
                  <div className={styles.kind}>Chapter One</div>
                  <h3 className={styles.largeName}>The Architect Cuff</h3>
                </div>
                <span className={styles.explore}>Explore</span>
              </div>
            </a>

            <div className={styles.side}>
              {sideFeatures.map((f) => (
                <a key={f.name} href="#join-the-circle" className={styles.sideItem}>
                  <div className={styles.sideMedia}>
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 860px) 100vw, 33vw"
                      className={styles.img}
                    />
                  </div>
                  <h3 className={styles.sideName}>{f.name}</h3>
                  <div className={styles.sideTag}>{f.tagline}</div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
