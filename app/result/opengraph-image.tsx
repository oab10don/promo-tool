import { ImageResponse } from "next/og";
import { SKIN_TYPES } from "@/data/skin-types";
import type { SkinType } from "@/data/skin-types";

export const runtime = "edge";
export const alt = "肌悩み診断結果 | mariko-s";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS: Record<SkinType, { bg: string; accent: string }> = {
  DRY: { bg: "#f0ebe3", accent: "#7b8f7a" },
  SENSITIVE: { bg: "#f5ece8", accent: "#b86a4b" },
  DULLNESS: { bg: "#f5f0e8", accent: "#c4a96a" },
  BARRIER: { bg: "#e8f0ec", accent: "#5f765e" },
};

export default async function OgImage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const type = (params.type ?? "DRY") as SkinType;
  const skinType = SKIN_TYPES[type] ?? SKIN_TYPES.DRY;
  const colors = COLORS[type] ?? COLORS.DRY;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bg,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#6b7280",
            marginBottom: 16,
            letterSpacing: "0.1em",
          }}
        >
          あなたの肌タイプは
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: colors.accent,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          {skinType.label}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6b7280",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {skinType.description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#9ca3af",
            letterSpacing: "0.15em",
          }}
        >
          肌悩み診断 | mariko-s
        </div>
      </div>
    ),
    { ...size }
  );
}
