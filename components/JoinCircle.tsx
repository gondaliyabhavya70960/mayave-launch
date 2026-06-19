"use client";

import { useState, type FormEvent } from "react";
import { cx } from "@/lib/cx";
import { JOIN_ID } from "@/lib/scroll";
import Reveal from "./Reveal";
import styles from "./JoinCircle.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = "mayave_waitlist";

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  at: number;
}

export default function JoinCircle() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState({ name: "", email: "" });

  const clearErrors = () => {
    setNameError("");
    setEmailError("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    let ne = "";
    let ee = "";
    if (!n) ne = "Please tell us your name.";
    if (!em) ee = "Please enter your email.";
    else if (!EMAIL_RE.test(em)) ee = "That email doesn’t look right.";
    if (ne || ee) {
      setNameError(ne);
      setEmailError(ee);
      return;
    }
    try {
      const list: WaitlistEntry[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]",
      );
      list.push({ name: n, email: em, phone: phone.trim(), at: Date.now() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* localStorage unavailable — submission still acknowledged */
    }
    setSaved({ name: n, email: em });
    setSubmitted(true);
  };

  return (
    <section id={JOIN_ID} className={cx("may-section", styles.join)}>
      <div className={styles.grid}>
        <Reveal direction="left">
          <div>
            <div className="may-eyebrow may-eyebrow--light">
              Join the Circle
            </div>
            <h2 className={styles.title}>Be first through the doors.</h2>
            <p className={styles.body}>
              The Circle is our private list. Members get an early, quiet look
              at every piece — and first access the moment pre-orders open.
            </p>
          </div>
        </Reveal>

        <Reveal direction="right">
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.star} aria-hidden="true">
                ✦
              </div>
              <h3 className={styles.successTitle}>You’re in the Circle.</h3>
              <p className={styles.successBody}>
                Thank you, {saved.name}. We’ll write to{" "}
                <span className={styles.email}>{saved.email}</span> with your
                first look — before anyone else.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className={styles.fields}>
                <label className={styles.field}>
                  <span className={styles.label}>Full name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      clearErrors();
                    }}
                    placeholder="Your name"
                    className={styles.input}
                    aria-invalid={!!nameError}
                  />
                  {nameError && <span className={styles.error}>{nameError}</span>}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Email address</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearErrors();
                    }}
                    placeholder="you@example.com"
                    className={styles.input}
                    aria-invalid={!!emailError}
                  />
                  {emailError && (
                    <span className={styles.error}>{emailError}</span>
                  )}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>
                    Phone <span className={styles.optional}>(optional)</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    className={styles.input}
                  />
                </label>

                <button type="submit" className={styles.submit}>
                  Join the Circle
                </button>
                <p className={styles.fine}>
                  No noise — only a quiet note when we open the doors.
                  Unsubscribe anytime.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
