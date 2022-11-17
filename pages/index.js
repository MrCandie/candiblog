import { Fragment } from "react";
import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Candiblog</title>
        <meta name="description" content="programming blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};
export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}
