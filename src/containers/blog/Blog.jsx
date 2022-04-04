import React from "react";

import { Wrapper } from "./styles";
import { Article } from "../../components/index";

// Data
import { firstBlog, blogs } from "./imports";

const Blog = () => {
  return (
    <Wrapper className="section__padding" id="blog">
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-heading">
          <h2 className="gradient__text">
            A lot is happening, We are blogging about it.
          </h2>
        </div>

        {/* Blogs */}
        <div className="gpt3__blog-container_blogs">
          <div className="gpt3__blog-conatiner_blogs-groupA">
            <Article {...firstBlog} />
          </div>
          <div className="gpt3__blog-container_blogs-groupB">
            {blogs.map(item => (
              <Article
                title={item.title}
                imgUrl={item.imgUrl}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
