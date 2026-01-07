export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
        <p style={{ color: 'var(--muted)' }}>
          © 2026 SEO Demo
        </p>

        <div className="mt-2 flex justify-center gap-4">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
