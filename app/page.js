export const metadata = {
  title: 'Home | SEO Slug',
  description: 'Demonstration of SEO-friendly routing using Next.js',
};

export default function HomePage() {
  return (
    <section className="text-center max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl sm:text-4xl font-bold">
        SEO-Optimized Dynamic Routing with Next.js
      </h1>

      <p style={{ color: 'var(--muted)' }} className="text-lg">
        This project demonstrates how slug-based routing improves SEO compared
        to query parameters using real-world architecture.
      </p>
    </section>
  );
}