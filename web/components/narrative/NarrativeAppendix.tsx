"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, X } from "lucide-react";

export type NarrativeAppendixProps = {
  children: React.ReactNode;
  /** Título no cabeçalho do painel (não aparece no botão flutuante). */
  title?: string;
  /** Linha pequena acima do título (ex.: Tomos do conto / Tomos da crónica). */
  panelEyebrow?: string;
  /** Acessibilidade: descrição do botão que abre o painel. */
  openButtonAriaLabel?: string;
};

/**
 * Mobile: separador à direita + painel que desliza da direita com os cards
 * que, em desktop, ficam na coluna lateral (contos ou crónicas de campanha).
 */
export function NarrativeAppendix({
  children,
  title = "Apêndice",
  panelEyebrow = "Tomos do conto",
  openButtonAriaLabel = "Abrir apêndice",
}: NarrativeAppendixProps) {
  const [open, setOpen] = useState(false);
  const [showScrollEndFab, setShowScrollEndFab] = useState(false);
  const scrollBodyRef = useRef<HTMLDivElement>(null);
  const scrollInnerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const headingId = `${panelId}-heading`;

  const updateScrollEndFab = useCallback(() => {
    const el = scrollBodyRef.current;
    if (!el) return;
    const threshold = 32;
    const canScroll = el.scrollHeight > el.clientHeight + threshold;
    const nearBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
    setShowScrollEndFab(canScroll && !nearBottom);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setShowScrollEndFab(false);
      return;
    }
    const t = window.setTimeout(() => updateScrollEndFab(), 0);
    const outer = scrollBodyRef.current;
    const inner = scrollInnerRef.current;
    if (!outer) {
      return () => clearTimeout(t);
    }
    const ro = new ResizeObserver(() => updateScrollEndFab());
    ro.observe(outer);
    if (inner) ro.observe(inner);
    return () => {
      clearTimeout(t);
      ro.disconnect();
    };
  }, [open, updateScrollEndFab]);

  const scrollToEnd = () => {
    const el = scrollBodyRef.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="lg:hidden">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-0 top-1/2 z-40 flex h-9 w-9 cursor-pointer touch-manipulation -translate-y-1/2 items-center justify-center rounded-l-xl border border-r-0 py-0 pl-px pr-px backdrop-blur-md transition-transform duration-200 ease-out motion-reduce:transition-none hover:scale-[1.04] active:scale-[0.98]"
          style={{
            borderColor: "color-mix(in srgb, var(--accent-gold) 30%, var(--border) 70%)",
            backgroundColor: "color-mix(in srgb, var(--card) 82%, transparent)",
            color: "var(--accent-gold)",
            boxShadow:
              "0 2px 14px rgba(0, 0, 0, 0.08), inset 0 1px 0 color-mix(in srgb, var(--foreground) 6%, transparent)",
          }}
          aria-expanded={false}
          aria-controls={panelId}
          aria-label={openButtonAriaLabel}
        >
          <ChevronLeft
            size={18}
            strokeWidth={1.85}
            className="shrink-0 opacity-90"
            aria-hidden
          />
        </button>
      ) : null}

      <div
        className={[
          "fixed inset-0 z-[70] lg:hidden transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[color-mix(in_srgb,var(--foreground)_22%,transparent)] dark:bg-[color-mix(in_srgb,#000_55%,transparent)]"
          style={{ backdropFilter: open ? "blur(4px)" : undefined }}
          onClick={() => setOpen(false)}
          aria-label="Fechar apêndice"
        />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          className={[
            "absolute top-0 right-0 flex h-full max-w-[min(100vw-2.5rem,22rem)] w-full flex-col overflow-hidden transition-transform duration-300 ease-out motion-reduce:transition-none",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          style={{
            /* Um único vidro em todo o painel */
            backgroundColor: "color-mix(in srgb, var(--card) 80%, transparent)",
            backdropFilter: "blur(20px) saturate(1.35)",
            WebkitBackdropFilter: "blur(20px) saturate(1.35)",
            boxShadow: [
              "-1px 0 4px color-mix(in srgb, var(--accent-gold) 28%, transparent)",
              "-2px 0 8px -1px color-mix(in srgb, var(--accent-gold) 16%, transparent)",
              "-4px 0 14px -4px rgba(0, 0, 0, 0.08)",
            ].join(", "),
          }}
        >
          <header className="flex shrink-0 items-center justify-between gap-3 bg-transparent px-4 pt-3.5 pb-1">
            <div className="min-w-0">
              <p
                className="text-[0.7rem] small-caps tracking-[0.18em]"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--secondary-ink)",
                }}
              >
                {panelEyebrow}
              </p>
              <h2
                id={headingId}
                className="mb-0 truncate text-lg leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--foreground)",
                }}
              >
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="theme-toggle shrink-0 rounded-full p-2"
              style={{ color: "var(--link-color)" }}
              aria-label="Fechar"
            >
              <X size={20} strokeWidth={1.65} />
            </button>
          </header>

          <div className="relative min-h-0 flex-1">
            <div
              ref={scrollBodyRef}
              onScroll={updateScrollEndFab}
              className="narrative-appendix-scroll h-full min-h-0 overflow-y-auto overscroll-contain bg-transparent px-4 py-5"
            >
              <div ref={scrollInnerRef} className="flex flex-col gap-6">
                {children}
              </div>
            </div>
            {showScrollEndFab ? (
              <button
                type="button"
                onClick={scrollToEnd}
                className="absolute bottom-3 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 cursor-pointer touch-manipulation items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none hover:scale-[1.06] active:scale-[0.96]"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent-gold) 35%, var(--border) 65%)",
                  backgroundColor:
                    "color-mix(in srgb, var(--card) 88%, transparent)",
                  color: "var(--accent-gold)",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,0.08), inset 0 1px 0 color-mix(in srgb, var(--foreground) 6%, transparent)",
                }}
                aria-label="Ir para o fim do apêndice"
              >
                <ChevronDown
                  className="h-4 w-4"
                  strokeWidth={2.1}
                  aria-hidden
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
