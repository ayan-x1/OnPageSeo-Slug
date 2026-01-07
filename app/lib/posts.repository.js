import { posts } from "./posts.data";

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}
