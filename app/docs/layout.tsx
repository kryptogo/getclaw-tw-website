import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import "fumadocs-ui/style.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={source.pageTree}
        nav={{
          title: (
            <span className="font-bold text-sm">
              <span className="text-[#c12d20]">GetClaw</span> Docs
            </span>
          ),
          url: "/docs",
        }}
        links={[
          {
            text: "← 回到 GetClaw",
            url: "/",
          },
          {
            text: "預約諮詢",
            url: "/book",
          },
        ]}
        sidebar={{
          defaultOpenLevel: 1,
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
