import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Busca Alquímica | A Grande Biblioteca",
  description: "Encontre termos específicos na lore da Grande Biblioteca.",
};

export default function BuscaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
