import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h6>
        <Link className="links" to="/">
          PIECE
        </Link>
      </h6>
    </div>
  );
};

export default Navbar;
