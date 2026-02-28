import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const managedPlans = [
  {
    name: "基本版",
    subtitle: "你的 AI 特助，從現在開始上工",
    price: "NT$25,000",
    period: "/月",
    annualNote: "年付 NT$270,000（月均 NT$22,500）",
    hours: "每月 8 小時線上諮詢",
    hoursDetail: "線上會議、即時通訊、遠端支援",
    features: [
      "1–2 個 AI 助理部署與維護",
      "工具與模型持續選型優化",
      "每月工作流程健檢報告",
      "指令持續調校",
      "AI Token 費用全包，不另計費",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "進階版",
    subtitle: "線上加到府，全面融入你的團隊",
    price: "NT$48,000",
    period: "/月",
    annualNote: "年付 NT$518,400（月均 NT$43,200）",
    hours: "每月 8 小時線上 ＋ 8 小時到府",
    hoursDetail: "到府深入了解流程、面對面教學與陪跑",
    features: [
      "最多 4 個 AI 助理",
      "優先支援，問題 4 小時內回覆",
      "月度工作流程深化會議",
      "主動發掘自動化機會",
      "AI Token 費用全包，不另計費",
    ],
    highlighted: true,
    badge: "最受歡迎",
  },
  {
    name: "企業版",
    subtitle: "把 AI 升級成你的企業大腦",
    price: "NT$98,000+",
    period: "/月",
    annualNote: "依需求提供專屬報價",
    hours: "每月 24 小時，線上與到府自由分配",
    hoursDetail: "彈性配置：你決定什麼時候需要線上、什麼時候到府",
    features: [
      "專屬顧問，季度效益報告",
      "跨部門 AI 擴展規劃",
      "稽核紀錄與資安審查支援",
      "AI Token 費用全包，不另計費",
    ],
    highlighted: false,
    badge: null,
  },
];

const activationItems = [
  { label: "遠端啟用", price: "NT$48,000", note: "全台灣皆可", desc: "含 14 天密集陪跑" },
  { label: "專人到府啟用", price: "NT$88,000", note: "大台北地區", desc: "含到府設置 + 陪跑" },
  { label: "追加 AI 助理", price: "+NT$38,000", note: "每個助理", desc: "拓展至更多工作場景" },
  { label: "Mac mini 代購", price: "~NT$19,900 起", note: "成本價", desc: "資料 100% 留在本機" },
];

const comparisonRows = [
  {
    label: "月費",
    employee: "NT$80,000–120,000",
    consultant: "NT$150,000–300,000",
    clawcare: "NT$25,000 起",
  },
  {
    label: "每月諮詢時數",
    employee: "全職但只能做一人份",
    consultant: "按專案計費",
    clawcare: "8–24 小時真人服務",
  },
  {
    label: "AI Token 費用",
    employee: "自己額外花",
    consultant: "另外報價",
    clawcare: "全包在方案內",
  },
  {
    label: "業務理解深度",
    employee: "需 3–6 個月磨合",
    consultant: "案子結束後重來",
    clawcare: "持續累積，越用越懂",
  },
  {
    label: "離職／生病風險",
    employee: "有",
    consultant: "有",
    clawcare: "無",
  },
  {
    label: "估算年費",
    employee: "NT$96 萬–144 萬",
    consultant: "NT$180 萬–360 萬",
    clawcare: "NT$30 萬起",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingSection() {
  return (
    <section
      className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4"
      id="pricing"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── 1. Headline ── */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            ClawCare 方案
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            不是買軟體，是請一位
            <br className="max-md:hidden" />
            懂你業務的 AI 特助
          </h2>
          <p className="text-[clamp(15px,1.4vw,18px)] text-text-secondary leading-[1.8] max-w-[640px] mx-auto">
            真人顧問 + AI 工具，每月固定時數，Token 全包不另計費。
            <br className="max-sm:hidden" />
            比聘人便宜，比顧問快——而且越用越懂你。
          </p>
        </ScrollReveal>

        {/* ── 2. ClawCare Plans ── */}
        <ScrollReveal className="mb-6">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {managedPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "transition-all flex flex-col",
                  plan.highlighted &&
                    "bg-bg-dark text-white border-transparent shadow-[0_8px_40px_rgba(0,0,0,0.15)] scale-[1.02]"
                )}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge variant="highlight" className="w-fit mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardTitle className={cn(plan.highlighted && "text-white")}>
                    {plan.name}
                  </CardTitle>
                  <p className={cn(
                    "text-sm leading-snug mt-1",
                    plan.highlighted ? "text-white/60" : "text-text-secondary"
                  )}>
                    {plan.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-4">
                    <p className={cn("text-3xl font-black", plan.highlighted && "text-white")}>
                      {plan.price}
                      <span className={cn(
                        "text-base font-normal",
                        plan.highlighted ? "text-white/60" : "text-text-muted"
                      )}>
                        {plan.period}
                      </span>
                    </p>
                    <p className={cn(
                      "text-xs mt-1",
                      plan.highlighted ? "text-white/40" : "text-text-muted"
                    )}>
                      {plan.annualNote}
                    </p>
                  </div>

                  {/* Hours — the key differentiator */}
                  <div className={cn(
                    "rounded-lg p-3 mb-5",
                    plan.highlighted ? "bg-white/10" : "bg-primary/5"
                  )}>
                    <p className={cn(
                      "text-sm font-bold mb-0.5",
                      plan.highlighted ? "text-white" : "text-primary"
                    )}>
                      {plan.hours}
                    </p>
                    <p className={cn(
                      "text-xs",
                      plan.highlighted ? "text-white/50" : "text-text-muted"
                    )}>
                      {plan.hoursDetail}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="list-none flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          "text-sm flex items-start gap-2",
                          plan.highlighted ? "text-white/80" : "text-text-secondary"
                        )}
                      >
                        <span className={cn(
                          "shrink-0 mt-0.5",
                          plan.highlighted ? "text-primary-light" : "text-primary"
                        )}>✓</span>
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
          <p className="text-center text-sm text-text-muted mt-6">
            年付享 2 個月免費 — 所有方案皆含 AI Token 費用，不另計費
          </p>
        </ScrollReveal>

        {/* ── 3. Token 安心保證 ── */}
        <ScrollReveal className="mb-16">
          <div className={cn(
            "rounded-xl border border-primary/20 bg-primary/[0.03] px-6 py-5",
            "flex items-center gap-4 max-md:flex-col max-md:text-center"
          )}>
            <span className="text-3xl shrink-0">🔒</span>
            <div>
              <p className="font-bold text-text mb-1">
                Token 費用全包，帳單不會有驚喜
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                不管你的 AI 助理處理多少文件、回答多少問題，Token 費用都包含在月費中。
                你不需要擔心「用太多會超支」——放心讓 AI 幫你做更多事。
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 4. Human Element ── */}
        <ScrollReveal className="mb-16">
          <div className="bg-bg-dark rounded-2xl p-10 max-md:p-6">
            <div className="max-w-[720px] mx-auto text-center">
              <span className="inline-block text-[13px] font-bold text-primary-light tracking-[0.12em] uppercase mb-4">
                真人團隊在背後
              </span>
              <h3 className="text-white text-[clamp(20px,2.5vw,28px)] font-black mb-4 leading-[1.4]">
                每一小時，都是真人顧問在服務你
              </h3>
              <p className="text-white/60 text-[clamp(14px,1.3vw,16px)] leading-[1.8] mb-6">
                ClawCare 不是「買一套軟體回去自己摸」。每個月的諮詢時數，是我們的顧問花時間理解你的業務、
                幫你選工具、調流程、排問題。AI 工具負責做事，真人負責思考——你只需要告訴我們，你想解決什麼。
              </p>
              <p className="text-white/90 font-bold text-lg">
                想成：你多雇了一位 AI 時代的特助，做什麼由你決定。
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 5. Cost Comparison ── */}
        <ScrollReveal className="mb-16">
          <h3 className="text-center text-[clamp(20px,2.5vw,28px)] font-black mb-2">
            跟傳統方式比一比
          </h3>
          <p className="text-center text-sm text-text-secondary mb-8">
            同樣的事情，用 ClawCare 做，省多少？
          </p>

          {/* Desktop table */}
          <div className="overflow-x-auto max-md:hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-bg border border-border p-4 text-left font-bold text-text-secondary w-[22%]" />
                  <th className="bg-bg border border-border p-4 text-center font-bold text-text">
                    聘一位行政特助
                  </th>
                  <th className="bg-bg border border-border p-4 text-center font-bold text-text">
                    委託顧問公司
                  </th>
                  <th className="bg-primary border border-primary p-4 text-center font-bold text-white">
                    ClawCare
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="bg-bg-white border border-border p-4 font-medium text-text">
                      {row.label}
                    </td>
                    <td className="bg-bg-white border border-border p-4 text-center text-text-secondary">
                      {row.employee}
                    </td>
                    <td className="bg-bg-white border border-border p-4 text-center text-text-secondary">
                      {row.consultant}
                    </td>
                    <td className="bg-primary/10 border border-primary/30 p-4 text-center font-bold text-primary">
                      {row.clawcare}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <Card key={row.label} className="overflow-hidden">
                <div className="bg-bg px-4 py-3 font-bold text-sm text-text border-b border-border">
                  {row.label}
                </div>
                <CardContent className="p-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-text-muted shrink-0">聘特助</span>
                    <span className="text-right text-text-secondary min-w-0">{row.employee}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-text-muted shrink-0">顧問公司</span>
                    <span className="text-right text-text-secondary min-w-0">{row.consultant}</span>
                  </div>
                  <div className="flex justify-between gap-2 pt-2 border-t border-primary/20">
                    <span className="font-bold text-primary shrink-0">ClawCare</span>
                    <span className="text-right font-bold text-primary min-w-0">{row.clawcare}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 6. Activation Fee (separate section) ── */}
        <ScrollReveal className="mb-16">
          <div className="border-t-2 border-border pt-12">
            <div className="max-w-[720px] mx-auto text-center mb-8">
              <span className="inline-block text-[13px] font-bold text-text-muted tracking-[0.12em] uppercase mb-4">
                另購項目
              </span>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-black mb-3">
                一次性啟用服務
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                啟用服務是<strong>獨立的一次性顧問服務</strong>，不需要搭配月費方案也能購買。
                <br />
                適合想先試水溫、或已有自己 AI 工具但需要專業設置的企業。
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              {activationItems.map((item) => (
                <Card key={item.label} className="border border-border">
                  <CardContent className="p-6">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="text-2xl font-black text-text mb-1">{item.price}</p>
                    <p className="text-xs text-primary font-semibold mb-1">{item.note}</p>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-xs text-text-muted mt-4">
              已購買 ClawCare 月費方案的客戶，啟用服務享 NT$10,000 折扣
            </p>
          </div>
        </ScrollReveal>

        {/* ── 7. ROI CTA ── */}
        <ScrollReveal>
          <Card className="border-2 border-primary/20 bg-primary/[0.02]">
            <CardContent className="p-8 max-md:p-6 text-center">
              <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
                算一筆帳
              </span>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-black mb-4">
                第一年就回本，通常第三個月就感受到了
              </h3>
              <p className="text-text-secondary text-[clamp(14px,1.3vw,16px)] leading-[1.8] max-w-[600px] mx-auto mb-6">
                進階版年費 NT$518,400，若減少一位行政人員（年薪 NT$80 萬以上），
                第一年就回本，還多省 NT$28 萬。多數客戶在第 3 個月就感受到明顯效益。
              </p>
              <Button asChild size="lg">
                <Link href="/book">預約免費諮詢，算給你看 →</Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>

      </div>
    </section>
  );
}
