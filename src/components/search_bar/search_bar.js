import React from "react";
import searchIconUrl from "../../assets/search.png";

import "./search_bar.css";

const SearchBar = () => (
  <div className="main">
    <img src={searchIconUrl} alt="search" width="30px" height="30px" />
    <span className="searchtxt">
      Ex- 401K, Financial Professional, Tax Advice
    </span>
    <div className="searchbtn">
      <span className="searchbtntxt">Search</span>
    </div>
  </div>
);
export default SearchBar;
