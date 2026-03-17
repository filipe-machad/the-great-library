import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Lore | A Grande Biblioteca",
  description: "Sobre as origens e a natureza da Grande Biblioteca — onde a memória vive eterna.",
};

export default function LoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
