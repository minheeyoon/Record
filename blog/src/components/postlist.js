import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import postlist from "../posts.json";
import "../pages/pages.css";

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split("").slice(0, 20).join("");
  });
  console.log(excerptList);

  return (
    <div className="postlist">
      <h3>최신</h3>
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div key={i} className="post-card">
              <h6>{post.title}</h6>
              <small>
                {post.date} · {post.category}
              </small>
              <ReactMarkdown
                children={excerptList[i]}
                rehypePlugins={[rehypeRaw]}
              />
              <small>more</small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
