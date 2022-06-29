import React from "react";

type Props = {};

function Share({}: Props) {
  return (
    <div className="post__share">
      <div className="share__head">
        <div className="share__title">Share this Post</div>
      </div>
      <ul className="share__list list-reset">
        <li className="share__item">
          <a
            className="share__link share__twitter"
            href="https://twitter.com/intent/tweet?text=Life%20shrinks%20or%20expands%20in%20proportion%20to%20one%E2%80%99s%20courage&amp;url=/blog/life-shrinks-or-expands-in-proportion-to-one-s-courage"
            onClick={() => {
              window.open(
                window.location.href,
                "pop-up",
                "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
              );
              return false;
            }}
            title="Share on Twitter"
            rel="nofollow"
          >
            <i className="ion ion-logo-twitter"></i>
          </a>
        </li>
        <li className="share__item">
          <a
            className="share__link share__facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=/blog/life-shrinks-or-expands-in-proportion-to-one-s-courage"
            onClick={() => {
              window.open(
                window.location.href,
                "pop-up",
                "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
              );
              return false;
            }}
            title="Share on Facebook"
            rel="nofollow"
          >
            <i className="ion ion-logo-facebook"></i>
          </a>
        </li>
        <li className="share__item">
          <a
            className="share__link share__pinterest"
            href="http://pinterest.com/pin/create/button/?url=/blog/life-shrinks-or-expands-in-proportion-to-one-s-courage&amp;media=/images/post-4.jpg&amp;description=Life%20shrinks%20or%20expands%20in%20proportion%20to%20one%E2%80%99s%20courage"
            onClick={() => {
              window.open(
                window.location.href,
                "pop-up",
                "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
              );
              return false;
            }}
            title="Share on Pinterest"
            rel="nofollow"
          >
            <i className="ion ion-logo-pinterest"></i>
          </a>
        </li>
        <li className="share__item">
          <a
            className="share__link share__linkedin"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/blog/life-shrinks-or-expands-in-proportion-to-one-s-courage&amp;title=Life%20shrinks%20or%20expands%20in%20proportion%20to%20one%E2%80%99s%20courage&amp;summary=Bring%20to%20the%20table%20win-win%20survival%20strategies%20to%20ensure%20proactive%20domination.%20At%20the%20end%20of%20the%20day,%20going%20forward.&amp;source=Shrimps%20%7C%20Dev"
            onClick={() => {
              window.open(
                window.location.href,
                "pop-up",
                "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"
              );
              return false;
            }}
            title="Share on LinkedIn"
            rel="nofollow"
          >
            <i className="ion ion-logo-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Share;
