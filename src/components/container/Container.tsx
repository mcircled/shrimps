import React from "react";

type Props = {};

function Container({}: Props) {
  return (
    <div className="container">
      <div className="c-page-heading">
        <h1 className="c-page-heading__title">Blog</h1>
        <p className="c-page-heading__description">
          Vonge blog features productivity, tips, inspiration and strategies for
          massive profits. Find out how to set up a successful blog or how to
          make yours even better!
        </p>
      </div>
    </div>
  );
}

export default Container;
