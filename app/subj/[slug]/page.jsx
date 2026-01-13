import { notFound } from "next/navigation";
import BackButton from "@/app/components/BackButton";

import {
  getAllPosts,
  getPostBySlug,
  getTagsForPost,
} from "@/app/lib/posts.repository";
import { makePostSlug } from "@/app/lib/slugify";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((item) => ({
    slug: makePostSlug(item),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getPostBySlug(slug);

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${item.subject} - Class ${item.classLevel} (${item.board})`,
    description: item.description?.slice(0, 155),
    alternates: {
      canonical: `/subj/${makePostSlug(item)}`,
    },
  };
}

export default async function SubjDetailPage({ params }) {
  const { slug } = await params;
  const item = getPostBySlug(slug);

  if (!item) notFound();

  const tags = getTagsForPost(item);

  return (
    <article className="max-w-5xl px-4 py-10 mx-auto space-y-10">
      <BackButton href="/subj" label="Back to Subjects" />

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">
          {item.subject} — Class {item.classLevel}
        </h1>

        <p className="text-muted-foreground">
          {item.subdivision} • {item.stream} • {item.board} • {item.medium}
        </p>

        <p className="leading-relaxed">{item.description}</p>

        <div className="flex flex-wrap gap-2 pt-3">
          {tags.slice(0, 10).map((t) => (
            <Link
              key={t}
              href={`/subj/${slug}/tags?tag=${encodeURIComponent(t)}`}
              className="px-3 py-1 text-xs transition border rounded-full hover:bg-muted"
            >
              #{t}
            </Link>
          ))}
        </div>
      </header>

      {/* Chapters */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Chapters</h2>

        <div className="space-y-6">
          {item.chapters.map((ch) => (
            <div key={ch.chapterId} className="p-5 space-y-3 border rounded-xl">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">
                  {ch.sequenceNo}. {ch.chapterTitle}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {ch.estimatedHours} hrs
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                {ch.chapterDescription}
              </p>

              {/* Topics */}
              <div className="pt-2 space-y-3">
                {ch.topics.map((t) => (
                  <div key={t.topicId} className="p-4 rounded-lg bg-muted/30">
                    <div className="font-medium">{t.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {t.description}
                    </div>

                    <div className="mt-2 text-xs text-muted-foreground">
                      Difficulty: {t.difficulty} • {t.estimatedMinutes} mins • Resources:{" "}
                      {t.resources?.length ?? 0}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
