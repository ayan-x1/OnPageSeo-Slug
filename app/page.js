import Link from "next/link";
import Image from "next/image";
import HomeStats from "@/app/components/HomeStats";
import dataset from "@/app/data/student_dataset.json";

export const metadata = {
  title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
  description:
    "Learn how SEO-friendly slug-based dynamic routing improves discoverability using the Next.js App Router with real-world architecture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
    description:
      "A production-ready showcase of clean URLs, dynamic routing, and SEO best practices using Next.js App Router.",
    url: "/",
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
      "Clean URLs, slug-based routing, and SEO best practices implemented with Next.js App Router.",
    images: ["/og/seo1.png"],
  },
  keywords: [
    "Next.js SEO",
    "slug routing",
    "dynamic routing",
    "metadata",
    "OpenGraph",
    "Twitter cards",
    "App Router",
  ],
  robots: { index: true, follow: true },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "SEO Slug",
        url: "https://on-page-seo-slug.vercel.app/",
        description:
          "SEO optimized slug routing built with Next.js App Router.",
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        name: "SEO Slug",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: "https://on-page-seo-slug.vercel.app/",
        description:
          "A Next.js App Router project demonstrating SEO-friendly slug routing, metadata, pagination and tag browsing.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  const items = dataset.items ?? [];

  // compute stats
  const totalSubjects = items.length;
  const totalChapters = items.reduce(
    (sum, s) => sum + (s.chapters?.length ?? 0),
    0
  );
  const totalTopics = items.reduce(
    (sum, s) =>
      sum +
      (s.chapters?.reduce((acc, ch) => acc + (ch.topics?.length ?? 0), 0) ?? 0),
    0
  );

  const stats = [
    { label: "Subjects", value: totalSubjects, suffix: "+" },
    { label: "Chapters", value: totalChapters, suffix: "+" },
    { label: "Topics", value: totalTopics, suffix: "+" },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-16">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-3xl pt-6 mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          SEO-Optimized Dynamic Routing with Next.js
        </h1>

        <p className="text-base sm:text-lg" style={{ color: "var(--muted)" }}>
          A real-world implementation of <b>slug-based routing</b>, dynamic metadata, and
          SEO best practices using the <b>Next.js App Router</b>. Includes
          pagination, nested dataset rendering, and tag-based discovery.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          <Link
            href="/subj"
            className="px-5 py-2 text-sm font-medium transition border rounded-lg hover:bg-muted"
          >
            Browse Subjects
          </Link>

          <Link
            href="https://github.com/ayan-x1/OnPageSeo-Slug"
            target="_blank"
            className="px-5 py-2 text-sm font-medium text-white transition bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-90"
          >
            View GitHub Repo
          </Link>

          <Link
            href="/about-us"
            className="px-5 py-2 text-sm font-medium transition border rounded-lg hover:bg-muted"
          >
            About Project
          </Link>
        </div>
      </header>

      {/* STATS (Animated counters) */}
      <HomeStats stats={stats} />

      {/* FEATURES */}
      <section className="space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What This Project Demonstrates
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            Not just UI — this project showcases real SEO routing architecture.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "SEO-friendly slugs",
              desc: "Human-readable URLs that improve indexing and click-through rate.",
            },
            {
              title: "Dynamic routes + SSG",
              desc: "Dynamic route segments with generateStaticParams for static builds.",
            },
            {
              title: "Dynamic metadata",
              desc: "Per-page SEO metadata, canonical URLs, OpenGraph and Twitter cards.",
            },
            {
              title: "Pagination (SEO-safe)",
              desc: "Paginated route structure: /subj + /subj/page/[pageNo].",
            },
            {
              title: "Nested dataset rendering",
              desc: "Subjects include chapters → topics → resources, rendered in detail pages.",
            },
            {
              title: "Tag-based exploration",
              desc: "Topic tags enable content discovery and related subject navigation.",
            },
          ].map((f) => (
            <div key={f.title} className="p-6 space-y-2 border rounded-xl">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE ROUTE EXAMPLES */}
      <section className="p-6 space-y-5 border rounded-xl">
        <h2 className="text-xl font-semibold">Live SEO Route Examples</h2>

        <div className="grid gap-4 text-sm md:grid-cols-3">
          <div className="p-4 space-y-2 rounded-lg bg-muted/30">
            <div className="font-medium">Subject Slug</div>
            <code className="text-xs break-all">
              /subj/subj_xyz-physics-class-11-cbse-english
            </code>
          </div>

          <div className="p-4 space-y-2 rounded-lg bg-muted/30">
            <div className="font-medium">Pagination</div>
            <code className="text-xs break-all">/subj/page/2</code>
          </div>

          <div className="p-4 space-y-2 rounded-lg bg-muted/30">
            <div className="font-medium">Tag Route</div>
            <code className="text-xs break-all">/subj/[slug]/tags?tag=jee</code>
          </div>
        </div>
      </section>

      {/* SEO COMPARISON */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="p-6 space-y-2 border rounded-xl">
          <h3 className="text-lg font-semibold">Good URL (SEO-friendly)</h3>
          <code className="text-xs break-all">
            /subj/physics-class-11-cbse-english
          </code>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Readable, keyword-rich, and ideal for social sharing previews.
          </p>
        </div>

        <div className="p-6 space-y-2 border rounded-xl">
          <h3 className="text-lg font-semibold">Bad URL (Query params)</h3>
          <code className="text-xs break-all">
            /subj?id=93&cat=1&type=subject
          </code>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Poor readability, weak keyword signals, not ideal for SEO.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE FLOW */}
      <section className="p-6 space-y-6 border rounded-xl">
        <h2 className="text-xl font-semibold">Architecture Flow</h2>

        <div className="grid gap-3 text-sm md:grid-cols-5">
          {[
            "Dataset (JSON)",
            "Repository layer",
            "Slugify",
            "Dynamic Routes",
            "Metadata SEO",
          ].map((step, i) => (
            <div key={step} className="p-4 text-center rounded-lg bg-muted/30">
              <div className="text-xs text-muted-foreground">Step {i + 1}</div>
              <div className="font-medium">{step}</div>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          The project follows a clean pipeline where structured data is
          processed into SEO slugs, rendered via dynamic routes, and enriched
          with metadata for search engines and social previews.
        </p>
      </section>

      {/* SCREENSHOTS */}
      <section className="p-6 space-y-5 border rounded-xl">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Screenshots</h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            A quick preview of the project UI: homepage, subjects listing, and a
            subject detail page.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Home */}
          <a
            href="/screenshots/ss1.png"
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden transition border group rounded-xl bg-muted/10 hover:shadow-md"
          >
            <div className="relative aspect-video">
              <Image
                src="/screenshots/ss1.png"
                alt="Homepage screenshot"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-4">
              <div className="text-sm font-medium">Home</div>
              <div className="text-xs text-muted-foreground">
                Landing page with stats, features & SEO explanation.
              </div>
            </div>
          </a>

          {/* Subjects */}
          <a
            href="/screenshots/ss2.png"
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden transition border group rounded-xl bg-muted/10 hover:shadow-md"
          >
            <div className="relative aspect-video">
              <Image
                src="/screenshots/ss2.png"
                alt="Subjects page screenshot"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="text-sm font-medium">Subjects Directory</div>
              <div className="text-xs text-muted-foreground">
                SEO slug routing + pagination with 18 subjects per page.
              </div>
            </div>
          </a>

          {/* Details */}
          <a
            href="/screenshots/ss3.png"
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden transition border group rounded-xl bg-muted/10 hover:shadow-md"
          >
            <div className="relative aspect-video">
              <Image
                src="/screenshots/ss3.png"
                alt="Subject detail page screenshot"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="text-sm font-medium">Subject Details</div>
              <div className="text-xs text-muted-foreground">
                Nested chapters → topics with resources and metadata.
              </div>
            </div>
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Tip: Click any screenshot to open full-size preview in a new tab.
        </p>
      </section>
    </section>
  );
}