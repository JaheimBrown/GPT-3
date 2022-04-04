import React from "react";

import { Wrapper } from "./styles";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <Wrapper className="section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="footer-text gradient__text">
          Do you want to step in to the future before others
        </h2>
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-container">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contract</p>
        </div>
        <div className="gpt3__footer-links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-rights">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
