"use client";

import { useTranslations } from "next-intl";
import { Sparkles, Puzzle, Wine } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ChapterCard } from "@/components/narrative/ChapterCard";
import { Divider } from "@/components/narrative/Divider";

export default function Home() {
  const t = useTranslations("home");

  return (
    <PageLayout>
      {/* Hero */}
      <div className="text-center mb-24">
        <h1
          className="mb-6 text-5xl sm:text-6xl md:text-7xl"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          A Grande Biblioteca
        </h1>
        <p
          className="text-xl sm:text-2xl italic mb-8 leading-relaxed px-4"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("heroSubtitle")}
        </p>
        <div className="max-w-2xl mx-auto mb-6">
          <p
            className="text-lg italic"
            style={{ color: "var(--accent-gold)" }}
          >
            &ldquo;{t("epigraph")}&rdquo;
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="leading-relaxed" style={{ color: "var(--secondary-ink)" }}>
            {t("introText")}
          </p>
        </div>
      </div>

      <Divider symbol="✦" bounce />

      {/* O que é A Grande Biblioteca? */}
      <section className="mb-24">
        <h2
          className="text-center mb-12 font-medium"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("whatIsTitle")}
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p>{t("whatIsP1")}</p>
        </div>
      </section>

      <Divider bounce />

      {/* Mundos */}
      <section>
        <h2
          className="text-center mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("worldsTitle")}
        </h2>
        <p
          className="text-center mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("worldsSubtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ChapterCard
            title={t("cards.azu.title")}
            description={t("cards.azu.description")}
            href="/azu"
            icon={Sparkles}
          />
          <ChapterCard
            title={t("cards.barman.title")}
            description={t("cards.barman.description")}
            href="/o-barman-atemporal"
            icon={Wine}
          />
          <ChapterCard
            title={t("cards.fragmentados.title")}
            description={t("cards.fragmentados.description")}
            href="/fragmentados"
            icon={Puzzle}
          />
        </div>
      </section>
    </PageLayout>
  );
}
