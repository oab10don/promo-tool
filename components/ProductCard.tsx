import Image from "next/image";
import type { Product } from "@/data/recommendations";

type ProductCardProps = {
  product: Product;
};

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

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl bg-sage py-3.5 text-center text-base font-medium text-white shadow-sm transition-all hover:bg-sage-dark hover:shadow-md"
        >
          商品を見る →
        </a>
      </div>
    </div>
  );
}
