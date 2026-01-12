export function safeSlug(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function makePostSlug(item) {
  return [
    item.subjectId,
    safeSlug(item.subject),
    `class-${safeSlug(item.classLevel)}`,
    safeSlug(item.board),
    safeSlug(item.medium),
  ].join("-");
}

export function getIdFromSlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  return slug.split("-")[0] || null;
}
