import ScrollReveal from "./ScrollReveal";
import { IconGlobe, IconLock, IconBuilding, IconMessageCircle } from "./icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const painPoints = [
  {
    pain: "設定要花工程師好幾小時",
    solution: "我們 5–8hr 搞定,當天上線",
    delay: 0,
  },
  {
    pain: "自己裝容易跳過安全步驟",
    solution: "遵循官方安全強化指南，通過資安審查",
    delay: 0.1,
  },
  {
    pain: "裝完還要持續維護更新",
    solution: "託管維護月費方案幫你顧",
    delay: 0.2,
  },
];

const differentiators = [
  {
    Icon: IconGlobe,
    title: "在地化整合",
    desc: "LINE、台灣常用 SaaS、中文 prompt 調優",
  },
  {
    Icon: IconLock,
    title: "合規優先",
    desc: "團隊具備 ISO 27001/27701、CAMS 背景",
  },
  {
    Icon: IconBuilding,
    title: "到府部署",
    desc: "大台北地區到場安裝",
  },
  {
    Icon: IconMessageCircle,
    title: "全中文支援",
    desc: "繁中文件、中文密集調優",
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
            你可以自己裝,但你不應該自己裝。
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
                      GetClaw 解法
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
            為什麼不找便宜的？
          </h3>
          <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
            表面省錢，長期付出更多時間成本與資安風險
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
                    自己裝 DIY
                  </th>
                  <th className="bg-white border border-border p-4 text-center font-bold text-text">
                    坊間廉價安裝
                  </th>
                  <th className="bg-primary border border-primary p-4 text-center font-bold text-white">
                    GetClaw 白手套
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    安裝時間
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-text-secondary">
                    8-20 小時摸索
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-text-secondary">
                    2-3 小時<br /><span className="text-xs">(跳過安全設定)</span>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center font-medium text-text">
                    5-8hr 含安全強化
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    安全強化
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">多數人跳過</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">不含</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">官方 hardening guide</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    持續維護
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">自己來</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">裝完不管</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">託管月費方案</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    LINE 整合
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                    <div className="text-xs text-text-secondary mt-1">需自行研究</div>
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❓
                    <div className="text-xs text-text-secondary mt-1">不確定</div>
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">台灣在地整合</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    合規背景
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">ISO 27001/CAMS</div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-border p-4 font-medium text-text">
                    售後支援
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                  </td>
                  <td className="bg-white border border-border p-4 text-center text-2xl">
                    ❌
                  </td>
                  <td className="bg-primary/5 border border-primary/20 p-4 text-center text-2xl">
                    ✅
                    <div className="text-xs text-text mt-1 font-medium">14天+專屬群組</div>
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
                feature: "安裝時間",
                diy: "8-20 小時摸索",
                cheap: "2-3 小時 (跳過安全設定)",
                getclaw: "5-8hr 含安全強化",
              },
              {
                feature: "安全強化",
                diy: "❌ 多數人跳過",
                cheap: "❌ 不含",
                getclaw: "✅ 官方 hardening guide",
              },
              {
                feature: "持續維護",
                diy: "❌ 自己來",
                cheap: "❌ 裝完不管",
                getclaw: "✅ 託管月費方案",
              },
              {
                feature: "LINE 整合",
                diy: "❌ 需自行研究",
                cheap: "❓ 不確定",
                getclaw: "✅ 台灣在地整合",
              },
              {
                feature: "合規背景",
                diy: "❌",
                cheap: "❌",
                getclaw: "✅ ISO 27001/CAMS",
              },
              {
                feature: "售後支援",
                diy: "❌",
                cheap: "❌",
                getclaw: "✅ 14天+專屬群組",
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
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-sm font-medium text-text-secondary">自己裝 DIY</span>
                      <span className="text-sm text-text">{row.diy}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-sm font-medium text-text-secondary">坊間廉價安裝</span>
                      <span className="text-sm text-text">{row.cheap}</span>
                    </div>
                    <div className="flex justify-between items-center bg-primary/5 -mx-4 -mb-4 p-4">
                      <span className="text-sm font-bold text-text">GetClaw 白手套</span>
                      <span className="text-sm font-bold text-primary">{row.getclaw}</span>
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
