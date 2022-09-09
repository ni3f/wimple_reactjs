import React from "react";
import searchIconUrl from "../../assets/search.png";

import "./search_bar.css";

const SearchBar = () => (
  <div className="main">
    <img src={searchIconUrl} alt="search" width="30px" height="30px" />
    {/* <span className="searchtxt">
      Ex- 401K, Financial Professional, Tax Advice
    </span> */}
    <input
      type="text"
      name="text"
      class="mt-1 px-3 py-2 bg-offwhite placeholder-slate-400 w-full p-10"
      placeholder="Ex- 401K, Financial Professional, Tax Advice"
    />
    <div className="searchbtn">
      <span className="searchbtntxt">Search</span>
    </div>
  </div>
);
export default SearchBar;
