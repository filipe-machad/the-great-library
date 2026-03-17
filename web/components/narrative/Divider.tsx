export function Divider({ symbol }: { symbol?: string }) {
  return (
    <div className="flex items-center justify-center my-16">
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
