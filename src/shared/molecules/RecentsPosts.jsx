import * as React from 'react';

import { SinglePostPreview } from '../atoms/SinglePostPreview';

export const RecentPosts = ({ data, children }) => {
  return (
    <div className="container mx-auto pt-[20px]">
      {children}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data?.map((post) => (
          <SinglePostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};
