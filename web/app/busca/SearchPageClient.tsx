"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import {
  getCategoryLabel,
  getCategoryPath,
  type SearchItem,
} from "@/lib/search";

interface SearchPageClientProps {
  searchIndex: SearchItem[];
}

export function SearchPageClient({ searchIndex }: SearchPageClientProps) {
  const t = useTranslations("search");
  const router = useRouter();
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 3 },
          { name: "summary", weight: 2 },
          { name: "tags", weight: 1.5 },
          { name: "content", weight: 1 },
        ],
        threshold: 0.4,
        includeScore: true,
        minMatchCharLength: 2,
      }),
    [searchIndex]
  );

  const results = query.length >= 2 ? fuse.search(query).slice(0, 20) : [];

  const grouped = results.reduce(
    (acc, result) => {
      const cat = result.item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(result.item);
      return acc;
    },
    {} as Record<string, SearchItem[]>
  );

  return (
    <PageLayout showBackLink>
      <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        {t("title")}
      </h1>

      <div
        className="flex items-center gap-3 px-4 py-3 mb-12 rounded"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <Search size={18} style={{ color: "var(--secondary-ink)" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("placeholder")}
          className="flex-1 bg-transparent outline-none text-base"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--foreground)",
          }}
          autoFocus
        />
      </div>

      {query.length >= 2 && results.length === 0 && (
        <p
          className="text-center italic py-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("empty")}
        </p>
      )}

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-12">
          <h3
            className="mb-4 text-lg"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--accent-gold)",
            }}
          >
            {getCategoryLabel(category)}
          </h3>
          <div className="space-y-3">
            {items.map((item) => (
              <button
                key={item.slug}
                onClick={() =>
                  router.push(`${getCategoryPath(item.category)}/${item.slug}`)
                }
                className="w-full text-left p-4 transition-all duration-200 hover:shadow-sm cursor-pointer"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <h4
                  className="text-base mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                  }}
                >
                  {item.title}
                </h4>
                {item.summary && (
                  <p
                    className="text-sm line-clamp-2"
                    style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                  >
                    {item.summary}
                  </p>
                )}
              </button>
            ))}
          </div>
        </section>
      ))}
    </PageLayout>
  );
}
