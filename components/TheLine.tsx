import Reveal from "./Reveal";
import styles from "./TheLine.module.css";

export default function TheLine() {
  return (
    <section className={styles.line}>
      <div className={styles.inner}>
        <Reveal>
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
