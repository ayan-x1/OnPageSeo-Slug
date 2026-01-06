export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions of using this website',
};

export default function TermsAndConditionsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <p className="text-zinc-400">
        This website is provided for educational and demonstration purposes only.
      </p>

      <p className="text-zinc-400">
        We make no guarantees regarding accuracy, availability, or completeness
        of the content.
      </p>

      <p className="text-zinc-400">
        By accessing this site, you agree to these terms and conditions.
      </p>
    </section>
  );
}
