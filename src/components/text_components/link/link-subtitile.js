import React from "react";

const LinkSubTitle = ({subTitle}) => (
  <span className="other-options-subtitle">
    <a href={"https://google.com"} target="_blank" rel="noopener noreferrer">
      {subTitle}
    </a>
  </span>
);

export default LinkSubTitle;
