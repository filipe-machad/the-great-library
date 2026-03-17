import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function NpcsPage() {
  const items = getContentByCategory("npcs");
  const index = getCategoryIndex("npcs");

  return (
    <CategoryPage
      title="Figuras Notáveis"
      subtitle="Personagens e figuras importantes do mundo"
      items={items}
      indexContent={index?.content}
      basePath="/npcs"
    />
  );
}
