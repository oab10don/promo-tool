import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND } from "@/data/brand";

type BrandShellProps = {
  children: ReactNode;
};

export function BrandShell({ children }: BrandShellProps) {
  return (
    <div className="flex min-h-screen justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-2xl">
        {BRAND.isSample && (
          <div className="mb-4 rounded-lg bg-sand/40 px-4 py-2 text-center text-xs text-muted">
            サンプルサイトです。自社のブランド・商品に置き換えてご利用いただけます。
          </div>
        )}
        <nav className="mb-8 flex items-center justify-between">
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
        {children}
      </div>
    </div>
  );
}
