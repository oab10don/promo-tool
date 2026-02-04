import { SKIN_TYPES } from "@/data/skin-types";
import type { SkinType } from "@/data/skin-types";

type ScoreChartProps = {
  scores: Record<SkinType, number>;
  resultType: SkinType;
};

const BAR_COLORS: Record<SkinType, { bar: string; bg: string }> = {
  DRY: { bar: "bg-sage", bg: "bg-sage/15" },
  SENSITIVE: { bar: "bg-terracotta", bg: "bg-terracotta/15" },
  DULLNESS: { bar: "bg-sand", bg: "bg-sand/40" },
  BARRIER: { bar: "bg-sage-dark", bg: "bg-sage-dark/15" },
};

export function ScoreChart({ scores, resultType }: ScoreChartProps) {
  const maxScore = Math.max(...Object.values(scores), 1);

  const entries = (Object.keys(scores) as SkinType[]).map((key) => ({
    key,
    label: SKIN_TYPES[key].label,
    score: scores[key],
    pct: Math.round((scores[key] / maxScore) * 100),
    isWinner: key === resultType,
  }));

  return (
    <div className="space-y-3">
      {entries.map(({ key, label, score, pct, isWinner }) => (
        <div key={key}>
          <div className="mb-1 flex items-baseline justify-between text-sm">
            <span
              className={
                isWinner ? "font-bold text-ink" : "font-medium text-muted"
              }
            >
              {label}
            </span>
            <span
              className={
                isWinner
                  ? "text-xs font-bold text-ink"
                  : "text-xs text-muted"
              }
            >
              {score}pt
            </span>
          </div>
          <div
            className={`h-3 w-full overflow-hidden rounded-full ${BAR_COLORS[key].bg}`}
          >
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                BAR_COLORS[key].bar
              } ${isWinner ? "opacity-100" : "opacity-60"}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
