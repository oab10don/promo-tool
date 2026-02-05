export const SKIN_TYPE_KEYS = [
  "DRY",
  "SENSITIVE",
  "DULLNESS",
  "BARRIER",
] as const;

export type SkinType = (typeof SKIN_TYPE_KEYS)[number];

export type SkinTypeInfo = {
  label: string;
  description: string;
};

export const SKIN_TYPES: Record<SkinType, SkinTypeInfo> = {
  DRY: {
    label: "うるおい不足タイプ",
    description:
      "水分・油分ともに不足しがちで、つっぱりや粉ふきが気になりやすい傾向です。保湿をしっかり意識したケアがおすすめです。",
  },
  SENSITIVE: {
    label: "デリケート肌タイプ",
    description:
      "外部刺激に反応しやすく、赤みやヒリつきが出やすい傾向です。やさしい成分でバリア機能をサポートするケアがおすすめです。",
  },
  DULLNESS: {
    label: "くすみ・透明感タイプ",
    description:
      "肌のトーンがくすみがちで、透明感が気になる傾向です。めぐりを整え、明るい印象をサポートするケアがおすすめです。",
  },
  BARRIER: {
    label: "バリア重視タイプ",
    description:
      "季節の変わり目や環境変化で肌がゆらぎやすい傾向です。うるおいを守り、バリア機能を整えるケアがおすすめです。",
  },
};
