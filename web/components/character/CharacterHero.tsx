import Image from "next/image";
import type { CharacterFrontmatter } from "@/lib/characters";

interface CharacterHeroProps {
  frontmatter: CharacterFrontmatter;
}

export function CharacterHero({ frontmatter }: CharacterHeroProps) {
  const {
    title,
    registryNumber,
    epithet,
    portrait,
    status,
    statusDetail,
  } = frontmatter;

  return (
    <section className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mb-16">
      {/* Portrait frame and gold accent */}
      <div className="relative flex-shrink-0">
        <div
          className="relative w-48 h-56 sm:w-56 sm:h-64 overflow-hidden"
          style={{
            border: "6px solid var(--card)",
            boxShadow:
              "0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src={portrait}
            alt={title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        {/* Gold accent triangle at bottom-right */}
        <div
          className="absolute -bottom-2 -right-2 w-8 h-8"
          style={{
            background: "var(--accent-gold)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Name, epithet, status */}
      <div className="text-center sm:text-left">
        <p
          className="small-caps mb-2 text-xs tracking-[0.2em]"
          style={{ color: "var(--secondary-ink)" }}
        >
          Registro N&ordm; {String(registryNumber).padStart(4, "0")}
        </p>
        <h1
          className="mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        <p
          className="italic text-lg mb-6 pl-4"
          style={{
            color: "var(--secondary-ink)",
            borderLeft: "3px solid var(--accent-gold)",
          }}
        >
          &ldquo;{epithet}&rdquo;
        </p>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <span
            className="small-caps text-xs tracking-[0.12em] px-3 py-1"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            {status}
          </span>
          {statusDetail && (
            <span
              className="small-caps text-xs tracking-[0.12em] px-3 py-1"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              {statusDetail}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
