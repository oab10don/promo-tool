"use client";

import type { Question, ScoreMap } from "@/data/questions";

type QuizStepProps = {
  question: Question;
  onSelect: (scores: ScoreMap) => void;
};

export function QuizStep({ question, onSelect }: QuizStepProps) {
  return (
    <div className="animate-fade-up">
      <h2 className="mb-6 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
        Q{question.id}. {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(option.scores)}
            className="rounded-2xl border border-line bg-surface px-5 py-4 text-left text-base leading-relaxed text-ink shadow-sm transition-all hover:border-sage hover:shadow-md active:scale-[0.98]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
