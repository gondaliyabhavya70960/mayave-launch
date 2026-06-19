"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";
import JoinButton from "./JoinButton";
import styles from "./Nav.module.css";

/** Sticky top nav that slides in once the hero has scrolled past. */
export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY || window.pageYOffset;
      setShow(y > window.innerHeight * 0.85);
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
  }, []);

  return (
    <nav className={cx(styles.nav, show && styles.show)} inert={!show}>
      <div className={styles.brand}>MAYAVÉ</div>
      <JoinButton variant="red">Join the Circle</JoinButton>
    </nav>
  );
}
