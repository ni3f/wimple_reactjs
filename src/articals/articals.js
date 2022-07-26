import React from "react";
import "./articals.css";

import ArticleCard from "../components/articlecard/article_card";

const Articals = () => (
  <div className="articalscontainer">
    <div className="userinfotitle">
      <span className="primarytxt">You might love our </span>
      <span className="secondarytxt">Recent Articles</span>
    </div>
    <div className="articalssubcontainer">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
    <div className="viewall-txt">{`View all >`}</div>
  </div>
);

export default Articals;
