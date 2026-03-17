import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CANON_DIR = path.join(process.cwd(), "..", "canon");

export interface ContentFrontmatter {
  id?: string;
  title: string;
  type?: string;
  status?: string;
  visibility?: string;
  version?: string;
  updated?: string;
  tags?: string[];
  related?: string[];
  summary?: string;
  sources?: string[];
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  category: string;
  frontmatter: ContentFrontmatter;
  content: string;
  filePath: string;
}

function isPublic(frontmatter: ContentFrontmatter): boolean {
  return frontmatter.visibility !== "gm";
}

function getSlug(filePath: string): string {
  return path.basename(filePath, ".md");
}

function getAllMdFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllMdFiles(fullPath, baseDir));
    } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
      files.push(fullPath);
    }
  }
  return files;
}

function getCategory(filePath: string): string {
  const relative = path.relative(CANON_DIR, filePath);
  const parts = relative.split(path.sep);
  return parts[0] || "other";
}

export function getAllContent(): ContentItem[] {
  const files = getAllMdFiles(CANON_DIR);
  const items: ContentItem[] = [];

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as ContentFrontmatter;

    if (!isPublic(frontmatter)) continue;

    items.push({
      slug: getSlug(filePath),
      category: getCategory(filePath),
      frontmatter,
      content,
      filePath,
    });
  }

  return items;
}

export function getContentByCategory(category: string): ContentItem[] {
  return getAllContent().filter((item) => item.category === category);
}

export function getContentBySlug(
  category: string,
  slug: string
): ContentItem | undefined {
  return getAllContent().find(
    (item) => item.category === category && item.slug === slug
  );
}

export function getCategoryIndex(category: string): {
  frontmatter: ContentFrontmatter;
  content: string;
} | null {
  const indexPath = path.join(CANON_DIR, category, "index.md");
  if (!fs.existsSync(indexPath)) return null;

  const raw = fs.readFileSync(indexPath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ContentFrontmatter, content };
}

/**
 * Strips the first markdown h1 line (# Title) from content to avoid duplication
 * when the title is already rendered from frontmatter.
 */
export function stripFirstH1(content: string): string {
  const lines = content.split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  if (firstLine.startsWith("# ")) {
    return lines.slice(1).join("\n").trimStart();
  }
  return content;
}

export function getSearchIndex(): Array<{
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  content: string;
}> {
  return getAllContent().map((item) => ({
    slug: item.slug,
    category: item.category,
    title: item.frontmatter.title,
    summary: item.frontmatter.summary || "",
    tags: item.frontmatter.tags || [],
    content: item.content.slice(0, 500),
  }));
}
