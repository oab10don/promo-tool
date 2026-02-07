import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND } from "@/data/brand";

type BrandShellProps = {
  children: ReactNode;
  fixedHeight?: boolean;
};

export function BrandShell({ children, fixedHeight }: BrandShellProps) {
  return (
    <div
      className={`flex justify-center px-4 ${
        fixedHeight
          ? "h-screen overflow-hidden py-6 sm:py-10"
          : "min-h-screen py-10 sm:py-16"
      }`}
    >
      <div className={`w-full max-w-2xl ${fixedHeight ? "flex flex-col" : ""}`}>
        {BRAND.isSample && (
          <div className={`mb-4 rounded-lg bg-sand/40 px-4 py-2 text-center text-xs text-muted ${fixedHeight ? "shrink-0" : ""}`}>
            サンプルサイトです。自社のブランド・商品に置き換えてご利用いただけます。
          </div>
        )}
        <nav className={`flex items-center justify-between ${fixedHeight ? "mb-4 shrink-0" : "mb-8"}`}>
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            {BRAND.name}
          </Link>
          <Link
            href="/"
            className="rounded-full border border-line px-4 py-1.5 text-xs text-muted transition-colors hover:border-sage hover:text-ink"
          >
            トップへ戻る
          </Link>
        </nav>
        {fixedHeight ? (
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
