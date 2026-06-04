import Link from 'next/link';
import * as React from 'react';

export const SinglePostPreview = ({ post }) => {
  return (
    <Link href={post.slug}>
      <article className="shadow-xl hover:scale-102 transition-transform mt-6 h-[400px] p-[6px] border border-white rounded-lg bg-white ">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover rounded-md"
            loading="lazy"
          />
        )}
        <span>
          <h3 className="pt-[20px] text-lg font-bold text-surface">{post.title}</h3>
          {post.excerpt && <p className="excerpt text-gray-600 text-base mt-2">{post.excerpt}</p>}
        </span>
      </article>
    </Link>
  );
};
