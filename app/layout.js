import './globals.css';
import { Providers } from './providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
