# 肌悩み診断ツール（promo-tool）

肌タイプ診断 → 商品レコメンドのWebツール。
5問の設問に回答すると4肌タイプのうち1つに判定され、タイプに合った商品が表示されます。

## デモ

https://promo-tool-taupe.vercel.app

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ブランド・商品の差し替え方法

### 1. ブランド情報を変更

`data/brand.ts` を編集するだけで、サイト全体のブランド名・タグライン・ショップURL・クーポンコード等が切り替わります。

```ts
export const BRAND = {
  name: "あなたのブランド名",
  tagline: "キャッチコピー",
  shopUrl: "https://your-shop.example.com",
  couponCode: "YOUR_COUPON",
  isSample: false,  // 本番運用時は false に
  // ...
};
```

### 2. 商品データを変更

`data/recommendations.ts` の `RECOMMENDATIONS` を自社商品に書き換えてください。
各肌タイプ（DRY / SENSITIVE / DULLNESS / BARRIER）ごとに商品配列を定義します。

### 3. その他のデータ

| ファイル | 内容 |
|---------|------|
| `data/skin-types.ts` | 肌タイプの表示名・説明文 |
| `data/questions.ts` | 診断の設問・選択肢・スコア配分 |
| `data/keywords.ts` | 診断結果のキーワードチップ |
| `data/routines.ts` | 朝/夜のルーティン例 |

## サンプルデータの初期化（Seed）

サンプルデータに戻したい場合:

```bash
npm run seed
```

- 確認プロンプトが表示されます
- `NODE_ENV=production` の場合は `--force` フラグが必要です

```bash
NODE_ENV=production npm run seed -- --force
```

## ビルド・デプロイ

```bash
npm run build   # 本番ビルド
npm run lint     # ESLint
npx tsc --noEmit # 型チェック
```

Vercel にデプロイする場合は、リポジトリを接続するだけで自動デプロイされます。

## ディレクトリ構成

```
app/
  page.tsx              # トップページ
  quiz/page.tsx         # 診断クイズ
  result/page.tsx       # 結果ページ
  result/opengraph-image.tsx  # 動的OGP画像
  layout.tsx            # ルートレイアウト
  globals.css           # デザイントークン・アニメーション
components/
  BrandShell.tsx        # レイアウトラッパー（ナビ・サンプルバナー）
  ProductCard.tsx       # 商品カード
  QuizStep.tsx          # 設問UI（選択フィードバック・戻るボタン）
  ScoreChart.tsx        # スコアグラフ
  RoutineBlock.tsx      # 朝/夜ルーティン
  KeywordChips.tsx      # キーワードチップ
  ShareButtons.tsx      # SNSシェア（LINE・X）
  CouponBanner.tsx      # クーポンコード表示
  ProgressBar.tsx       # 進捗バー
  Motion.tsx            # アニメーションラッパー
data/
  brand.ts              # ブランド設定（★ここを変更）
  recommendations.ts    # 商品データ
  skin-types.ts         # 肌タイプ定義
  questions.ts          # 設問データ
  keywords.ts           # キーワードデータ
  routines.ts           # ルーティンデータ
lib/
  scoring.ts            # スコアリングロジック
scripts/
  seed.ts               # サンプルデータ初期化スクリプト
```
