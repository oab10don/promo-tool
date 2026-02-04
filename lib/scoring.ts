import type { SkinType } from "@/data/skin-types";
import { SKIN_TYPE_KEYS } from "@/data/skin-types";
import type { ScoreMap } from "@/data/questions";

/** 同点時の優先順位（安全寄り） */
const TIEBREAK_PRIORITY: SkinType[] = [
  "SENSITIVE",
  "DRY",
  "BARRIER",
  "DULLNESS",
];

/**
 * 各設問で選んだ選択肢のスコアを合算して返す。
 */
export function calculateTotals(
  answers: ScoreMap[]
): Record<SkinType, number> {
  const totals: Record<SkinType, number> = {
    DRY: 0,
    SENSITIVE: 0,
    DULLNESS: 0,
    BARRIER: 0,
  };

  for (const answer of answers) {
    for (const key of SKIN_TYPE_KEYS) {
      totals[key] += answer[key];
    }
  }

  return totals;
}

/**
 * 各設問で選んだ選択肢のスコアを合算し、最もスコアの高い肌タイプを返す。
 * 同点の場合は TIEBREAK_PRIORITY の順で優先する。
 */
export function determineSkinType(answers: ScoreMap[]): SkinType {
  const totals = calculateTotals(answers);

  let maxScore = -1;
  let result: SkinType = "SENSITIVE";

  for (const type of TIEBREAK_PRIORITY) {
    if (totals[type] > maxScore) {
      maxScore = totals[type];
      result = type;
    }
  }

  return result;
}
