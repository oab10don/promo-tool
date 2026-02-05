"use client";

import { useWeather } from "@/lib/weather-context";

/** 結果画面に環境情報を表示するバッジ（データがある場合のみ） */
export function WeatherBadge() {
  const { weather } = useWeather();

  if (!weather) return null;

  return (
    <div className="animate-fade-up mb-8 text-center">
      <p className="mb-1 text-sm text-ink">
        {weather.prefecture} / {weather.temperature}℃ / 湿度{" "}
        {weather.humidity}%
      </p>
      <p className="text-xs leading-relaxed text-muted">
        今日の気温・湿度を踏まえて、ケアの優先度を調整しています
      </p>
    </div>
  );
}
