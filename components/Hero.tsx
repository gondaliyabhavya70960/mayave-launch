import Image from "next/image";
import { cx } from "@/lib/cx";
import heroImg from "@/assets/images/hero.jpg";
import JoinButton from "./JoinButton";
import Parallax from "./Parallax";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Parallax speed={0.12} className={styles.bg}>
        <Image
          src={heroImg}
          alt="A lab-grown diamond solitaire ring on a dark rippled surface"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.bgImg}
        />
      </Parallax>
      <div className={styles.washHorizontal} />
      <div className={styles.washVertical} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={cx(styles.wordmark, styles.in1)}>MAYAVÉ</div>
          <div className={cx(styles.kicker, styles.in2)}>
            Lab-grown diamonds · Recycled 18K gold
          </div>
          <h1 className={cx(styles.title, styles.in3)}>
            Light, made—
            <br />
            not mined.
          </h1>
          <p className={cx(styles.lede, styles.in4)}>
            A new house of conscious modern luxury, born in Surat. Diamonds
            grown by hand, set in reclaimed gold — brilliance that asks nothing
            of the earth it came from.
          </p>
          <JoinButton variant="white" className={styles.in5}>
            Join the Circle
          </JoinButton>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
