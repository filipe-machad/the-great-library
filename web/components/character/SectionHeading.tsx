import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon size={20} style={{ color: "var(--accent-gold)" }} />
      <h2
        className="small-caps mb-0"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--foreground)",
          fontSize: "1.75rem",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
