import React from "react";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
