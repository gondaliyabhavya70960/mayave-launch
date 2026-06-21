"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Reveal.module.css";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  /** Entrance direction. */
  direction?: Direction;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Curtain-wipe (clip-path) reveal instead of fade/slide. Good for images. */
  mask?: boolean;
  className?: string;
}

/**
 * Fades + slides its children into view on scroll, matching the launch
 * design's IntersectionObserver reveal. Elements already in view on mount
 * (and users without JS or with reduced motion) are shown immediately.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  mask = false,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver: just show it.
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    // The observer fires immediately for elements already in view on mount,
    // so above-the-fold content reveals without a manual setState here.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={cx(
        styles.reveal,
        direction === "left" && styles.left,
        direction === "right" && styles.right,
        mask && styles.mask,
        visible && styles.visible,
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
