"use client";

import { useState } from "react";
import { BRAND } from "@/data/brand";
import { isDemoMode } from "@/lib/demo";
import { DemoModal } from "@/components/DemoModal";

export function ShopButton() {
  const demo = isDemoMode();
  const [modalOpen, setModalOpen] = useState(false);

  if (demo) {
    return (
      <>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-block rounded-full bg-sage px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-dark"
        >
          ショップへ →
        </button>
        <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    );
  }

  return (
    <a
      href={BRAND.shopUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-sage px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-dark"
    >
      ショップへ →
    </a>
  );
}
