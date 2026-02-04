import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  animation?: "fade-up" | "soft-pop";
  stagger?: number;
  className?: string;
};

/**
 * prefers-reduced-motion はグローバルCSS側で処理済み。
 * このコンポーネントはアニメーションクラスを付与するのみ。
 */
export function Motion({
  children,
  animation = "fade-up",
  stagger,
  className = "",
}: MotionProps) {
  const animClass = `animate-${animation}${stagger ? ` stagger-${stagger}` : ""}`;

  return <div className={`${animClass} ${className}`.trim()}>{children}</div>;
}
