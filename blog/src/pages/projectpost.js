import React from "react";
import { useParams, Navigate } from "react-router-dom";
import projectlist from "../projects.json";
import Layout from "../components/layout";
import Navbar from "../components/navibar";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./pages.css";

const ProjectPost = (props) => {
  const params = useParams();
  const validId = parseInt(params.id);

  if (!validId) {
    return <Navigate to="/404" />;
  }

  const fetchedProject = {};
  let projectExists = false;

  projectlist.forEach((project, i) => {
    if (validId === project.id) {
      fetchedProject.title = project.title ? project.title : "No Title Given";
      fetchedProject.date = project.date ? project.date : "No Date Given";
      fetchedProject.ahthor = project.ahthor
        ? project.ahthor
        : "No Ahthor Given";
      fetchedProject.category = project.category
        ? project.category
        : "No Category Given";
      fetchedProject.content = project.content
        ? project.content
        : "No Content Given";
      projectExists = true;
    }
  });

  if (projectExists === false) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="project">
      <Layout>
        <Navbar />
        <div className="post-contents">
          <div className="post-contents-title">
            <h4>{fetchedProject.title}</h4>
            <p>
              {fetchedProject.category} · {fetchedProject.date}
            </p>
          </div>

          <ReactMarkdown
            children={fetchedProject.content}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      </Layout>
    </div>
  );
};

export default ProjectPost;
