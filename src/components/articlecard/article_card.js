import React from "react";
import "./article_card.css";

import MoneyImg from "../../assets/money.png";

const ArticleCard = () => (
  <div className="articlecardcontainer">
    <img className="articleimgcontainer" src={MoneyImg} alt="money" />
    <div className="namecontainer">
      <span className="article-name">
        What is your opinion on Bitcoin price?{" "}
      </span>
      <span className="article-des">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry...
      </span>
      <span className="article-by">By Allen Lewis</span>
      <span className="article-date">12/08/2021</span>
    </div>
  </div>
);

export default ArticleCard;
