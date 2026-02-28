import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const comparisonRows = [
  {
    label: "月費（參考值）",
    employee: "NT$80,000–120,000",
    consultant: "NT$150,000–300,000",
    basic: "NT$25,000",
    advanced: "NT$48,000",
  },
  {
    label: "能處理的工作量",
    employee: "1 人份",
    consultant: "專案範圍內",
    basic: "多個流程、全天候",
    advanced: "多個流程、全天候",
  },
  {
    label: "業務理解深度",
    employee: "需 3–6 個月磨合",
    consultant: "案子結束後重來",
    basic: "持續累積，越用越懂",
    advanced: "持續累積，越用越懂",
  },
  {
    label: "離職／生病風險",
    employee: "有",
    consultant: "有",
    basic: "無",
    advanced: "無",
  },
  {
    label: "估算年費",
    employee: "NT$96萬–144萬",
    consultant: "NT$180萬–360萬",
    basic: "NT$30萬",
    advanced: "NT$57.6萬",
  },
];

const managedPlans = [
  {
    name: "基本版",
    identity: "你公司的 AI 特助，從現在開始上工",
    price: "NT$25,000",
    annualNote: "年付 NT$270,000（月均 NT$22,500）",
    costAnchor: "相當於聘一位特助費用的四分之一",
    period: "/月",
    features: [
      "1–2 個 AI 助理",
      "工具與模型持續選型優化",
      "每月工作流程健檢",
      "指令持續調校",
      "每月 1 小時專人諮詢",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "進階版",
    identity: "全部門都在用 AI，不是只有老闆",
    price: "NT$48,000",
    annualNote: "年付 NT$518,400（月均 NT$43,200）",
    costAnchor: "相當於一位顧問費的三分之一",
    period: "/月",
    features: [
      "最多 4 個助理",
      "優先支援",
      "月度工作流程深化會議",
      "主動發掘自動化機會",
      "每月 3 小時諮詢",
      "有限時數到府服務",
    ],
    highlighted: true,
    badge: "最受歡迎",
  },
  {
    name: "企業版",
    identity: "把 AI 升級成你公司的企業大腦",
    price: "NT$98,000+",
    annualNote: "請洽詢專屬報價",
    costAnchor: "專屬顧問，每季向管理層報告效益",
    period: "/月",
    features: [
      "專屬顧問",
      "季度效益報告",
      "跨部門擴展規劃",
      "稽核紀錄",
      "資安審查支援",
      "到府服務（每月固定時數）",
    ],
    highlighted: false,
    badge: null,
  },
];

const activationPlans = [
  { label: "遠端啟用", price: "NT$48,000", note: "全台灣皆可", desc: "含 14 天密集陪跑" },
  { label: "專人到府啟用", price: "NT$88,000", note: "大台北地區", desc: "含到府設置 + 陪跑" },
  { label: "追加 AI 助理", price: "+NT$38,000", note: "每個助理", desc: "拓展至更多工作場景" },
  { label: "Mac mini 代購", price: "~NT$19,900 起", note: "成本價", desc: "資料 100% 留在本機" },
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
            比聘人便宜，比顧問快——
            <br className="max-md:hidden" />
            企業 AI 大腦的年費制
          </h2>
          <p className="text-[clamp(15px,1.4vw,18px)] text-text-secondary leading-[1.8] max-w-[640px] mx-auto">
            不是軟體授權，不是安裝費。你等於在公司裡，多了一位懂你業務、全年無休的特助。
          </p>
        </ScrollReveal>

        {/* ── 2. Cost Comparison Table ── */}
        <ScrollReveal className="mb-20">
          <h3 className="text-center text-[clamp(20px,2.5vw,28px)] font-black mb-2">
            跟傳統方式比一比
          </h3>
          <p className="text-center text-sm text-text-secondary mb-8">
            做決策前，先看這張表
          </p>

          {/* Desktop table */}
          <div className="overflow-x-auto max-md:hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-bg border border-border p-4 text-left font-bold text-text-secondary w-[20%]" />
                  <th className="bg-bg border border-border p-4 text-center font-bold text-text">
                    聘一位行政特助
                  </th>
                  <th className="bg-bg border border-border p-4 text-center font-bold text-text">
                    委託顧問公司
                  </th>
                  <th className="bg-primary/5 border border-primary/30 p-4 text-center font-bold text-primary">
                    ClawCare 基本版
                  </th>
                  <th className="bg-primary border border-primary p-4 text-center font-bold text-white">
                    ClawCare 進階版
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
                    <td className="bg-primary/5 border border-primary/20 p-4 text-center font-medium text-text">
                      {row.basic}
                    </td>
                    <td className="bg-primary/10 border border-primary/30 p-4 text-center font-bold text-primary">
                      {row.advanced}
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
                  <div className="flex justify-between gap-2 pt-2 border-t border-border">
                    <span className="font-bold text-primary shrink-0">ClawCare 基本</span>
                    <span className="text-right font-bold text-text min-w-0">{row.basic}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-bold text-primary shrink-0">ClawCare 進階</span>
                    <span className="text-right font-bold text-primary min-w-0">{row.advanced}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 3. ClawCare Plans ── */}
        <ScrollReveal className="mb-4">
          <h3 className="text-xl font-bold mb-2">ClawCare 月費方案</h3>
          <p className="text-sm text-text-secondary mb-8">
            三個月後，你會慶幸自己沒有多聘一個人。
          </p>
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
                    {plan.identity}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
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
                    <p className={cn(
                      "text-xs font-semibold mt-2 px-2 py-1 rounded-md w-fit",
                      plan.highlighted
                        ? "bg-white/10 text-white/70"
                        : "bg-primary/8 text-primary"
                    )}>
                      {plan.costAnchor}
                    </p>
                  </div>
                  <ul className="list-none flex flex-col gap-3 flex-1">
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
          <p className="text-center text-sm text-text-muted mt-6">
            年付享 2 個月免費（省下一筆）— 所有方案皆提供
          </p>
        </ScrollReveal>

        {/* ── 4. Human Element ── */}
        <ScrollReveal className="my-16">
          <div className="bg-bg-dark rounded-2xl p-10 max-md:p-6">
            <div className="max-w-[720px] mx-auto text-center">
              <span className="inline-block text-[13px] font-bold text-primary-light tracking-[0.12em] uppercase mb-4">
                真人團隊在背後
              </span>
              <h3 className="text-white text-[clamp(20px,2.5vw,28px)] font-black mb-4 leading-[1.4]">
                ClawCare 不是純軟體訂閱
              </h3>
              <p className="text-white/60 text-[clamp(14px,1.3vw,16px)] leading-[1.8] mb-6">
                每個月，我們的顧問會主動審視你的使用狀況、發現新的自動化機會、更換更適合你業務的模型。工具選型、流程設計、問題排除——全部我們幫你搞定。入職流程文件化、系統化，省下企業聘僱高階人才或委託顧問公司的成本。
              </p>
              <p className="text-white/90 font-bold text-lg">
                老闆只需要想成：我多雇了一位 AI 時代的特助，處理的事你說了算。
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 5. Activation Fee ── */}
        <ScrollReveal className="mb-16">
          <h3 className="text-xl font-bold mb-2">一次性啟用費</h3>
          <p className="text-sm text-text-secondary mb-2">
            加入前的第一步——讓我們真正了解你的業務
          </p>
          <p className="text-sm text-text-muted mb-6 max-w-[600px]">
            首次啟用包含 14 天密集陪跑與完整文件交付。這不是「安裝費」——這是讓 ClawCare 真正有效的基礎工程。
          </p>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {activationPlans.map((plan) => (
              <Card key={plan.label} className="border border-border">
                <CardContent className="p-6">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{plan.label}</p>
                  <p className="text-2xl font-black text-text mb-1">{plan.price}</p>
                  <p className="text-xs text-primary font-semibold mb-1">{plan.note}</p>
                  <p className="text-xs text-text-muted">{plan.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 6. ROI Math ── */}
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
                進階版年費 NT$518,400，若減少一位行政人員（年薪 NT$80 萬以上），第一年就回本，還多省 NT$28 萬。多數客戶在第 3 個月就感受到明顯效益。
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
