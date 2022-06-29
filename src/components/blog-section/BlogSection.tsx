import BlogCard from "components/blog-card/BlogCard";
import React from "react";

type Props = {};

function BlogSection({}: Props) {
  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="contaniner__inner animate">
              <div className="section__info">
                <div className="section__head">
                  <h2 className="section__title">Recent Posts</h2>
                  <a className="section__link" href="/blog">
                    View all <i className="ion ion-md-arrow-forward"></i>
                  </a>
                </div>
                <div className="section__description">
                  <p>
                    Vonge blog features productivity, tips, inspiration and
                    strategies for massive profits. Find out how to set up a
                    successful blog or how to make yours even better!
                  </p>
                </div>
              </div>

              <div className="row">
                {[1, 2, 3].map((item, index) => {
                  return (
                    <BlogCard
                      key={index}
                      id={0}
                      title={
                        "Life shrinks or expands in proportion to one’s courage"
                      }
                      content={
                        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
                      }
                      slug={
                        "life-shrinks-or-expands-in-proportion-to-one-s-courage"
                      }
                      image={{
                        src: "/images/post-4.jpg",
                        alt: "Life",
                      }}
                      createdAt={"05-29-2022"}
                      author={{
                        id: 1,
                        name: "Rashid Iqbal",
                        avatar: "/images/01.jpg",
                      }}
                      tags={[
                        {
                          id: 1,
                          name: "Life",
                          slug: "life",
                        },
                      ]}
                      categories={[
                        {
                          id: 1,
                          name: "Life",
                          slug: "life",
                        },
                      ]}
                      images={[]}
                      excerpt={"lorem ipsum"}
                      updatedAt={"05-30-2022"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
