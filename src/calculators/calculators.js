import React from "react";
import SimpleButton from "../components/simple_button/simple_button";

import "./calculators.css";

const Calculators = () => (
  <div className="cal-main-container">
    <div className="cal-sub-container-1">
      <span className="calctitle">
        A<span className="calctitle-white"> “Calculated” </span>Approach to your
        Finances
      </span>
      <div className="calc-des">
        Wimple financial calculators are a great way to understand your
        financial picture and prepare you for a more personalized meeting with a
        financial professional. These tools will help you understand how to
        reach your goals.
      </div>
      <div className="try-title">Try our calculators 👇</div>
      <div className="calc-buttons">
        <SimpleButton text="Saving Calculator" />
        <SimpleButton text="401K Calculators" />
      </div>
      <div className="try-title">See more calculators {">"}</div>
    </div>

    <div className="cal-sub-container-2">
      <div className="cal-sub-title">401K Calculator</div>
      <div className="calc-input-bg">$8,203</div>
      <div className="try-title">MONTHLY SAVINGS CONTRIBUTION REQUIRED</div>
      <div className="calc-des-grey">
        Save this amount per month and you will hit your target if you are able
        to maintain this expected rate of return throughout the next 5 years.
      </div>
      <SimpleButton text="Find a Financial Professional" />
    </div>
  </div>
);

export default Calculators;
