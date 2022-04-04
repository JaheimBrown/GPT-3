import React from "react";

import { Wrapper } from "./styles";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <Wrapper className="section__padding" id="possibility">
      <div className="possibilities__image-container">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="possibilities__content-container">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </Wrapper>
  );
};

export default Possibility;
