import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function CronologiasPage() {
  const items = getContentByCategory("timelines");
  const index = getCategoryIndex("timelines");

  return (
    <CategoryPage
      title="Cronologias"
      subtitle="Eras e eventos históricos"
      items={items}
      indexContent={index?.content}
      basePath="/cronologias"
    />
  );
}
