export const metadata = {
  title: 'Terms & Conditions | SEO Slug',
  description: 'Terms and conditions for using the SEO Slug demo project.',
};

export default function TermsAndConditionsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <p style={{ color: 'var(--muted)' }}>
        This website is a demonstration project intended for educational and
        portfolio purposes only.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        The content, structure, and code are provided as-is, without any
        warranties or guarantees of fitness for a particular purpose.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        By using this website, you agree that the author is not liable for any
        direct or indirect consequences arising from its use.
      </p>
    </section>
  );
}
