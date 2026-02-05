import type { Metadata } from "next";
import { BRAND } from "@/data/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: BRAND.siteTitle,
  description: BRAND.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="grain">{children}</body>
    </html>
  );
}
