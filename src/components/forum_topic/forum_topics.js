import React from "react";
import Question from "./question/question";

import "./forum_topics.css";

const ForumTopics = () => (
  <div className="forumtopics-container">
    <div className="title-wrapper">
      <div className="primarytxt">Most Active</div>
      <div className="secondarytxt">&nbsp; Forum Topics</div>
    </div>
    <div className="question-subcontainer">
      <Question />
      <Question />
      <Question />
    </div>
  </div>
);

export default ForumTopics;
