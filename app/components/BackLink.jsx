import Link from 'next/link';

export default function BackLink({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-medium transition hover:underline"
      style={{ color: 'var(--muted)' }}
    >
      <span aria-hidden>←</span>
      <span>{label}</span>
    </Link>
  );
}
