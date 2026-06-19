import Image from "next/image";
import { cx } from "@/lib/cx";
import { products } from "@/lib/content";
import JoinButton from "./JoinButton";
import Reveal from "./Reveal";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <section className={cx("may-section", styles.products)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow">The Collection</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>Three ways to wear light.</h2>
          </Reveal>
        </div>

        {products.map((p) => (
          <Reveal key={p.name}>
            <article
              className={cx(
                styles.row,
                p.imageSide === "right" && styles.imageRight,
              )}
            >
              <div className={styles.media}>
                <div className={styles.frame}>
                  <Image
                    src={p.image}
                    alt={`${p.name} — Mayavé ${p.kind.toLowerCase()}`}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 860px) 100vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.copy}>
                <div className={styles.kind}>{p.kind}</div>
                <h3 className={styles.name}>{p.name}</h3>
                <div className={styles.tagline}>{p.tagline}</div>
                <p className={styles.story}>{p.story}</p>
                <JoinButton variant="outline">Notify me at launch</JoinButton>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
