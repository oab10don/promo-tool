"use client";

import { useState } from "react";
import type { Question, ScoreMap } from "@/data/questions";

type QuizStepProps = {
  question: Question;
  onSelect: (scores: ScoreMap) => void;
  onBack?: () => void;
  canGoBack: boolean;
};

export function QuizStep({
  question,
  onSelect,
  onBack,
  canGoBack,
}: QuizStepProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (scores: ScoreMap, index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setTimeout(() => {
      onSelect(scores);
      setSelectedIndex(null);
    }, 400);
  };

  return (
    <div className="animate-fade-up">
      <h2 className="mb-6 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
        Q{question.id}. {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isSelected = selectedIndex === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(option.scores, i)}
              disabled={selectedIndex !== null}
              className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-left text-base leading-relaxed shadow-sm transition-all ${
                isSelected
                  ? "border-sage bg-sage/10 text-sage-dark"
                  : "border-line bg-surface text-ink hover:border-sage hover:shadow-md active:scale-[0.98]"
              } ${selectedIndex !== null && !isSelected ? "opacity-50" : ""}`}
            >
              <span className="flex-1">{option.label}</span>
              {isSelected && (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-sage"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {canGoBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-5 flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          前の質問に戻る
        </button>
      )}
    </div>
  );
}
