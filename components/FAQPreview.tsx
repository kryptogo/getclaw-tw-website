import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const previewFaqs = [
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
    q: "14 天陪跑具體做什麼？",
    a: "前 3 天觀察你實際怎麼用，找出 AI 卡住的地方。第 4-7 天調整指令和流程，讓回覆品質大幅提升。第 8-14 天深化更多工作場景，加入新的自動化流程。全程有專屬群組，有問題隨時問、當天回覆。結束時交付一份你專屬的 AI 工作流程手冊。",
  },
  {
    q: "我不懂技術，能用嗎？",
    a: "這正是我們存在的意義。你不需要懂任何技術，我們幫你搞定所有設定。你只需要告訴我們你的工作方式，剩下的交給我們。",
  },
];

export default function FAQPreview() {
  return (
    <section id="faq" className="py-20 px-10 bg-bg max-md:px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            常見問題
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-black leading-[1.25]">
            常見問題
          </h2>
        </div>

        <FAQAccordion faqs={previewFaqs} />

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
          >
            查看全部常見問題 →
          </Link>
        </div>
      </div>
    </section>
  );
}
