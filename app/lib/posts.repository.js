import dataset from "@/app/data/student_classes_dataset_100.json";
import { makePostSlug, getIdFromSlug } from "@/app/lib/slugify";

export function getAllPosts() {
  // dataset.items is the array of 100 items
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

/**
 * For /subj/[slug]/tags route
 * Unique tag list for a post (topics + subject tags)
 */
export function getTagsForPost(item) {
  const tags = new Set();

  // subject tags
  item.tags?.forEach((t) => tags.add(t));

  // chapter tags
  item.chapters?.forEach((ch) => {
    ch.tags?.forEach((t) => tags.add(t));
    ch.topics?.forEach((tp) => {
      tp.tags?.forEach((t) => tags.add(t));
    });
  });

  return Array.from(tags);
}

/**
 * Returns all posts that include a given tag
 */
export function getPostsByTag(tag) {
  const items = dataset.items;

  return items.filter((item) => {
    const postTags = getTagsForPost(item).map((t) => t.toLowerCase());
    return postTags.includes(tag.toLowerCase());
  });
}
