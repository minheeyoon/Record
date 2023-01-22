import React from "react";
import "./components.css";
import { Sun, Moon } from "phosphor-react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} NoName</p>
      <Sun /> <Moon />
    </div>
  );
};

export default Footer;
