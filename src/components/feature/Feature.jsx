import React from "react";
import { Wrapper } from "./styles";

const Feature = ({ title, text }) => {
  return (
    <Wrapper className="wgpt3__feature">
      <div className="wgpt3-feature__heading">
        <div className="bar" />
        {title}
      </div>
      <div className="wgpt3-feature__text">
        <div className="bar" />
        {text}
      </div>
    </Wrapper>
  );
};

export default Feature;
