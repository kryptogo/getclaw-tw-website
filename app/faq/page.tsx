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
    a: "ChatGPT 和 Claude 是聊天工具——你問它答。OpenClaw 是有權限操作你工具的 AI 助理，它可以主動幫你處理信件、排行程、更新 CRM，不用你逐一下指令。",
  },
  {
    q: "自己裝 OpenClaw 跟找你們的差別在哪？",
    a: "差別在有沒有一個懂你業務的人幫你設定和持續調校。軟體一樣，但用起來的體驗天差地別。自己裝的人超過 80% 在兩週內就不再使用；經過我們量身設置和 14 天陪跑的客戶，超過 90% 持續在用。",
  },
  {
    q: "導入服務包含什麼？",
    a: "專人了解你的工作方式 + 量身設置 + 資安防護 + 信件 / 行事曆 / 通訊軟體串接 + 最多 3 個關鍵工作流程設定 + 完整文件交付 + 14 天密集陪跑。",
  },
  {
    q: "多久能感覺到效果？",
    a: "多數客戶在第一週就能感受到差異。14 天陪跑結束時，基本上已經離不開了。我們會根據你的使用狀況持續調整，確保 AI 真的能幫上忙。",
  },
  {
    q: "14 天陪跑具體做什麼？",
    a: "前 3 天觀察你實際怎麼用，找出 AI 卡住的地方。第 4-7 天調整指令和流程，讓回覆品質大幅提升。第 8-14 天深化更多工作場景，加入新的自動化流程。全程有專屬群組，有問題隨時問、當天回覆。結束時交付一份你專屬的 AI 工作流程手冊。",
  },
  {
    q: "安全嗎？",
    a: "非常安全。你的資料完全在你的機器上處理，不經過任何第三方雲端。我們的資安防護遵循企業級標準，導入結果能通過企業資安審查。",
  },
  {
    q: "ClawCare 月費值得嗎？",
    a: "算一筆帳：如果每週省下 10 小時，以一般主管時薪估算，每月省下的時間價值遠超月費。而且 ClawCare 不只是維護——是每月持續幫你優化工作流程、開發新的自動化場景，讓 AI 越來越懂你的業務。",
  },
  {
    q: "我不懂技術，能用嗎？",
    a: "這正是我們存在的意義。你不需要懂任何技術，我們幫你搞定所有設定。你只需要告訴我們你的工作方式，剩下的交給我們。",
  },
  {
    q: "可以整合 LINE 嗎？",
    a: "可以。我們特別針對台灣市場提供 LINE 整合，此外也支援 Slack、Gmail、Google Calendar、Outlook、Notion 等超過 10,000 種服務。",
  },
  {
    q: "可以幫整個團隊導入嗎？",
    a: "這是最常見的情境。大多數 5–50 人的團隊會導入 2–4 個 AI 助理。我們會在啟動會議時幫你決定角色分配，例如 CEO 助理、CFO 助理、業務助理、行政助理。",
  },
  {
    q: "需要什麼硬體？",
    a: "Mac mini 即可，約 NT$19,900 起。我們可以成本價代購硬體，也可以使用你現有的設備（需符合最低規格要求）。",
  },
  {
    q: "不在台北怎麼辦？",
    a: "遠端導入全台灣都可以。我們透過遠端連線完成所有設定與測試，品質與到府導入完全相同。到府服務目前僅限大台北地區。",
  },
];

export const metadata: Metadata = {
  title: "常見問題 FAQ",
  description: "關於 GetClaw AI 執行助理導入服務的常見問題：什麼是 OpenClaw、導入流程、ClawCare 持續優化、安全性、定價等。",
  alternates: { canonical: "https://getclaw.tw/faq" },
  openGraph: {
    title: "常見問題 FAQ — GetClaw AI 執行助理",
    description: "關於 OpenClaw 導入服務的常見問題：導入流程、ClawCare、安全性、定價等。",
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
