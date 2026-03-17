import Fuse from "fuse.js";

export interface SearchItem {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  content: string;
}

const categoryLabels: Record<string, string> = {
  world: "Mundo",
  azu: "Azü",
  cosmology: "Cosmologia",
  religion: "Religião",
  artifacts: "Artefatos",
  factions: "Facções",
  npcs: "Personagens",
  mechanics: "Mecânicas",
  enigmas: "Enigmas",
  timelines: "Cronologias",
  glossary: "Glossário",
};

const categoryPaths: Record<string, string> = {
  world: "/mundo",
  azu: "/azu",
  cosmology: "/mundo",
  religion: "/mundo",
  artifacts: "/artefatos",
  factions: "/mundo",
  npcs: "/mundo",
  mechanics: "/mecanicas",
  enigmas: "/mundo",
  timelines: "/mundo",
  glossary: "/glossario",
};

export function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category;
}

export function getCategoryPath(category: string): string {
  return categoryPaths[category] || "/";
}

export function createSearchIndex(items: SearchItem[]) {
  return new Fuse(items, {
    keys: [
      { name: "title", weight: 3 },
      { name: "summary", weight: 2 },
      { name: "tags", weight: 1.5 },
      { name: "content", weight: 1 },
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  });
}
