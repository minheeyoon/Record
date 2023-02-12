import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaretCircleLeft } from "phosphor-react";
import "./components.css";

const NavbarSub = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="navbar">
      <Link className="links weight-bold" onClick={handleGoBack}>
        <div className="sub-navi-bar">
          <CaretCircleLeft size={20} weight="fill" />
          Back
        </div>
      </Link>
    </div>
  );
};

export default NavbarSub;
