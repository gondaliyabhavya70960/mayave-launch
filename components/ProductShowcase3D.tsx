"use client";

import dynamic from "next/dynamic";
import styles from "./ProductShowcase3D.module.css";

// The WebGL canvas is client-only and heavy, so load it lazily.
const Ring3DCanvas = dynamic(() => import("./Ring3DCanvas"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading the piece…</div>,
});

export default function ProductShowcase3D() {
  return (
    <section id="in-3d" className={styles.showcase} aria-label="The solitaire in 3D">
      <div className={styles.head}>
        <div className="may-eyebrow may-eyebrow--light">In the round</div>
        <h2 className={styles.title}>Turn it in the light.</h2>
        <p className={styles.sub}>
          A half-carat solitaire, collet-set in 925 silver — modelled in full 3D.
        </p>
      </div>

      <div className={styles.stage}>
        <Ring3DCanvas />
      </div>

      <span className={styles.hint} aria-hidden="true">
        Drag to rotate · scroll to zoom
      </span>
    </section>
  );
}
