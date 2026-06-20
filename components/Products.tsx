import Image from "next/image";
import { cx } from "@/lib/cx";
import { pillars } from "@/lib/content";
import JoinButton from "./JoinButton";
import Reveal from "./Reveal";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <section className={cx("may-section", styles.products)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow">The Mayavé way</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>Craft, experience, expression.</h2>
          </Reveal>
        </div>

        {pillars.map((p) => (
          <Reveal key={p.label}>
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
                    alt={`Mayavé — ${p.label.toLowerCase()}`}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 860px) 100vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.copy}>
                <div className={styles.kind}>{p.label}</div>
                <h3 className={styles.name}>{p.headline}</h3>
                <div className={styles.tagline}>{p.tagline}</div>
                <p className={styles.story}>{p.body}</p>
                <JoinButton variant="outline">Request First Look</JoinButton>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
