import Link from "next/link";
import { makePostSlug } from "@/app/lib/slugify";

export const metadata = {
  title: "Blog",
  description: "SEO-friendly blog using dynamic slug routing",
};

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return data.posts.sort((a, b) => a.id - b.id);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="max-w-3xl mx-auto space-y-6">
  <h1 className="text-3xl font-bold">Blogs</h1>

  <ul className="space-y-4">
    {posts.map(post => (
      <li key={post.id}>
        <Link
          href={`/blog/${makePostSlug(post)}`}
          className="block hover:underline"
        >
          <span className="font-medium">
            {post.id}. {post.title}
          </span>
        </Link>
      </li>
    ))}
  </ul>
</section>

  );
}
