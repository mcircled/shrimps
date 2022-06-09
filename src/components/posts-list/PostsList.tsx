import BlogCard from "components/blog-card/BlogCard";

type Props = {
  posts: Post[];
};
function PostsList({ posts = [] }: Props) {
  return (
    <div className="container animate">
      <div className="row" data-pagebreak="6">
        {[1, 2, 3].map((item, index) => {
          return (
            <BlogCard
              key={index}
              id={0}
              title={"Life shrinks or expands in proportion to one’s courage"}
              content={
                "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
              }
              slug={"life-shrinks-or-expands-in-proportion-to-one-s-courage"}
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
  );
}

export default PostsList;
