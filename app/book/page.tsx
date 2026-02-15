import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "預約免費諮詢",
  description: "預約 15 分鐘免費諮詢，了解 AI 執行助理如何幫你自動化工作流程。我們會分析你的工作流程，建議最適合的 Agent 配置。",
  alternates: { canonical: "https://getclaw.tw/book" },
  openGraph: {
    title: "預約免費諮詢 — GetClaw AI 執行助理",
    description: "15 分鐘線上諮詢，了解 AI 執行助理如何幫你自動化工作流程。",
    url: "https://getclaw.tw/book",
  },
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[700px] mx-auto text-center">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              BOOK A CALL
            </span>
            <h1 className="text-[clamp(32px,5vw,48px)] font-black leading-[1.25] mb-6">
              預約免費諮詢
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              15 分鐘線上會議，我們會：
            </p>
            <ul className="text-text-secondary text-sm leading-loose list-none max-w-[400px] mx-auto text-left mb-12">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                了解你的工作流程與常用工具
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                分析哪些任務適合 AI 自動化
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                建議最適合的 Agent 配置
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                提供報價與部署時程
              </li>
            </ul>

            {/* Cal.com embed */}
            <div className="bg-bg rounded-2xl border border-border overflow-hidden">
              <iframe
                src="https://cal.com/kordan/15min?embed=true&theme=light"
                className="w-full border-0"
                style={{ height: "660px" }}
                title="預約免費諮詢"
              />
              <p className="text-text-muted text-xs py-4 text-center">
                如果預約系統未顯示，請{" "}
                <a
                  href="https://cal.com/kordan/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  點此開啟預約頁面
                </a>
                {" "}或來信{" "}
                <a href="mailto:hello@getclaw.com" className="text-primary hover:underline">
                  hello@getclaw.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
