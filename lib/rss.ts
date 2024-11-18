import RSS from "rss";
import { getAllPosts } from "./posts";
import fs from "fs";

export default async function generateRssFeed() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
  ]);
  const site_url = "brsjsk.github.io";

  const feedOptions = {
    title: "Boris Joskic | RSS Feed",
    description: "Boris Joskic | RSS Feed",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Boris Joskic`,
  };

  const feed = new RSS(feedOptions);

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
