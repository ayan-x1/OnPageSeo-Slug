import dataset from "@/app/data/student_dataset.json";
import { makePostSlug, getIdFromSlug, safeSlug } from "@/app/lib/slugify";


export function getAllPosts() {
  return dataset.items;
}

export function getPostBySlug(slug) {
  const id = getIdFromSlug(slug);
  if (!id) return null;

  return dataset.items.find((x) => x.subjectId === id) || null;
}

export function getAllPostSlugs() {
  return dataset.items.map((item) => makePostSlug(item));
}

export function getTagsForPost(item) {
  const tags = new Set();

  item.tags?.forEach((t) => tags.add(t));

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

  return dataset.items.filter((item) => {
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
  return dataset.items.slice(start, start + perPage);
}

export function getAllSubjectUrls(baseUrl) {
  return dataset.items.map((item) => ({
    url: `${baseUrl}/subj/${makePostSlug(item)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
}

export function getAllTagUrls(baseUrl) {
  const tags = new Set();

  dataset.items.forEach((item) => {
    getTagsForPost(item).forEach((t) => tags.add(t));
  });

  return Array.from(tags).map((tag) => ({
    url: `${baseUrl}/tags/${safeSlug(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}

export function getAllPaginationUrls(baseUrl, perPage = 18) {
  const totalPages = getTotalPages(perPage);

  return Array.from({ length: totalPages }).map((_, i) => ({
    url: `${baseUrl}/page/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
}