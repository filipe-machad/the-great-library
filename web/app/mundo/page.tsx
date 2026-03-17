import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function MundoPage() {
  const items = getContentByCategory("world");
  const index = getCategoryIndex("world");

  return (
    <CategoryPage
      title="O Mundo"
      subtitle="Locais, sítios sagrados, zonas de convergência e geografia"
      items={items}
      indexContent={index?.content}
      basePath="/mundo"
    />
  );
}
