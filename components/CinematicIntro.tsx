"use client";

import { useEffect, useRef } from "react";
import poster from "@/assets/images/reveal.jpg";
import styles from "./CinematicIntro.module.css";

/**
 * Full-bleed cinematic opener at the very top of the page — a looping
 * background video with no copy. The diamond still shows as a poster before
 * the video loads and under reduced-motion.
 */
export default function CinematicIntro() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      video.play().catch(() => {
        /* autoplay blocked — the poster still stays visible */
      });
    }
  }, []);

  return (
    <section className={styles.cinematic} aria-label="Mayavé">
      <video
        ref={ref}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster.src}
        aria-hidden="true"
      >
        <source src="/cinematic-loop.mp4" type="video/mp4" />
      </video>
      <div className={styles.vignette} />
    </section>
  );
}
