import React from "react";
import { Link } from "react-router-dom";
import projectlist from "../projects.json";
import "../pages/pages.css";

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectlist.length &&
        projectlist.map((project, i) => {
          return (
            <Link
              to={`/project/${project.id}`}
              key={i}
              className="project-card links"
            >
              <h6 className="project-title">{project.title}</h6>
              <div className="project-note">{project.note}</div>
              <div className="project-date">
                {project.date} · {project.category}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
