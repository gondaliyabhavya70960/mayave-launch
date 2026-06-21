"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

/** Returns "dark" or "light" for the nearest opaque background under `el`. */
function toneAt(el: Element | null): "dark" | "light" {
  let node: Element | null = el;
  while (node) {
    const bg = getComputedStyle(node).backgroundColor;
    const m = bg.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const [r, g, b, a = 1] = m[1].split(",").map((s) => parseFloat(s));
      if (a >= 0.3) {
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance < 130 ? "dark" : "light";
      }
    }
    node = node.parentElement;
  }
  return "dark";
}

/**
 * A bird-shaped cursor that follows the mouse with eased smoothing, trailed by
 * a softer ring that lags a little further behind. It recolors itself white
 * over dark sections and ink over light ones, swells over links/buttons, and
 * yields to the native caret over text fields. Only active on mouse devices.
 */
export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const birdRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const bird = birdRef.current;
    const ring = ringRef.current;
    if (!root || !bird || !ring) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let tx = -100;
    let ty = -100;
    let bx = -100;
    let by = -100;
    let rx = -100;
    let ry = -100;
    let tone = "dark";
    let active = false;
    let textField = false;
    let shown = false;
    let raf = 0;

    const loop = () => {
      const bf = reduce ? 1 : 0.3;
      const rf = reduce ? 1 : 0.16;
      bx += (tx - bx) * bf;
      by += (ty - by) * bf;
      rx += (tx - rx) * rf;
      ry += (ty - ry) * rf;
      bird.style.transform = `translate3d(${bx.toFixed(2)}px, ${by.toFixed(2)}px, 0)`;
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = document.elementFromPoint(tx, ty);

      const isText = !!target?.closest("input, textarea");
      if (isText !== textField) {
        textField = isText;
        root.style.opacity = isText ? "0" : "1";
      }
      if (isText) return;

      if (!shown) {
        shown = true;
        root.style.opacity = "1";
      }

      const nextTone = toneAt(target);
      if (nextTone !== tone) {
        tone = nextTone;
        root.dataset.tone = nextTone;
      }
      const nextActive = !!target?.closest("a, button, [role='button']");
      if (nextActive !== active) {
        active = nextActive;
        root.dataset.active = String(nextActive);
      }
    };

    const onLeave = () => {
      root.style.opacity = "0";
      shown = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.cursor} data-tone="dark" aria-hidden="true">
      <span ref={ringRef} className={styles.ring}>
        <span className={styles.ringShape} />
      </span>
      <span ref={birdRef} className={styles.bird}>
        <span className={styles.birdShape} />
      </span>
    </div>
  );
}
