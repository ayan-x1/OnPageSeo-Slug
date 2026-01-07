import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/app/components/BackLink";
function getIdFromSlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  const id = Number(slug.split("-")[0]);
  return Number.isNaN(id) ? null : id;
}

async function getPostById(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogTagsPage({ params }) {
  const { slug } = await params; 

  const id = getIdFromSlug(slug);
  if (!id) notFound();

  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <BackLink href="/blog" label="Back to Blogs" />
      <h1 className="text-2xl font-bold mb-4">Tags for: {post.title}</h1>
      <ul className="space-y-1" style={{ color: "var(--muted)" }}>
        {post.tags.map((tag) => (
          < li key={tag}>• {tag}</li>
        ))}
      </ul>
      
    </section>
  );
}
