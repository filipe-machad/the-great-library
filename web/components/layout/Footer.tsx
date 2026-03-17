"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Feather } from "lucide-react";

const footerLinks = [
  { href: "/", key: "home" },
  { href: "/lore", key: "lore" },
  { href: "/conceitos", key: "concepts" },
  { href: "/personagens", key: "characters" },
  { href: "/mundo", key: "world" },
  { href: "/mecanicas", key: "mechanics" },
  { href: "/glossario", key: "glossary" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--divider)" }}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Feather
          size={28}
          style={{ color: "var(--accent-gold)", marginBottom: "1rem" }}
          className="mx-auto"
        />
        <h4
          className="mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
            fontSize: "1.25rem",
          }}
        >
          A Grande Biblioteca
        </h4>
        <p
          className="text-sm italic mb-8"
          style={{ color: "var(--secondary-ink)" }}
        >
          {t("text")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest transition-colors duration-200 hover:text-[var(--accent-gold)]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--secondary-ink)",
              }}
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
        </div>
        <p
          className="text-xs"
          style={{ color: "var(--secondary-ink)", opacity: 0.7 }}
        >
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
