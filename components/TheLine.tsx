import Reveal from "./Reveal";
import styles from "./TheLine.module.css";

export default function TheLine() {
  return (
    <section className={styles.line}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.flock} aria-hidden="true">
            <span className={styles.bird} />
            <span className={styles.bird} />
            <span className={styles.bird} />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.statement}>
            The future —
            <br />
            with a touch of magic.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
