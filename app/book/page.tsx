import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "預約免費諮詢",
  description: "預約 15 分鐘免費諮詢，了解 AI 執行助理如何幫你自動化工作流程。我們會分析你的工作方式，建議最適合的助理配置。",
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
      <main className="pt-24 bg-bg-white">
        <section className="py-20 px-10 max-md:px-6">
          <div className="max-w-[700px] mx-auto text-center">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] mb-4">
              預約諮詢
            </span>
            <h1 className="text-[clamp(32px,5vw,48px)] font-black leading-[1.25] mb-6 text-text">
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
                建議最適合的助理配置
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                提供報價與導入時程
              </li>
            </ul>

            {/* Cal.com embed */}
            <div className="bg-bg rounded-2xl border border-border overflow-hidden">
              <iframe
                src="https://cal.com/kordan/15min?embed=true&theme=light"
                className="w-full border-0"
                style={{ height: "660px" }}
                title="預約免費諮詢"
                loading="lazy"
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
                <a href="mailto:contact@kryptogo.com" className="text-primary hover:underline">
                  contact@kryptogo.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* What to expect section */}
        <section className="py-16 px-10 bg-bg max-md:px-6">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[clamp(24px,4vw,36px)] font-black leading-[1.3] mb-8 text-text text-center">
              這 15 分鐘會聊什麼？
            </h2>

            <div className="grid gap-6 mb-10">
              <div className="bg-bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-text mb-2">1. 了解你的工作痛點</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  你每天花最多時間在什麼事情上？哪些事情是「不該由你做，但沒人能幫」的？我們先找出 AI 最能幫上忙的地方。
                </p>
              </div>
              <div className="bg-bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-text mb-2">2. 評估可行性與場景</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  根據你的需求，我會當場判斷哪些工作適合 AI 自動化、需要幾個場景、串接哪些工具（LINE、Email、行事曆等）。
                </p>
              </div>
              <div className="bg-bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-text mb-2">3. 說明費用與時程</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  費用結構完全透明：設備（約 NT$18,900 起）+ 一次性建置費 + 月費。簽約後 3-5 天就能開始使用第一個功能，完整上線約 2 週。
                </p>
              </div>
              <div className="bg-bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-text mb-2">4. 回答你的任何問題</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  資料安全怎麼保障？需要自己買帳號嗎？不想用了怎麼辦？不懂技術能用嗎？任何疑問，當場回答。
                </p>
              </div>
            </div>

            <div className="bg-bg-white rounded-xl p-6 border border-border text-center">
              <p className="text-text-secondary text-sm mb-1">
                想先了解更多細節？
              </p>
              <Link
                href="/blog/what-to-expect-in-15min-call"
                className="text-primary font-bold text-sm hover:underline"
              >
                閱讀完整文章：預約那 15 分鐘，我們會聊什麼？ →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick answers */}
        <section className="py-16 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[clamp(20px,3vw,28px)] font-black leading-[1.3] mb-8 text-text text-center">
              預約前的常見問題
            </h2>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold text-text mb-1">需要準備什麼？</p>
                <p className="text-text-secondary leading-relaxed">
                  什麼都不用準備。不用寫需求文件、不用做簡報。帶著你的問題來就好。
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-text mb-1">費用大概多少？</p>
                <p className="text-text-secondary leading-relaxed">
                  首月約 NT$91,900 起（含設備 + 建置 + 第一個月月費），之後每月 NT$25,000 起。月費已包含 AI 運算費用，不用自己買帳號。
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-text mb-1">我的資料安全嗎？</p>
                <p className="text-text-secondary leading-relaxed">
                  資料完全在你自己的機器上處理，不經過第三方雲端。我們通過 ISO 27001 / ISO 27701 / SOC 2 Type 2 認證。
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-text mb-1">不在台北可以嗎？</p>
                <p className="text-text-secondary leading-relaxed">
                  遠端導入全台灣都行。透過線上會議完成所有設定與測試，品質跟到府一樣。
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-primary font-bold text-sm hover:underline"
              >
                查看所有常見問題 →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
