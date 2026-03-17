import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mecânicas | A Grande Biblioteca",
  description: "Sistema de jogo, regras de criação de personagem e efeitos de itens.",
};

export default function MecanicasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
