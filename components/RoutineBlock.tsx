"use client";

import { useState } from "react";
import type { Routine } from "@/data/routines";

type RoutineBlockProps = {
  routine: Routine;
};

const TABS = [
  { key: "morning", label: "朝のルーティン" },
  { key: "night", label: "夜のルーティン" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function RoutineBlock({ routine }: RoutineBlockProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("morning");
  const steps = routine[activeTab];

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      {/* タブ */}
      <div className="mb-5 flex gap-2">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
              activeTab === key
                ? "bg-sage text-white"
                : "bg-sand/30 text-muted hover:bg-sand/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ステップ一覧 */}
      <ol className="space-y-4">
        {steps.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/10 font-serif text-sm font-bold text-sage-dark">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-ink">{item.step}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {item.note}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* ディスクレーマー */}
      <p className="mt-5 border-t border-line pt-4 text-[11px] leading-relaxed text-muted/60">
        {routine.disclaimer}
      </p>
    </div>
  );
}
