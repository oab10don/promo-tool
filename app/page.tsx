import Link from "next/link";
import { BrandShell } from "@/components/BrandShell";

export default function Home() {
  return (
    <BrandShell>
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="animate-fade-up">
          <p className="mb-3 text-sm tracking-widest text-muted">
            mariko-s
          </p>
          <h1 className="mb-6 font-serif text-3xl leading-snug text-ink sm:text-4xl">
            あなたの肌に
            <br />
            寄り添うハーブを
          </h1>
          <p className="mx-auto mb-4 max-w-sm text-base leading-relaxed text-muted">
            5つの質問に答えるだけで
            <br />
            今のあなたにぴったりの
            <br />
            ハーブアイテムをご提案します
          </p>
        </div>

        <div className="animate-fade-up stagger-2">
          <Link
            href="/quiz"
            className="mt-6 inline-block rounded-full bg-sage px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-sage-dark hover:shadow-md"
          >
            診断をはじめる
          </Link>
        </div>

        <p className="animate-fade-up stagger-3 mt-10 max-w-xs text-xs leading-relaxed text-muted/70">
          ※ この診断は医療行為ではありません。結果はあくまで参考としてお楽しみください。
        </p>
      </div>
    </BrandShell>
  );
}
