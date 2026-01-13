import Link from "next/link";
import BackButton from "@/app/components/BackButton";
import {
  getPostBySlug,
  getTagsForPost,
  getPostsByTag,
} from "@/app/lib/posts.repository";
import { makePostSlug } from "@/app/lib/slugify";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Tags",
};

export default async function TagsPage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;

  const item = getPostBySlug(slug);
  if (!item) notFound();

  const tag = sp?.tag || "";
  const tags = getTagsForPost(item);

  const related = tag ? getPostsByTag(tag) : [];

  return (
    <section className="max-w-5xl px-4 py-10 mx-auto space-y-8">
      <BackButton href={`/subj/${slug}`} label="Back to Subject" />

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tags</h1>
        <p className="text-muted-foreground">
          Subject: {item.subject} (Class {item.classLevel})
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Link
            key={t}
            href={`/subj/${slug}/tags?tag=${encodeURIComponent(t)}`}
            className={`text-xs border rounded-full px-3 py-1 transition ${
              tag === t ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-muted"
            }`}
          >
            #{t}
          </Link>
        ))}
      </div>

      {tag ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Subjects related to: <span className="underline">#{tag}</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.subjectId}
                href={`/subj/${makePostSlug(p)}`}
                className="p-4 transition border rounded-xl hover:shadow-md"
              >
                <div className="font-semibold">{p.subject}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {p.subdivision} • {p.stream} • Class {p.classLevel}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground">
          Select a tag to see related subjects.
        </p>
      )}
    </section>
  );
}
