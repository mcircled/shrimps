import PageHeading from "components/page-heading/PageHeading";
import Pagination from "components/pagination/Pagination";
import DefaultLayout from "layouts/DefaultLayout";
import React from "react";
import BlogCard from "components/blog-card/BlogCard";
import Footer from "components/footer/Footer";
import Header from "components/header/header";
import Newsletter from "components/newsletter/Newsletter";
import PostsList from "components/posts-list/PostsList";

type Props = {};

function Blog({}: Props) {
  return (
    <DefaultLayout>
      <PageHeading
        title="Blog"
        description={`Vonge blog features productivity, tips, inspiration and strategies
            for massive profits. Find out how to set up a successful blog or how
            to make yours even better!`}
      />

      <PostsList posts={[]} />

      <Pagination />

      <Newsletter
        title={"Join my mailing list"}
        action={
          "//frnla.us6.list-manage.com/subscribe/post?u=6314d69a3f315af7ce3fb00a0&amp;id=3038727cc3"
        }
        button={{
          text: "Subscribe",
        }}
      />
    </DefaultLayout>
  );
}

export default Blog;
