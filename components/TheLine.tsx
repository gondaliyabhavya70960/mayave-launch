import Image from "next/image";
import birds from "@/assets/images/bird-pattern.png";
import Reveal from "./Reveal";
import styles from "./TheLine.module.css";

export default function TheLine() {
  return (
    <section className={styles.line}>
      <Image
        src={birds}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={styles.birds}
      />
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
