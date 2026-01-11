import dataset from "@/app/data/student_dataset.json";
import { makePostSlug, getIdFromSlug } from "@/app/lib/slugify";

export function getAllPosts() {
  return dataset.items;
}

export function getPostBySlug(slug) {
  const id = getIdFromSlug(slug);
  if (!id) return null;

  const items = dataset.items;
  return items.find((x) => x.subjectId === id) || null;
}

export function getAllPostSlugs() {
  return dataset.items.map((item) => makePostSlug(item));
}

export function getTagsForPost(item) {
  const tags = new Set();

  // subject tags
  item.tags?.forEach((t) => tags.add(t));

  // chapter + topic tags
  item.chapters?.forEach((ch) => {
    ch.tags?.forEach((t) => tags.add(t));

    ch.topics?.forEach((tp) => {
      tp.tags?.forEach((t) => tags.add(t));
    });
  });

  return Array.from(tags);
}

export function getPostsByTag(tag) {
  if (!tag || typeof tag !== "string") return [];
  const items = dataset.items;

  return items.filter((item) => {
    const postTags = getTagsForPost(item).map((t) => t.toLowerCase());
    return postTags.includes(tag.toLowerCase());
  });
}

export function getTotalPosts() {
  return dataset.items.length;
}

export function getTotalPages(perPage = 18) {
  return Math.ceil(dataset.items.length / perPage);
}

export function getPostsPage(page = 1, perPage = 18) {
  const currentPage = Number(page) || 1;

  if (currentPage < 1) return [];

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return dataset.items.slice(start, end);
}
