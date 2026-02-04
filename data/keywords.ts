import type { SkinType } from "./skin-types";

export type Keywords = {
  title: string;
  chips: string[];
  message: string;
};

export const KEYWORDS: Record<SkinType, Keywords> = {
  DRY: {
    title: "あなたの傾向",
    chips: ["うるおい重視", "やさしい洗い心地", "重ねるケアと相性◎"],
    message:
      "水分を抱え込むケアを意識すると、肌の印象が整いやすいタイプです。しっとり感を味方に、無理のないペースで。",
  },
  SENSITIVE: {
    title: "あなたの傾向",
    chips: ["低刺激を優先", "シンプル設計が心地よい", "ゆらぎやすい季節に注意"],
    message:
      "肌が繊細に反応しやすい傾向があります。アイテム数を絞り、やさしく整える流れが心地よいことがあります。",
  },
  DULLNESS: {
    title: "あなたの傾向",
    chips: ["透明感を整えたい", "巡りを意識", "内外ケアの両立"],
    message:
      "うるおいと巡りを整えることで、明るい印象に近づきやすいタイプです。気分が上がる香りや習慣も味方に。",
  },
  BARRIER: {
    title: "あなたの傾向",
    chips: ["守るケアが鍵", "水分キープ重視", "摩擦を減らす工夫"],
    message:
      "乾燥や外的刺激の影響を受けやすい傾向があります。まずは土台づくりから、ゆっくり積み重ねるのがおすすめです。",
  },
};
