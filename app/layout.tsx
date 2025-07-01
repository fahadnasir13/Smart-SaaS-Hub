import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart SaaS Dashboard",
  description: "Centralized, modular, scalable dashboard for SaaS product owners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
        <body className="antialiased">{children}</body>
    </html>
  );
}