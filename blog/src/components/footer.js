import React from "react";
import "./components.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} NoName</p>
    </div>
  );
};

export default Footer;
