import { BookMarked, BookCopy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import type { CharacterAppearance } from "@/lib/characters";

interface AppearancesListProps {
  appearances: CharacterAppearance[];
}

export function AppearancesList({ appearances }: AppearancesListProps) {
  if (!appearances || appearances.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionHeading icon={BookMarked} title="Aparições Registradas" />
      <div className="space-y-2">
        {appearances.map((app) => {
          const isPrincipal = app.role === "principal";
          const isLink = !!app.href;
          const isActive = !!app.active;
          const Tag = isLink ? "a" : "div";

          return (
            <Tag
              key={app.title}
              {...(isLink ? { href: app.href } : {})}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-[background-color,border-color] duration-200 ${isActive ? "border-[var(--accent-gold)] [background:color-mix(in_srgb,var(--card)_90%,var(--accent-gold)_10%)]" : "border-[var(--border)]"} ${isLink && !isActive ? "cursor-pointer group hover:border-[var(--accent-gold)] hover:[background:color-mix(in_srgb,var(--card)_92%,var(--accent-gold)_8%)]" : ""}`}
              style={{
                backgroundColor: isActive ? undefined : "var(--card)",
                textDecoration: "none",
              }}
            >
              {isPrincipal ? (
                <BookMarked
                  size={16}
                  className="flex-shrink-0 transition-colors duration-200"
                  style={{ color: "var(--accent-gold)" }}
                />
              ) : (
                <BookCopy
                  size={16}
                  className="flex-shrink-0 transition-colors duration-200 [color:var(--secondary-ink)] group-hover:[color:var(--accent-gold)]"
                />
              )}
              <span
                className="flex-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--foreground)",
                  fontSize: "0.95rem",
                }}
              >
                {app.title}
              </span>
              <span
                className="small-caps text-xs tracking-[0.1em] px-3 py-1 flex-shrink-0"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--secondary-ink)",
                }}
              >
                {isPrincipal ? "Principal" : "Menção"}
              </span>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
