import {
  getAllSubjectUrls,
  getAllTagUrls,
  getAllPaginationUrls,
} from "@/app/lib/posts.repository";

const BASE_URL = "https://on-page-seo-slug.vercel.app";

export default async function sitemap() {
  // Static routes
  const staticRoutes = [
    "",
    "/about-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...getAllSubjectUrls(BASE_URL),
    ...getAllTagUrls(BASE_URL),
    ...getAllPaginationUrls(BASE_URL),
  ];
}