import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="links weight-bold" to="/">
        PIECE
      </Link>
    </div>
  );
};

export default Navbar;
