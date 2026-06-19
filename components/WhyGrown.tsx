import { cx } from "@/lib/cx";
import Reveal from "./Reveal";
import styles from "./WhyGrown.module.css";

const pillars = [
  {
    title: "Atom for atom",
    body: "Chemically, optically, physically a diamond — graded to the very same standard. Indistinguishable, even to the loupe.",
  },
  {
    title: "No earth moved",
    body: "No mines, no scarred land, no displaced communities. A fraction of the carbon, and not a gram of doubt.",
  },
  {
    title: "Traceable",
    body: "Born in days, in a place we can name. Every stone accountable, from first spark to final setting.",
  },
];

export default function WhyGrown() {
  return (
    <section className={cx("may-section", styles.why)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow may-eyebrow--light">Why grown</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              Identical in every way that matters. Different in every way that
              counts.
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
