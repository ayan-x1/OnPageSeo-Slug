export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm"
            style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
      <p>© 2026 SEO Demo</p>

      <div className="mt-2 flex justify-center gap-4">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </div>
    </footer>
  );
}
