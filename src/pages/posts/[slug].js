import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import Head from 'next/head';
import { Header } from '../../shared/molecules/Header';
import { Footer } from '../../shared/molecules/Footer';
import { HighlightedCode } from '../../shared/atoms/HighlightedCode';
import { Button } from '../../shared/molecules/Button';

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Joskonic</title>
        {frontMatter.description && <meta name="description" content={frontMatter.description} />}
        <meta property="og:title" content={frontMatter.title} />
        {frontMatter.description && (
          <meta property="og:description" content={frontMatter.description} />
        )}
        <meta property="og:type" content="article" />
        {frontMatter.featuredImage && (
          <meta property="og:image" content={frontMatter.featuredImage} />
        )}
        <meta property="og:url" content={`https://joskonic.com/posts/${frontMatter.slug || ''}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title} />
        {frontMatter.description && (
          <meta name="twitter:description" content={frontMatter.description} />
        )}
        {frontMatter.featuredImage && (
          <meta name="twitter:image" content={frontMatter.featuredImage} />
        )}
        <link rel="canonical" href={`https://joskonic.com/posts/${frontMatter.slug || ''}`} />
      </Head>
      <Header />
      <article className="article-light container mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10 mb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
              {frontMatter.title}
            </h1>
            {frontMatter.date && (
              <p className="text-gray-500 text-sm">
                {new Date(frontMatter.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>
          <Button onClick={() => window.history.back()}>← Go Back</Button>
        </div>

        {frontMatter.featuredImage && (
          <div className="w-full">
            <Image
              width={800} // intrinsic width
              height={600} // intrinsic height
              style={{
                width: '100%', // scale down to fit container
                height: 'auto', // keep aspect ratio
              }}
              src={frontMatter.featuredImage}
              alt={frontMatter.title}
              loading="eager"
            />
          </div>
        )}
        <div>
          <MDXRemote
            {...source}
            components={{
              code: ({ className, children }) => (
                <HighlightedCode className={className}>{children}</HighlightedCode>
              ),
            }}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'src/content/posts');
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const { serialize } = await import('next-mdx-remote/serialize');
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title || slug,
        ...data,
      },
    },
  };
}
