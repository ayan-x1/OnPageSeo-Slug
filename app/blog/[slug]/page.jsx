import Link from "next/link";
import { notFound } from "next/navigation";
import { makePostSlug } from "@/app/lib/slugify";
import BackButton from "@/app/components/BackButton";

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
  const id = getIdFromSlug(params.slug);
  if (!id) return { title: "Post Not Found" };

  const post = await getPostById(id);
  if (!post) return { title: "Post Not Found" };

  const ogImage = `https://on-page-seo-slug.vercel.app/og/blog?title=${encodeURIComponent(
    post.title
  )}`;

  return {
    title: `${post.title}`,
    description: post.body.slice(0, 155),

    openGraph: {
      type: "article",
      title: post.title,
      description: post.body.slice(0, 155),
      url: `https://on-page-seo-slug.vercel.app/blog/${makePostSlug(post)}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body.slice(0, 155),
      images: [ogImage],
    },

    alternates: {
      canonical: `/blog/${makePostSlug(post)}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const id = getIdFromSlug(params.slug);
  if (!id) notFound();

  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <BackButton href="/blog" label="Back to Blogs" />

      <h1 className="text-3xl font-bold">
        {post.id}. {post.title}
      </h1>

      <p className="leading-relaxed text-muted-foreground">
        {post.body}
      </p>

      <div className="text-sm">
        <span className="font-medium">Tags:</span>{" "}
        {post.tags.join(", ")}
      </div>
    </article>
  );
}