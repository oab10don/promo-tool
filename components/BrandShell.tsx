import Link from "next/link";
import type { ReactNode } from "react";

type BrandShellProps = {
  children: ReactNode;
};

export function BrandShell({ children }: BrandShellProps) {
  return (
    <div className="flex min-h-screen justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-2xl">
        <nav className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            mariko-s
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
