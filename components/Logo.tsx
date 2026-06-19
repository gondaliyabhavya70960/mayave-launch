import Image from "next/image";
import { cx } from "@/lib/cx";
import wordmark from "@/assets/images/mayave-wordmark.png";
import styles from "./Logo.module.css";

interface LogoProps {
  /** `dark` keeps the artwork black (for light backgrounds); `light` recolors it white. */
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}

/**
 * The Mayavé wordmark. Size it by setting a `height` (with `width: auto`) on the
 * passed `className`; the aspect ratio is preserved automatically.
 */
export default function Logo({ tone = "dark", className, priority }: LogoProps) {
  return (
    <Image
      src={wordmark}
      alt="Mayavé Jewellery"
      priority={priority}
      className={cx(styles.logo, tone === "light" && styles.light, className)}
    />
  );
}
