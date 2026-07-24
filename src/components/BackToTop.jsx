import React from "react";
import { prefersReducedMotion } from "../hooks/useReveal.js";

export default function BackToTop({ visible }) {
  return (
    <button
      className={`back-to-top${visible ? " show" : ""}`}
      id="backToTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })}
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
