import { Link } from "react-router-dom";

type Props = {
  title: string;
  date: string;
  description: string | JSX.Element;
  image: {
    src: string;
    alt: string;
  };
  url: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
};

function BlogCard({
  title,
  date,
  description,
  image,
  url,
  author,
  tags,
}: Props) {
  return (
    <div className="c-blog-card col col-4 col-d-6 col-t-12">
      <div className="c-blog-card__inner">
        <div className="c-blog-card__image-wrap">
          <Link className="c-blog-card__image" to={url}>
            <img loading="lazy" src={image.src} alt={image.alt} />
          </Link>
        </div>

        <div className="c-blog-card__content">
          <div className="c-blog-card__tags-box">
            {tags.map((tag) => (
              <a href={`/tag/${tag}`} className="c-blog-card__tag">
                {tag}
              </a>
            ))}
          </div>

          <h2 className="c-blog-card__title">
            <Link to={url}>{title}</Link>
          </h2>

          <p className="c-blog-card__excerpt">{description}</p>

          <div className="c-blog-card__meta">
            <div className="c-blog-card__author-image">
              <img loading="lazy" src={author.image} alt={author.name} />
            </div>
            <div className="c-blog-card__info">
              <div className="c-blog-card__author-name">{author.name}</div>
              <span className="c-blog-card__date">
                <time dateTime={date}>{date}</time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
