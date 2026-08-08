import { useCallback, useEffect, useState } from "react";

const safeStorage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* ignore write failures (private mode, quota, etc.) */
    }
  },
};

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    safeStorage.get("theme") === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    safeStorage.set("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
