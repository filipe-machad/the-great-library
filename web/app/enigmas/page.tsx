import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function EnigmasPage() {
  const items = getContentByCategory("enigmas");
  const index = getCategoryIndex("enigmas");

  return (
    <CategoryPage
      title="Enigmas"
      subtitle="Mistérios e puzzles do mundo"
      items={items}
      indexContent={index?.content}
      basePath="/enigmas"
    />
  );
}
