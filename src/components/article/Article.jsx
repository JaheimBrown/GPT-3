import React from "react";

import { Wrapper } from "./styles";

const Article = ({ imgUrl, title, date }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={imgUrl} alt="title" />
      </div>

      <div className="blog-content">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
    </Wrapper>
  );
};

export default Article;
