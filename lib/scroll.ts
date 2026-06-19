/** Id of the "Join the Circle" section, used as the scroll target for every CTA. */
export const JOIN_ID = "join-the-circle";

/** Smooth-scrolls to the Join the Circle section, mirroring the launch design. */
export function scrollToCircle(): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(JOIN_ID);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 40;
  window.scrollTo({ top, behavior: "smooth" });
}
