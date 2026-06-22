"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  /** Parallax intensity; higher moves faster relative to scroll. */
  speed?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Translates its children vertically as the element passes through the
 * viewport. Disabled under `prefers-reduced-motion`.
 */
export default function Parallax({
  speed = 0.12,
  className,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - vh / 2;
      // Clamp the shift so the layer never moves past its overscan and exposes
      // the section's background colour as a hairline at the top/bottom edge.
      const max = el.offsetHeight * 0.04;
      const offset = Math.max(-max, Math.min(max, center * speed));
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} data-parallax className={className}>
      {children}
    </div>
  );
}
