"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import type { ContentItem } from "@/lib/content";

interface CategoryPageProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  indexContent?: string;
  basePath: string;
}

export function CategoryPage({
  title,
  subtitle,
  items,
  indexContent,
  basePath,
}: CategoryPageProps) {
  return (
    <PageLayout showBackLink>
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h1>

        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          {subtitle}
        </p>

        <Divider symbol="✦" />

        {indexContent && (
          <div className="mb-12 prose-sm" style={{ color: "var(--secondary-ink)" }}>
            <p>{indexContent.slice(0, 300)}</p>
          </div>
        )}

        {items.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: "var(--secondary-ink)" }}
          >
            Artêmis ainda está catalogando esta seção...
          </p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="block group"
              >
                <div
                  className="p-6 transition-all duration-300 hover:shadow-sm"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="mb-1 text-lg"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--foreground)",
                        }}
                      >
                        {item.frontmatter.title}
                      </h3>
                      {item.frontmatter.summary && (
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                        >
                          {item.frontmatter.summary}
                        </p>
                      )}
                      {item.frontmatter.tags && item.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.frontmatter.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: "var(--muted)",
                                color: "var(--muted-foreground)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span
                      className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </article>
    </PageLayout>
  );
}
