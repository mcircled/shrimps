import React from "react";

type Props = {
  src: string;
  alt: string;
};

function PageImage({ src, alt }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className="c-page-image animate">
            <img loading="lazy" src={src} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageImage;
