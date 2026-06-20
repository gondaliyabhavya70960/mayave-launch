import Image from "next/image";
import { cx } from "@/lib/cx";
import model from "@/assets/images/model.png";
import Reveal from "./Reveal";
import styles from "./House.module.css";

export default function House() {
  return (
    <section id="about" className={cx("may-section", styles.house)}>
      <div className={styles.grid}>
        <Reveal direction="left">
          <div className={styles.frame}>
            <Image
              src={model}
              alt="A woman wearing Mayavé"
              fill
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </Reveal>
        <Reveal direction="right">
          <div>
            <div className="may-eyebrow">Made for her</div>
            <h2 className={styles.title}>The meaning was always hers.</h2>
            <p className={styles.body}>
              For generations, the diamond carried a meaning it was given, not
              chosen — a proposal, an occasion, someone else’s idea of what it
              should represent.
            </p>
            <p className={styles.body}>
              We make diamonds for the woman who already knows what things mean
              to her. No one decides for her — because she chose.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
