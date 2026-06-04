import React from 'react';
import { SinglePostPreview } from '../atoms/SinglePostPreview';
import { SectionTitle } from '../atoms/SectionTitle';

export const AllPosts = ({ posts, title = 'All posts' }) => {
  return (
    <div className="container mx-auto pt-8">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {posts.map((post) => (
          <SinglePostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};
