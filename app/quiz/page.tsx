"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";
import type { ScoreMap } from "@/data/questions";
import { calculateTotals, determineSkinType } from "@/lib/scoring";
import { BrandShell } from "@/components/BrandShell";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizStep } from "@/components/QuizStep";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ScoreMap[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = useCallback(
    (scores: ScoreMap) => {
      if (transitioning) return;

      const newAnswers = [...answers, scores];

      if (step + 1 >= QUESTIONS.length) {
        const skinType = determineSkinType(newAnswers);
        const totals = calculateTotals(newAnswers);
        const s = [totals.DRY, totals.SENSITIVE, totals.DULLNESS, totals.BARRIER].join(",");
        router.push(`/result?type=${skinType}&s=${s}`);
        return;
      }

      setTransitioning(true);
      setTimeout(() => {
        setAnswers(newAnswers);
        setStep((s) => s + 1);
        setTransitioning(false);
      }, 300);
    },
    [answers, step, transitioning, router]
  );

  const handleBack = useCallback(() => {
    if (step === 0 || transitioning) return;

    setTransitioning(true);
    setTimeout(() => {
      setAnswers((prev) => prev.slice(0, -1));
      setStep((s) => s - 1);
      setTransitioning(false);
    }, 300);
  }, [step, transitioning]);

  return (
    <BrandShell>
      <ProgressBar current={step + 1} total={QUESTIONS.length} />
      <div
        className={`transition-opacity duration-300 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <QuizStep
          question={QUESTIONS[step]}
          onSelect={handleSelect}
          onBack={handleBack}
          canGoBack={step > 0}
        />
      </div>
    </BrandShell>
  );
}
