"use client";

import { Library } from "lucide-react";

/** Marca do site: ícone Lucide `Library` + texto. */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 h-8 shrink-0 ${className ?? ""}`}
    >
      <Library
        className="h-[1.35rem] w-[1.35rem] shrink-0 text-[var(--accent-gold)]"
        strokeWidth={1.65}
        aria-hidden
      />
      <span
        className="text-[1.25rem] leading-none whitespace-nowrap"
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
