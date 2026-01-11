export function safeSlug(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/**
 * Make SEO slug for subject item
 * example:
 * subj_abc123-physics-class-11-state-board-english
 */
export function makePostSlug(item) {
  return [
    item.subjectId,
    safeSlug(item.subject),
    `class-${safeSlug(item.classLevel)}`,
    safeSlug(item.board),
    safeSlug(item.medium),
  ].join("-");
}

/**
 * Extract subjectId from slug
 */
export function getIdFromSlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  return slug.split("-")[0] || null;
}
