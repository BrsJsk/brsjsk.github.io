import Head from 'next/head';
import { getAllPosts } from '../../shared/utils/getAllPosts';
import { AllPosts } from '../../shared/organisms/AllPosts';
import { Header } from '../../shared/molecules/Header';
import { Footer } from '../../shared/molecules/Footer';

export default function PostsIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Posts | Joskonic</title>
        <meta name="description" content="Browse all blog posts by Boris Joskic." />
        <meta property="og:title" content="Posts | Joskonic" />
        <meta property="og:description" content="Browse all blog posts by Boris Joskic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joskonic.com/posts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Posts | Joskonic" />
        <meta name="twitter:description" content="Browse all blog posts by Boris Joskic." />
        <link rel="canonical" href="https://joskonic.com/posts" />
      </Head>
      <Header />
      <AllPosts posts={posts} />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // You can pass { limit: 5 } to only get 5 posts
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
