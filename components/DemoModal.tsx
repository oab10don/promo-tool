"use client";

import { useEffect, useRef } from "react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
  message?: string;
};

const DEFAULT_MESSAGE = `本来ここから、
ユーザーはあなたのショップや商品ページへ
スムーズに遷移します。

このデモサイトではリンクは無効化していますが、
実運用時は
・ECサイト
・LP
・予約ページ
・SNS
など自由に接続できます。`;

export function DemoModal({
  open,
  onClose,
  message = DEFAULT_MESSAGE,
}: DemoModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
      style={{ animation: "demo-fade-in 0.25s ease-out" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-7 shadow-xl sm:p-8"
        style={{ animation: "demo-scale-in 0.3s ease-out" }}
      >
        <p className="mb-4 text-center font-serif text-lg text-sage-dark">
          Demo Mode
        </p>
        <p className="whitespace-pre-line text-center text-sm leading-relaxed text-ink/80">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-sage py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-dark"
        >
          閉じる
        </button>
      </div>

      <style>{`
        @keyframes demo-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes demo-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
