"use client";

import { BRAND } from "@/data/brand";

type ShareButtonsProps = {
  skinTypeLabel: string;
};

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 0 1-.63-.629V8.108a.63.63 0 0 1 .63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.63.629.626.626 0 0 1-.51-.262l-2.443-3.317v2.95a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 .63-.63c.2 0 .385.095.505.257l2.449 3.325V8.108a.63.63 0 0 1 1.259 0v4.771zm-5.741 0a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 1.26 0v4.771zm-2.451.629H4.932a.63.63 0 0 1-.63-.629V8.108a.63.63 0 0 1 1.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.921.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ShareButtons({ skinTypeLabel }: ShareButtonsProps) {
  const shareText = `${BRAND.name}の肌悩み診断で「${skinTypeLabel}」と診断されました！あなたも試してみませんか？`;

  const handleShare = (platform: "line" | "x") => {
    const currentUrl = window.location.href;
    const encoded = encodeURIComponent(shareText + "\n" + currentUrl);

    const urls: Record<string, string> = {
      line: `https://social-plugins.line.me/lineit/share?text=${encoded}`,
      x: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    };

    window.open(urls[platform], "_blank", "noopener,noreferrer,width=600,height=500");
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-muted">結果をシェアする</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => handleShare("line")}
          className="flex items-center gap-2 rounded-full bg-[#06C755] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:brightness-110 hover:shadow-md"
        >
          <LineIcon />
          LINE
        </button>
        <button
          type="button"
          onClick={() => handleShare("x")}
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-gray-800 hover:shadow-md"
        >
          <XIcon />
          X
        </button>
      </div>
    </div>
  );
}
