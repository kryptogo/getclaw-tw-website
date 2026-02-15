import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

function parseFrontmatter(fileContent: string): {
  metadata: Record<string, string | string[]>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  if (!match) {
    return { metadata: {}, content: fileContent };
  }

  const frontmatter = match[1];
  const content = match[2];
  const metadata: Record<string, string | string[]> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Handle quoted strings
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Handle arrays
    if (value.startsWith("[")) {
      try {
        metadata[key] = JSON.parse(value);
      } catch {
        metadata[key] = value;
      }
    } else {
      metadata[key] = value;
    }
  }

  return { metadata, content };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { metadata, content } = parseFrontmatter(fileContent);

    return {
      slug,
      title: (metadata.title as string) || slug,
      date: (metadata.date as string) || "",
      description: (metadata.description as string) || "",
      tags: (metadata.tags as string[]) || [],
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { metadata, content } = parseFrontmatter(fileContent);

  return {
    slug,
    title: (metadata.title as string) || slug,
    date: (metadata.date as string) || "",
    description: (metadata.description as string) || "",
    tags: (metadata.tags as string[]) || [],
    content,
  };
}
