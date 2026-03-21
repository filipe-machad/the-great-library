interface DividerProps {
  symbol?: string;
  bounce?: boolean;
  /** Margens menores — use entre parágrafos de narrativa (evita “buracos” enormes). */
  compact?: boolean;
}

export function Divider({ symbol, bounce = false, compact = false }: DividerProps) {
  /* `compact`: menos espaço vertical (narrativa / ✦ entre blocos); mobile ainda mais apertado. */
  const marginY = compact ? "my-3 sm:my-6" : "my-16";
  return (
    <div
      className={`flex items-center justify-center ${marginY}${
        bounce ? " animate-bounce" : ""
      }`}
    >
      {symbol ? (
        <span className="text-2xl" style={{ color: "var(--accent-gold)" }}>
          {symbol}
        </span>
      ) : (
        <div
          className="w-24 h-px"
          style={{ backgroundColor: "var(--divider)" }}
        />
      )}
    </div>
  );
}
