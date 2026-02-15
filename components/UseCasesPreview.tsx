import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { IconCEO, IconFinance, IconSales, IconHandshake } from "./icons";

const useCases = [
  {
    Icon: IconCEO,
    role: "創辦人 / CEO",
    quote: "每天 200 封 email，AI 幫我分類、摘要、草擬回覆。重要的才通知我。",
    capabilities: ["Email triage", "智慧排程", "會議 briefing", "跨時區管理"],
    delay: 0,
  },
  {
    Icon: IconFinance,
    role: "CFO",
    quote: "發票、報表、審批通知——不再漏接。",
    capabilities: ["財務信件標記", "月結提醒", "審批通知"],
    delay: 0.1,
  },
  {
    Icon: IconSales,
    role: "業務主管",
    quote: "CRM 更新不再靠人工，客戶跟進不再漏掉。",
    capabilities: ["CRM 自動更新", "跟進提醒", "報價追蹤"],
    delay: 0.2,
  },
  {
    Icon: IconHandshake,
    role: "行政 / EA",
    quote: "共用信箱終於有人顧了。",
    capabilities: ["訪客接待", "會議室預訂", "行程協調"],
    delay: 0.3,
  },
];

export default function UseCasesPreview() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="use-cases">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            USE CASES
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            每個角色，都有專屬的 AI 助理
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {useCases.map((uc) => (
            <ScrollReveal key={uc.role} delay={uc.delay}>
              <div className="bg-bg rounded-2xl p-8 border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <uc.Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-bold">{uc.role}</h3>
                </div>
                <blockquote className="text-text-secondary text-sm italic mb-4 leading-relaxed border-l-2 border-primary/30 pl-4">
                  「{uc.quote}」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {uc.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs text-text-muted bg-bg-white px-3 py-1 rounded-full border border-border"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            href="/use-cases"
            className="inline-block text-primary font-bold text-sm hover:underline"
          >
            查看完整使用場景 →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
