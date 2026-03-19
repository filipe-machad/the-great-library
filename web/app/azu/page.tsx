"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import {
  AZU_CATEGORIES,
  getAzuBasePath,
} from "@/lib/azu-categories";
import {
  Sparkles,
  Map,
  Gem,
  Cog,
  BookMarked,
  Orbit,
  Heart,
  Users,
  Puzzle,
  Clock,
  Swords,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  energia: Sparkles,
  mundo: Map,
  artefatos: Gem,
  mecanicas: Cog,
  glossario: BookMarked,
  cosmologia: Orbit,
  religiao: Heart,
  faccoes: Users,
  npcs: Users,
  enigmas: Puzzle,
  cronologias: Clock,
};

export default function AzuHubPage() {
  return (
    <PageLayout showBackLink backHref="/" backLabel="Salão de Entrada">
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Azü
        </h1>
        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Um mundo onde uma energia vital permeia lugares e pessoas — histórias de quem tece, de lugares sagrados e de artefatos que carregam memória.
        </p>

        <Divider symbol="✦" />

        <h2 className="mb-6 mt-12" style={{ fontFamily: "var(--font-heading)" }}>
          Personagens
        </h2>
        <div className="mb-16">
          <Link href="/azu/characters" className="block group">
            <div
              className="relative pt-4 pb-4 pl-5 pr-4 md:pt-6 md:pb-6 md:pl-6 md:pr-5 overflow-hidden flex flex-col transition-all duration-300 border border-[var(--border)] hover:border-[var(--accent-gold)] before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 group-hover:before:h-full"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="flex items-baseline justify-between gap-4 flex-1">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: "var(--accent-gold)" }}>
                      <Swords size={20} />
                    </span>
                    <h3
                      className="text-lg mb-0"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--foreground)",
                      }}
                    >
                      Personagens
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                  >
                    Os protagonistas e figuras centrais cujas histórias definem eras
                  </p>
                </div>
                <span
                  className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 inline-block"
                  style={{ color: "var(--accent-gold)" }}
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Índices
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [grid-auto-rows:8.75rem] md:[grid-auto-rows:12rem]"
        >
          {AZU_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.segment] ?? BookMarked;
            return (
              <Link
                key={cat.segment}
                href={getAzuBasePath(cat.segment)}
                className="block group h-full"
              >
                <div
                  className="relative h-full pt-4 pb-4 pl-5 pr-4 md:pt-6 md:pb-6 md:pl-6 md:pr-5 overflow-hidden flex flex-col transition-all duration-300 border border-[var(--border)] hover:border-[var(--accent-gold)] before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                  }}
                >
                  <div className="flex items-baseline justify-between gap-4 flex-1">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ color: "var(--accent-gold)" }}>
                          <Icon size={20} />
                        </span>
                        <h3
                          className="text-lg mb-0"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--foreground)",
                          }}
                        >
                          {cat.title}
                        </h3>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 inline-block"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </article>
    </PageLayout>
  );
}
