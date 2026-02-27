import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getclaw.tw"),
  title: {
    default: "GetClaw — 讓 AI 真正幫你做事，不只是裝在你的電腦上",
    template: "%s | GetClaw",
  },
  description:
    "專人到府了解你的工作方式，量身打造 AI 執行助理。14 天密集陪跑，讓你離不開為止。ClawCare 持續優化，資料不離開你的硬體。",
  keywords: [
    "AI 執行助理",
    "OpenClaw",
    "AI assistant",
    "self-hosted AI",
    "白手套導入",
    "GetClaw",
    "ClawCare",
    "AI 自動化",
    "企業 AI",
    "行政助理 AI",
  ],
  alternates: {
    canonical: "https://getclaw.tw",
  },
  openGraph: {
    title: "GetClaw — 讓 AI 真正幫你做事，不只是裝在你的電腦上",
    description:
      "專人到府量身打造 AI 執行助理。14 天密集陪跑，ClawCare 持續優化。資料不離開你的硬體。",
    url: "https://getclaw.tw",
    type: "website",
    locale: "zh_TW",
    siteName: "GetClaw",
    images: [
      {
        url: "https://getclaw.tw/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GetClaw — 讓 AI 真正幫你做事，不只是裝在你的電腦上",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetClaw — 讓 AI 真正幫你做事，不只是裝在你的電腦上",
    description:
      "專人到府量身打造 AI 執行助理。14 天密集陪跑，ClawCare 持續優化。",
    images: ["https://getclaw.tw/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body>{children}</body>
    </html>
  );
}
