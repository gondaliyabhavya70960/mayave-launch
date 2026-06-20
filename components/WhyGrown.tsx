import { cx } from "@/lib/cx";
import Reveal from "./Reveal";
import styles from "./WhyGrown.module.css";

const pillars = [
  {
    title: "Liberation",
    body: "Traditional diamonds limited how they could be set. Grown stones let us design past that — craftsmanship that was never possible before, now within reach.",
  },
  {
    title: "Artistry",
    body: "Luxury used to mean distance. We bridge it — what was once inaccessible, made accessible. All the bells and whistles, none of the baggage.",
  },
  {
    title: "Inclusivity",
    body: "Jewellery for the woman of today, not an occasion someone else picked. Made personal. Made hers.",
  },
];

export default function WhyGrown() {
  return (
    <section className={cx("may-section", styles.why)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow may-eyebrow--light">What changed</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              Rarity used to decide what was possible. It doesn’t anymore.
            </h2>
          </Reveal>
        </div>
        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className={styles.col}>
                <div className={styles.rule} />
                <h3 className={styles.colTitle}>{p.title}</h3>
                <p className={styles.colBody}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
