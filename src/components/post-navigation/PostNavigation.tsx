import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function PostNavigation({}: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-10 col-d-12 push-d-0 push-1">
          <div className="post__navigation animate">
            <Link
              className="post__prev"
              to={"/post/believe-and-act-as-if-it-were-impossible-to-fail"}
            >
              <div className="prev__image">
                <img
                  loading="lazy"
                  src="/images/post-6.jpg"
                  alt="You must be the change you wish to see in the world"
                />
              </div>
              <div className="prev__box">
                <span className="post__nav post__nav__prev">Prev post</span>
                <h2 className="post__nav__title">
                  Believe and act as if it were impossible to fail
                </h2>
              </div>
            </Link>

            <Link
              className="post__next"
              to={"/post/believe-and-act-as-if-it-were-impossible-to-fail"}
            >
              <div className="next__box">
                <span className="post__nav post__nav__next">Next post</span>
                <h2 className="post__nav__title">
                  Life shrinks or expands in proportion to one’s courage
                </h2>
              </div>
              <div className="next__image">
                <img
                  loading="lazy"
                  src="/images/post-4.jpg"
                  alt="You must be the change you wish to see in the world"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostNavigation;
