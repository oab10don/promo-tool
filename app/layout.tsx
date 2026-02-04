import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "肌悩み診断 | mariko-s",
  description:
    "5つの質問であなたの肌タイプを診断。自然派ハーブコスメのおすすめアイテムをご提案します。",
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
