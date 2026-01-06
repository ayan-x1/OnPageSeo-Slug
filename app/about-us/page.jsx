export const metadata = {
  title: 'About Us',
  description: 'About our SEO-focused Next.js demo project',
};

export default function AboutUsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">About Us</h1>

      <p className="text-zinc-400">
        This project demonstrates SEO best practices using the Next.js App Router,
        dynamic routing, and metadata APIs.
      </p>

      <p className="text-zinc-400">
        It is built to showcase clean URL structures, server components,
        and scalable frontend architecture.
      </p>
    </section>
  );
}
