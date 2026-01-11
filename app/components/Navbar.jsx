"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/subj", label: "Subjects" },
  { href: "/about-us", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b sticky top-0 z-50 bg-(--bg)/90 backdrop-blur">
      <nav className="max-w-5xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-30">
            <Image src="/og/seo1.png" alt="Logo" width={36} height={36} />
            <span className="font-semibold leading-tight">
              SEO <br className="sm:hidden" />
              Slug
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="items-center justify-center flex-1 hidden gap-6 text-sm font-medium md:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    active ? "text-(--fg)" : "text-(--muted)"
                  } hover:text-(--fg)`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="p-2 border rounded-lg md:hidden"
              style={{ borderColor: "var(--border)" }}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-5 h-0.5 bg-(--fg) mb-1"></span>
              <span className="block w-5 h-0.5 bg-(--fg) mb-1"></span>
              <span className="block w-5 h-0.5 bg-(--fg)"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="p-3 mt-3 space-y-1 border md:hidden rounded-xl"
            style={{ borderColor: "var(--border)" }}
          >
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-muted/30 text-(--fg)" : "text-(--muted)"
                  } hover:text-(--fg) hover:bg-muted/20`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
