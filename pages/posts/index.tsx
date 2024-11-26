import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/posts";
import type Post from "../../interfaces/post";
import PostPreview from "../../components/post-preview";
import Head from "next/head";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
        <Head>
                <title>Boris Joskic - Posts</title>
              </Head>
      <Layout>
        <Container>
          <div className="flex flex-col">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
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
