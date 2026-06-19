import { cx } from "@/lib/cx";
import Reveal from "./Reveal";
import styles from "./Belief.module.css";

export default function Belief() {
  return (
    <section className={cx("may-section", styles.belief)}>
      <div className={styles.inner}>
        <Reveal>
          <div className="may-eyebrow">Our belief</div>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.statement}>
            Beauty should ask nothing of the earth it came from.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className={styles.body}>
            Mayavé exists for a generation that refuses the old trade-off
            between conscience and desire. Every stone is grown, every gram of
            gold reclaimed — so the only thing rare about our jewellery is the
            way it makes you feel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
