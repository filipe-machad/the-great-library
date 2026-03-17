import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azü",
  description: "Um mundo onde uma energia vital permeia lugares e pessoas — histórias de quem tece, de lugares sagrados e de artefatos que carregam memória.",
};

export default function AzuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
