import ScrollReveal from "./ScrollReveal";

const advantages = [
  {
    icon: "\u26A1",
    title: "即戰力部署",
    desc: "無需漫長招募流程。從諮詢到上工，最快隔天即可啟動，讓你的技術決策不再延宕。",
    delay: 0,
  },
  {
    icon: "\u2696",
    title: "彈性費用結構",
    desc: "依需求選擇時數方案，月費僅全職 CTO 的 1/5 起，中小企業也能享有頂尖技術資源。",
    delay: 0.1,
  },
  {
    icon: "\u2697",
    title: "產業深度經驗",
    desc: "團隊成員橫跨 FinTech、SaaS、電商、IoT 等領域，理解不同產業的技術與商業脈絡。",
    delay: 0.2,
  },
  {
    icon: "\u2606",
    title: "中立第三方視角",
    desc: "不綁特定技術棧或廠商，以企業最佳利益出發，提供客觀的技術建議與廠商評估。",
    delay: 0.3,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-32 px-10 bg-bg-dark text-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="advantages">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <span className="inline-block text-[13px] font-bold text-white/40 tracking-[0.12em] uppercase mb-4">
            WHY US
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4 text-white">
            為什麼選擇 GetClaw
          </h2>
          <p className="text-[clamp(16px,1.4vw,19px)] text-white/60 leading-[1.8] max-w-[640px] font-light">
            我們不只是顧問，更是你團隊的一份子。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 mt-16 max-md:grid-cols-1">
          {advantages.map((a) => (
            <ScrollReveal key={a.title} delay={a.delay}>
              <div className="bg-white/6 border border-white/10 rounded-xl p-10 transition-all hover:bg-white/10 hover:border-white/20 max-[480px]:p-6">
                <div className="text-[32px] mb-4">{a.icon}</div>
                <h4 className="text-lg font-bold mb-2">{a.title}</h4>
                <p className="text-[15px] text-white/60 leading-[1.7]">
                  {a.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
