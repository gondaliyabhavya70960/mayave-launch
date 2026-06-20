import Logo from "./Logo";
import styles from "./Footer.module.css";

const social = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Logo tone="light" className={styles.logo} />
          <p className={styles.tagline}>
            A new definition of desire. Lab-grown diamonds, made for her —
            Noida · Ghaziabad · Gurugram.
          </p>
        </div>
        <nav className={styles.social} aria-label="Social and contact">
          {social.map((s) => (
            <a key={s.label} href={s.href} className={styles.socialLink}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.legal}>
        <span>© 2026 Mayavé Jewellery. All rights reserved.</span>
        <span className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>
            Privacy
          </a>
          <a href="#" className={styles.legalLink}>
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
