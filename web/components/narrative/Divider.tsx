interface DividerProps {
  symbol?: string;
  bounce?: boolean;
}

export function Divider({ symbol, bounce = false }: DividerProps) {
  return (
    <div
      className={`flex items-center justify-center my-16${
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
