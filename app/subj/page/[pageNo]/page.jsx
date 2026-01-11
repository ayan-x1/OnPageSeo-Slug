import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsPage, getTotalPages } from "@/app/lib/posts.repository";
import { makePostSlug } from "@/app/lib/slugify";

export async function generateStaticParams() {
  const perPage = 18;
  const totalPages = getTotalPages(perPage);

  return Array.from({ length: totalPages }, (_, i) => ({
    pageNo: String(i + 1),
  }));
}

export async function generateMetadata({ params }) {
  const { pageNo } = await params;
  const page = Number(pageNo);

  return {
    title: `Subjects - Page ${page}`,
    description: `Browse subjects - page ${page} with SEO-friendly pagination.`,
    alternates: {
      canonical: `/subj/page/${page}`,
    },
  };
}

export default async function SubjectsPaginationPage({ params }) {
  const { pageNo } = await params;

  const perPage = 18;
  const page = Number(pageNo);

  if (!page || page < 1) notFound();

  const totalPages = getTotalPages(perPage);
  if (page > totalPages) notFound();

  const posts = getPostsPage(page, perPage);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Subjects Directory
        </h1>

        <p className="text-base sm:text-lg" style={{ color: "var(--muted)" }}>
          Page <b>{page}</b> of <b>{totalPages}</b> — 18 subjects per page.
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

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-3 pt-4">
        {page > 1 ? (
          <Link
            href={page === 2 ? "/subj" : `/subj/page/${page - 1}`}
            className="border rounded-lg px-4 py-2 text-sm hover:bg-muted transition"
          >
            ← Prev
          </Link>
        ) : (
          <span className="border rounded-lg px-4 py-2 text-sm opacity-40">
            ← Prev
          </span>
        )}

        <span className="text-sm text-muted-foreground">
          Page <b>{page}</b> / <b>{totalPages}</b>
        </span>

        {page < totalPages ? (
          <Link
            href={`/subj/page/${page + 1}`}
            className="border rounded-lg px-4 py-2 text-sm hover:bg-muted transition"
          >
            Next →
          </Link>
        ) : (
          <span className="border rounded-lg px-4 py-2 text-sm opacity-40">
            Next →
          </span>
        )}
      </div>
    </section>
  );
}
