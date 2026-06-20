"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import ring from "@/assets/images/product-ring.png";
import earrings from "@/assets/images/product-earrings.png";
import bracelet from "@/assets/images/product-bracelet.png";
import floracious from "@/assets/images/product-floracious.jpg";
import lumen from "@/assets/images/product-lumen.jpg";
import presDuCoeur from "@/assets/images/product-pres-du-coeur.jpg";
import Reveal from "./Reveal";
import styles from "./ProductSlider.module.css";

type Product = {
  name: string;
  kind: string;
  note: string;
  image: StaticImageData;
};

const products: Product[] = [
  { name: "Aurora Solitaire", kind: "Ring", note: "A single stone, endlessly itself.", image: ring },
  { name: "Seraph Drops", kind: "Earrings", note: "Wings, caught mid-flight.", image: earrings },
  { name: "Riviera Line", kind: "Bracelet", note: "An unbroken line of light.", image: bracelet },
  { name: "Floracious", kind: "Ring", note: "Petals, set in fire.", image: floracious },
  { name: "Lumen", kind: "Earrings", note: "Made entirely of glow.", image: lumen },
  { name: "Près du Cœur", kind: "Pendant", note: "Worn close to the heart.", image: presDuCoeur },
];

export default function ProductSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    if (fillRef.current) {
      const p = max > 0 ? el.scrollLeft / max : 0;
      fillRef.current.style.transform = `scaleX(${Math.max(0.08, p)})`;
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const move = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    const perView = Math.max(1, Math.floor(el.clientWidth / step));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step * perView, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <section id="shop" className={styles.slider}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <Reveal>
              <div className="may-eyebrow">Browse</div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className={styles.title}>Slide through the pieces.</h2>
            </Reveal>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(-1)}
              disabled={atStart}
              aria-label="Previous pieces"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(1)}
              disabled={atEnd}
              aria-label="Next pieces"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span ref={fillRef} className={styles.progressFill} />
        </div>

        <div
          className={styles.track}
          ref={trackRef}
          role="group"
          aria-label="Mayavé collection slider"
        >
          {products.map((p) => (
            <a
              key={p.name}
              href="#join-the-circle"
              className={styles.card}
              data-card
            >
              <div className={styles.media}>
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.kind} by Mayavé`}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 700px) 76vw, 332px"
                  className={styles.img}
                />
              </div>
              <div className={styles.meta}>
                <div className={styles.kind}>{p.kind}</div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.note}>{p.note}</p>
                <span className={styles.discover}>
                  Discover
                  <Chevron dir="right" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
