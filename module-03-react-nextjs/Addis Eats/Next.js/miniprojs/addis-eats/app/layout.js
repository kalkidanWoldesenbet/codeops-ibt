
import "./globals.css";
import Providers from "./providers";
import SignOutButton from "@/app/components/SignOutButton";
import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Addis Eats",
    template: "%s | Addis Eats",
  },
  description:
    "Discover authentic Ethiopian dishes, explore our menu, and enjoy Addis Eats.",
  openGraph: {
    type: "website",
    siteName: "Addis Eats",
    title: "Addis Eats",
    description: "Discover authentic Ethiopian food at Addis Eats.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-orange-50 text-gray-900">
        <Providers>
          <header className="bg-orange-600 px-6 py-5 text-white shadow-md">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
              <Link href="/" className="text-2xl font-bold">
                Addis Eats
              </Link>
              <nav className="flex gap-5 font-medium">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/checkout">Checkout</Link>
                <SignOutButton />
              </nav>
            </div>
          </header>

          <div className="flex-1">{children}</div>

          <footer className="mt-12 bg-gray-900 px-6 py-5 text-center text-white">
            <p>© 2026 Addis Eats. Ethiopian food, made with love.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
