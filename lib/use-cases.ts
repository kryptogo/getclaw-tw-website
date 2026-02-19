import fs from "fs";
import path from "path";

const USE_CASES_DIR = path.join(process.cwd(), "content", "use-cases");

export interface UseCase {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover: string;
  role: string;
  metric: string;
  metricLabel: string;
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

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

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

export function getAllUseCases(): UseCase[] {
  if (!fs.existsSync(USE_CASES_DIR)) return [];

  const files = fs.readdirSync(USE_CASES_DIR).filter((f) => f.endsWith(".md"));

  const cases = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(USE_CASES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { metadata, content } = parseFrontmatter(fileContent);

    return {
      slug,
      title: (metadata.title as string) || slug,
      date: (metadata.date as string) || "",
      description: (metadata.description as string) || "",
      cover: (metadata.cover as string) || "",
      role: (metadata.role as string) || "",
      metric: (metadata.metric as string) || "",
      metricLabel: (metadata.metricLabel as string) || "",
      tags: (metadata.tags as string[]) || [],
      content,
    };
  });

  return cases.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getUseCaseBySlug(slug: string): UseCase | null {
  const filePath = path.join(USE_CASES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { metadata, content } = parseFrontmatter(fileContent);

  return {
    slug,
    title: (metadata.title as string) || slug,
    date: (metadata.date as string) || "",
    description: (metadata.description as string) || "",
    cover: (metadata.cover as string) || "",
    role: (metadata.role as string) || "",
    metric: (metadata.metric as string) || "",
    metricLabel: (metadata.metricLabel as string) || "",
    tags: (metadata.tags as string[]) || [],
    content,
  };
}

export { extractHeadings } from "./blog";
