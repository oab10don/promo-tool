import Image from "next/image";
import type { Product } from "@/data/recommendations";

type ProductCardProps = {
  product: Product;
};

const STORE_LINKS = [
  {
    key: "rakuten",
    label: "楽天市場で見る",
    getUrl: (p: Product) => p.url,
    className:
      "bg-[#BF0000] text-white hover:bg-[#a00000]",
  },
  {
    key: "amazon",
    label: "Amazonで見る",
    getUrl: (p: Product) => p.amazonUrl ?? "#",
    className:
      "bg-[#232F3E] text-[#FF9900] hover:bg-[#1a2533]",
  },
  {
    key: "base",
    label: "BASEで見る",
    getUrl: (p: Product) => p.baseUrl ?? "#",
    className:
      "bg-[#2D7EEA] text-white hover:bg-[#2468c7]",
  },
] as const;

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

        <div className="flex flex-col gap-2">
          {STORE_LINKS.map(({ key, label, getUrl, className }) => (
            <a
              key={key}
              href={getUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full rounded-xl py-3 text-center text-sm font-medium shadow-sm transition-all hover:shadow-md ${className}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
