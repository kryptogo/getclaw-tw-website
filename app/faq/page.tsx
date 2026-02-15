import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    q: "OpenClaw 是什麼？",
    a: "OpenClaw 是一個開源 AI 助理，可以幫你管信箱、排行程、草擬回覆、自動化工作流，而且跑在你自己的硬體上。它不只是聊天工具，而是有權限操作你實際工作工具的 AI 執行助理。",
  },
  {
    q: "跟 ChatGPT / Claude 差在哪？",
    a: "ChatGPT 和 Claude 是聊天工具——你問它答。OpenClaw 是有權限操作你工具的 AI 助理，它可以主動幫你處理 email、排行程、更新 CRM，不用你逐一下指令。",
  },
  {
    q: "部署包含什麼？",
    a: "完整部署包括：軟體安裝 + 安全加固 + 信件 / 行事曆 / 通訊軟體整合 + 最多 3 個關鍵工作流程設定 + 完整文件交付 + 14 天密集調優支援。",
  },
  {
    q: "部署要多久？",
    a: "5–8 小時，當天上線。我們的團隊會在部署當天完成所有安裝、設定、整合與測試。",
  },
  {
    q: "安全嗎？",
    a: "非常安全。你的資料完全在你的機器上處理，不經過任何第三方雲端。我們遵循官方安全強化指南進行完整安全加固，部署結果能通過企業資安審查。",
  },
  {
    q: "可以整合 LINE 嗎？",
    a: "可以。我們特別針對台灣市場提供 LINE 整合，此外也支援 Slack、Gmail、Google Calendar、Outlook、Notion 等超過 10,000 種服務。",
  },
  {
    q: "14 天之後呢？",
    a: "14 天密集調優期結束後，你可以選擇我們的託管維護月費方案（持續監控、支援、更新），或者自行維護。我們會交付完整文件，確保你有能力自行管理。",
  },
  {
    q: "可以幫整個團隊部署嗎？",
    a: "這是最常見的情境。大多數 5–50 人的團隊會部署 2–4 個 Agent。我們會在 啟動會議時幫你決定角色分配，例如 CEO Agent、CFO Agent、業務 Agent、行政助理 Agent。",
  },
  {
    q: "需要什麼硬體？",
    a: "Mac mini 即可，約 NT$19,900 起。我們可以成本價代購硬體，也可以使用你現有的設備（需符合最低規格要求）。",
  },
  {
    q: "不在台北怎麼辦？",
    a: "遠端部署全台灣都可以。我們透過遠端連線完成安裝、設定與測試，品質與到府部署完全相同。到府部署目前僅限大台北地區。",
  },
];

export const metadata: Metadata = {
  title: "常見問題 FAQ",
  description: "關於 GetClaw AI 執行助理部署服務的常見問題：什麼是 OpenClaw、部署流程、安全性、定價等。",
  alternates: { canonical: "https://getclaw.tw/faq" },
  openGraph: {
    title: "常見問題 FAQ — GetClaw AI 執行助理",
    description: "關於 OpenClaw 部署服務的常見問題：部署流程、安全性、定價等。",
    url: "https://getclaw.tw/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-10 bg-bg-white text-center max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              FAQ
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.25] mb-6">
              常見問題
            </h1>
          </div>
        </section>

        <section className="py-16 px-10 bg-bg max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <section className="py-16 px-10 bg-bg-white text-center max-md:px-6">
          <p className="text-text-secondary mb-4">還有其他問題？</p>
          <Link
            href="/book"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.3)] hover:bg-primary-dark hover:scale-105"
          >
            預約免費諮詢 →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
