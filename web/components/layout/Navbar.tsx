"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Search, Menu, X, BookOpen, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/lore", key: "about" },
] as const;

export function Navbar({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer.links");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <nav
      className="border-b sticky top-0 z-50 backdrop-blur-sm"
      style={{
        borderColor: "var(--divider)",
        backgroundColor: "var(--nav-bg)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 relative">
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
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle cursor-pointer p-2"
              style={{ color: "var(--link-color)" }}
              aria-label={resolvedTheme === "dark" ? "Modo claro" : "Modo escuro"}
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
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
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle cursor-pointer p-2"
              style={{ color: "var(--link-color)" }}
              aria-label={resolvedTheme === "dark" ? "Modo claro" : "Modo escuro"}
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
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

        {/* Mobile menu (overlay, doesn't affect page height) */}
        <div
          className={[
            "md:hidden absolute left-0 right-0 top-full",
            "origin-top transition-[transform,opacity] duration-300 ease-out",
            mobileOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none",
          ].join(" ")}
          style={{
            backgroundColor: "var(--nav-bg)",
            borderBottom: "1px solid var(--divider)",
          }}
          aria-hidden={!mobileOpen}
        >
          <div className="px-6 py-4 flex flex-col gap-3">
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
        </div>
      </div>
    </nav>
  );
}
