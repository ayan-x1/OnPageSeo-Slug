import Link from "next/link";
import {
  getPostsPage,
  getTotalPages,
  getTotalPosts,
} from "@/app/lib/posts.repository";
import { makePostSlug } from "@/app/lib/slugify";

export const metadata = {
  title: "Subjects",
  description:
    "Browse subjects with subdivision, streams, class levels, chapters, and topic resources using SEO-friendly slug-based routing in Next.js App Router.",

  alternates: {
    canonical: "/subj",
  },

  openGraph: {
    title: "Subjects",
    description:
      "Explore subjects organized by subdivision → streams → classes with nested chapters/topics using clean SEO-friendly dynamic routes in Next.js.",
    url: "/subj",
    siteName: "SEO Slug",
    images: [
      {
        url: "/og/seo1.png",
        width: 1200,
        height: 630,
        alt: "Subjects – SEO Slug",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Subjects",
    description:
      "Browse subjects with chapters and topics using SEO-friendly slug-based routing in Next.js App Router.",
    images: ["/og/seo1.png"],
  },

  keywords: [
    "Next.js SEO",
    "SEO friendly routing",
    "slug routing",
    "dynamic routes",
    "Next.js App Router",
    "subjects dataset",
    "chapters topics education API",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export default async function SubjPage() {
  const perPage = 18;
  const currentPage = 1;

  const posts = getPostsPage(currentPage, perPage);
  const totalSubjects = getTotalPosts();
  const totalPages = getTotalPages(perPage);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <header className="space-y-3 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Subjects Directory
        </h1>

        <p className="text-base sm:text-lg" style={{ color: "var(--muted)" }}>
          This page demonstrates <b>SEO-friendly slug routing</b> by listing
          subjects organized by <b>subdivision</b>, <b>streams</b>, and{" "}
          <b>class levels</b>. Each subject opens a dynamic route with nested
          chapters and topics.
        </p>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Total Subjects: <b>{totalSubjects}</b> • Showing <b>{perPage}</b> per
          page • Page <b>{currentPage}</b> of <b>{totalPages}</b>
        </p>
      </header>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item) => (
          <Link
            key={item.subjectId}
            href={`/subj/${makePostSlug(item)}`}
            className="rounded-xl border p-5 hover:shadow-md transition bg-background"
          >
            <h2 className="font-semibold text-lg leading-tight">
              {item.subject}
            </h2>

            <div className="mt-2 text-sm text-muted-foreground space-y-1">
              <p>
                {item.subdivision} • {item.stream}
              </p>
              <p>
                Class {item.classLevel} • {item.board}
              </p>
              <p>Medium: {item.medium}</p>
            </div>

            <p className="mt-3 text-sm line-clamp-3">{item.description}</p>

            <div className="mt-4 text-xs text-muted-foreground">
              Chapters: {item.chapters?.length ?? 0} • Difficulty:{" "}
              {item.difficultyBand ?? "N/A"}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 pt-4">
        <span className="text-sm text-muted-foreground">
          Page <b>{currentPage}</b> / <b>{totalPages}</b>
        </span>

        {totalPages > 1 && (
          <Link
            href="/subj/page/2"
            className="border rounded-lg px-4 py-2 text-sm hover:bg-muted transition"
          >
            Next →
          </Link>
        )}
      </div>
    </section>
  );
}
