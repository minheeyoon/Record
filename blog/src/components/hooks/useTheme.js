import React, { useContext, createContext, useState, useEffect } from "react";

const ThemeCntext = createContext("theme");

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "theme-dark"
      ? "theme-light"
      : "theme-dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const removeOldTheme =
      theme === "theme-dark" ? "theme-light" : "theme-dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeCntext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCntext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeCntext);
}
