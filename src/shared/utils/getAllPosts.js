import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Get all blog posts from the content directory, sorted by date desc, optionally limited.
 * @param {Object} options
 * @param {number} [options.limit] - Limit the number of posts returned
 * @returns {Array} Array of post objects
 */
export function getAllPosts({ limit } = {}) {
  const postsDir = path.join(process.cwd(), 'src/content/posts');
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  let posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    return {
      slug: data.slug,
      title: data.title,
      excerpt: content.substring(0, 180) + (content.length > 180 ? '...' : ''),
      featuredImage: data.featuredImage,
      date: data.date,
      published: data.published,
    };
  });
  posts = posts.filter((p) => p.published).sort((a, b) => new Date(b.date) - new Date(a.date));
  if (typeof limit === 'number') {
    posts = posts.slice(0, limit);
  }
  return posts;
}
