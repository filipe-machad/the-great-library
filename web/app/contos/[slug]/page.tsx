import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllContos, getContoBySlug } from "@/lib/contos";
import { NarrativePage } from "@/components/campaign/NarrativePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllContos().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const conto = getContoBySlug(slug);
  if (!conto) return {};

  return {
    title: `${conto.title} — Contos | A Grande Biblioteca`,
    description: conto.summary,
  };
}

export default async function ContoPage({ params }: Props) {
  const { slug } = await params;
  const conto = getContoBySlug(slug);
  if (!conto) notFound();

  return <NarrativePage variant="tale" tale={conto} />;
}
