import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en" >
      <body >
        <header className="site-header">
          <h1>Addis Eats</h1>
          <p>Delicious Ethiopian food, delivered to you.</p>
        </header>
        <main className="site-main">
          {children}
        </main>
        <footer className="site-footer">
          <p>&copy; 2026 Addis Eats. All rights reserved.</p>
        </footer>
      </body>
    </html>

  );
}
