import Link from "next/link";

interface NavPost {
  slug: string;
  title: string;
  date: string;
}

interface BlogNavigationProps {
  prevPost: NavPost | null;
  nextPost: NavPost | null;
}

export default function BlogNavigation({
  prevPost,
  nextPost,
}: BlogNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="group rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-bg transition-all"
        >
          <span className="text-xs text-text-muted">← 上一篇</span>
          <p className="text-sm font-semibold text-text mt-1 group-hover:text-primary transition-colors line-clamp-2">
            {prevPost.title}
          </p>
          <time className="text-xs text-text-muted mt-1 block">
            {prevPost.date}
          </time>
        </Link>
      ) : (
        <div />
      )}
      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-bg transition-all text-right"
        >
          <span className="text-xs text-text-muted">下一篇 →</span>
          <p className="text-sm font-semibold text-text mt-1 group-hover:text-primary transition-colors line-clamp-2">
            {nextPost.title}
          </p>
          <time className="text-xs text-text-muted mt-1 block">
            {nextPost.date}
          </time>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
