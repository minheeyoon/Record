import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import postlist from "../posts.json";
import Layout from "../components/layout";
import Navbar from "../components/navibar";
import "./pages.css";

const Post = (props) => {
  const params = useParams();
  const validId = parseInt(params.id);

  if (!validId) {
    return <Navigate to="/404" />;
  }

  const fetchedPost = {};
  let postExists = false;

  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No Title Given";
      fetchedPost.date = post.date ? post.date : "No Date Given";
      fetchedPost.ahthor = post.ahthor ? post.ahthor : "No Ahthor Given";
      fetchedPost.category = post.category
        ? post.category
        : "No Category Given";
      fetchedPost.content = post.content ? post.content : "No Content Given";
      postExists = true;
    }
  });

  if (postExists === false) {
    return <Navigate to="/404" />;
  }

  return (
    <Layout>
      <Navbar />
      <div className="post-contents">
        <div className="post-contents-title">
          <h4>{fetchedPost.title}</h4>
          <div className="post-contents-info">
            {fetchedPost.category} · {fetchedPost.date}
          </div>
        </div>

        <ReactMarkdown
          children={fetchedPost.content}
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
  );
};

export default Post;
