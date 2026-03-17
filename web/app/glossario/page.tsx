import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function GlossarioPage() {
  const items = getContentByCategory("glossary");
  const index = getCategoryIndex("glossary");

  return (
    <CategoryPage
      title="Glossário"
      subtitle="Termos e definições do cenário narrativo"
      items={items}
      indexContent={index?.content}
      basePath="/glossario"
    />
  );
}
