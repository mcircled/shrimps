import React from "react";

type Props = {};

function RelatedPost({}: Props) {
  return (
    <div className="col col-12">
      <div className="container__inner">
        <div className="section__info">
          <div className="section__head">
            <h2 className="section__title">You may also like</h2>
            <a className="section__link" href="/blog">
              {" "}
            </a>
            <a href="/tags#travel" className="section__link related-tag">
              See all<span> travel</span>{" "}
              <i className="ion ion-md-arrow-forward"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="article col col-4 col-d-6 col-t-12">
            <div className="article__inner">
              <div className="image-wrap">
                <a
                  className="article__image"
                  href="/blog/believe-and-act-as-if-it-were-impossible-to-fail"
                >
                  <img
                    loading="lazy"
                    src="/images/post-6.jpg"
                    alt="Believe and act as if it were impossible to fail"
                  />
                </a>
              </div>

              <div className="article__content">
                <div className="article-tags__box">
                  <a href="/tag/travel" className="article__tag">
                    travel
                  </a>

                  <a href="/tag/lifestyle" className="article__tag">
                    lifestyle
                  </a>
                </div>

                <h2 className="article__title">
                  <a href="/blog/believe-and-act-as-if-it-were-impossible-to-fail">
                    Believe and act as if it were impossible to fail
                  </a>
                </h2>

                <p className="article__excerpt">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward.
                </p>

                <div className="article__meta">
                  <div className="article__author-image">
                    <img
                      loading="lazy"
                      src="/images/avatar.jpg"
                      alt="Rashid Iqbal"
                    />
                  </div>
                  <div className="article-info">
                    <div className="article__author-name">Rashid Iqbal</div>
                    <span className="article__date">
                      <time dateTime="2018-11-05T17:01:35+05:00">
                        05 Nov 2018
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="article col col-4 col-d-6 col-t-12">
            <div className="article__inner">
              <div className="image-wrap">
                <a
                  className="article__image"
                  href="/blog/the-way-i-see-it-every-life-is-a-pile-of-good-things"
                >
                  <img
                    loading="lazy"
                    src="/images/post-7.jpg"
                    alt="The way I see it, every life is a pile of good things"
                  />
                </a>
              </div>

              <div className="article__content">
                <div className="article-tags__box">
                  <a href="/tag/notes" className="article__tag">
                    notes
                  </a>

                  <a href="/tag/story" className="article__tag">
                    story
                  </a>

                  <a href="/tag/rest" className="article__tag">
                    rest
                  </a>
                </div>

                <h2 className="article__title">
                  <a href="/blog/the-way-i-see-it-every-life-is-a-pile-of-good-things">
                    The way I see it, every life is a pile of good things
                  </a>
                </h2>

                <p className="article__excerpt">
                  In qua quid est boni praeter summam voluptatem, et eam
                  sempiternam. Cur post Tarentum ad Archytam. Qua ex cognitione
                  ...
                </p>

                <div className="article__meta">
                  <div className="article__author-image">
                    <img
                      loading="lazy"
                      src="/images/avatar.jpg"
                      alt="Rashid Iqbal"
                    />
                  </div>
                  <div className="article-info">
                    <div className="article__author-name">Rashid Iqbal</div>
                    <span className="article__date">
                      <time dateTime="2018-10-31T17:01:35+05:00">
                        31 Oct 2018
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="article col col-4 col-d-6 col-t-12">
            <div className="article__inner">
              <div className="image-wrap">
                <a
                  className="article__image"
                  href="/blog/everything-has-beauty-but-not-everyone-can-see"
                >
                  <img
                    loading="lazy"
                    src="/images/post-8.jpg"
                    alt="Everything has beauty, but not everyone can see"
                  />
                </a>
              </div>

              <div className="article__content">
                <div className="article-tags__box">
                  <a href="/tag/travel" className="article__tag">
                    travel
                  </a>

                  <a href="/tag/rest" className="article__tag">
                    rest
                  </a>
                </div>

                <h2 className="article__title">
                  <a href="/blog/everything-has-beauty-but-not-everyone-can-see">
                    Everything has beauty, but not everyone can see
                  </a>
                </h2>

                <p className="article__excerpt">
                  In qua quid est boni praeter summam voluptatem, et eam
                  sempiternam. Cur post Tarentum ad Archytam. Qua ex cognitione
                  ...
                </p>

                <div className="article__meta">
                  <div className="article__author-image">
                    <img
                      loading="lazy"
                      src="/images/avatar.jpg"
                      alt="Rashid Iqbal"
                    />
                  </div>
                  <div className="article-info">
                    <div className="article__author-name">Rashid Iqbal</div>
                    <span className="article__date">
                      <time dateTime="2018-05-29T20:05:55+05:00">
                        29 May 2018
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedPost;
