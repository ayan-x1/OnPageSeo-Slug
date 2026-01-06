export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy of the SEO-focused Next.js demo project',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p className="text-zinc-400">
        We respect your privacy. This website does not collect personal data,
        store cookies, or track users.
      </p>

      <p className="text-zinc-400">
        Any data shown on this site is fetched from public APIs for demonstration
        purposes only.
      </p>

      <p className="text-zinc-400">
        By using this website, you agree to this privacy policy.
      </p>
    </section>
  );
}
