import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Barman Atemporal | A Grande Biblioteca",
  description: "Em construção.",
};

export default function BarmanAtemporalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
