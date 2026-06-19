import Reveal from "./Reveal";
import styles from "./TheLine.module.css";

export default function TheLine() {
  return (
    <section className={styles.line}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.statement}>
            We did not find this light.
            <br />
            We made it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
