import Newsletter from "components/newsletter/Newsletter";
import PostContent from "components/post-content/PostContent";
import PostTop from "components/post-top/PostTop";
import DefaultLayout from "layouts/DefaultLayout";
import PostNavigation from "components/post-navigation/PostNavigation";

type Props = {};

function Post({}: Props) {
  return (
    <DefaultLayout>
      <PostTop />
      <PostContent />
      <PostNavigation />
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

export default Post;
