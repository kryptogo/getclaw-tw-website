import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import BlogNavigation from "@/components/BlogNavigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TableOfContents from "@/components/TableOfContents";
import { getAllPosts, getPostBySlug, extractHeadings } from "@/lib/blog";

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

  const ogImage = "/assets/og-image.png";

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://getclaw.tw/blog/${slug}` },
    openGraph: {
      title: `${post.title} — GetClaw Blog`,
      description: post.description,
      url: `https://getclaw.tw/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      siteName: "GetClaw",
      locale: "zh_TW",
      authors: ["GetClaw"],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — GetClaw Blog`,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex < posts.length - 1
      ? {
          slug: posts[currentIndex + 1].slug,
          title: posts[currentIndex + 1].title,
          date: posts[currentIndex + 1].date,
        }
      : null;
  const nextPost =
    currentIndex > 0
      ? {
          slug: posts[currentIndex - 1].slug,
          title: posts[currentIndex - 1].title,
          date: posts[currentIndex - 1].date,
        }
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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
              href="/blog"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              &larr; 回到部落格
            </Link>

            <div className="flex gap-12 mt-8">
              <article className="flex-1 min-w-0 max-w-[700px]">
                <header className="mb-12">
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

                <MarkdownRenderer content={post.content} />

                <BlogCTA />
                <BlogNavigation prevPost={prevPost} nextPost={nextPost} />
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
