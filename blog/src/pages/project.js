import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navibar";
import ProjectList from "../components/projectlist";

const Project = () => {
  return (
    <div className="project">
      <Layout>
        <Navbar />
        <ProjectList />
      </Layout>
    </div>
  );
};

export default Project;
