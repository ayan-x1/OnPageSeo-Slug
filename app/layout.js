import './globals.css';
import { Providers } from './providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "SEO Slug",
    template: "%s | SEO Slug",
  },
  description:
    "SEO-optimized demo showcasing clean URLs, dynamic routing, and slug-based architecture built with Next.js App Router.",

  openGraph: {
  type: "website",
  url: "https://on-page-seo-slug.vercel.app/",
  title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
  description:
    "A production-ready demo showcasing clean URLs, dynamic routing, and SEO best practices using Next.js App Router.",
  images: [
    {
      url: "https://on-page-seo-slug.vercel.app/og/seo1.png",
      width: 1200,
      height: 630,
      alt: "SEO Slug – Next.js SEO-friendly Routing",
    },
  ],
},
  twitter: {
    card: "summary_large_image",
    title: "SEO Slug – SEO-Optimized Dynamic Routing with Next.js",
    description:
      "Clean URLs, slug-based routing, and SEO best practices implemented with the Next.js App Router.",
    images: [
      "https://on-page-seo-slug.vercel.app/og/seo1.png",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col ${inter.className}`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 w-full">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              {children}
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
