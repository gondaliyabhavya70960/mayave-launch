import Image from "next/image";
import revealImg from "@/assets/images/interior.jpg";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import styles from "./TheReveal.module.css";

export default function TheReveal() {
  return (
    <section className={styles.reveal}>
      <Parallax speed={0.18} className={styles.bg}>
        <Image
          src={revealImg}
          alt="Inside the Mayavé space"
          fill
          placeholder="blur"
          sizes="100vw"
          className={styles.bgImg}
        />
      </Parallax>
      <div className={styles.wash} />
      <div className={styles.center}>
        <Reveal>
          <div className="may-eyebrow may-eyebrow--light">Expression</div>
        </Reveal>
        <Reveal delay={160}>
          <p className={styles.line}>
            Most jewellery is made to be noticed. Ours, to mesmerise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
