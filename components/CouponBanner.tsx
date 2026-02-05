"use client";

import { useState } from "react";
import { BRAND } from "@/data/brand";

type CouponBannerProps = {
  code: string;
};

export function CouponBanner({ code }: CouponBannerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API unavailable */
    }
  };

  return (
    <div className="rounded-2xl border border-sage/30 bg-sage/5 p-5 text-center sm:p-6">
      <p className="mb-1 text-xs font-medium tracking-widest text-sage-dark">
        診断を受けた方限定
      </p>
      <p className="mb-3 font-serif text-base text-ink">
        次回のお買い物で使えるクーポン
      </p>
      <div className="mx-auto flex max-w-xs items-center justify-center gap-2">
        <span className="rounded-lg border-2 border-dashed border-sage/50 bg-white px-5 py-2.5 font-mono text-lg font-bold tracking-widest text-sage-dark">
          {code}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg bg-sage px-3 py-2.5 text-xs font-medium text-white transition-colors hover:bg-sage-dark"
        >
          {copied ? "コピー済" : "コピー"}
        </button>
      </div>
      <p className="mt-3 text-[11px] text-muted/70">
        {BRAND.couponNote}
      </p>
    </div>
  );
}
