import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReveal.js";
import { useMediaQuery } from "./useMediaQuery.js";

/**
 * Drives the aurora parallax (--parallax-y CSS var + [data-parallax] elements)
 * and reports whether the back-to-top button should be shown.
 */
export function useScrollEffects() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const isStackedLayout = useMediaQuery("(max-width: 980px)");

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty(
          "--parallax-y",
          `${y * 0.04}px`,
        );

        document.querySelectorAll("[data-parallax]").forEach((element) => {
          if (prefersReducedMotion || isStackedLayout) {
            element.style.transform = "";
          } else {
            const factor = Number(element.dataset.parallax);
            element.style.transform = `translate3d(0, ${y * factor}px, 0)`;
          }
        });

        setShowBackToTop(y > 420);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isStackedLayout]);

  return { showBackToTop };
}
