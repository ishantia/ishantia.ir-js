import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./useReveal.js";

export function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function handlePointerMove(event) {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);
      if (!prefersReducedMotion) {
        element.style.transform = `translate(${(x - rect.width / 2) * 0.05}px, ${(y - rect.height / 2) * 0.08}px)`;
      }
    }

    function handlePointerLeave() {
      element.style.transform = "";
    }

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return ref;
}
