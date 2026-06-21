"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { cx } from "@/lib/cx";
import satin1 from "@/assets/images/products/satin-1.png";
import satin2 from "@/assets/images/products/satin-2.png";
import bangle1 from "@/assets/images/products/bangle-1.png";
import bangle2 from "@/assets/images/products/bangle-2.png";
import brooch1 from "@/assets/images/products/brooch-1.png";
import brooch2 from "@/assets/images/products/brooch-2.png";
import earring1 from "@/assets/images/products/earring-1.png";
import earring2 from "@/assets/images/products/earring-2.png";
import necklace1 from "@/assets/images/products/necklace-1.png";
import necklace2 from "@/assets/images/products/necklace-2.png";
import styles from "./CollectionSlider.module.css";

type Product = {
  name: string;
  kind: string;
  tagline: string;
  views: [StaticImageData, StaticImageData];
  bg: StaticImageData;
};

const products: Product[] = [
  { name: "Plumage", kind: "Bangle", tagline: "A wrist, taken flight.", views: [bangle1, bangle2], bg: satin1 },
  { name: "Seraph", kind: "Brooch", tagline: "Pinned mid-flight.", views: [brooch1, brooch2], bg: satin2 },
  { name: "Volière", kind: "Earrings", tagline: "Wings, worn at the ear.", views: [earring1, earring2], bg: satin1 },
  { name: "Icarus", kind: "Necklace", tagline: "Flight, worn at the throat.", views: [necklace1, necklace2], bg: satin2 },
];

const AUTOPLAY_MS = 5000;

export default function CollectionSlider() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState(0);

  const select = useCallback((i: number) => {
    setActive(((i % products.length) + products.length) % products.length);
    setView(0);
  }, []);
  const go = useCallback((dir: 1 | -1) => select(active + dir), [active, select]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % products.length);
      setView(0);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [active]);

  const current = products[active];

  return (
    <section
      id="collection-slider"
      className={styles.slider}
      aria-roledescription="carousel"
      aria-label="The Winged Collection"
    >
      <div className={styles.bgs} aria-hidden="true">
        {products.map((p, i) => (
          <Image
            key={p.kind}
            src={p.bg}
            alt=""
            fill
            priority={i === 0}
            placeholder="blur"
            sizes="100vw"
            className={cx(styles.bg, i === active && styles.bgOn)}
          />
        ))}
      </div>
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.stage}>
        {products.map((p, pi) => (
          <div
            key={p.kind}
            className={cx(styles.product, pi === active && styles.productOn)}
            aria-hidden={pi !== active}
          >
            {p.views.map((src, vi) => (
              <Image
                key={vi}
                src={src}
                alt={`${p.name} ${p.kind} — view ${vi + 1}`}
                fill
                priority={pi === 0 && vi === 0}
                placeholder="blur"
                sizes="100vw"
                className={cx(
                  styles.jewel,
                  pi === active && vi === view && styles.jewelOn,
                )}
              />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.eyebrow}>The Winged Collection</div>

      <button
        type="button"
        className={cx(styles.arrow, styles.prev)}
        onClick={() => go(-1)}
        aria-label="Previous piece"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        className={cx(styles.arrow, styles.next)}
        onClick={() => go(1)}
        aria-label="Next piece"
      >
        <Chevron dir="right" />
      </button>

      <div className={styles.dock}>
        <div key={active} className={styles.copy}>
          <div className={styles.kind}>{current.kind}</div>
          <h2 className={styles.name}>{current.name}</h2>
          <p className={styles.tag}>{current.tagline}</p>
        </div>

        <div className={styles.views} role="group" aria-label="Product views">
          {[0, 1].map((v) => (
            <button
              key={v}
              type="button"
              className={cx(styles.viewDot, v === view && styles.viewDotOn)}
              onClick={() => setView(v)}
              aria-pressed={v === view}
              aria-label={`View ${v + 1}`}
            >
              {String(v + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className={styles.nav} role="tablist" aria-label="Collection pieces">
          {products.map((p, i) => (
            <button
              key={p.kind}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={cx(styles.navItem, i === active && styles.navItemOn)}
              onClick={() => select(i)}
            >
              {p.kind}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
