import {
  Link2,
  Eye,
  User,
  Landmark,
  Swords,
  Heart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import type { CharacterConnection } from "@/lib/characters";

interface ConnectionCardsProps {
  connections: CharacterConnection[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  eye: Eye,
  user: User,
  landmark: Landmark,
  swords: Swords,
  heart: Heart,
  users: Users,
};

export function ConnectionCards({ connections }: ConnectionCardsProps) {
  if (!connections || connections.length === 0) return null;

  return (
    <section className="mb-20">
      <SectionHeading icon={Link2} title="Conexões" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {connections.map((conn) => {
          const Icon = ICON_MAP[conn.icon] || User;
          const isLink = !!conn.href;
          const Tag = isLink ? "a" : "div";

          return (
            <Tag
              key={conn.name}
              {...(isLink ? { href: conn.href } : {})}
              className="group flex items-center gap-4 p-4 sm:p-5 rounded-lg cursor-pointer transition-[background-color,border-color] duration-200 hover:border-[var(--accent-gold)] hover:[background:color-mix(in_srgb,var(--card)_92%,var(--accent-gold)_8%)]"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-[border-color,box-shadow] duration-200 group-hover:border-[var(--accent-gold)]"
                style={{
                  backgroundColor: "var(--muted)",
                  border: "2px solid transparent",
                }}
              >
                <Icon
                  size={18}
                  className="transition-colors duration-200 [color:var(--secondary-ink)] group-hover:[color:var(--accent-gold)]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="small-caps text-sm font-medium tracking-[0.04em]"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                    marginBottom: "0.15rem",
                  }}
                >
                  {conn.name}
                </p>
                <p
                  className="text-xs italic"
                  style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                >
                  {conn.type} ({conn.relationship})
                </p>
              </div>
              <span
                className="flex-shrink-0 text-sm transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent-gold)]"
                style={{ color: "var(--secondary-ink)" }}
              >
                &rsaquo;
              </span>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
