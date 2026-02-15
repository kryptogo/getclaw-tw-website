import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Collison Install — 為什麼我們幫你裝，而不是讓你自己裝",
  description: "從 Stripe 創辦人的 Collison Install 理念出發，了解為什麼白手套部署是 AI 助理的最佳上線方式。",
  alternates: { canonical: "https://getclaw.tw/collison-install" },
  openGraph: {
    title: "Collison Install — 為什麼我們幫你裝",
    description: "從 Stripe 創辦人的 Collison Install 理念出發，了解白手套部署的價值。",
    url: "https://getclaw.tw/collison-install",
  },
};

export default function CollisonInstallPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              THE COLLISON INSTALL
            </span>
            <h1 className="text-[clamp(28px,4.5vw,48px)] font-black leading-[1.25] mb-6">
              為什麼我們幫你裝，
              <br className="max-md:hidden" />
              而不是讓你自己裝？
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-10 bg-bg max-md:px-6">
          <article className="max-w-[700px] mx-auto">
            <ScrollReveal>
              <div className="prose-like">
                <h2 className="text-2xl font-black mb-4">什麼是 Collison Install？</h2>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  2010 年，Stripe 的創辦人 Patrick Collison 開發了一個支付 API。
                  當潛在用戶表示「有興趣，回去我試試看」時，Patrick 沒有說好——
                  他直接拿過對方的筆電，當場安裝並設定完成。
                </p>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  這個做法後來被 Y Combinator 稱為 <strong>「Collison Install」</strong>——
                  與其讓用戶自己摸索（然後放棄），不如直接幫他搞定。
                  這是矽谷最經典的 GTM（Go-To-Market）策略之一。
                </p>

                <h2 className="text-2xl font-black mb-4 mt-12">為什麼 AI 助理需要 Collison Install？</h2>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  OpenClaw 是一個強大的開源 AI 執行助理。但「強大」不代表「容易裝」。
                </p>
                <div className="bg-bg-white rounded-xl p-6 border border-border mb-6">
                  <p className="text-sm font-bold mb-3">自己安裝 OpenClaw，你需要：</p>
                  <ul className="text-sm text-text-secondary leading-loose list-none flex flex-col gap-1">
                    <li>→ 準備硬體環境並安裝作業系統</li>
                    <li>→ 安裝 OpenClaw 及所有依賴套件</li>
                    <li>→ 設定安全加固（防火牆、SSL、存取控制...）</li>
                    <li>→ 整合 Email、Calendar、通訊軟體的 OAuth</li>
                    <li>→ 設計並測試工作流程自動化</li>
                    <li>→ 持續監控與更新</li>
                  </ul>
                </div>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  這需要一個有經驗的工程師花上好幾天。
                  而且如果安全步驟做不到位，你等於在自己的硬體上開了一個後門。
                </p>

                <h2 className="text-2xl font-black mb-4 mt-12">GetClaw 的做法</h2>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  我們做的就是 Collison Install——但升級版。
                  不只幫你裝好，還幫你做安全加固、整合工具、設定工作流程，
                  然後用 14 天 hypercare 確保一切順暢。
                </p>
                <p className="text-text-secondary leading-[1.9] mb-6 text-[15px]">
                  你的工程團隊不用碰，你的時間不用花。
                  <strong>5–8 小時，當天上線。</strong>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12 text-center">
              <Link
                href="/book"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.4)] hover:bg-primary-dark hover:scale-105"
              >
                讓我們幫你裝 →
              </Link>
            </ScrollReveal>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
