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
  title: "輕量科技 GetClaw - 開箱你的虛擬技術長",
  description:
    "輕量科技 GetClaw 提供虛擬技術長服務，為中小企業提供專業技術顧問、系統架構規劃與開發團隊管理，當天部署，立即上工。",
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
