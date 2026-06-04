import Head from 'next/head';
import { getAllPosts } from '../shared/utils/getAllPosts';
import { AllPosts } from '../shared/organisms/AllPosts';
import { HomeHero } from '../shared/molecules/HomeHero';
import { Header } from '../shared/molecules/Header';
import { Footer } from '../shared/molecules/Footer';
import { Button } from '../shared/molecules/Button';
import { useRouter } from 'next/navigation';
import { RecentProjects } from '../shared/organisms/RecentProjects';

export default function Home({ posts }) {
  const { push } = useRouter();

  const goToAllPosts = () => {
    push('/posts');
  };

  const goToAllProjects = () => {
    push('/projects');
  };

  return (
    <>
      <Head>
        <title>Home | Joskonic</title>
        <meta
          name="description"
          content="Boris Joskic's personal site. Recent posts, projects, and more."
        />
        <meta property="og:title" content="Home | Joskonic" />
        <meta
          property="og:description"
          content="Boris Joskic's personal site. Recent posts, projects, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joskonic.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Joskonic" />
        <meta
          name="twitter:description"
          content="Boris Joskic's personal site. Recent posts, projects, and more."
        />
        <link rel="canonical" href="https://joskonic.com/" />
      </Head>

        <Header />
        <HomeHero />
        <AllPosts posts={posts} title="Recent posts" />

        <div className="w-full flex justify-center mt-12">
          <Button theme="light" onClick={goToAllPosts}>
            All posts
          </Button>
        </div>

        <RecentProjects title="Recent projects" isFirstTwo={true} />

        <div className="w-full flex justify-center mt-12">
          <Button theme="light" onClick={goToAllProjects}>
            All projects
          </Button>
        </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts({ limit: 4 });
  return {
    props: {
      posts,
    },
  };
}
