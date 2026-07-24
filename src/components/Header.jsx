import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useMediaQuery } from "../hooks/useMediaQuery.js";
import { prefersReducedMotion } from "../hooks/useReveal.js";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isStackedLayout = useMediaQuery("(max-width: 980px)");
  const activeId = useActiveSection(NAV_ITEMS.map(item => item.id));
  const menuToggleRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (event, id) => {
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    },
    [closeMenu]
  );

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Shantia Eslami home" onClick={e => handleNavClick(e, "home")}>
          <span className="brand-mark">SE</span>
          <span>Shantia Eslami</span>
        </a>

        <ul
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="navLinks"
          inert={isStackedLayout && !menuOpen ? "" : undefined}
        >
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "active" : ""}
                onClick={e => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="icon-button" id="themeToggle" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
            <i className={`fa-solid ${theme === "light" ? "fa-sun" : "fa-moon"}`} aria-hidden="true"></i>
          </button>
          <button
            ref={menuToggleRef}
            className="icon-button menu-toggle"
            id="menuToggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen(open => !open)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
