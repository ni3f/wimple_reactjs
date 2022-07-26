import React from "react";
import "./financers.css";

import UserInfoTitle from "../components/user_info_title/user_info_title";
import UserCard from "../components/usercard/usercard";

const Financers = () => (
  <div className="financerscontainer">
    <UserInfoTitle />
    <div className="financerssubcontainer">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
    <div className="viewall-txt">{`View all >`}</div>
  </div>
);

export default Financers;
