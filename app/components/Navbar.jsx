'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--border)' }}>
      <nav className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-3 items-center">
  {/* Left: Logo */}
  <div className="flex items-center">
    <Link href="/" className="flex items-center gap-3">
      <Image src="/og/seo1.png" alt="Logo" width={40} height={40} />
      <span className="font-semibold">Seo-friendly</span>
    </Link>
  </div>

  {/* Center: Links */}
  <div className="flex justify-center gap-6 text-sm font-medium">
    <Link href="/">Home</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/about-us">About</Link>
  </div>

  {/* Right: Theme toggle */}
  <div className="flex justify-end">
    <ThemeToggle />
  </div>
</nav>

    </header>
  );
}
