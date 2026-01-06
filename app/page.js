export const metadata = {
  title: 'Home | SEO Slug Demo',
  description: 'Demonstration of SEO-friendly routing using Next.js',
};

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        SEO-Optimized Dynamic Routing with Next.js
      </h1>

      <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
        This project demonstrates how slug-based routing improves SEO compared
        to query parameters using real-world architecture.
      </p>
    </section>
  );
}

