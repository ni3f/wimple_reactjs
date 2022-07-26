import React from "react";
import "./usercard.css";

import People from "../../assets/people.png";

const UserCard = () => (
  <div className="usercardcontainer">
    <img className="userimgcontainer" src={People} alt="people" />
    <div className="namecontainer">
      <span className="financial-profession">Financial Professional</span>
      <span className="financial-name">Amish Shiravadakar</span>
      <span className="location">Los Angles, USA</span>
    </div>
  </div>
);

export default UserCard;
