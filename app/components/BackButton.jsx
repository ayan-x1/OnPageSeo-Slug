import Link from 'next/link';

export default function BackButton({ href, label }) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center gap-2
        text-sm font-medium
        px-3 py-1.5
        rounded-full
        transition
        hover:opacity-80
      "
      style={{
        backgroundColor: 'color-mix(in srgb, var(--fg) 6%, transparent)',
        color: 'var(--fg)',
      }}
    >
      <ArrowLeftIcon />
      <span>{label}</span>
    </Link>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
