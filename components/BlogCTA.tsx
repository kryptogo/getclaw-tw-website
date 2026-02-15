import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * BlogCTA - Call-to-action section for blog posts
 *
 * Displays a centered CTA card with:
 * - Value proposition headline
 * - Subtext
 * - Two action buttons (booking and LINE consultation)
 * - Trust indicators
 *
 * @example
 * ```tsx
 * <BlogCTA />
 * ```
 */
export default function BlogCTA() {
  return (
    <section className="mt-16 pt-8 border-t border-border">
      <div className="bg-bg rounded-2xl p-8 text-center max-md:p-6">
        {/* Headline */}
        <h2 className="text-2xl font-bold text-text mb-3 max-md:text-xl">
          準備好讓 AI 接管瑣事了嗎？
        </h2>

        {/* Subtext */}
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          預約 15 分鐘免費諮詢，了解 OpenClaw 如何為你工作
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6 max-md:flex-col max-md:w-full">
          <Button asChild size="lg" variant="default">
            <Link href="/book">
              預約免費諮詢 →
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link
              href="https://line.me/R/ti/p/@377lrocj"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE 諮詢
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-sm text-text-muted flex items-center justify-center gap-4 flex-wrap max-md:gap-2">
          <span className="flex items-center gap-1">
            <span className="text-primary">✓</span> 免費諮詢
          </span>
          <span className="flex items-center gap-1">
            <span className="text-primary">✓</span> 無需綁約
          </span>
          <span className="flex items-center gap-1">
            <span className="text-primary">✓</span> 到府服務
          </span>
        </div>
      </div>
    </section>
  );
}
