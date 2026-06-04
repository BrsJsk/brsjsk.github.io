import Head from 'next/head';
import { Footer } from '../shared/molecules/Footer';
import { Header } from '../shared/molecules/Header';
import { RecentProjects } from '../shared/organisms/RecentProjects';

export default function ProjectsIndex() {
  return (
    <>
      <Head>
        <title>Projects | Joskonic</title>
        <meta name="description" content="Explore all projects by Boris Joskic." />
        <meta property="og:title" content="Projects | Joskonic" />
        <meta property="og:description" content="Explore all projects by Boris Joskic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joskonic.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Joskonic" />
        <meta name="twitter:description" content="Explore all projects by Boris Joskic." />
        <link rel="canonical" href="https://joskonic.com/projects" />
      </Head>
      <Header />
      <RecentProjects title="All projects" />

      <Footer />
    </>
  );
}
