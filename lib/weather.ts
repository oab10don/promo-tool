export type WeatherResult = {
  temperature: number;
  humidity: number;
};

type OpenMeteoResponse = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
  };
};

/**
 * Open-Meteo API から現在の気温・湿度を取得する。
 * エラー時は null を返す（非致命的）。
 */
export async function fetchWeather(
  lat: number,
  lon: number
): Promise<WeatherResult | null> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m&timezone=Asia/Tokyo`;
    const res = await fetch(url);
    if (!res.ok) return null;

    const data: OpenMeteoResponse = await res.json();
    return {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
    };
  } catch {
    return null;
  }
}
