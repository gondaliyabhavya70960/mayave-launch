import Image from "next/image";
import boutiqueImg from "@/assets/images/boutique.jpg";
import birds from "@/assets/images/bird-flock.png";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import styles from "./Boutique.module.css";

export default function Boutique() {
  return (
    <section className={styles.boutique}>
      <Parallax speed={0.16} className={styles.bg}>
        <Image
          src={boutiqueImg}
          alt="Inside a Mayavé boutique"
          fill
          placeholder="blur"
          sizes="100vw"
          className={styles.bgImg}
        />
      </Parallax>
      <div className={styles.wash} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal>
          <Image
            src={birds}
            alt=""
            aria-hidden="true"
            className={styles.birds}
            sizes="130px"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="may-eyebrow may-eyebrow--light">Step inside</div>
        </Reveal>
        <Reveal delay={180}>
          <h2 className={styles.title}>
            Not a product.
            <br />A feeling.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className={styles.body}>
            The truest Mayavé experience is somewhere you can walk into and get
            immersed. Our store was designed by people who understood that
            jewellery is not a product — it is a feeling. Every surface, every
            material, every decision, the warmth of our advisor, carries that
            essence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
