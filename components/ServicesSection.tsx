import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: "\u2699",
    title: "系統架構規劃",
    desc: "根據業務需求設計最適合的技術架構，避免過度工程或技術債堆積。",
    tag: "Architecture",
    delay: 0,
  },
  {
    icon: "\u2605",
    title: "技術團隊管理",
    desc: "協助招募、面試、程式碼審查與開發流程建立，讓團隊有效運轉。",
    tag: "Team Management",
    delay: 0.1,
  },
  {
    icon: "\u2713",
    title: "外包品質把關",
    desc: "擔任技術端的品質守門員，確保外包廠商交付符合標準的成果。",
    tag: "Quality Assurance",
    delay: 0.2,
  },
  {
    icon: "\u25B2",
    title: "產品技術顧問",
    desc: "從 MVP 到規模化，在每個產品階段提供技術策略與可行性評估。",
    tag: "Product Strategy",
    delay: 0.1,
  },
  {
    icon: "\u2602",
    title: "雲端與 DevOps",
    desc: "雲端架構選型、CI/CD 流程建置、監控告警系統設計與成本優化。",
    tag: "Cloud & DevOps",
    delay: 0.2,
  },
  {
    icon: "\u2604",
    title: "資安合規諮詢",
    desc: "協助建立資安基線、隱私保護機制，符合 ISO 27001 等合規要求。",
    tag: "Security",
    delay: 0.3,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="services">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4 text-text mx-auto">
            你的虛擬技術長能做什麼
          </h2>
          <p className="text-[clamp(16px,1.4vw,19px)] text-text-secondary leading-[1.8] max-w-[640px] font-light mx-auto">
            從策略規劃到落地執行，提供中小企業所需的完整技術支援。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
          {services.map((s) => (
            <ScrollReveal key={s.title} delay={s.delay}>
              <div className="bg-bg-white rounded-xl p-10 transition-all border border-border hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-[480px]:p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/6 flex items-center justify-center text-[28px] mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-[15px] text-text-secondary leading-[1.7]">
                  {s.desc}
                </p>
                <span className="inline-block text-xs font-bold text-primary bg-primary/8 px-3 py-1 rounded-full mt-4">
                  {s.tag}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
