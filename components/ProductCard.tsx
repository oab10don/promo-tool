import Image from "next/image";
import type { Product } from "@/data/recommendations";
import type { ReactNode } from "react";

type ProductCardProps = {
  product: Product;
};

function RakutenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 14.5H11V13h1.5c1.38 0 2.5-1.12 2.5-2.5S13.88 8 12.5 8H9v8.5H7V6.5h5.5c2.49 0 4.5 2.01 4.5 4.5 0 1.83-1.1 3.42-2.67 4.12l2.67 4v.38h-2.3l-1.5-3z" />
    </svg>
  );
}

function AmazonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.96 14.37c-1.8 1.33-4.4 2.04-6.64 2.04-3.14 0-5.97-1.16-8.11-3.1-.17-.15-.02-.36.18-.24 2.31 1.34 5.17 2.15 8.12 2.15 1.99 0 4.18-.41 6.19-1.27.3-.13.56.2.26.42z" />
      <path d="M14.68 13.52c-.23-.29-1.5-.14-2.07-.07-.17.02-.2-.13-.04-.24 1.01-.71 2.68-.51 2.87-.27.19.24-.05 1.92-.99 2.72-.15.12-.29.06-.22-.11.22-.54.7-1.74.45-2.03z" />
      <path d="M12.63 5.1V3.7c0-.21.16-.36.36-.36h6.34c.2 0 .37.15.37.36v1.2c0 .2-.17.47-.48.88l-3.28 4.69c1.22-.03 2.51.15 3.61.77.25.14.32.35.33.55v1.5c0 .21-.23.45-.46.32-1.93-1.01-4.49-1.12-6.62.01-.22.12-.45-.12-.45-.32v-1.43c0-.23.01-.62.23-0.97l3.8-5.46h-3.31c-.2 0-.37-.15-.37-.36z" />
    </svg>
  );
}

function BaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M5 3h6.5c1.5 0 2.7.4 3.5 1.2.8.8 1.2 1.8 1.2 3 0 .9-.2 1.6-.7 2.3-.5.6-1.1 1.1-1.9 1.3.9.2 1.7.7 2.3 1.4.6.7.9 1.6.9 2.6 0 1.3-.5 2.4-1.4 3.2-.9.8-2.1 1.2-3.6 1.2H5V3zm3.2 6.5h2.7c.7 0 1.2-.2 1.6-.5.4-.4.6-.8.6-1.4 0-.6-.2-1-.6-1.3-.4-.3-.9-.5-1.6-.5H8.2v3.7zm0 6.7h3c.7 0 1.3-.2 1.7-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.4-1-.6-1.7-.6h-3v4.2z" />
    </svg>
  );
}

type StoreLink = {
  key: string;
  label: string;
  icon: ReactNode;
  getUrl: (p: Product) => string;
  className: string;
};

const STORE_LINKS: StoreLink[] = [
  {
    key: "rakuten",
    label: "楽天",
    icon: <RakutenIcon />,
    getUrl: (p) => p.url,
    className: "bg-[#BF0000] text-white hover:bg-[#a00000]",
  },
  {
    key: "amazon",
    label: "Amazon",
    icon: <AmazonIcon />,
    getUrl: (p) => p.amazonUrl ?? "#",
    className: "bg-[#232F3E] text-[#FF9900] hover:bg-[#1a2533]",
  },
  {
    key: "base",
    label: "BASE",
    icon: <BaseIcon />,
    getUrl: (p) => p.baseUrl ?? "#",
    className: "bg-[#006666] text-white hover:bg-[#005252]",
  },
];

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      {product.image && (
        <div className="relative aspect-[4/3] w-full bg-sand/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 576px) 100vw, 576px"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <h3 className="mb-2 font-serif text-xl leading-snug text-ink sm:text-2xl">
          {product.name}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-muted">
          {product.why}
        </p>

        <div className="mb-3 space-y-1.5 text-sm text-ink/80">
          <p>
            <span className="font-medium text-sage-dark">使い方：</span>
            {product.howTo}
          </p>
          <p>
            <span className="font-medium text-terracotta">ご注意：</span>
            {product.caution}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sand/40 px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {STORE_LINKS.map(({ key, label, icon, getUrl, className }) => (
            <a
              key={key}
              href={getUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium shadow-sm transition-all hover:shadow-md ${className}`}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
