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
 * A bird-shaped cursor that follows the mouse. It recolors itself white over
 * dark sections and ink over light ones, enlarges over links/buttons, and
 * yields to the native caret over text fields. Only active on mouse devices.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    let raf = 0;
    let x = -100;
    let y = -100;
    let tone = "dark";
    let active = false;
    let textField = false;
    let shown = false;

    const render = () => {
      raf = 0;
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);

      const target = document.elementFromPoint(x, y);

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
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={styles.cursor} data-tone="dark" aria-hidden="true">
      <span className={styles.bird} />
    </div>
  );
}
