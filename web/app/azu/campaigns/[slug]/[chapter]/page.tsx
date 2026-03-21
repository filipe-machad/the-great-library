import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCampaigns, getChapterBySlug } from "@/lib/campaigns";
import { NarrativePage } from "@/components/campaign/NarrativePage";

interface Props {
  params: Promise<{ slug: string; chapter: string }>;
}

export async function generateStaticParams() {
  const all: { slug: string; chapter: string }[] = [];
  for (const campaign of getAllCampaigns()) {
    for (const ch of campaign.chapters) {
      all.push({ slug: campaign.slug, chapter: ch.slug });
    }
  }
  return all;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, chapter } = await params;
  const result = getChapterBySlug(slug, chapter);
  if (!result) return {};

  return {
    title: `${result.chapter.title} — ${result.campaign.title} | A Grande Biblioteca`,
    description: result.chapter.summary,
  };
}

export default async function ChapterNarrativePage({ params }: Props) {
  const { slug, chapter } = await params;
  const result = getChapterBySlug(slug, chapter);
  if (!result) notFound();

  return (
    <NarrativePage
      variant="campaign"
      campaign={result.campaign}
      chapter={result.chapter}
    />
  );
}
