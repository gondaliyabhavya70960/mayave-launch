"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import Logo from "./Logo";
import styles from "./Intro.module.css";

const SEEN_KEY = "mayave_intro_seen";
const AUTO_DISMISS_MS = 3400;
const FADE_MS = 900;

/**
 * Cinematic full-screen intro shown once per session. Auto-dismisses after a
 * few seconds, on click, or immediately for visitors who have already seen it.
 */
export default function Intro() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* sessionStorage unavailable — ignore */
    }
    setLeaving(true);
    fadeTimer.current = setTimeout(() => setMounted(false), FADE_MS);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (seen) {
      const raf = requestAnimationFrame(() => setMounted(false));
      return () => cancelAnimationFrame(raf);
    }
    const auto = setTimeout(dismiss, AUTO_DISMISS_MS);
    return () => {
      clearTimeout(auto);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [dismiss]);

  if (!mounted) return null;

  return (
    <div
      className={cx(styles.intro, leaving && styles.leaving)}
      onClick={dismiss}
      role="button"
      tabIndex={0}
      aria-label="Enter the Mayavé site"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") dismiss();
      }}
    >
      <div className={styles.center}>
        <div className={styles.line} />
        <Logo tone="light" className={styles.word} />
        <div className={styles.sub}>Conscious modern luxury</div>
      </div>
      <div className={styles.enter}>Enter</div>
    </div>
  );
}
