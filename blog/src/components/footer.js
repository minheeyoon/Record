import React from "react";
import "./components.css";
import { Sun, Moon } from "phosphor-react";
import { useTheme } from "./hooks/useTheme";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const body = window.document.body;

  setTimeout(() => {
    body.classList.add("theme-transition");
  }, 1000);

  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} NoName</p>
      {theme === "theme-light" ? (
        <Moon
          size={18}
          weight="bold"
          className="themeToggle"
          onClick={() => setTheme("theme-dark")}
        ></Moon>
      ) : (
        <Sun
          size={18}
          weight="bold"
          className="themeToggle"
          onClick={() => setTheme("theme-light")}
        ></Sun>
      )}
    </div>
  );
};

export default Footer;
