import { getSearchIndex } from "@/lib/content";
import { SearchPageClient } from "./SearchPageClient";

export default function SearchPage() {
  const searchIndex = getSearchIndex();
  return <SearchPageClient searchIndex={searchIndex} />;
}
