import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navibar";
import "./pages.css";

const PageNotFound = () => {
  return (
    <Layout>
      <Navbar />
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default PageNotFound;
