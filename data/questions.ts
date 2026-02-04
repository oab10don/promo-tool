import type { SkinType } from "./skin-types";

export type ScoreMap = Record<SkinType, number>;

export type Option = {
  label: string;
  scores: ScoreMap;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "今の肌状態に一番近いのは？",
    options: [
      {
        label: "つっぱり・粉ふき（乾燥）",
        scores: { DRY: 2, SENSITIVE: 0, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "ベタつきやすい（皮脂）",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 1, BARRIER: 1 },
      },
      {
        label: "赤み・ヒリつき（敏感）",
        scores: { DRY: 0, SENSITIVE: 2, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "くすみが気になる（透明感）",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 2, BARRIER: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "洗顔後の感覚は？",
    options: [
      {
        label: "すぐ乾く／つっぱる",
        scores: { DRY: 2, SENSITIVE: 0, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "皮脂が残る感じ",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 1, BARRIER: 1 },
      },
      {
        label: "しみる／刺激を感じやすい",
        scores: { DRY: 0, SENSITIVE: 2, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "特にないがトーンが暗く見える",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 2, BARRIER: 0 },
      },
    ],
  },
  {
    id: 3,
    text: "いちばん優先したいのは？",
    options: [
      {
        label: "うるおい・しっとり",
        scores: { DRY: 2, SENSITIVE: 0, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "皮脂バランス",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 1, BARRIER: 1 },
      },
      {
        label: "やさしさ・低刺激",
        scores: { DRY: 0, SENSITIVE: 2, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "透明感・明るい印象",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 2, BARRIER: 0 },
      },
    ],
  },
  {
    id: 4,
    text: "季節や環境で起きやすいのは？",
    options: [
      {
        label: "冬に乾燥しやすい",
        scores: { DRY: 2, SENSITIVE: 0, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "夏にテカりやすい",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 1, BARRIER: 1 },
      },
      {
        label: "季節の変わり目に荒れやすい",
        scores: { DRY: 0, SENSITIVE: 2, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "日差しの後にくすみやすい",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 2, BARRIER: 0 },
      },
    ],
  },
  {
    id: 5,
    text: "スキンケアの好みは？",
    options: [
      {
        label: "しっとり重めが好き",
        scores: { DRY: 2, SENSITIVE: 0, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "さっぱりが好き",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 1, BARRIER: 1 },
      },
      {
        label: "なるべくシンプルが好き",
        scores: { DRY: 0, SENSITIVE: 2, DULLNESS: 0, BARRIER: 1 },
      },
      {
        label: "香りや気分も大事にしたい",
        scores: { DRY: 0, SENSITIVE: 0, DULLNESS: 2, BARRIER: 0 },
      },
    ],
  },
];
