import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { IconServer, IconShield, IconKey, IconClipboard, IconUser, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "安全與合規",
  description: "你的資料，留在你的機器。Self-hosted AI 助理，完整安全加固，通過企業資安審查。ISO 27001 / SOC 2 / CAMS 團隊背景。",
  alternates: { canonical: "https://getclaw.tw/security" },
  openGraph: {
    title: "安全與合規 — GetClaw AI 執行助理",
    description: "Self-hosted 架構確保敏感資料不離開你的硬體。完整安全加固，通過企業級資安審查。",
    url: "https://getclaw.tw/security",
  },
};

const securityFeatures = [
  {
    Icon: IconServer,
    title: "Self-hosted",
    desc: "所有資料處理都在你自己的硬體上進行，不經過第三方雲端。你的 email、行事曆、文件——全部留在你的機器。",
  },
  {
    Icon: IconShield,
    title: "安全加固",
    desc: "嚴格遵循官方 hardening guide 進行安全配置。包括防火牆規則、連接埠限制、SSL/TLS 設定、以及存取控制。",
  },
  {
    Icon: IconKey,
    title: "最小權限原則",
    desc: "每個 Agent 只授予完成任務所需的最小權限。上線後建議輪換所有憑證，確保初始 setup 過程不留安全隱患。",
  },
  {
    Icon: IconClipboard,
    title: "Audit Trail",
    desc: "AI 的每一次操作都有完整紀錄可追溯。你可以隨時查看 Agent 做了什麼、讀了什麼、發了什麼。",
  },
  {
    Icon: IconUser,
    title: "身份隔離",
    desc: "每個 Executive Agent 都是獨立的實例，綁定獨立身份。CEO Agent 無法存取 CFO Agent 的資料，反之亦然。",
  },
  {
    Icon: IconCheck,
    title: "通過資安審查",
    desc: "我們的部署流程設計為可通過企業資安審查。提供完整的安全文件、架構圖、與風險評估報告。",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "資訊安全管理系統" },
  { name: "ISO 27701", desc: "隱私資訊管理系統" },
  { name: "SOC 2 Type 2", desc: "服務組織控制報告" },
  { name: "CAMS", desc: "反洗錢認證" },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-10 bg-bg-dark text-white text-center max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[13px] font-bold text-primary-light tracking-[0.12em] uppercase mb-4">
              SECURITY & COMPLIANCE
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.25] mb-6">
              你的資料，留在你的機器。
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Self-hosted 架構確保你的敏感資料不離開你的硬體。
              <br />
              完整安全加固，能通過企業級資安審查。
            </p>
          </div>
        </section>

        {/* Security features */}
        <section className="py-24 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {securityFeatures.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.05}>
                  <div className="bg-bg rounded-2xl p-8 border border-border h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <f.Icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 px-10 bg-bg max-md:px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-black mb-4">部署團隊背景</h2>
              <p className="text-text-secondary mb-10">
                Powered by KryptoGO — 台灣首家同時取得 ISO 27001 與 ISO 27701 認證的區塊鏈公司
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
              {certifications.map((cert) => (
                <ScrollReveal key={cert.name}>
                  <div className="bg-bg-white rounded-xl p-6 border border-border text-center">
                    <p className="text-lg font-black text-primary mb-1">{cert.name}</p>
                    <p className="text-xs text-text-muted">{cert.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-10 bg-bg-dark text-white text-center max-md:px-6">
          <h2 className="text-3xl font-black mb-4">對安全有疑問？</h2>
          <p className="text-white/60 mb-8">我們樂意提供更詳細的安全架構說明與文件。</p>
          <Link
            href="/book"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.4)] hover:bg-primary-dark hover:scale-105"
          >
            預約免費諮詢 →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
