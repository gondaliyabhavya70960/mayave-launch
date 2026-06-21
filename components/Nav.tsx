"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";
import Logo from "./Logo";
import styles from "./Nav.module.css";

const links = [
  { label: "Jewellery", href: "#collection" },
  { label: "Gifting", href: "#collection" },
  { label: "Sustainability", href: "#why" },
  { label: "Trending", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#join-the-circle" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}
function WishlistIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 20.5l-1.4-1.3C5.4 14.6 2.5 12 2.5 8.7 2.5 6.1 4.6 4 7.2 4c1.6 0 3.1.8 3.8 2 .7-1.2 2.2-2 3.8-2 2.6 0 4.7 2.1 4.7 4.7 0 3.3-2.9 5.9-8.1 10.5L12 20.5z" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

const icons = [
  { label: "Search", Icon: SearchIcon },
  { label: "Account", Icon: AccountIcon },
  { label: "Wishlist", Icon: WishlistIcon },
  { label: "Bag", Icon: BagIcon },
];

/** Persistent shop nav — transparent over the hero, solid cream once scrolled. */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY || 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > window.innerHeight * 0.85);
      const delta = y - lastY;
      // Ignore jitter; hide while scrolling down, reveal while scrolling up.
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 80);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={cx(styles.nav, scrolled && styles.solid, hidden && styles.hidden)}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Mayavé — home">
          <Logo tone={scrolled ? "dark" : "light"} className={styles.logo} />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.icons}>
          {icons.map(({ label, Icon }) => (
            <a key={label} href="#join-the-circle" className={styles.icon} aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
