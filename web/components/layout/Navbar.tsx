"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/lore", key: "lore" },
  { href: "/conceitos", key: "concepts" },
  { href: "/personagens", key: "characters" },
  { href: "/mundo", key: "world" },
  { href: "/mecanicas", key: "mechanics" },
  { href: "/glossario", key: "glossary" },
] as const;

export function Navbar({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="border-b sticky top-0 z-50 backdrop-blur-sm"
      style={{
        borderColor: "var(--divider)",
        backgroundColor: "rgba(248, 245, 240, 0.95)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <h4
              className="transition-colors duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
                fontSize: "1.25rem",
                marginBottom: 0,
              }}
            >
              A Grande Biblioteca
            </h4>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--link-color)",
                }}
              >
                {t(link.key)}
              </Link>
            ))}
            {onSearchOpen && (
              <button
                onClick={onSearchOpen}
                className="p-2 transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--link-color)" }}
                aria-label={t("search")}
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            {onSearchOpen && (
              <button
                onClick={onSearchOpen}
                className="p-2"
                style={{ color: "var(--link-color)" }}
                aria-label={t("search")}
              >
                <Search size={18} />
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              style={{ color: "var(--foreground)" }}
              aria-label={t("menu")}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-2 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--link-color)",
                }}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
