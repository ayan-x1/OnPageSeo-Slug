import Link from 'next/link';
import { notFound } from 'next/navigation';
import { makePostSlug } from '@/app/lib/slugify';

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();

  return data.posts.map((post) => ({
    slug: makePostSlug(post),
  }));
}

async function getPostById(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!slug || typeof slug !== 'string') {
    return { title: 'Post Not Found' };
  }

  const id = Number(slug.split('-')[0]);
  if (Number.isNaN(id)) {
    return { title: 'Post Not Found' };
  }

  const post = await getPostById(id);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.body.slice(0, 150),
    alternates: {
      canonical: `/blog/${makePostSlug(post)}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  if (!slug || typeof slug !== 'string') {
    notFound();
  }

  const id = Number(slug.split('-')[0]);
  if (Number.isNaN(id)) {
    notFound();
  }

  const post = await getPostById(id);
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center mb-6 px-4 py-2 rounded-md border border-zinc-700 text-sm hover:bg-zinc-800 transition"
      >
        ← Back to Blogs
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        {post.id}. {post.title}
      </h1>

      <p className="text-zinc-300 leading-relaxed">{post.body}</p>

      <div className="mt-6 text-sm text-zinc-400">
        <strong>Tags:</strong> {post.tags.join(', ')}
      </div>
    </article>
  );
}
