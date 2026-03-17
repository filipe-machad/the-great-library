import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ContentItem } from "@/lib/content";
import { Divider } from "@/components/narrative/Divider";
import { MdxComponents } from "./MdxComponents";

interface ContentPageProps {
  item: ContentItem;
  backHref: string;
  backLabel: string;
}

export function ContentPage({ item, backHref, backLabel }: ContentPageProps) {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
          mixBlendMode: "multiply",
        }}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 relative">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 mb-8 group"
          style={{ color: "var(--link-color)" }}
        >
          <span className="text-sm transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span
            className="text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {backLabel}
          </span>
        </Link>

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
          <MDXRemote source={item.content} components={MdxComponents} />
        </article>
      </main>

      <footer className="border-t mt-24" style={{ borderColor: "var(--divider)" }}>
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p
            className="text-sm italic mb-2"
            style={{ color: "var(--secondary-ink)" }}
          >
            Todo conhecimento aqui contido é mantido por Artêmis, guardiã e narradora da Grande Biblioteca.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--secondary-ink)", opacity: 0.6 }}
          >
            Um repositório de conhecimento, tanto ancestral quanto eterno
          </p>
        </div>
      </footer>
    </div>
  );
}
