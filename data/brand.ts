/**
 * ブランド設定 — ここを書き換えるだけでサイト全体のブランド情報が切り替わる
 */
export const BRAND = {
  /** ブランド名（ナビ・OGP・メタデータに表示） */
  name: "oab salon",

  /** タグライン（トップページのサブテキスト） */
  tagline: "肌と心を整える、ナチュラルケア",

  /** ブランド説明文 */
  description:
    "植物や天然素材のチカラを活かし、日々のケアをもっと心地よく。あなたに合ったアイテムをご提案します。",

  /** メタデータ用サイト名 */
  siteTitle: "肌悩み診断 | oab salon",

  /** メタデータ用サイト説明 */
  siteDescription:
    "5つの質問であなたの肌タイプを診断。あなたに合ったおすすめアイテムをご提案します。",

  /** OGP・metadataBase（デプロイ先のURL） */
  siteUrl: "https://promo-tool-taupe.vercel.app",

  /** ショップURL（結果ページの「ショップへ」リンク） */
  shopUrl: "https://example.com/shop",

  /** クーポンコード */
  couponCode: "OABSALON2025",

  /** クーポン説明テキスト */
  couponNote: "※ オンラインショップでご利用いただけます",

  /** ストアリンクの設定（ProductCardに使用） */
  storeLinks: [
    {
      key: "primary",
      label: "公式ショップ",
      className: "bg-sage text-white hover:bg-sage-dark",
    },
    {
      key: "amazon",
      label: "Amazon",
      className: "bg-[#232F3E] text-[#FF9900] hover:bg-[#1a2533]",
    },
    {
      key: "sub",
      label: "サブストア",
      className: "bg-[#006666] text-white hover:bg-[#005252]",
    },
  ],

  /** サンプルサイト表示フラグ — 本番運用時は false にする */
  isSample: true,
} as const;

export type Brand = typeof BRAND;
