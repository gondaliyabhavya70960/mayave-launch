"use client";

import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { scrollToCircle } from "@/lib/scroll";
import styles from "./JoinButton.module.css";

type Variant = "white" | "red" | "outline";

interface JoinButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/** CTA button that smooth-scrolls to the Join the Mayavérse sign-up section. */
export default function JoinButton({
  children,
  variant = "white",
  className,
}: JoinButtonProps) {
  return (
    <button
      type="button"
      onClick={scrollToCircle}
      className={cx(styles.btn, styles[variant], className)}
    >
      {children}
    </button>
  );
}
