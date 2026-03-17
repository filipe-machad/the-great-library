import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function CosmologiaPage() {
  const items = getContentByCategory("cosmology");
  const index = getCategoryIndex("cosmology");

  return (
    <CategoryPage
      title="Cosmologia"
      subtitle="As origens do mundo e suas forças primordiais"
      items={items}
      indexContent={index?.content}
      basePath="/cosmologia"
    />
  );
}
