"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getSnapshot() {
  const now = new Date();
  return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日の`;
}

function getServerSnapshot() {
  return "";
}

/** 当日の日付を「YYYY年M月D日の」形式で表示する */
export function DateLabel() {
  const label = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!label) return null;

  return (
    <p className="mb-1 text-sm tracking-widest text-muted">{label}</p>
  );
}
