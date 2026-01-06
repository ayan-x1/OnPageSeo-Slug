import Link from "next/link";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "SEO Slug",
    template: "%s | SEO Slug",
  },

  description: "SEO optimized website using Next.js App Router",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800">
          <div className=" justify-center max-w-6xl mx-auto px-6 py-4 flex gap-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about-us">About</Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">{children}</main>

        <footer className="border-t border-zinc-800 mt-20">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-zinc-400">
            <div className="flex justify-center gap-6 mb-3">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </div>
            <div>© 2026 SEO Demo</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
