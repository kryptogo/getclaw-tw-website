import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllUseCases } from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "使用場景 — 真實企業自動化案例",
  description:
    "10 個真實企業自動化案例，用數據說話。從郵件分類到客服自動化，看 AI 執行助理如何幫企業省時間、降成本。",
  alternates: { canonical: "https://getclaw.tw/use-cases" },
  openGraph: {
    title: "使用場景 — 真實企業自動化案例 | GetClaw",
    description:
      "從 CEO 到小店老闆，看 AI 執行助理如何用數據證明價值。",
    url: "https://getclaw.tw/use-cases",
  },
};

export default function UseCasesPage() {
  const cases = getAllUseCases();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-10 bg-bg-white text-center max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              使用場景
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.25] mb-6">
              真實案例，用數據說話
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[600px] mx-auto">
              不是功能介紹，是真實企業的自動化成果。看看 AI
              執行助理如何幫不同角色省時間、降成本、提升效率。
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-8 px-10 bg-bg border-y border-border max-md:px-6">
          <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 text-center max-md:grid-cols-1 max-md:gap-4">
            <div>
              <p className="text-[clamp(28px,3vw,40px)] font-black text-primary">
                78%
              </p>
              <p className="text-sm text-text-muted">平均時間節省</p>
            </div>
            <div>
              <p className="text-[clamp(28px,3vw,40px)] font-black text-primary">
                60x
              </p>
              <p className="text-sm text-text-muted">最高投資回報率</p>
            </div>
            <div>
              <p className="text-[clamp(28px,3vw,40px)] font-black text-primary">
                6+
              </p>
              <p className="text-sm text-text-muted">企業場景驗證</p>
            </div>
          </div>
        </section>

        {/* Case study grid */}
        <section className="py-16 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[1100px] mx-auto">
            {cases.length === 0 ? (
              <p className="text-text-muted text-center py-12">
                案例即將上線，敬請期待。
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((uc, i) => (
                  <ScrollReveal key={uc.slug} delay={i * 0.08}>
                    <Link
                      href={`/use-cases/${uc.slug}`}
                      className="group bg-bg-white rounded-xl border border-border overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col h-full"
                    >
                      {/* Metric badge hero */}
                      <div className="relative bg-gradient-to-br from-bg-dark to-bg-dark/90 p-8 flex flex-col items-center justify-center min-h-[180px]">
                        <p className="text-[clamp(40px,5vw,56px)] font-black text-white leading-none">
                          {uc.metric}
                        </p>
                        <p className="text-white/60 text-sm mt-2 font-medium">
                          {uc.metricLabel}
                        </p>
                        {/* Role badge */}
                        <span className="absolute top-4 left-4 text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                          {uc.role}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h2 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {uc.title}
                        </h2>
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 flex-1">
                          {uc.description}
                        </p>
                        <div className="flex gap-2 mt-4 flex-wrap">
                          {uc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-text-muted bg-bg px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-primary text-sm font-bold mt-4 group-hover:underline">
                          閱讀完整案例 →
                        </p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-10 bg-bg-dark text-white text-center max-md:px-6">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl font-black mb-4">
              你的團隊適合哪個場景？
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              預約 15 分鐘免費諮詢，我們幫你評估最適合的自動化方案。不推銷、不綁約。
            </p>
            <div className="flex items-center justify-center gap-4 max-md:flex-col">
              <Link
                href="/book"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.4)] hover:bg-primary-dark hover:scale-105"
              >
                預約免費諮詢 →
              </Link>
              <Link
                href="https://line.me/R/ti/p/@377lrocj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/10"
              >
                LINE 諮詢
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
