import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const deploymentPlans = [
  { label: "遠端部署", price: "NT$48,000", note: "全台灣皆可" },
  { label: "到府部署（大台北）", price: "NT$88,000", note: "到場安裝" },
  { label: "額外 Agent", price: "+NT$38,000", note: "每個 Agent" },
  { label: "硬體 Mac mini", price: "~NT$19,900 起", note: "成本價代購" },
];

const managedPlans = [
  {
    name: "基本版",
    price: "NT$25,000",
    period: "/月",
    features: ["1–2 agents", "系統監控", "技術支援", "每月 1hr 諮詢"],
    highlighted: false,
  },
  {
    name: "進階版",
    price: "NT$48,000",
    period: "/月",
    features: ["最多 4 agents", "優先支援", "月度 review", "每月 3hr 諮詢"],
    highlighted: true,
  },
  {
    name: "企業版",
    price: "NT$98,000+",
    period: "/月",
    features: ["SLA 保證", "Fleet 標準化", "Audit logs", "資安審查支援"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            PRICING
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            透明定價，沒有隱藏費用
          </h2>
        </ScrollReveal>

        {/* One-time deployment */}
        <ScrollReveal className="mb-16">
          <h3 className="text-xl font-bold mb-6">一次性部署費</h3>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {deploymentPlans.map((plan) => (
              <div
                key={plan.label}
                className="bg-bg rounded-xl p-6 border border-border"
              >
                <p className="text-sm text-text-secondary mb-2">{plan.label}</p>
                <p className="text-2xl font-black text-text mb-1">{plan.price}</p>
                <p className="text-xs text-text-muted">{plan.note}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Managed Care */}
        <ScrollReveal>
          <h3 className="text-xl font-bold mb-6">Managed Care 月費</h3>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {managedPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.highlighted
                    ? "bg-bg-dark text-white border-transparent shadow-[0_8px_40px_rgba(0,0,0,0.15)] scale-[1.02]"
                    : "bg-bg border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block text-xs font-bold text-primary-light bg-primary/10 px-3 py-1 rounded-full mb-4">
                    最受歡迎
                  </span>
                )}
                <h4 className={`text-lg font-bold mb-2 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.name}
                </h4>
                <p className={`text-3xl font-black mb-6 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.price}
                  <span className={`text-base font-normal ${plan.highlighted ? "text-white/60" : "text-text-muted"}`}>
                    {plan.period}
                  </span>
                </p>
                <ul className="list-none flex flex-col gap-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-center gap-2 ${
                        plan.highlighted ? "text-white/80" : "text-text-secondary"
                      }`}
                    >
                      <span className={plan.highlighted ? "text-primary-light" : "text-primary"}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`block text-center py-3 rounded-lg font-bold text-sm transition-all ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_16px_rgba(193,45,32,0.3)]"
                      : "bg-bg-white text-text border border-border hover:border-text"
                  }`}
                >
                  預約諮詢
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-8">
            💡 年約優惠：年付享 2 個月免費
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
