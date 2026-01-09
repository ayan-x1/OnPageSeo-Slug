export const metadata = {
  title: 'Privacy Policy | SEO-Optimized Dynamic Routing with Next.js',
  description:
    'Read the privacy policy for the SEO-friendly slug routing built with Next.js App Router.',
  alternates: {
    canonical: 'https://on-page-seo-slug.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | SEO-Optimized Dynamic Routing with Next.js',
    description:
      'This project does not collect personal data. View the privacy policy for the SEO Slug.',
    url: 'https://on-page-seo-slug.vercel.app/privacy-policy',
    siteName: 'SEO Slug',
    type: 'article',
    images: [
      {
        url: 'https://on-page-seo-slug.vercel.app/og/seo1.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy – SEO Optimized Next.js Routing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | SEO-Optimized Dynamic Routing with Next.js',
    description:
      'This project does not collect personal data. View the privacy policy for the SEO Slug.',
    images: [
      'https://on-page-seo-slug.vercel.app/og/seo1.png',
    ],
  },
};


export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p className="text-muted-foreground">
        This website does not collect, store, or process any personal data from
        visitors.
      </p>

      <p className="text-muted-foreground">
        No cookies, analytics trackers, or third-party scripts are used. All
        content is provided purely for demonstration and educational purposes.
      </p>

      <p className="text-muted-foreground">
        If this project is extended into a production application, a full
        privacy policy must be implemented in compliance with applicable
        regulations.
      </p>
    </section>
  );
}

