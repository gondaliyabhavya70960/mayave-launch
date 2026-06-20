import { cx } from "@/lib/cx";
import Reveal from "./Reveal";
import styles from "./Belief.module.css";

export default function Belief() {
  return (
    <section className={cx("may-section", styles.belief)}>
      <div className={styles.inner}>
        <Reveal>
          <div className="may-eyebrow">The future, with a touch of magic</div>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.statement}>
            Jewellery has spent centuries telling women who they are. We asked
            them instead.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className={styles.body}>
            Rarity used to decide what was possible. With the advent of
            lab-grown diamonds, it doesn’t anymore — so we started designing
            around her.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
