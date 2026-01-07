'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header
      className="border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">About</Link>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
