"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4"
      id="contact"
    >
      <ScrollReveal>
        <div className="max-w-[900px] mx-auto">
          <HighlightGroup className="group">
            <HighlighterItem className="rounded-3xl">
              <div className="relative z-20 overflow-hidden rounded-3xl border border-border bg-bg-white">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                  quantity={150}
                  color="#c12d20"
                  vy={-0.2}
                />
                <div className="flex flex-col items-center text-center p-10 md:p-14">
                  {/* Text content */}
                  <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] mb-4">
                    立即開始
                  </span>
                  <h2 className="text-[clamp(28px,4vw,40px)] font-black mb-4 leading-[1.3]">
                    準備好讓 AI 接管瑣事了嗎？
                  </h2>
                  <p className="text-text-secondary text-[clamp(14px,1.3vw,17px)] leading-[1.8] mb-4 font-light max-w-[520px]">
                    預約免費諮詢，告訴我們你的工作方式。
                    <br className="max-md:hidden" />
                    我們幫你規劃 AI 助理配置，當天就能啟用。
                  </p>
                  <p className="text-sm text-primary font-bold mb-8">
                    前 10 名客戶享早鳥優惠價（遠端導入 NT$28,000）
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center mb-10">
                    <Button asChild size="lg">
                      <Link href="/book">
                        預約免費諮詢
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://line.me/R/ti/p/@377lrocj" target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://cdn.simpleicons.org/line" alt="" width={16} height={16} className="mr-2" />
                        LINE 諮詢
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="mailto:contact@kryptogo.com">
                        <Mail className="mr-2 h-4 w-4" />
                        寄信聯繫
                      </a>
                    </Button>
                  </div>

                  {/* Integration visual */}
                  <div className="w-full max-w-[520px] mx-auto">
                    <Image
                      src="/assets/getclaw-integration.png"
                      alt="GetClaw 整合 Gmail、Slack、Google Drive、HubSpot 等多種工具"
                      width={520}
                      height={346}
                      className="w-full h-auto mix-blend-multiply rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </HighlightGroup>
        </div>
      </ScrollReveal>
    </section>
  );
}
