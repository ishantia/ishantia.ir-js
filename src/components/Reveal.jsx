import React from "react";
import { useReveal } from "../hooks/useReveal.js";

/**
 * Drop-in replacement for elements that previously carried the `.reveal`
 * class in the static markup. Renders `as` (default "div") with the
 * `reveal`/`reveal visible` classes toggled by IntersectionObserver.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  style,
  ...rest
}) {
  const [ref, visible] = useReveal();
  const classes = ["reveal", visible ? "visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}
