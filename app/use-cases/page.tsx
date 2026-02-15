import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { IconCEO, IconFinance, IconSales, IconHandshake } from "@/components/icons";

export const metadata: Metadata = {
  title: "使用場景",
  description: "了解 CEO、CFO、業務主管、行政團隊如何用 AI 執行助理提升效率、自動化工作流程。",
  alternates: { canonical: "https://getclaw.tw/use-cases" },
  openGraph: {
    title: "使用場景 — GetClaw AI 執行助理",
    description: "從 CEO 到行政助理，AI 執行助理自動化你最費時的工作流程。",
    url: "https://getclaw.tw/use-cases",
  },
};

const useCases = [
  {
    Icon: IconCEO,
    role: "創辦人 / CEO",
    quote: "每天 200 封 email，AI 幫我分類、摘要、草擬回覆。重要的才通知我。",
    capabilities: [
      { title: "Email Triage", desc: "自動分類信件優先等級，摘要重點，只有重要的才推播通知" },
      { title: "智慧排程", desc: "偵測行程衝突、自動建議時段、跨時區管理" },
      { title: "會議 Briefing", desc: "會前自動整理議程、參與者背景、上次會議結論" },
      { title: "跨時區管理", desc: "根據對方時區智慧安排溝通時間" },
    ],
  },
  {
    Icon: IconFinance,
    role: "CFO",
    quote: "發票、報表、審批通知——不再漏接。",
    capabilities: [
      { title: "財務信件標記", desc: "自動辨識發票、帳單、銀行通知等財務相關信件" },
      { title: "月結提醒", desc: "主動提醒月結報表時程、待審批項目" },
      { title: "審批通知", desc: "即時通知需要審批的費用申請與合約" },
    ],
  },
  {
    Icon: IconSales,
    role: "業務主管",
    quote: "CRM 更新不再靠人工，客戶跟進不再漏掉。",
    capabilities: [
      { title: "CRM 自動更新", desc: "從 email、行事曆自動同步客戶互動紀錄到 CRM" },
      { title: "跟進提醒", desc: "根據客戶回覆狀態自動安排跟進排程" },
      { title: "報價追蹤", desc: "追蹤報價單狀態，提醒過期未回覆的報價" },
    ],
  },
  {
    Icon: IconHandshake,
    role: "行政 / EA",
    quote: "共用信箱終於有人顧了。",
    capabilities: [
      { title: "訪客接待", desc: "自動確認來訪行程、發送接待流程通知" },
      { title: "會議室預訂", desc: "根據會議需求自動配對適合的會議室" },
      { title: "行程協調", desc: "跨部門行程協調、出差安排、交通預訂" },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-10 bg-bg-white text-center max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              USE CASES
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.25] mb-6">
              每個角色，都有專屬的 AI 助理
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              從 CEO 到行政助理，AI 執行助理自動化你最費時的工作流程。
            </p>
          </div>
        </section>

        {/* Use case details */}
        {useCases.map((uc, index) => (
          <section
            key={uc.role}
            className={`py-24 px-10 max-md:px-6 ${index % 2 === 0 ? "bg-bg" : "bg-bg-white"}`}
          >
            <div className="max-w-[1000px] mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <uc.Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">{uc.role}</h2>
                    <p className="text-text-secondary italic">「{uc.quote}」</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-6 mt-8 max-md:grid-cols-1">
                {uc.capabilities.map((cap, i) => (
                  <ScrollReveal key={cap.title} delay={i * 0.1}>
                    <div className="bg-bg-white rounded-xl p-6 border border-border h-full">
                      <h3 className="font-bold mb-2">{cap.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{cap.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 px-10 bg-bg-dark text-white text-center max-md:px-6">
          <h2 className="text-3xl font-black mb-4">找到你的使用場景了嗎？</h2>
          <p className="text-white/60 mb-8">預約免費諮詢，我們幫你規劃最適合的 Agent 配置。</p>
          <Link
            href="/book"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.4)] hover:bg-primary-dark hover:scale-105"
          >
            預約免費諮詢 →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
