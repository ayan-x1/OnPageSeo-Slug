export const metadata = {
  title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
  description:
    "Learn how SEO-friendly slug-based dynamic routing improves discoverability using the Next.js App Router with real-world architecture.",
  openGraph: {
    title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
    description:
      "A production-ready demo showcasing clean URLs, dynamic routing, and SEO best practices using Next.js App Router.",
    url: "https://on-page-seo-slug.vercel.app/",
    siteName: "SEO Slug",
    images: [
      {
        url: "/og/seo1.png",
        width: 1200,
        height: 630,
        alt: "SEO Slug – SEO Optimized Next.js Routing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
    description:
      "Clean URLs, slug-based routing, and SEO best practices implemented with the Next.js App Router.",
    images: ["/public/seo.png"],
  },
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
