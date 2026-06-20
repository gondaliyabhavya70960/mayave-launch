import Image from "next/image";
import atmosphereImg from "@/assets/images/flower.jpg";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  return (
    <section className={styles.atmosphere}>
      <Parallax speed={0.16} className={styles.bg}>
        <Image
          src={atmosphereImg}
          alt="A bloom and Mayavé jewellery in deep red light"
          fill
          placeholder="blur"
          sizes="100vw"
          className={styles.bgImg}
        />
      </Parallax>
      <div className={styles.wash} />
      <div className={styles.center}>
        <Reveal>
          <p className={styles.line}>Where the ordinary becomes extraordinary.</p>
        </Reveal>
      </div>
    </section>
  );
}
