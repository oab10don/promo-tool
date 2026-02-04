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
    label: "乾燥肌タイプ",
    description:
      "水分・油分ともに不足しがちで、つっぱりや粉ふきが気になりやすい肌質です。保湿をしっかり意識したケアがおすすめです。",
  },
  SENSITIVE: {
    label: "敏感肌タイプ",
    description:
      "外部刺激に反応しやすく、赤みやヒリつきが出やすい肌質です。やさしい成分でバリア機能をサポートするケアがおすすめです。",
  },
  DULLNESS: {
    label: "美白・くすみタイプ",
    description:
      "肌のトーンがくすみがちで、透明感が気になる肌質です。めぐりを整え、明るい印象をサポートするケアがおすすめです。",
  },
  BARRIER: {
    label: "保湿・バリア重視タイプ",
    description:
      "季節の変わり目や環境変化で肌が揺らぎやすい肌質です。うるおいを守り、バリア機能を整えるケアがおすすめです。",
  },
};
