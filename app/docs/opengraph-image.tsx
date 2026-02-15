import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GetClaw Docs — OpenClaw 完全設定指南";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a1a 0%, #0c0c2d 50%, #0a0a1a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#c12d20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              color: "white",
              fontWeight: 900,
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              display: "flex",
            }}
          >
            <span style={{ color: "#c12d20" }}>GetClaw</span>
            <span style={{ color: "#6688cc", marginLeft: "16px" }}>Docs</span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#e0e0f0",
            marginBottom: "12px",
          }}
        >
          OpenClaw 完全設定指南
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#8888aa",
          }}
        >
          VPS 購買 · 環境建置 · LINE 對接 · 安全加固
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #6688cc, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
