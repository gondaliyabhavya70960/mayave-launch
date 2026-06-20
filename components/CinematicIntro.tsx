import Image from "next/image";
import cinematic from "@/assets/images/reveal.jpg";
import styles from "./CinematicIntro.module.css";

/**
 * Full-bleed cinematic opener at the very top of the page — a single dark
 * visual with no copy. Swap the <Image> for a <video> here to use footage.
 */
export default function CinematicIntro() {
  return (
    <section className={styles.cinematic} aria-label="Mayavé">
      <div className={styles.media}>
        <Image
          src={cinematic}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.img}
        />
      </div>
      <div className={styles.vignette} />
    </section>
  );
}
