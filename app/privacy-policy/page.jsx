export const metadata = {
  title: 'Privacy Policy | SEO Slug',
  description: 'Privacy policy for the SEO Slug demo project.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p style={{ color: 'var(--muted)' }}>
        This website does not collect, store, or process any personal data from
        visitors.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        No cookies, analytics trackers, or third-party scripts are used. All
        content is provided purely for demonstration and educational purposes.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        If this project is extended into a production application, a full
        privacy policy should be implemented in compliance with applicable
        regulations.
      </p>
    </section>
  );
}
