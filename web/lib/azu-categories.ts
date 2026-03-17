/**
 * Map URL segment under /azu to canon category and display labels.
 * Used by dynamic routes app/azu/[category]/page.tsx and [slug]/page.tsx.
 */
export const AZU_CATEGORY_SEGMENTS = [
  "energia",
  "mundo",
  "artefatos",
  "mecanicas",
  "glossario",
  "cosmologia",
  "religiao",
  "faccoes",
  "npcs",
  "enigmas",
  "cronologias",
] as const;

export type AzuCategorySegment = (typeof AZU_CATEGORY_SEGMENTS)[number];

export interface AzuCategoryConfig {
  segment: AzuCategorySegment;
  canonCategory: string;
  title: string;
  subtitle: string;
}

export const AZU_CATEGORIES: AzuCategoryConfig[] = [
  { segment: "energia", canonCategory: "azu", title: "Azü", subtitle: "A energia vital que rege o mundo" },
  { segment: "mundo", canonCategory: "world", title: "O Mundo", subtitle: "Locais, sítios sagrados, zonas de convergência e geografia" },
  { segment: "artefatos", canonCategory: "artifacts", title: "Artefatos", subtitle: "Arins e itens imbuídos — catalisadores da azü interior" },
  { segment: "mecanicas", canonCategory: "mechanics", title: "Mecânicas", subtitle: "Sistema de jogo, regras e efeitos" },
  { segment: "glossario", canonCategory: "glossary", title: "Glossário", subtitle: "Termos e definições do cenário narrativo" },
  { segment: "cosmologia", canonCategory: "cosmology", title: "Cosmologia", subtitle: "As origens do mundo e suas forças primordiais" },
  { segment: "religiao", canonCategory: "religion", title: "Religião", subtitle: "O culto à Deusa da Vida" },
  { segment: "faccoes", canonCategory: "factions", title: "Facções", subtitle: "Ordens e organizações do mundo" },
  { segment: "npcs", canonCategory: "npcs", title: "Figuras Notáveis", subtitle: "Personagens e figuras importantes do mundo" },
  { segment: "enigmas", canonCategory: "enigmas", title: "Enigmas", subtitle: "Mistérios e puzzles do mundo" },
  { segment: "cronologias", canonCategory: "timelines", title: "Cronologias", subtitle: "Eras e eventos históricos" },
];

const segmentToConfig = new Map(AZU_CATEGORIES.map((c) => [c.segment, c]));

export function getAzuCategoryConfig(segment: string): AzuCategoryConfig | null {
  return segmentToConfig.get(segment as AzuCategorySegment) ?? null;
}

export function getAzuBasePath(segment: AzuCategorySegment): string {
  return `/azu/${segment}`;
}
