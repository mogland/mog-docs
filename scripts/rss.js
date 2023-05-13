const fs = require('fs');
const RSS = require('rss');
const matter = require('gray-matter');

const paths = fs.readdirSync('./pages/blog');

const feed = new RSS({
  title: 'Mog Blog',
  description: 'The latest blog post of Mog',
  feed_url: 'https://mog.js.org/rss.xml',
  site_url: 'https://mog.js.org',
  language: 'zh-cn',
});

const posts = [];

paths.forEach((path) => {
  const fileContent = fs.readFileSync(`./pages/blog/${path}`, 'utf-8');
  const { data } = matter(fileContent);
  feed.item({
    title: data.title,
    url: `https://mog.js.org/blog/${path.replace(/\.mdx?/, '')}`,
    date: new Date(data.date),
  });

  posts.push({
    title: data.title,
    url: `https://mog.js.org/blog/${path.replace(/\.mdx?/, '')}`,
    date: new Date(data.date),
  });
});

fs.writeFileSync('./public/rss.xml', feed.xml());
fs.writeFileSync('./public/rss.json', JSON.stringify({ posts }));