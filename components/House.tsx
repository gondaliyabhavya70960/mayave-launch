import Image from "next/image";
import { cx } from "@/lib/cx";
import houseImg from "@/assets/images/house.jpg";
import Reveal from "./Reveal";
import styles from "./House.module.css";

export default function House() {
  return (
    <section className={cx("may-section", styles.house)}>
      <div className={styles.grid}>
        <Reveal direction="left">
          <div className={styles.frame}>
            <Image
              src={houseImg}
              alt="Diamonds being inspected at the atelier bench"
              fill
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </Reveal>
        <Reveal direction="right">
          <div>
            <div className="may-eyebrow">The House</div>
            <h2 className={styles.title}>Cut in the city of diamonds.</h2>
            <p className={styles.body}>
              Surat cuts and polishes nine of every ten diamonds the world
              wears. Mayavé is born of that city — and of the Dholakia bench,
              four decades deep in the craft of releasing light from stone.
            </p>
            <p className={styles.body}>
              What we make is new. The hands that make it are not.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
