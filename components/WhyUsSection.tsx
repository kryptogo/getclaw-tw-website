import ScrollReveal from "./ScrollReveal";
import { IconGlobe, IconLock, IconBuilding, IconMessageCircle } from "./icons";

const painPoints = [
  {
    pain: "設定要花工程師好幾小時",
    solution: "我們 5–8hr 搞定，當天上線",
    delay: 0,
  },
  {
    pain: "自己裝容易跳過安全步驟",
    solution: "遵循官方 hardening guide，通過資安審查",
    delay: 0.1,
  },
  {
    pain: "裝完還要持續維護更新",
    solution: "Managed Care 月費方案幫你顧",
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
    desc: "繁中文件、中文 hypercare",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="why-us">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            WHY GETCLAW
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            你可以自己裝，但你不應該自己裝。
          </h2>
        </ScrollReveal>

        {/* Pain → Solution grid */}
        <div className="grid grid-cols-3 gap-6 mb-20 max-lg:grid-cols-1">
          {painPoints.map((item) => (
            <ScrollReveal key={item.pain} delay={item.delay}>
              <div className="bg-bg-white rounded-2xl p-8 border border-border h-full">
                <div className="text-primary font-bold text-sm mb-3 flex items-center gap-2">
                  <span className="inline-flex w-5 h-5 rounded-full bg-red-100 text-primary text-xs items-center justify-center font-black">✕</span>
                  痛點
                </div>
                <p className="text-text font-medium mb-6">{item.pain}</p>
                <div className="border-t border-border pt-6">
                  <div className="text-green-700 font-bold text-sm mb-3 flex items-center gap-2">
                    <span className="inline-flex w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs items-center justify-center font-black">✓</span>
                    GetClaw 解法
                  </div>
                  <p className="text-text font-medium">{item.solution}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

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
