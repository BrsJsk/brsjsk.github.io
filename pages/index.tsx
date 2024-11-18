import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/posts";
import Head from "next/head";
import Post from "../interfaces/post";
import generateRssFeed from "../lib/rss";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0, 5);

  return (
    <>
      <Layout>
        <Head>
          <title>Boris Joskic</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  await generateRssFeed();
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
