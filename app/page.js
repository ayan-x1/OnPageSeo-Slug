export const metadata = {
  title: "Home | SEO Slug",
  description:
    "Demonstration of SEO-friendly dynamic routing using clean, slug-based URLs built with the Next.js App Router.",
};

export default function HomePage() {
  return (
    <section className="text-center max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        SEO-Optimized Dynamic Routing with Next.js
      </h1>

      <p
        className="text-base sm:text-lg"
        style={{ color: "var(--muted)" }}
      >
        This project demonstrates how slug-based routing improves SEO
        compared to query parameters using real-world, production-ready
        architecture with the Next.js App Router.
      </p>
    </section>
  );
}
