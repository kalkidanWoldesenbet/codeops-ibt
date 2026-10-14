import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Addis Eats",
  description: "Discover delicious Ethiopian dishes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <header className="site-header">
            <h1>Addis Eats</h1>
          </header>

          <main className="site-main flex-1">{children}</main>

          <footer className="site-footer">
            <p>&copy; 2026 Addis Eats. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}