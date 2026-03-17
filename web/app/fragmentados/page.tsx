"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { PageLayout } from "@/components/layout/PageLayout";

export default function FragmentadosPage() {
  const t = useTranslations("worlds");
  const tHome = useTranslations("home.cards.fragmentados");

  return (
    <PageLayout showBackLink>
      <div className="text-center py-24">
        <h1
          className="mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tHome("title")}
        </h1>
        <p
          className="text-xl mb-12 italic"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("underConstruction")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 group"
          style={{ color: "var(--link-color)" }}
        >
          <span className="text-sm transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span style={{ fontFamily: "var(--font-heading)" }}>
            {t("returnToHub")}
          </span>
        </Link>
      </div>
    </PageLayout>
  );
}
