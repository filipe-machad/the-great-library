"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Search, X } from "lucide-react";
import Fuse, { type FuseResult } from "fuse.js";
import {
  getCategoryLabel,
  getCategoryPath,
  type SearchItem,
} from "@/lib/search";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  searchIndex: SearchItem[];
}

export function SearchDialog({
  isOpen,
  onClose,
  searchIndex,
}: SearchDialogProps) {
  const t = useTranslations("search");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);

  const fuse = new Fuse(searchIndex, {
    keys: [
      { name: "title", weight: 3 },
      { name: "summary", weight: 2 },
      { name: "tags", weight: 1.5 },
      { name: "content", weight: 1 },
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  });

  useEffect(() => {
    if (query.length >= 2) {
      setResults(fuse.search(query).slice(0, 10));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape") onClose();
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSelect = (item: SearchItem) => {
    const basePath = getCategoryPath(item.category);
    router.push(`${basePath}/${item.slug}`);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4 rounded-lg shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid var(--divider)" }}
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
          <button
            onClick={onClose}
            className="p-1 rounded"
            style={{ color: "var(--secondary-ink)" }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <p
              className="p-6 text-center italic text-sm"
              style={{ color: "var(--secondary-ink)" }}
            >
              {t("empty")}
            </p>
          )}

          {results.map((result) => (
            <button
              key={`${result.item.category}-${result.item.slug}`}
              onClick={() => handleSelect(result.item)}
              className="w-full text-left px-4 py-3 transition-colors duration-150 hover:bg-muted/50 cursor-pointer"
              style={{ borderBottom: "1px solid var(--divider)" }}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="text-xs px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{
                    backgroundColor: "var(--muted)",
                    color: "var(--muted-foreground)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {getCategoryLabel(result.item.category)}
                </span>
                <span
                  className="font-medium"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                  }}
                >
                  {result.item.title}
                </span>
              </div>
              {result.item.summary && (
                <p
                  className="text-xs mt-1 line-clamp-1"
                  style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                >
                  {result.item.summary}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div
          className="px-4 py-2 text-xs flex items-center gap-4"
          style={{
            borderTop: "1px solid var(--divider)",
            color: "var(--secondary-ink)",
          }}
        >
          <span>
            <kbd className="px-1 py-0.5 rounded text-[10px]" style={{ backgroundColor: "var(--muted)" }}>
              ↵
            </kbd>{" "}
            selecionar
          </span>
          <span>
            <kbd className="px-1 py-0.5 rounded text-[10px]" style={{ backgroundColor: "var(--muted)" }}>
              esc
            </kbd>{" "}
            fechar
          </span>
        </div>
      </div>
    </div>
  );
}
