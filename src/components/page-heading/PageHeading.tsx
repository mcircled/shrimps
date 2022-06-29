import React from "react";

type Props = {
  title: string;
  description: string | JSX.Element;
};

function PageHeading({ title, description }: Props) {
  return (
    <div className="container">
      <div className="c-page-heading">
        <h1 className="c-page-heading__title">{title}</h1>
        <p className="c-page-heading__description">{description}</p>
      </div>
    </div>
  );
}

export default PageHeading;
