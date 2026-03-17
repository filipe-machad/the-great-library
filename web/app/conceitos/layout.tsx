import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conceitos Fundamentais | A Grande Biblioteca",
  description: "Os princípios metafísicos que governam a Biblioteca e tudo que ela contém.",
};

export default function ConceptsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
