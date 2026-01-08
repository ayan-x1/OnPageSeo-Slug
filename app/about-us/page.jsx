export const metadata = {
  title: 'About Us',
  description: 'Learn more about this SEO-focused Next.js project.',
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">About This Project</h1>

      <p style={{ color: 'var(--muted)' }}>
        This project demonstrates how SEO-friendly, slug-based dynamic routing
        can be implemented using the Next.js App Router.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        It focuses on real-world architecture patterns such as clean URLs,
        dynamic metadata generation, layout composition, and scalable routing
        strategies suitable for production-grade applications.
      </p>
    </section>
  );
}
