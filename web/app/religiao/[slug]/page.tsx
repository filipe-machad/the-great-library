import { getAllContent, getContentBySlug } from "@/lib/content";
import { ContentPage } from "@/components/content/ContentPage";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const items = getAllContent().filter((i) => i.category === "religion");
  return items.map((item) => ({ slug: item.slug }));
}

export default async function ReligiaoSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug("religion", slug);
  if (!item) notFound();

  return <ContentPage item={item} backHref="/religiao" backLabel="Religião" />;
}
