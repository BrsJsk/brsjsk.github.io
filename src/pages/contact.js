import Head from 'next/head';
import { Footer } from '../shared/molecules/Footer';
import { Header } from '../shared/molecules/Header';
import { RecentProjects } from '../shared/organisms/RecentProjects';
import { ContactForm } from '../shared/organisms/ContactForm';

export default function ContactIndex() {
  return (
    <>
      <Head>
        <title>Projects | Joskonic</title>
        <meta name="description" content="Contact Boris Joskic." />
        <meta property="og:title" content="Contact | Joskonic" />
        <meta property="og:description" content="Contact by Boris Joskic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joskonic.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Joskonic" />
        <meta name="twitter:description" content="Contact by Boris Joskic." />
        <link rel="canonical" href="https://joskonic.com/contact" />
      </Head>
      <Header />

      <ContactForm />

      <Footer />
    </>
  );
}
