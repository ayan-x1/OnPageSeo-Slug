export const metadata = {
  title: 'About This Project | SEO Slug Demo',
  description:
    'Learn how this SEO-focused Next.js project implements slug-based dynamic routing and metadata.',
  alternates: {
    canonical: 'https://on-page-seo-slug.vercel.app/about',
  },
  openGraph: {
    title: 'About This Project | SEO Slug Demo',
    description:
      'An overview of an SEO-focused Next.js App Router project with dynamic slugs and metadata.',
    url: 'https://on-page-seo-slug.vercel.app/about',
    siteName: 'SEO Slug Demo',
    type: 'website',
    images: [
      {
        url: 'https://on-page-seo-slug.vercel.app/og/seo1.png',
        width: 1200,
        height: 630,
        alt: 'About – SEO Slug Demo Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About This Project | SEO Slug Demo',
    description:
      'An overview of an SEO-focused Next.js App Router project with dynamic slugs and metadata.',
    images: ['https://on-page-seo-slug.vercel.app/og/seo1.png'],
  },
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4 py-12">
      <h1 className="text-3xl font-bold">About This Project</h1>

      <p className="text-muted-foreground">
        This project demonstrates how SEO-friendly, slug-based dynamic routing
        can be implemented using the Next.js App Router.
      </p>

      <p className="text-muted-foreground">
        It showcases real-world architecture patterns such as clean URLs,
        dynamic metadata generation, layout composition, and scalable routing
        suitable for production-grade applications.
      </p>
    </section>
  );
}
