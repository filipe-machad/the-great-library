import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fragmentados | A Grande Biblioteca",
  description: "Em construção.",
};

export default function FragmentadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
