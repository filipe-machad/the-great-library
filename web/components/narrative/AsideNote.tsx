"use client";

interface AsideNoteProps {
  children: React.ReactNode;
  attribution?: string;
}

/**
 * Scholarly margin note — positioned left on desktop, inline on mobile.
 * Use in MDX: <AsideNote attribution="— Anotações do Primeiro Estudioso">...</AsideNote>
 */
export function AsideNote({ children, attribution }: AsideNoteProps) {
  return (
    <aside
      className="my-8 pl-4 border-l-2 md:float-left md:clear-left md:mr-6 md:mb-4 md:mt-0 md:w-52 md:pl-4"
      style={{
        borderColor: "var(--accent-gold)",
      }}
    >
      <p
        className="text-sm italic leading-relaxed"
        style={{ color: "var(--secondary-ink)" }}
      >
        {children}
      </p>
      {attribution && (
        <p
          className="mt-2 text-xs italic"
          style={{ color: "var(--secondary-ink)", opacity: 0.8 }}
        >
          {attribution}
        </p>
      )}
    </aside>
  );
}
