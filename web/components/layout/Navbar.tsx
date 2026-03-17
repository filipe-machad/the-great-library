"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Search, Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { href: "/lore", key: "about" },
] as const;

export function Navbar({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer.links");
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
          <Link href="/" className="group flex items-center gap-2">
            <BookOpen
              size={22}
              style={{ color: "var(--accent-gold)" }}
              className="flex-shrink-0"
            />
            <h4
              className="transition-colors duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--accent-gold)",
                fontSize: "1.25rem",
                marginBottom: 0,
              }}
            >
              A Grande Biblioteca
            </h4>
          </Link>

          {/* Desktop: Sobre a Biblioteca + search */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-sm transition-colors duration-200 hover:text-[var(--accent-gold)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--accent-gold)] after:transition-all after:duration-200 hover:after:w-full"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--link-color)",
                }}
              >
                {tFooter(link.key)}
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
                {tFooter(link.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
