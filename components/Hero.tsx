import Image from "next/image";
import { cx } from "@/lib/cx";
import heroImg from "@/assets/images/hero.jpg";
import JoinButton from "./JoinButton";
import Logo from "./Logo";
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
          <Logo tone="light" priority className={cx(styles.logo, styles.in1)} />
          <div className={cx(styles.kicker, styles.in2)}>
            Lab-grown diamonds · The future, with a touch of magic
          </div>
          <h1 className={cx(styles.title, styles.in3)}>
            A new definition
            <br />
            of desire.
          </h1>
          <p className={cx(styles.lede, styles.in4)}>
            Mayavé takes its name from Maya — the Sanskrit idea of illusion,
            transformation and unseen possibility. We make jewellery for a
            generation that doesn’t ask permission to redefine luxury.
          </p>
          <JoinButton variant="white" className={styles.in5}>
            Request First Look
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
