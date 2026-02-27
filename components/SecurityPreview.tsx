import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { IconServer, IconShield, IconKey, IconClipboard, IconUser, IconCheck } from "./icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  { Icon: IconServer, label: "自主託管", desc: "資料不上雲" },
  { Icon: IconShield, label: "資安防護", desc: "企業級安全強化" },
  { Icon: IconKey, label: "最小權限", desc: "上線後輪換憑證" },
  { Icon: IconClipboard, label: "操作紀錄", desc: "AI 操作可追溯" },
  { Icon: IconUser, label: "身份隔離", desc: "每個助理獨立" },
  { Icon: IconCheck, label: "資安審查", desc: "通過企業資安審查" },
];

export default function SecurityPreview() {
  return (
    <section className="py-32 px-10 bg-bg-dark text-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="security">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary-light tracking-[0.12em] uppercase mb-4">
            安全與合規
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4 text-white">
            你的資料,留在你的機器。
          </h2>
          <p className="text-white/50 text-sm max-w-[500px] mx-auto">
            導入團隊背景：ISO 27001 / 27701 / SOC 2 Type 2 / 企業級滲透測試
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {features.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.05}>
              <Card className={cn("h-full bg-white/6 backdrop-blur-sm border-white/8")}>
                <div className="p-6">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <f.Icon className="text-primary-light" size={18} />
                  </div>
                  <h4 className="text-white/90 font-bold text-sm mb-1">{f.label}</h4>
                  <p className="text-white/50 text-sm">{f.desc}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Button asChild variant="link" className="text-primary-light hover:underline">
            <Link href="/security">了解完整安全架構 →</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
