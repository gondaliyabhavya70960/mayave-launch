import Image from "next/image";
import type { StaticImageData } from "next/image";
import iconDiamond from "@/assets/images/icon-diamond.png";
import iconDesign from "@/assets/images/icon-design.png";
import iconGem from "@/assets/images/icon-gem.png";
import iconNecklace from "@/assets/images/icon-necklace.png";
import iconCrown from "@/assets/images/icon-crown.png";
import Reveal from "./Reveal";
import styles from "./Values.module.css";

const values: { icon: StaticImageData; label: string }[] = [
  { icon: iconDiamond, label: "Lab-grown brilliance" },
  { icon: iconDesign, label: "Designed around her" },
  { icon: iconGem, label: "Cut to mesmerise" },
  { icon: iconNecklace, label: "Made to be worn" },
  { icon: iconCrown, label: "Luxury, made accessible" },
];

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.inner}>
        <Reveal>
          <div className="may-eyebrow">The Mayavé difference</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className={styles.title}>All the bells. None of the baggage.</h2>
        </Reveal>

        <div className={styles.row}>
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 100}>
              <div className={styles.item}>
                <Image
                  src={v.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                  sizes="72px"
                />
                <span className={styles.label}>{v.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
