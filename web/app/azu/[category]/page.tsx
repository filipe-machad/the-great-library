import { notFound } from "next/navigation";
import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { getAzuCategoryConfig, AZU_CATEGORY_SEGMENTS, getAzuBasePath } from "@/lib/azu-categories";
import { CategoryPage } from "@/components/content/CategoryPage";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return AZU_CATEGORY_SEGMENTS.map((segment) => ({ category: segment }));
}

export default async function AzuCategoryPage({ params }: Props) {
  const { category } = await params;
  const config = getAzuCategoryConfig(category);
  if (!config) notFound();

  const items = getContentByCategory(config.canonCategory);
  const index = getCategoryIndex(config.canonCategory);
  const basePath = getAzuBasePath(config.segment);

  return (
    <CategoryPage
      title={config.title}
      subtitle={config.subtitle}
      items={items}
      indexContent={index?.content}
      basePath={basePath}
      backHref="/azu"
      backLabel="Azü"
    />
  );
}
