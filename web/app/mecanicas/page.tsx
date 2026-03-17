import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function MecanicasPage() {
  const items = getContentByCategory("mechanics");
  const index = getCategoryIndex("mechanics");

  return (
    <CategoryPage
      title="Mecânicas"
      subtitle="Sistema de jogo, regras e efeitos"
      items={items}
      indexContent={index?.content}
      basePath="/mecanicas"
    />
  );
}
