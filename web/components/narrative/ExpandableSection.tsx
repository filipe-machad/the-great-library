"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ExpandableSection({
  title,
  subtitle,
  children,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mb-8 pb-8"
      style={{ borderBottom: "1px solid var(--divider)" }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group cursor-pointer"
      >
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3
              className="mb-1 transition-colors duration-200 group-hover:text-[var(--accent-gold)]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className="text-sm italic"
                style={{ color: "var(--secondary-ink)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
          <span
            className="text-sm transition-transform duration-200 flex-shrink-0"
            style={{
              color: "var(--accent-gold)",
              transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pl-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
