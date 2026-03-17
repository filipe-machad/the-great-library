import { MDXRemote } from "next-mdx-remote/rsc";
import type { ContentItem } from "@/lib/content";
import { stripFirstH1 } from "@/lib/content";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { MdxComponents } from "./MdxComponents";

interface ContentPageProps {
  item: ContentItem;
  backHref: string;
  backLabel: string;
}

export function ContentPage({ item, backHref, backLabel }: ContentPageProps) {
  return (
    <PageLayout showBackLink backHref={backHref} backLabel={backLabel}>
      <h1 className="mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        {item.frontmatter.title}
      </h1>

      {item.frontmatter.summary && (
        <p
          className="text-xl italic mb-6"
          style={{ color: "var(--secondary-ink)" }}
        >
          {item.frontmatter.summary}
        </p>
      )}

      {item.frontmatter.tags && item.frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
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

      <Divider symbol="✦" />

      <article className="prose-library">
        <MDXRemote source={stripFirstH1(item.content)} components={MdxComponents} />
      </article>
    </PageLayout>
  );
}
