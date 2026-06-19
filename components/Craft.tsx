import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cx } from "@/lib/cx";
import craft1 from "@/assets/images/craft-1.jpg";
import craft2 from "@/assets/images/craft-2.jpg";
import craft3 from "@/assets/images/craft-3.jpg";
import craft4 from "@/assets/images/craft-4.jpg";
import Reveal from "./Reveal";
import styles from "./Craft.module.css";

interface Step {
  no: string;
  title: string;
  body: string;
  image: StaticImageData;
}

const steps: Step[] = [
  {
    no: "01",
    title: "The seed",
    body: "A sliver of diamond — the beginning of everything.",
    image: craft1,
  },
  {
    no: "02",
    title: "The growth",
    body: "Carbon, heat and time. Light gathers, layer by patient layer.",
    image: craft2,
  },
  {
    no: "03",
    title: "The cut",
    body: "On the Surat bench, facets find their angles by hand.",
    image: craft3,
  },
  {
    no: "04",
    title: "The setting",
    body: "Cradled in recycled 18K gold. Light, made to be worn.",
    image: craft4,
  },
];

export default function Craft() {
  return (
    <section className={cx("may-section", styles.craft)}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <div className="may-eyebrow">The Craft</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>From light to jewel.</h2>
          </Reveal>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 120}>
              <article className={styles.card}>
                <div className={styles.frame}>
                  <Image
                    src={step.image}
                    alt={`${step.title} — step ${step.no} of the Mayavé craft`}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.no}>{step.no}</div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
