import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--divider)" }}>
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p
          className="text-sm italic mb-2"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("text")}
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--secondary-ink)", opacity: 0.6 }}
        >
          {t("subtitle")}
        </p>
      </div>
    </footer>
  );
}
