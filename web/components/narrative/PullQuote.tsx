export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-12 pl-8 border-l-2"
      style={{ borderColor: "var(--accent-gold)" }}
    >
      <p
        className="italic text-xl leading-relaxed"
        style={{ color: "var(--secondary-ink)" }}
      >
        {children}
      </p>
    </div>
  );
}
