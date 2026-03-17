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
  world: "/azu/mundo",
  azu: "/azu/energia",
  cosmology: "/azu/cosmologia",
  religion: "/azu/religiao",
  artifacts: "/azu/artefatos",
  factions: "/azu/faccoes",
  npcs: "/azu/npcs",
  mechanics: "/azu/mecanicas",
  enigmas: "/azu/enigmas",
  timelines: "/azu/cronologias",
  glossary: "/azu/glossario",
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
