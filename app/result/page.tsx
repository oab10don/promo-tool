import { Suspense } from "react";
import Link from "next/link";
import { BRAND } from "@/data/brand";
import { SKIN_TYPES, SKIN_TYPE_KEYS } from "@/data/skin-types";
import type { SkinType } from "@/data/skin-types";
import { RECOMMENDATIONS } from "@/data/recommendations";
import { ROUTINES } from "@/data/routines";
import { BrandShell } from "@/components/BrandShell";
import { KeywordChips } from "@/components/KeywordChips";
import { ProductCard } from "@/components/ProductCard";
import { ScoreChart } from "@/components/ScoreChart";
import { RoutineBlock } from "@/components/RoutineBlock";
import { ShareButtons } from "@/components/ShareButtons";
import { CouponBanner } from "@/components/CouponBanner";
import { ShopButton } from "@/components/ShopButton";

function isSkinType(value: string | null): value is SkinType {
  return SKIN_TYPE_KEYS.includes(value as SkinType);
}

function parseScores(
  raw: string | undefined
): Record<SkinType, number> | null {
  if (!raw) return null;
  const parts = raw.split(",").map(Number);
  if (parts.length !== 4 || parts.some(isNaN)) return null;
  return {
    DRY: parts[0],
    SENSITIVE: parts[1],
    DULLNESS: parts[2],
    BARRIER: parts[3],
  };
}

async function ResultContent({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; s?: string }>;
}) {
  const params = await searchParams;
  const typeParam = params.type ?? null;

  if (!isSkinType(typeParam)) {
    return (
      <BrandShell>
        <div className="py-20 text-center">
          <p className="mb-6 text-muted">
            診断結果が見つかりませんでした。
          </p>
          <Link
            href="/quiz"
            className="inline-block rounded-full bg-sage px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-dark"
          >
            もう一度診断する
          </Link>
        </div>
      </BrandShell>
    );
  }

  const skinType = SKIN_TYPES[typeParam];
  const products = RECOMMENDATIONS[typeParam].filter(
    (p) => p.status === "active"
  );
  const routine = ROUTINES[typeParam];
  const scores = parseScores(params.s);

  return (
    <BrandShell>
      {/* 診断結果ヘッダー */}
      <div className="animate-fade-up mb-12 text-center">
        <p className="mb-3 text-sm tracking-widest text-muted">
          あなたの肌タイプは
        </p>
        <div className="mx-auto mb-5 inline-block rounded-2xl border border-sage/30 bg-sage/5 px-8 py-5">
          <h1 className="font-serif text-3xl font-bold tracking-wide text-sage-dark sm:text-4xl">
            {skinType.label}
          </h1>
        </div>
        <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">
          {skinType.description}
        </p>
      </div>

      {/* あなたの傾向 */}
      <div className="mb-10">
        <KeywordChips type={typeParam} />
      </div>

      {/* スコアグラフ */}
      {scores && (
        <div className="animate-fade-up stagger-1 mx-auto mb-10 max-w-sm rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <h2 className="mb-4 text-center font-serif text-base text-ink">
            あなたのスコア
          </h2>
          <ScoreChart scores={scores} resultType={typeParam} />
        </div>
      )}

      {/* おすすめ商品 */}
      <div className="mb-10">
        <h2 className="animate-fade-up stagger-2 mb-5 text-center font-serif text-lg text-ink">
          おすすめアイテム
        </h2>
        <div className="flex flex-col gap-4">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`animate-soft-pop stagger-${i + 1}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* ルーティン例 */}
      <div className="mb-10">
        <h2 className="animate-fade-up stagger-3 mb-5 text-center font-serif text-lg text-ink">
          おすすめの使い方（目安）
        </h2>
        <div className="animate-fade-up stagger-4">
          <RoutineBlock routine={routine} />
        </div>
      </div>

      {/* クーポン */}
      <div className="animate-fade-up stagger-4 mb-10">
        <CouponBanner code={BRAND.couponCode} />
      </div>

      {/* SNSシェア */}
      <div className="animate-fade-up stagger-4 mb-8">
        <ShareButtons skinTypeLabel={skinType.label} />
      </div>

      {/* 注意書き */}
      <p className="animate-fade-up stagger-4 mb-8 text-center text-xs leading-relaxed text-muted/70">
        ※ この診断は医療行為ではありません。商品は肌質に応じたおすすめであり、
        効果を保証するものではありません。お肌に異常を感じた場合は使用を中止してください。
      </p>

      {/* アクションボタン */}
      <div className="animate-fade-up stagger-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/quiz"
          className="inline-block rounded-full border border-line px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-sage hover:bg-sage/5"
        >
          もう一度診断する
        </Link>
        <ShopButton />
      </div>
    </BrandShell>
  );
}

export default function ResultPage(props: {
  searchParams: Promise<{ type?: string; s?: string }>;
}) {
  return (
    <Suspense
      fallback={
        <BrandShell>
          <div className="py-20 text-center text-muted">読み込み中...</div>
        </BrandShell>
      }
    >
      <ResultContent searchParams={props.searchParams} />
    </Suspense>
  );
}
