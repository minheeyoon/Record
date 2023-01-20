import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h6>
        <Link className="links" to="/">
          PIECE
        </Link>
        <Link className="links" to="/project">
          Project
        </Link>
      </h6>
    </div>
  );
};

export default Navbar;
