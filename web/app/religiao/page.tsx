import { getContentByCategory, getCategoryIndex } from "@/lib/content";
import { CategoryPage } from "@/components/content/CategoryPage";

export default function ReligiaoPage() {
  const items = getContentByCategory("religion");
  const index = getCategoryIndex("religion");

  return (
    <CategoryPage
      title="Religião"
      subtitle="O culto à Deusa da Vida"
      items={items}
      indexContent={index?.content}
      basePath="/religiao"
    />
  );
}
