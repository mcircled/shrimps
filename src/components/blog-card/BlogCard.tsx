import { Link } from "react-router-dom";

type Props = {};

function BlogCard(post: Post): JSX.Element {
  const { title, slug, image, excerpt, author, tags, createdAt } = post;
  return post !== undefined ? (
    <div className="c-blog-card col col-4 col-d-6 col-t-12">
      <div className="c-blog-card__inner">
        <div className="c-blog-card__image-wrap">
          <img loading="lazy" src={image.src} alt={image.alt} />
        </div>

        <div className="c-blog-card__content">
          <div className="tags">
            {tags.map(({ id, name, slug }) => (
              <Link key={id} to={`/tag/${slug}`} className="tag">
                {name}
              </Link>
            ))}
          </div>

          <h2 className="c-blog-card__title">
            <Link to={`/post/${slug}`}>{title}</Link>
          </h2>

          <p className="c-blog-card__excerpt">{excerpt}</p>

          <div className="c-blog-card__meta">
            <div className="c-blog-card__author-image">
              <img loading="lazy" src={author.avatar} alt={author.name} />
            </div>
            <div className="c-blog-card__info">
              <div className="c-blog-card__author-name">{author.name}</div>
              <span className="c-blog-card__date">
                <time dateTime={createdAt}>{createdAt}</time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default BlogCard;
