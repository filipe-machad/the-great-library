import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artefatos | A Grande Biblioteca",
  description: "Arins e itens imbuídos — catalisadores da azü interior do portador.",
};

export default function ArtefatosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
