import React from "react";
import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import postlist from "../posts.json";
import "../pages/pages.css";

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split("").slice(0, 20).join("");
  });
  console.log(excerptList);

  return (
    <div className="post-list">
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <Link to={`/post/${post.id}`} key={i} className="post-card links">
              <small>{post.date}</small>
              <small>{post.category}</small>
              <h6>{post.title}</h6>
              <CaretRight size={24} weight="bold" />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
