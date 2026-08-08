import React from "react";
import { useMagnetic } from "../hooks/useMagnetic.js";

/**
 * Wraps an <a> or <button> with the pointer-follow "magnetic" effect that
 * script.js used to attach to every `.magnetic` element.
 */
export default function Magnetic({
  as: Tag = "a",
  className = "",
  children,
  ...rest
}) {
  const ref = useMagnetic();
  const classes = ["magnetic", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
