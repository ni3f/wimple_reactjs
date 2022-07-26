import React from "react";

import "./question.css";

const Question = () => (
  <div className="question-container">
    <div className="question-type">Insurance</div>
    <div className="question">
      Is Whole life insurance is a good investment?
    </div>
    <div className="btn-answer">
      <div className="btn-answer-txt">356 Answers</div>
      <div className="btn-answer-txt">{`>`}</div>
    </div>
  </div>
);

export default Question;
