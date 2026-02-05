"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type WeatherData = {
  prefecture: string;
  temperature: number;
  humidity: number;
};

type WeatherContextType = {
  weather: WeatherData | null;
  setWeather: (data: WeatherData | null) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather(): WeatherContextType {
  const ctx = useContext(WeatherContext);
  if (!ctx) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return ctx;
}
