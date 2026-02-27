import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const deploymentPlans = [
  { label: "啟動導入（遠端）", price: "NT$48,000", note: "全台灣皆可" },
  { label: "啟動導入（到府）", price: "NT$88,000", note: "大台北地區專人到場" },
  { label: "額外助理", price: "+NT$38,000", note: "每個助理" },
  { label: "硬體 Mac mini", price: "~NT$19,900 起", note: "成本價代購" },
];

const managedPlans = [
  {
    name: "基本版",
    price: "NT$25,000",
    period: "/月",
    features: ["1–2 個助理", "系統監控與技術支援", "每月工作流程健檢", "指令持續調校", "每月 1 小時諮詢"],
    highlighted: false,
  },
  {
    name: "進階版",
    price: "NT$48,000",
    period: "/月",
    features: ["最多 4 個助理", "優先支援", "月度工作流程深化會議", "主動發掘自動化機會", "每月 3 小時諮詢"],
    highlighted: true,
  },
  {
    name: "企業版",
    price: "NT$98,000+",
    period: "/月",
    features: ["專屬顧問", "季度效益報告", "跨部門擴展規劃", "稽核紀錄", "資安審查支援"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            定價方案
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            透明定價，沒有隱藏費用
          </h2>
        </ScrollReveal>

        {/* One-time setup */}
        <ScrollReveal className="mb-16">
          <h3 className="text-xl font-bold mb-2">一次性啟動導入費</h3>
          <p className="text-sm text-text-secondary mb-6">含量身規劃 + 安裝設置 + 資安防護 + 14 天密集陪跑</p>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {deploymentPlans.map((plan) => (
              <Card key={plan.label}>
                <CardContent className="p-6">
                  <p className="text-sm text-text-secondary mb-2">{plan.label}</p>
                  <p className="text-2xl font-black text-text mb-1">{plan.price}</p>
                  <p className="text-xs text-text-muted">{plan.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ClawCare plans */}
        <ScrollReveal>
          <h3 className="text-xl font-bold mb-2">ClawCare 持續優化方案</h3>
          <p className="text-sm text-text-secondary mb-6">啟動導入是開始，不是結束。讓 AI 越用越順、越來越懂你的業務。</p>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {managedPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "transition-all",
                  plan.highlighted &&
                    "bg-bg-dark text-white border-transparent shadow-[0_8px_40px_rgba(0,0,0,0.15)] scale-[1.02]"
                )}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <Badge variant="highlight" className="w-fit mb-2">
                      最受歡迎
                    </Badge>
                  )}
                  <CardTitle className={cn(plan.highlighted && "text-white")}>
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={cn("text-3xl font-black mb-6", plan.highlighted && "text-white")}>
                    {plan.price}
                    <span className={cn("text-base font-normal", plan.highlighted ? "text-white/60" : "text-text-muted")}>
                      {plan.period}
                    </span>
                  </p>
                  <ul className="list-none flex flex-col gap-3 mb-4">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          "text-sm flex items-center gap-2",
                          plan.highlighted ? "text-white/80" : "text-text-secondary"
                        )}
                      >
                        <span className={plan.highlighted ? "text-primary-light" : "text-primary"}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    <Link href="/book">預約諮詢</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-8">
            年約優惠：年付享 2 個月免費
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
