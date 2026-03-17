"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface ChapterCardProps {
  title: string;
  description: string;
  href: string;
}

export function ChapterCard({ title, description, href }: ChapterCardProps) {
  const t = useTranslations("nav");

  return (
    <Link href={href} className="block group">
      <div
        className="p-8 transition-all duration-300 hover:shadow-sm"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <h3
          className="mb-3 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          {title}
        </h3>
        <p className="leading-relaxed" style={{ color: "var(--secondary-ink)" }}>
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span
            className="text-sm transition-colors duration-200"
            style={{
              color: "var(--link-color)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {t("explore")}
          </span>
          <span
            className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: "var(--accent-gold)" }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
