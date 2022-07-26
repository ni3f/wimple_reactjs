import React from "react";
import LinkSubTitle from "../components/text_components/link/link-subtitile";
import logoUrl from "../assets/logo.png";

import fbLogoUrl from "../assets/fb-logo.png";
import instaLogoUrl from "../assets/insta-logo.png";
import linkedinLogoUrl from "../assets/linkedin-logo.png";
import twitterLogoUrl from "../assets/twitter-logo.png";

import "./other_options.css";

const OtherOptions = () => (
  <div className="footer-container">
    <div className="footer-subcontainer">
      <div className="footer-options">
        <span className="other-options-title">Consumer Services</span>
        <LinkSubTitle subTitle="Search Professionals" />
        <LinkSubTitle subTitle="Ask Financial Questions" />
      </div>

      <div className="footer-options">
        <span className="other-options-title">Financial Professionals</span>
        <LinkSubTitle subTitle="Pricing" />
        <LinkSubTitle subTitle="Enterprise" />
      </div>

      <div className="footer-options">
        <span className="other-options-title">Resources</span>
        <LinkSubTitle subTitle="Articles" />
        <LinkSubTitle subTitle="Calculators" />
        <LinkSubTitle subTitle="Forum" />
      </div>

      <div className="footer-options">
        <span className="other-options-title">About Us</span>
        <LinkSubTitle subTitle="How it Works" />
        <LinkSubTitle subTitle="Press" />
        <LinkSubTitle subTitle="Contact Us" />
      </div>
    </div>

    <div className="footer-subcontainer with-margin-top">
      <img className="other-options-logo" src={logoUrl} alt="wimple" />
      <div className="footer-subcontainer">
        <span className="other-options-small-title">
          © 2021 All rights reserved
        </span>
        <div className="other-options-line" />
        <LinkSubTitle subTitle="Terms of Service" />
        <div className="other-options-line" />
        <LinkSubTitle subTitle="Privacy Policy" />
      </div>

      <div className="footer-subcontainer">
        <img className="other-options-social-logo" src={fbLogoUrl} alt="fb" />
        <img
          className="other-options-social-logo"
          src={twitterLogoUrl}
          alt="twt"
        />
        <img
          className="other-options-social-logo"
          src={linkedinLogoUrl}
          alt="linkedin"
        />
        <img
          className="other-options-social-logo"
          src={instaLogoUrl}
          alt="insta"
        />
      </div>
    </div>
  </div>
);

export default OtherOptions;
