import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = { title: "Kennenlern-Portal", description: "MVP Starter" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="border-b">
          <nav className="container-like flex items-center gap-4 py-4">
            <Link href="/" className="font-semibold">Kennenlern</Link>
            <div className="ml-auto flex gap-3">
              <Link href="/discover" className="btn">Discover</Link>
              <Link href="/onboarding" className="btn">Onboarding</Link>
            </div>
          </nav>
        </header>
        <main className="container-like py-10">{children}</main>
        <footer className="container-like py-10 text-sm text-gray-500">© {new Date().getFullYear()} Kennenlern</footer>
      </body>
    </html>
  );
}
