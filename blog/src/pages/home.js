import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navibar";
import PostList from "../components/postlist";
import { Link } from "react-router-dom";
import "../pages/pages.css";

const Home = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <div className="header">
          <h6 className="weight-regular lh-md word">
            개념적 일관성이야말로 시스템 설계에서 가장 중요하게 고려할 사항이라
            주장하고자 한다. 좋기는 하지만 연관성 없고 조율도 안 된 기능을 많이
            넣기보다는, 이례적인 일부 기능이나 개선 사항을 빼더라도 일련의 설계
            사상을 고수하는 편이 더 낫다.
          </h6>
          <div className="sub-navi">
            <small>
              <Link className="links-secondary" to="/project">
                Project &nbsp;
              </Link>
              <a
                className="links-secondary"
                href="https://github.com/minheeyoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                · &nbsp;Github
              </a>
            </small>
          </div>
        </div>
        <PostList />
      </Layout>
    </div>
  );
};

export default Home;
