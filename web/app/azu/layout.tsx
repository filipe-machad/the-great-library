import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azü | A Grande Biblioteca",
  description: "A energia vital que rege o mundo — guia sensorial e mecânicas fundamentais.",
};

export default function AzuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
