import type { ComponentType } from "react";
import { AsideNote } from "@/components/narrative/AsideNote";

/** Component map for next-mdx-remote; typed locally to avoid relying on mdx/types resolution in build. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MDXComponentsMap = Record<string, ComponentType<any>>;

function MdxTable({ children }: { children?: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-8 -mx-4 px-4">
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        {children}
      </table>
    </div>
  );
}

function MdxTh({ children }: { children?: React.ReactNode }) {
  return (
    <th
      className="text-left p-3 font-semibold"
      style={{
        fontFamily: "var(--font-heading)",
        borderBottom: "2px solid var(--divider)",
        color: "var(--foreground)",
      }}
    >
      {children}
    </th>
  );
}

function MdxTd({ children }: { children?: React.ReactNode }) {
  return (
    <td className="p-3" style={{ borderBottom: "1px solid var(--divider)" }}>
      {children}
    </td>
  );
}

function MdxBlockquote({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="my-12 pl-8 border-l-2"
      style={{ borderColor: "var(--accent-gold)" }}
    >
      <div
        className="italic text-xl leading-relaxed"
        style={{ color: "var(--secondary-ink)" }}
      >
        {children}
      </div>
    </div>
  );
}

function MdxHr() {
  return (
    <div className="flex items-center justify-center my-16">
      <div
        className="w-24 h-px"
        style={{ backgroundColor: "var(--divider)" }}
      />
    </div>
  );
}

export const MdxComponents: MDXComponentsMap = {
  table: MdxTable,
  th: MdxTh,
  td: MdxTd,
  blockquote: MdxBlockquote,
  hr: MdxHr,
  AsideNote,
  h1: (props) => <h1 style={{ fontFamily: "var(--font-heading)" }} {...props} />,
  h2: (props) => <h2 style={{ fontFamily: "var(--font-heading)" }} {...props} />,
  h3: (props) => <h3 style={{ fontFamily: "var(--font-heading)" }} {...props} />,
  strong: (props) => <strong style={{ color: "var(--foreground)" }} {...props} />,
};
