import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Mundo | A Grande Biblioteca",
  description: "Locais, sítios sagrados, zonas de convergência e a geografia permeada pela azü.",
};

export default function MundoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
