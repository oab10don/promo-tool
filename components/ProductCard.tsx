import Image from "next/image";
import type { Product } from "@/data/recommendations";
import { BRAND } from "@/data/brand";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const storeLinks = BRAND.storeLinks;

  const getUrl = (key: string): string => {
    if (key === "primary") return product.url;
    if (key === "amazon") return product.amazonUrl ?? "#";
    return product.subUrl ?? "#";
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      {product.image && (
        <div className="relative aspect-[4/3] w-full bg-sand/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <h3 className="mb-1 font-serif text-xl leading-snug text-ink sm:text-2xl">
          {product.name}
        </h3>

        {(product.price || product.volume) && (
          <p className="mb-2 text-sm text-muted">
            {product.price}
            {product.volume && (
              <span className="ml-2 text-xs">({product.volume})</span>
            )}
          </p>
        )}

        <p className="mb-3 text-sm leading-relaxed text-muted">
          {product.why}
        </p>

        {product.highlights && product.highlights.length > 0 && (
          <ul className="mb-3 space-y-1 text-sm text-ink/80">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="shrink-0 text-sage">&#x2713;</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mb-3 space-y-1.5 text-sm text-ink/80">
          <p>
            <span className="font-medium text-sage-dark">使い方：</span>
            {product.howTo}
          </p>
          <p>
            <span className="font-medium text-terracotta">ご注意：</span>
            {product.caution}
          </p>
          {product.target && (
            <p>
              <span className="font-medium text-ink">おすすめ：</span>
              {product.target}
            </p>
          )}
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
          {storeLinks.map(({ key, label, className }) => (
            <a
              key={key}
              href={getUrl(key)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium shadow-sm transition-all hover:shadow-md ${className}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
