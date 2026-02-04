import { KEYWORDS } from "@/data/keywords";
import type { SkinType } from "@/data/skin-types";

type KeywordChipsProps = {
  type: SkinType;
};

export function KeywordChips({ type }: KeywordChipsProps) {
  const { title, chips, message } = KEYWORDS[type];

  return (
    <div className="animate-fade-up text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {title}
      </p>
      <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-ink/80">
        {message}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className="animate-soft-pop rounded-full border border-line bg-sand px-4 py-2 text-sm text-ink transition-colors hover:bg-sand/70"
            style={{ animationDelay: `${0.15 + i * 0.05}s` }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
