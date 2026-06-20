import Logo from "./Logo";
import styles from "./Footer.module.css";

const columns = [
  { heading: "Shop", items: ["Jewellery", "Gifting", "Trending"] },
  { heading: "About", items: ["Our Story", "Sustainability", "The Craft"] },
  { heading: "Service", items: ["Contact Us", "Shipping Policy", "Returns"] },
];

const social = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
];

const legal = ["Privacy Policy", "Terms of Service", "Accessibility", "Cookie Preferences"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Logo tone="light" className={styles.logo} />
          <p className={styles.tagline}>
            A new definition of desire. Lab-grown diamond jewellery, made for
            her — Noida · Ghaziabad · Gurugram.
          </p>
        </div>

        <div className={styles.cols}>
          {columns.map((col) => (
            <nav key={col.heading} className={styles.col} aria-label={col.heading}>
              <div className={styles.colHead}>{col.heading}</div>
              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.col}>
            <div className={styles.colHead}>Connect</div>
            <div className={styles.social}>
              {social.map((s) => (
                <a key={s.label} href={s.href} className={styles.colLink}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.legal}>
          {legal.map((l) => (
            <a key={l} href="#" className={styles.legalLink}>
              {l}
            </a>
          ))}
        </div>
        <span className={styles.copy}>
          © 2026 Mayavé Jewellery. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
