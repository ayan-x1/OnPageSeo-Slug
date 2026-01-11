'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--border)' }}>
      <nav className="grid items-center max-w-5xl grid-cols-3 px-4 py-4 mx-auto">
  
  <div className="flex items-center">
    <Link href="/" className="flex items-center gap-3">
      <Image src="/og/seo1.png" alt="Logo" width={40} height={40} />
      <span className="font-semibold">SEO Slug</span>
    </Link>
  </div>

  <div className="flex justify-center gap-6 text-sm font-medium">
    <Link href="/">Dashboard</Link>
    <Link href="/subj">Subjects</Link>
    <Link href="/about-us">About</Link>
  </div>

  <div className="flex justify-end">
    <ThemeToggle />
  </div>
</nav>

    </header>
  );
}
