/**
 * デモモード判定
 *
 * NEXT_PUBLIC_DEMO_MODE=true  → モーダル表示（外部リンク無効）
 * NEXT_PUBLIC_DEMO_MODE=false → 通常リンク遷移
 *
 * 未設定の場合は true（デモモード有効）
 */
export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
}
