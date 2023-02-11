import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import projectlist from "../projects.json";
import "../pages/pages.css";

const ProjectList = () => {
  const excerptList = projectlist.map((project) => {
    return project.content.split("").slice(0, 20).join("");
  });

  return (
    <div className="project-list">
      {projectlist.length &&
        projectlist.map((project, i) => {
          return (
            <Link to={`/project/${project.id}`} key={i} className="links">
              <div key={i} className="project-card">
                <h6>{project.title}</h6>
                <small>
                  {project.date} · {project.category}
                </small>
                <ReactMarkdown
                  children={excerptList[i]}
                  rehypePlugins={[rehypeRaw]}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
