import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function AzuPage() {
  const items = getContentByCategory("azu");
  const index = getCategoryIndex("azu");

  return (
    <CategoryPage
      title="Azü"
      subtitle="A energia vital que rege o mundo"
      items={items}
      indexContent={index?.content}
      basePath="/azu"
    />
  );
}
