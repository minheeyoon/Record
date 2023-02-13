import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CaretCircleLeft } from "phosphor-react";
import "./components.css";

// const NavbarSub = () => {
//   const navigate = useNavigate();
//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="navbar test">
//       <Link className="links weight-bold" onClick={handleGoBack}>
//         <div className="sub-navi-bar">
//           <CaretCircleLeft size={22} weight="fill" />
//           Back
//         </div>
//       </Link>
//     </div>
//   );
// };

const NavbarSub = () => {
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
      <Link className="links weight-bold" to="/project">
        <div className="nav-item">
          <CaretCircleLeft size={22} weight="fill" />
          Project
        </div>
      </Link>
    </div>
  );
};

export default NavbarSub;
