import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "ClawCare 企業 AI 方案定價",
  description:
    "比聘一位特助便宜 75%，比顧問公司快 10 倍。ClawCare 月費 NT$25,000 起，包含真人顧問持續優化、工具選型、流程升級——企業 AI 大腦的完整方案。",
  alternates: { canonical: "https://getclaw.tw/pricing" },
  openGraph: {
    title: "GetClaw ClawCare 定價｜企業 AI 特助月費 NT$25,000 起",
    description:
      "不是安裝費，不是軟體授權。ClawCare 讓你的公司多一位全年無休的 AI 特助，月費比請人便宜 75%。",
    url: "https://getclaw.tw/pricing",
    type: "website",
    locale: "zh_TW",
    siteName: "GetClaw",
  },
  twitter: {
    card: "summary_large_image",
    title: "企業 AI 特助年費制｜GetClaw ClawCare",
    description:
      "月費 NT$25,000 起，相當於人力成本的四分之一。含真人顧問、持續優化、工作流程升級。",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
