"use client";

import { useTranslations } from "next-intl";
import {
  Scroll,
  Scale,
  Users,
  Map,
  Sparkles,
  Gem,
  Cog,
  BookMarked,
} from "lucide-react";
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

      <Divider symbol="✦" />

      {/* What is this world? */}
      <section className="mb-24">
        <h2
          className="text-center mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("whatIsTitle")}
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <p>{t("whatIsP1")}</p>
          <p>{t("whatIsP2")}</p>
          <p>{t("whatIsP3")}</p>
        </div>
      </section>

      <Divider />

      {/* Índices do Conhecimento */}
      <section>
        <h2
          className="text-center mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("indicesTitle")}
        </h2>
        <p
          className="text-center mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("indicesSubtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChapterCard
            title={t("cards.lore.title")}
            description={t("cards.lore.description")}
            href="/lore"
            icon={Scroll}
          />
          <ChapterCard
            title={t("cards.concepts.title")}
            description={t("cards.concepts.description")}
            href="/conceitos"
            icon={Scale}
          />
          <ChapterCard
            title={t("cards.characters.title")}
            description={t("cards.characters.description")}
            href="/personagens"
            icon={Users}
          />
          <ChapterCard
            title={t("cards.world.title")}
            description={t("cards.world.description")}
            href="/mundo"
            icon={Map}
          />
          <ChapterCard
            title={t("cards.azu.title")}
            description={t("cards.azu.description")}
            href="/azu"
            icon={Sparkles}
          />
          <ChapterCard
            title={t("cards.artifacts.title")}
            description={t("cards.artifacts.description")}
            href="/artefatos"
            icon={Gem}
          />
          <ChapterCard
            title={t("cards.mechanics.title")}
            description={t("cards.mechanics.description")}
            href="/mecanicas"
            icon={Cog}
          />
          <ChapterCard
            title={t("cards.glossary.title")}
            description={t("cards.glossary.description")}
            href="/glossario"
            icon={BookMarked}
          />
        </div>
      </section>
    </PageLayout>
  );
}
