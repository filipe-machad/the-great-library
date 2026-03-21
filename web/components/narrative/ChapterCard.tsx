"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

export type ChapterCardProps =
  | {
      title: string;
      description: string;
      href: string;
      icon: LucideIcon;
      leading?: undefined;
    }
  | {
      title: string;
      description: string;
      href: string;
      icon?: undefined;
      leading: ReactNode;
    };

export function ChapterCard(props: ChapterCardProps) {
  const t = useTranslations("home");
  const { title, description, href } = props;
  const LucideIconComp =
    "icon" in props && props.icon ? props.icon : null;

  return (
    <Link href={href} className="block group">
      <div
        className="relative p-8 h-full overflow-hidden rounded-lg border shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 group-hover:-translate-y-0.5 group-hover:shadow-md flex flex-col justify-between before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        {"leading" in props && props.leading != null ? (
          <div
            className="mb-4 flex shrink-0 items-center text-[var(--accent-gold)]"
            aria-hidden
          >
            {props.leading}
          </div>
        ) : LucideIconComp ? (
          <LucideIconComp
            size={32}
            className="mb-4 flex-shrink-0"
            style={{ color: "var(--accent-gold)" }}
          />
        ) : null}
        <h3
          className="mb-3 transition-colors duration-300 ease-out"
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
            className="text-xs uppercase tracking-wider transition-colors duration-300 ease-out group-hover:text-[var(--accent-gold)]"
            style={{
              color: "var(--secondary-ink)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {t("readChapter")}
          </span>
          <span
            className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-1"
            style={{ color: "var(--accent-gold)" }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
