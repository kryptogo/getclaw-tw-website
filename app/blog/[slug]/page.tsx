import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://getclaw.tw/blog/${slug}` },
    openGraph: {
      title: `${post.title} — GetClaw Blog`,
      description: post.description,
      url: `https://getclaw.tw/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="py-20 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[700px] mx-auto">
            <Link
              href="/blog"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              ← 回到部落格
            </Link>

            <header className="mt-8 mb-12">
              <time className="text-xs text-text-muted">{post.date}</time>
              <h1 className="text-[clamp(28px,4vw,42px)] font-black leading-[1.3] mt-3 mb-4">
                {post.title}
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
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
            </header>

            <div className="text-[15px] text-text-secondary leading-[1.9] whitespace-pre-wrap">
              {post.content}
            </div>

            <footer className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-text-muted text-sm mb-4">
                想了解更多？
              </p>
              <Link
                href="/book"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(193,45,32,0.3)] hover:bg-primary-dark hover:scale-105"
              >
                預約免費諮詢 →
              </Link>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
