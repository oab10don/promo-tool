/**
 * Seed Script — サンプルデータでプロジェクトを初期化する
 *
 * 使い方:
 *   npm run seed
 *   npm run seed -- --force   (本番ガードを無視して実行)
 *
 * 安全対策:
 *   - NODE_ENV=production の場合は --force フラグが必須
 *   - 実行前に確認プロンプトを表示（CI環境ではスキップ）
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createInterface } from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const DATA_DIR = resolve(ROOT, "data");

// ─── ガード ───
const isProduction = process.env.NODE_ENV === "production";
const hasForce = process.argv.includes("--force");

if (isProduction && !hasForce) {
  console.error(
    "⚠ NODE_ENV=production で seed を実行するには --force フラグが必要です。"
  );
  console.error("  例: npm run seed -- --force");
  process.exit(1);
}

// ─── 確認プロンプト ───
async function confirm(message: string): Promise<boolean> {
  if (process.env.CI) return true;

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(`${message} (y/N): `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y");
    });
  });
}

// ─── サンプルデータ定義 ───

const BRAND_TS = `/**
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
`;

const SKIN_TYPES_TS = `export const SKIN_TYPE_KEYS = [
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
`;

// ─── 実行 ───

async function main() {
  console.log("🌱 Seed: サンプルデータでプロジェクトを初期化します");
  console.log(`   ブランド: oab salon`);
  console.log(`   対象: ${DATA_DIR}/`);
  console.log();

  const ok = await confirm("既存のデータを上書きしますか？");
  if (!ok) {
    console.log("キャンセルしました。");
    process.exit(0);
  }

  const files: [string, string][] = [
    ["brand.ts", BRAND_TS],
    ["skin-types.ts", SKIN_TYPES_TS],
  ];

  for (const [filename, content] of files) {
    const path = resolve(DATA_DIR, filename);
    writeFileSync(path, content, "utf-8");
    console.log(`  ✓ ${filename}`);
  }

  // recommendations.ts, keywords.ts, routines.ts, questions.ts は
  // 現在のファイルをそのまま保持（すでにサンプルデータが入っている）
  // ここでは brand.ts と skin-types.ts をリセット対象とする

  const preservedFiles = [
    "recommendations.ts",
    "keywords.ts",
    "routines.ts",
    "questions.ts",
  ];
  for (const f of preservedFiles) {
    const path = resolve(DATA_DIR, f);
    try {
      readFileSync(path, "utf-8");
      console.log(`  ○ ${f} (既存を維持)`);
    } catch {
      console.log(`  ⚠ ${f} (ファイルが見つかりません)`);
    }
  }

  console.log();
  console.log("✅ Seed 完了！ npm run dev でサイトを確認してください。");
}

main().catch((err) => {
  console.error("Seed エラー:", err);
  process.exit(1);
});
