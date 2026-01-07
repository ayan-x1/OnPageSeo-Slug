'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="flex gap-4 text-sm sm:text-base">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about-us">About</Link>
      </div>

      {/* ICON TOGGLE ONLY */}
      <ThemeToggle />
    </nav>
  );
}
