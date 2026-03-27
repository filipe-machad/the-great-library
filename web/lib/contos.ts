import type { CampaignChapter } from "@/lib/campaigns";

/** Alinhamento vertical do recorte com `object-fit: cover` no hero (vídeo ou imagem). */
export type HeroObjectPosition = "top" | "mid" | "bottom";

/** Classes Tailwind para `object-position` (default: centro). */
export function heroObjectPositionClass(
  pos?: HeroObjectPosition
): "object-top" | "object-center" | "object-bottom" {
  switch (pos ?? "mid") {
    case "top":
      return "object-top";
    case "bottom":
      return "object-bottom";
    default:
      return "object-center";
  }
}

/** Conto canónico da Biblioteca (não ligado a uma campanha de mesa). */
export interface BibliotecaConto {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  heroMedia?: CampaignChapter["heroMedia"];
  /** Recorte do hero: topo, meio ou fundo. Omitido = meio (comportamento anterior ao `object-top`). */
  heroObjectPosition?: HeroObjectPosition;
  /** Rótulo curto para o cabeçalho, ex.: "Azü". */
  worldLabel?: string;
  /** Corpo narrativo a renderizar. */
  body: "laeyla";
  /**
   * Sem apêndice mobile nem coluna de cards (apenas texto após o ✦).
   * Läyla usa layout completo com tomos.
   */
  soloLayout?: boolean;
  /** Epígrafe opcional sob o título (blockquote). */
  epigraph?: string;
  tags: string[];
}

const contos: BibliotecaConto[] = [
  {
    slug: "laeyla",
    title: "Läyla",
    subtitle:
      "Da anja caída à espada que fala — o conto de Aralyn Maizië até escolher a noite.",
    summary:
      "Aamirah Maizië cai na Floresta Fria e renasce sem memória; sua filha Aralyn cresce com um vazio, firma um pacto com uma lâmina antiga e herda A Perseguidora Lunar antes de renegar o nome da luz e chamar-se apenas Läyla.",
    heroMedia: {
      type: "video",
      src: "/assets/videos/burning-rose-ghostblade-4k-live-wallpaper.mp4",
    },
    worldLabel: "D&D",
    body: "laeyla",
    tags: ["Conto", "Fantasia Alta", "Floresta Fria · Nägnu"],
  },
];

export function getAllContos(): BibliotecaConto[] {
  return contos;
}

export function getContoBySlug(slug: string): BibliotecaConto | undefined {
  return contos.find((c) => c.slug === slug);
}
