import Link from "next/link";
import { notFound } from "next/navigation";
import { makePostSlug } from "@/app/lib/slugify";
import BackLink from "@/app/components/BackLink";
function getIdFromSlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  const id = Number(slug.split("-")[0]);
  return Number.isNaN(id) ? null : id;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return data.posts.map((post) => ({
    slug: makePostSlug(post),
  }));
}

async function getPostById(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  const id = getIdFromSlug(slug);
  if (!id) return { title: "Post Not Found" };

  const post = await getPostById(id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog`,
    description: post.body.slice(0, 150),
    alternates: {
      canonical: `/blog/${makePostSlug(post)}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  const id = getIdFromSlug(slug);
  if (!id) notFound();

  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
       <BackLink href="/blog" label="Back to Blogs" />

      <h1 className="text-3xl font-bold mb-4">
        {post.id}. {post.title}
      </h1>

      <p style={{ color: "var(--muted)" }} className="leading-relaxed">
        {post.body}
      </p>

      <div className="mt-6 text-sm text-zinc-400">
        <Link
          href={`/blog/${makePostSlug(post)}/tags`}
          className="text-sm underline hover:text-white"
          style={{ color: 'var(--muted)' }}
        >
          <strong>Tags: </strong>
        </Link>
        {post.tags.join(", ")}
      </div>
    </article>
  );
}
