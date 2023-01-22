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
              <div className="post-information body-md">
                <div className="post-data">{post.date}</div>
                <div className="post-category">{post.category}</div>
              </div>
              <div className="post-title">
                <h6>{post.title}</h6>
                <CaretRight size={24} weight="regular" />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
