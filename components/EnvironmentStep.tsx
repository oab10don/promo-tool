"use client";

import { useCallback, useState } from "react";
import { PREFECTURES } from "@/data/prefectures";
import { fetchWeather, type WeatherResult } from "@/lib/weather";
import type { WeatherData } from "@/lib/weather-context";

type Props = {
  onSubmit: (weather: WeatherData | null) => void;
};

export function EnvironmentStep({ onSubmit }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [weatherResult, setWeatherResult] = useState<WeatherResult | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const handleChange = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const idx = e.target.value === "" ? null : Number(e.target.value);
      setSelectedIndex(idx);
      setWeatherResult(null);
      setFetchError(false);

      if (idx === null) return;

      const pref = PREFECTURES[idx];
      setLoading(true);
      const result = await fetchWeather(pref.lat, pref.lon);
      setLoading(false);

      if (result) {
        setWeatherResult(result);
      } else {
        setFetchError(true);
      }
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (selectedIndex === null || !weatherResult) return;
    const pref = PREFECTURES[selectedIndex];
    onSubmit({
      prefecture: pref.name,
      temperature: weatherResult.temperature,
      humidity: weatherResult.humidity,
    });
  }, [selectedIndex, weatherResult, onSubmit]);

  const handleSkip = useCallback(() => {
    onSubmit(null);
  }, [onSubmit]);

  return (
    <div className="animate-fade-up mx-auto max-w-md px-4 py-10 text-center">
      <h2 className="mb-2 font-serif text-xl text-ink">
        今日の環境（任意）
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-muted">
        お住まいの地域を選ぶと、今日の気温・湿度をもとに
        <br />
        より適したアドバイスをお伝えできます。
      </p>

      {/* 都道府県セレクト */}
      <div className="mb-6">
        <select
          value={selectedIndex ?? ""}
          onChange={handleChange}
          className="w-full max-w-xs rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-sage"
        >
          <option value="">都道府県を選択</option>
          {PREFECTURES.map((pref, i) => (
            <option key={pref.name} value={i}>
              {pref.name}
            </option>
          ))}
        </select>
      </div>

      {/* 気温・湿度表示 */}
      {loading && (
        <p className="mb-6 text-sm text-muted">取得中...</p>
      )}

      {weatherResult && !loading && (
        <div className="mb-6 inline-flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-3 text-sm text-ink">
          <span>気温 {weatherResult.temperature}℃</span>
          <span className="text-line">|</span>
          <span>湿度 {weatherResult.humidity}%</span>
        </div>
      )}

      {fetchError && !loading && (
        <p className="mb-6 text-sm text-muted">
          気象データを取得できませんでした。スキップして進めます。
        </p>
      )}

      {/* ボタン */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={selectedIndex === null || !weatherResult}
          className="w-full max-w-xs rounded-full bg-sage px-8 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-sage-dark hover:shadow-md disabled:opacity-40 disabled:hover:bg-sage disabled:hover:shadow-sm"
        >
          この内容で結果を見る
        </button>
        <button
          onClick={handleSkip}
          className="w-full max-w-xs rounded-full border border-line px-8 py-3 text-base font-medium text-ink transition-colors hover:border-sage hover:bg-sage/5"
        >
          スキップして結果を見る
        </button>
      </div>

      <p className="mt-6 text-xs text-muted/70">
        ※ 選択情報は保存しません
      </p>
    </div>
  );
}
