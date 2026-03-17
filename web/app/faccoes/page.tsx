import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function FaccoesPage() {
  const items = getContentByCategory("factions");
  const index = getCategoryIndex("factions");

  return (
    <CategoryPage
      title="Facções"
      subtitle="Ordens e organizações do mundo"
      items={items}
      indexContent={index?.content}
      basePath="/faccoes"
    />
  );
}
