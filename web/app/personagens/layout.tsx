import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personagens & Entidades | A Grande Biblioteca",
  description: "Aqueles que habitam os salões da Biblioteca e aqueles que buscam o que ela contém.",
};

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
