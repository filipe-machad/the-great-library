"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  showBackLink?: boolean;
  backHref?: string;
  backLabel?: string;
  onSearchOpen?: () => void;
}

export function PageLayout({
  children,
  showBackLink = false,
  backHref = "/",
  backLabel,
  onSearchOpen,
}: PageLayoutProps) {
  const t = useTranslations("nav");
  const resolvedBackLabel = backLabel ?? t("returnToLibrary");

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Paper texture overlay */}
      <div
        className="noise-overlay fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
          mixBlendMode: "multiply",
          opacity: 0.015,
        }}
      />

      <Navbar onSearchOpen={onSearchOpen} />

      <main className="max-w-3xl mx-auto px-6 py-16 relative">
        {showBackLink && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 mb-12 group"
            style={{ color: "var(--link-color)" }}
          >
            <span className="text-sm transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span
              className="text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {resolvedBackLabel}
            </span>
          </Link>
        )}
        {children}
      </main>

      <Footer />
    </div>
  );
}
