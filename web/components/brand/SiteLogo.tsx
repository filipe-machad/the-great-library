"use client";

import { Library } from "lucide-react";

/** Marca do site: ícone Lucide `Library` + texto. */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 shrink-0 min-w-0 md:gap-2 ${className ?? "h-7 md:h-8"}`}
    >
      <Library
        className="h-5 w-5 shrink-0 text-[var(--accent-gold)] md:h-[1.35rem] md:w-[1.35rem]"
        strokeWidth={1.65}
        aria-hidden
      />
      <span
        className="text-[1.0625rem] leading-none truncate md:text-[1.25rem] md:whitespace-nowrap"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--accent-gold)",
        }}
      >
        A Grande Biblioteca
      </span>
    </span>
  );
}
