"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";
import type { ScoreMap } from "@/data/questions";
import { calculateTotals, determineSkinType } from "@/lib/scoring";
import { useWeather } from "@/lib/weather-context";
import type { WeatherData } from "@/lib/weather-context";
import { BrandShell } from "@/components/BrandShell";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizStep } from "@/components/QuizStep";
import { EnvironmentStep } from "@/components/EnvironmentStep";

export default function QuizPage() {
  const router = useRouter();
  const { setWeather } = useWeather();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ScoreMap[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const [showEnvironment, setShowEnvironment] = useState(false);
  const [pendingResult, setPendingResult] = useState<{
    skinType: string;
    scores: string;
  } | null>(null);

  const handleSelect = useCallback(
    (scores: ScoreMap) => {
      if (transitioning) return;

      const newAnswers = [...answers, scores];

      if (step + 1 >= QUESTIONS.length) {
        const skinType = determineSkinType(newAnswers);
        const totals = calculateTotals(newAnswers);
        const s = [
          totals.DRY,
          totals.SENSITIVE,
          totals.DULLNESS,
          totals.BARRIER,
        ].join(",");
        setPendingResult({ skinType, scores: s });
        setTransitioning(true);
        setTimeout(() => {
          setShowEnvironment(true);
          setTransitioning(false);
        }, 300);
        return;
      }

      setTransitioning(true);
      setTimeout(() => {
        setAnswers(newAnswers);
        setStep((s) => s + 1);
        setTransitioning(false);
      }, 300);
    },
    [answers, step, transitioning]
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

  const handleEnvironmentSubmit = useCallback(
    (weather: WeatherData | null) => {
      if (!pendingResult) return;
      setWeather(weather);
      router.push(
        `/result?type=${pendingResult.skinType}&s=${pendingResult.scores}`
      );
    },
    [pendingResult, setWeather, router]
  );

  return (
    <BrandShell>
      <ProgressBar current={step + 1} total={QUESTIONS.length} />
      <div
        className={`transition-opacity duration-300 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {showEnvironment ? (
          <EnvironmentStep onSubmit={handleEnvironmentSubmit} />
        ) : (
          <QuizStep
            question={QUESTIONS[step]}
            onSelect={handleSelect}
            onBack={handleBack}
            canGoBack={step > 0}
          />
        )}
      </div>
    </BrandShell>
  );
}
