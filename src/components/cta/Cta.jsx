import React from "react";

import { Wrapper } from "./styles";

const CTA = () => {
  return (
    <Wrapper className="section__margin">
      <div className="cta__content-container">
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possiblities.</h4>
      </div>
      <button>Get Started</button>
    </Wrapper>
  );
};

export default CTA;
