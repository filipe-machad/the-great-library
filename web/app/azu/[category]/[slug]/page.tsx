import { notFound } from "next/navigation";
import { getAllContent, getContentBySlug } from "@/lib/content";
import { getAzuCategoryConfig, AZU_CATEGORY_SEGMENTS, getAzuBasePath } from "@/lib/azu-categories";
import { ContentPage } from "@/components/content/ContentPage";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const segment of AZU_CATEGORY_SEGMENTS) {
    const config = getAzuCategoryConfig(segment);
    if (!config) continue;
    const items = getAllContent().filter((i) => i.category === config.canonCategory);
    for (const item of items) {
      params.push({ category: segment, slug: item.slug });
    }
  }
  return params;
}

export default async function AzuSlugPage({ params }: Props) {
  const { category, slug } = await params;
  const config = getAzuCategoryConfig(category);
  if (!config) notFound();

  const item = getContentBySlug(config.canonCategory, slug);
  if (!item) notFound();

  const basePath = getAzuBasePath(config.segment);

  return (
    <ContentPage
      item={item}
      backHref={basePath}
      backLabel={config.title}
    />
  );
}
