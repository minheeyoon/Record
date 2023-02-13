import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HouseSimple } from "phosphor-react";
import "./components.css";

const Navbar = () => {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;
      // function to run on scroll
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]); // run when scroll direction changes

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  return (
    <div className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`}>
      <Link className="links" to="/">
        <div className="nav-item">
          <HouseSimple size={22} weight="fill" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
