import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "部落格",
  description: "關於 AI 執行助理、OpenClaw、自主託管 AI、效率提升的最新文章與觀點。",
  alternates: { canonical: "https://getclaw.tw/blog" },
  openGraph: {
    title: "部落格 — GetClaw AI 執行助理",
    description: "AI 執行助理、OpenClaw、自主託管 AI 的最新文章與觀點。",
    url: "https://getclaw.tw/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-10 bg-bg-white text-center max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              部落格
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.25] mb-6">
              部落格
            </h1>
            <p className="text-text-secondary text-lg">
              AI 執行助理的最新觀點、使用案例與技術分享。
            </p>
          </div>
        </section>

        <section className="py-16 px-10 bg-bg max-md:px-6">
          <div className="max-w-[800px] mx-auto">
            {posts.length === 0 ? (
              <p className="text-text-muted text-center py-12">
                文章即將上線，敬請期待。
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block bg-bg-white rounded-xl p-8 border border-border transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                  >
                    <time className="text-xs text-text-muted">{post.date}</time>
                    <h2 className="text-lg font-bold mt-2 mb-2">{post.title}</h2>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-text-muted bg-bg px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
