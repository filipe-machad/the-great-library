"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Feather } from "lucide-react";

const footerLinks = [
  { href: "/", key: "home" },
  { href: "/azu", key: "azu" },
  { href: "/fragmentados", key: "fragmentados" },
  { href: "/o-barman-atemporal", key: "barman" },
  { href: "/lore", key: "about" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="border-t mt-24"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
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
            color: "var(--footer-foreground)",
            fontSize: "1.25rem",
          }}
        >
          A Grande Biblioteca
        </h4>
        <p
          className="text-sm italic mb-8"
          style={{ color: "var(--footer-foreground)", opacity: 0.85 }}
        >
          {t("text")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative inline-block text-xs tracking-widest transition-colors duration-200 hover:text-[var(--accent-gold)] after:absolute after:left-0 after:right-0 after:bottom-[-5px] after:h-px after:bg-[var(--accent-gold)] after:opacity-0 after:transition-opacity after:duration-200 after:delay-150 hover:after:opacity-100 hover:after:delay-50"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--footer-foreground)",
                opacity: 0.8,
              }}
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
        </div>
        <p
          className="text-xs"
          style={{ color: "var(--footer-foreground)", opacity: 0.6 }}
        >
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
