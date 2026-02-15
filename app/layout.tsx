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
    default: "GetClaw — AI 執行助理，部署在你自己的硬體上",
    template: "%s | GetClaw",
  },
  description:
    "專為創辦人與高管團隊打造的 OpenClaw 白手套部署服務。從安裝到安全加固，當天上線，14 天調優。Self-hosted AI 助理，資料不離開你的硬體。",
  keywords: [
    "AI 執行助理",
    "OpenClaw",
    "AI assistant",
    "self-hosted AI",
    "白手套部署",
    "GetClaw",
    "AI 自動化",
    "企業 AI",
    "email 自動化",
    "行政助理 AI",
  ],
  alternates: {
    canonical: "https://getclaw.tw",
  },
  openGraph: {
    title: "GetClaw — AI 執行助理，部署在你自己的硬體上",
    description:
      "專為創辦人與高管團隊打造的 OpenClaw 白手套部署服務。當天上線，14 天調優。資料不離開你的硬體。",
    url: "https://getclaw.tw",
    type: "website",
    locale: "zh_TW",
    siteName: "GetClaw",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetClaw — AI 執行助理，部署在你自己的硬體上",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetClaw — AI 執行助理，部署在你自己的硬體上",
    description:
      "專為創辦人與高管團隊打造的 OpenClaw 白手套部署服務。當天上線，14 天調優。",
    images: ["/assets/og-image.png"],
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
