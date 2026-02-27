import ScrollReveal from "./ScrollReveal";
import { IconGlobe, IconLock, IconBuilding, IconMessageCircle } from "./icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const painPoints = [
  {
    pain: "自己裝完，用了兩天就丟著——不知道怎麼設定才好用",
    solution: "我們派專人了解你的工作方式，設定到你真正會用為止",
    delay: 0,
  },
  {
    pain: "AI 回覆品質很差，問什麼都答不到重點",
    solution: "14 天密集陪跑，幫你把指令和流程打磨到 AI 真的能幫上忙",
    delay: 0.1,
  },
  {
    pain: "業務在變、團隊在調整，但 AI 還停在一開始的設定",
    solution: "ClawCare 持續跟進：你的業務變了，我們幫你讓 AI 跟上",
    delay: 0.2,
  },
];

const differentiators = [
  {
    Icon: IconGlobe,
    title: "在地化整合",
    desc: "LINE、台灣常用工具、中文指令調校",
  },
  {
    Icon: IconLock,
    title: "合規優先",
    desc: "團隊具備 ISO 27001/27701 認證，企業級滲透測試經驗",
  },
  {
    Icon: IconBuilding,
    title: "到府導入",
    desc: "大台北地區專人到場服務",
  },
  {
    Icon: IconMessageCircle,
    title: "全中文支援",
    desc: "繁中文件、中文密集陪跑調校",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="why-us">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            為何選擇我們
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            OpenClaw 誰都能裝，<br className="max-md:hidden" />但讓它真正好用需要有人幫你。
          </h2>
        </ScrollReveal>

        {/* Pain → Solution grid */}
        <div className="grid grid-cols-3 gap-6 mb-20 max-lg:grid-cols-1">
          {painPoints.map((item) => (
            <ScrollReveal key={item.pain} delay={item.delay}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge variant="destructive" className="mb-3">
                      痛點
                    </Badge>
                    <p className="text-text font-medium">{item.pain}</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <Badge variant="success" className="mb-3">
                      GetClaw 怎麼幫你
                    </Badge>
                    <p className="text-text font-medium">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal className="mb-20">
          <h3 className="text-center text-[clamp(24px,3vw,32px)] font-black mb-3">
            差別不在安裝，在導入成效
          </h3>
          <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
            同樣是 OpenClaw，有沒有專人量身設置，用起來天差地別
          </p>

          {/* Desktop table */}
          <div className="overflow-x-auto max-md:hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-white border border-border p-4 text-left font-bold text-text">
                    比較項目
                  </th>
                  <th className="bg-white border border-border p-4 text-center font-bold text-text">
                    自己裝
                  </th>
                  <th className="bg-white border border-border p-4 text-center font-bold text-text">
                    坊間安裝
                  </th>
                  <th className="bg-primary border border-primary p-4 text-center font-bold text-white">
                    GetClaw 白手套
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    導入後真的在用的比例
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-text-secondary">
                    &lt; 20%（多數裝完閒置）
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-text-secondary">
                    ~30%
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center font-medium text-text">
                    &gt; 90%（陪跑到會用）
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    有沒有人了解你的業務
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">自己摸索</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">照公版設定</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">專人到場了解後量身打造</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    AI 回覆品質
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">自己寫指令</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">套模板</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">針對你的情境持續調校</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    導入後還有人管嗎
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">靠自己</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">裝完不管</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">ClawCare 每月持續優化</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    業務變了怎麼辦
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">自己重來</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">另外收費</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">含在 ClawCare 方案內</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    到府服務
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-text-secondary">
                    —
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">大台北地區</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-6">
            {[
              {
                feature: "導入後真的在用的比例",
                diy: "< 20%（多數裝完閒置）",
                cheap: "~30%",
                getclaw: "✅ > 90%（陪跑到會用）",
              },
              {
                feature: "有沒有人了解你的業務",
                diy: "❌ 自己摸索",
                cheap: "❌ 照公版設定",
                getclaw: "✅ 專人到場量身打造",
              },
              {
                feature: "AI 回覆品質",
                diy: "❌ 自己寫指令",
                cheap: "❌ 套模板",
                getclaw: "✅ 針對你的情境調校",
              },
              {
                feature: "導入後還有人管嗎",
                diy: "❌ 靠自己",
                cheap: "❌ 裝完不管",
                getclaw: "✅ ClawCare 月度優化",
              },
              {
                feature: "業務變了怎麼辦",
                diy: "❌ 自己重來",
                cheap: "❌ 另外收費",
                getclaw: "✅ 含在 ClawCare 方案內",
              },
              {
                feature: "到府服務",
                diy: "—",
                cheap: "❌",
                getclaw: "✅ 大台北地區",
              },
            ].map((row) => (
              <Card key={row.feature} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary p-3 text-white font-bold text-center">
                    {row.feature}
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center gap-2 pb-3 border-b border-border">
                      <span className="text-sm font-medium text-text-secondary shrink-0">自己裝</span>
                      <span className="text-sm text-text text-right min-w-0">{row.diy}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 pb-3 border-b border-border">
                      <span className="text-sm font-medium text-text-secondary shrink-0">坊間安裝</span>
                      <span className="text-sm text-text text-right min-w-0">{row.cheap}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 bg-primary/5 -mx-4 -mb-4 p-4">
                      <span className="text-sm font-bold text-text shrink-0">GetClaw 白手套</span>
                      <span className="text-sm font-bold text-primary text-right min-w-0">{row.getclaw}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Taiwan differentiators */}
        <ScrollReveal>
          <div className="bg-bg-dark rounded-2xl p-10 max-md:p-6">
            <h3 className="text-white text-xl font-bold mb-8 text-center">
              台灣市場差異化
            </h3>
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {differentiators.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <item.Icon className="text-primary-light" size={20} />
                  </div>
                  <h4 className="text-white/90 font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
