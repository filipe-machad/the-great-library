"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

interface ChapterCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ChapterCard({ title, description, href, icon: Icon }: ChapterCardProps) {
  const t = useTranslations("home");

  return (
    <Link href={href} className="block group">
      <div
        className="p-8 h-full transition-all duration-300 border-2 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--accent-gold)]"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <Icon
          size={32}
          style={{ color: "var(--accent-gold)", marginBottom: "1rem" }}
          className="flex-shrink-0"
        />
        <h3
          className="mb-3 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
            fontSize: "1.25rem",
          }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed flex-1 text-sm"
          style={{ color: "var(--secondary-ink)" }}
        >
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <span
            className="text-xs uppercase tracking-wider transition-colors duration-200 group-hover:text-[var(--accent-gold)]"
            style={{
              color: "var(--secondary-ink)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {t("readChapter")}
          </span>
          <span
            className="text-xs transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "var(--accent-gold)" }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
