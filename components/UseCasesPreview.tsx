import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";
import { getAllUseCases } from "@/lib/use-cases";

export default function UseCasesPreview() {
  const allCases = getAllUseCases();
  const featured = allCases.slice(0, 3);

  return (
    <section
      className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4"
      id="use-cases"
    >
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            使用場景
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            真實案例，用數據說話
          </h2>
          <p className="text-text-secondary text-[clamp(14px,1.3vw,16px)] max-w-[500px] mx-auto">
            不是功能列表——是企業實際導入後的成果數據。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {featured.map((uc, i) => (
            <ScrollReveal key={uc.slug} delay={i * 0.1}>
              <Link href={`/use-cases/${uc.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
                  {/* Metric hero */}
                  <div className="bg-gradient-to-br from-bg-dark to-bg-dark/90 p-8 text-center">
                    <p className="text-[clamp(36px,4vw,52px)] font-black text-white leading-none">
                      {uc.metric}
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                      {uc.metricLabel}
                    </p>
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs text-text-muted bg-bg px-2 py-0.5 rounded">
                      {uc.role}
                    </span>
                    <h3 className="text-base font-bold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {uc.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {uc.description}
                    </p>
                    <p className="text-primary text-sm font-bold mt-4 group-hover:underline">
                      閱讀完整案例 →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            href="/use-cases"
            className="inline-block text-primary font-bold text-sm hover:underline"
          >
            查看全部 {allCases.length} 個案例 →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
