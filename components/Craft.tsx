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
    body: "At the bench, facets find their angles by hand.",
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
          <Reveal delay={200}>
            <p className={styles.lede}>
              Every Mayavé diamond walks the same path — from a sliver of carbon
              to a jewel made to be worn.
            </p>
          </Reveal>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.no} className={styles.step}>
              <Reveal
                direction={i % 2 === 0 ? "left" : "right"}
                className={styles.mediaCol}
              >
                <div className={styles.media}>
                  <Image
                    src={step.image}
                    alt={`${step.title} — step ${step.no} of the Mayavé craft`}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 860px) 90vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </Reveal>
              <Reveal delay={120} className={styles.textCol}>
                <span className={styles.no}>{step.no}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
