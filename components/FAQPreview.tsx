import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const previewFaqs = [
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
];

export default function FAQPreview() {
  return (
    <section id="faq" className="py-20 px-10 bg-bg max-md:px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            FAQ
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
