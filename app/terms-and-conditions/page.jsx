export const metadata = {
  title: 'Terms & Conditions | SEO-Optimized Dynamic Routing with Next.js',
  description:
    'Read the terms and conditions for using the SEO Slug project built with Next.js.',
  alternates: {
    canonical: 'https://on-page-seo-slug.vercel.app/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | SEO-Optimized Dynamic Routing with Next.js',
    description:
      'Terms and conditions governing the use of the SEO-friendly Next.js slug routing.',
    url: 'https://on-page-seo-slug.vercel.app/terms-and-conditions',
    siteName: 'SEO Slug',
    type: 'article',
    images: [
      {
        url: 'https://on-page-seo-slug.vercel.app/og/seo1.png',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions – SEO Optimized Next.js Routing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | SEO-Optimized Dynamic Routing with Next.js',
    description:
      'Terms and conditions governing the use of the SEO-friendly Next.js slug routing.',
    images: ['https://on-page-seo-slug.vercel.app/og/seo1.png'],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4 py-12">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <p className="text-muted-foreground">
        This website is a demonstration project intended for educational and
        portfolio purposes only.
      </p>

      <p className="text-muted-foreground">
        The content, structure, and code are provided as-is, without warranties
        of any kind, express or implied.
      </p>

      <p className="text-muted-foreground">
        By using this website, you agree that the author is not liable for any
        direct or indirect consequences arising from its use.
      </p>
    </section>
  );
}
