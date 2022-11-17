import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <title>All Posts</title>
      <meta name="description" content="all programming related tutorials" />
      <AllPosts posts={posts} />;
    </Fragment>
  );
};
export default AllPostPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
