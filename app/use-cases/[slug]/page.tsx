import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TableOfContents from "@/components/TableOfContents";
import { getAllUseCases, getUseCaseBySlug, extractHeadings } from "@/lib/use-cases";
import { getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cases = getAllUseCases();
  return cases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return { title: "Not Found" };

  return {
    title: `${uc.title} — GetClaw 使用場景`,
    description: uc.description,
    keywords: uc.tags,
    alternates: { canonical: `https://getclaw.tw/use-cases/${slug}` },
    openGraph: {
      title: `${uc.title} — GetClaw 使用場景`,
      description: uc.description,
      url: `https://getclaw.tw/use-cases/${slug}`,
      type: "article",
      publishedTime: uc.date,
      siteName: "GetClaw",
      locale: "zh_TW",
    },
    twitter: {
      card: "summary_large_image",
      title: `${uc.title} — GetClaw`,
      description: uc.description,
    },
  };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  const headings = extractHeadings(uc.content);

  const allCases = getAllUseCases();
  const otherCases = allCases.filter((c) => c.slug !== slug).slice(0, 3);
  const relatedPosts = getAllPosts().slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: uc.title,
    description: uc.description,
    datePublished: uc.date,
    author: { "@type": "Organization", name: "GetClaw" },
    publisher: {
      "@type": "Organization",
      name: "GetClaw",
      url: "https://getclaw.tw",
    },
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="py-20 px-10 bg-bg-white max-md:px-6">
          <div className="max-w-[1100px] mx-auto">
            <Link
              href="/use-cases"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              &larr; 回到使用場景
            </Link>

            {/* Hero metric */}
            <div className="mt-8 mb-8 bg-gradient-to-br from-bg-dark to-bg-dark/90 rounded-2xl p-10 flex items-center gap-8 max-md:flex-col max-md:text-center max-md:p-6">
              <div className="shrink-0">
                <p className="text-[clamp(48px,6vw,72px)] font-black text-white leading-none">
                  {uc.metric}
                </p>
                <p className="text-white/60 text-sm mt-1">{uc.metricLabel}</p>
              </div>
              <div className="flex-1">
                <span className="text-xs text-white/40 bg-white/10 px-3 py-1 rounded-full">
                  {uc.role}
                </span>
                <h1 className="text-[clamp(24px,3.5vw,36px)] font-black text-white leading-[1.3] mt-3">
                  {uc.title}
                </h1>
                <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-[500px]">
                  {uc.description}
                </p>
              </div>
            </div>

            <div className="flex gap-12">
              <article className="flex-1 min-w-0 max-w-[700px]">
                <MarkdownRenderer content={uc.content} />

                <BlogCTA />

                {/* Related cases */}
                {otherCases.length > 0 && (
                  <section className="mt-16 pt-8 border-t border-border">
                    <h2 className="text-xl font-bold mb-6">其他使用場景</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {otherCases.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/use-cases/${c.slug}`}
                          className="group rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-bg transition-all"
                        >
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-black text-primary">
                              {c.metric}
                            </span>
                            <span className="text-xs text-text-muted">
                              {c.metricLabel}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-2">
                            {c.title}
                          </p>
                          <span className="text-xs text-text-muted mt-1 block">
                            {c.role}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Related blog posts */}
                {relatedPosts.length > 0 && (
                  <section className="mt-12 pt-8 border-t border-border">
                    <h2 className="text-xl font-bold mb-2">延伸閱讀</h2>
                    <p className="text-sm text-text-muted mb-6">
                      深入了解 AI 執行助理的思維與實踐。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-bg transition-all"
                        >
                          <time className="text-xs text-text-muted">
                            {post.date}
                          </time>
                          <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors mt-1 line-clamp-2">
                            {post.title}
                          </p>
                          <p className="text-xs text-text-muted mt-2 line-clamp-2">
                            {post.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </article>

              <aside className="hidden lg:block w-[240px] shrink-0">
                <TableOfContents headings={headings} />
              </aside>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
