import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function ArtefatosPage() {
  const items = getContentByCategory("artifacts");
  const index = getCategoryIndex("artifacts");

  return (
    <CategoryPage
      title="Artefatos"
      subtitle="Arins e itens imbuídos — catalisadores da azü interior"
      items={items}
      indexContent={index?.content}
      basePath="/artefatos"
    />
  );
}
