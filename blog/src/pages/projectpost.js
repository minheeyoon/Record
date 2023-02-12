import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import projectlist from "../projects.json";
import Layout from "../components/layout";
import NavbarSub from "../components/navibarSub";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
        <NavbarSub />
        <div className="post-contents">
          <div className="post-contents-title">
            <h4>{fetchedProject.title}</h4>
            <div className="post-contents-info">
              {fetchedProject.category} · {fetchedProject.date}
            </div>
          </div>

          <ReactMarkdown
            children={fetchedProject.content}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="code-block">
                    <div className="code-block-title">
                      <p className="ui-font">Example</p>
                    </div>
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={dracula}
                      customStyle={{
                        padding: "24px",
                      }}
                      wrapLongLines={true}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default ProjectPost;
