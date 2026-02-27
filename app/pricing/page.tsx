import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "定價方案",
  description:
    "GetClaw AI 執行助理透明定價：啟動導入費 NT$48,000 起（含 14 天陪跑），ClawCare 持續優化月費 NT$25,000 起。年付享 2 個月免費。",
  alternates: { canonical: "https://getclaw.tw/pricing" },
  openGraph: {
    title: "定價方案 — GetClaw AI 執行助理",
    description:
      "啟動導入費 NT$48,000 起（含 14 天陪跑），ClawCare 持續優化月費 NT$25,000 起。透明定價，沒有隱藏費用。",
    url: "https://getclaw.tw/pricing",
    type: "website",
    locale: "zh_TW",
    siteName: "GetClaw",
  },
  twitter: {
    card: "summary_large_image",
    title: "定價方案 — GetClaw AI 執行助理",
    description:
      "啟動導入費 NT$48,000 起（含 14 天陪跑），ClawCare 月費 NT$25,000 起。透明定價。",
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
