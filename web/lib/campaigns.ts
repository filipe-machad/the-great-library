export interface CampaignChapter {
  slug: string;
  title: string;
  subtitle?: string;
  type: "prologue" | "chapter" | "epilogue" | "interlude";
  summary: string;
  heroMedia?: {
    type: "image" | "video";
    src: string;
    alt?: string;
    poster?: string;
  };
  /** Recorte do hero (imagem/vídeo); omitido = centro. */
  heroObjectPosition?: "top" | "mid" | "bottom";
  /** Etiquetas sob o título; senão usam-se as predefinidas da crónica. */
  tags?: string[];
  /**
   * Só narrativa após o ✦, sem apêndice nem cards laterais.
   * O slug identifica o componente de corpo em `NarrativePage`.
   */
  narrativeOnly?: boolean;
}

export interface Campaign {
  slug: string;
  title: string;
  subtitle: string;
  status: "em-andamento" | "planejada" | "concluída";
  world: string;
  summary: string;
  chapters: CampaignChapter[];
}

const campaigns: Campaign[] = [
  {
    slug: "o-sonho-de-deus",
    title: "O Sonho de Deus",
    subtitle: "Uma campanha sobre memória, poder e o preço da verdade",
    status: "em-andamento",
    world: "azu",
    summary:
      "Quando pergaminhos roubados de um santuário esquecido começam a reescrever a realidade ao redor, um grupo improvável é arrastado para os vestígios de um sonho que nunca deveria ter sido sonhado.",
    chapters: [
      {
        slug: "prologo-a-fuga",
        title: "Prólogo — A Fuga",
        subtitle: "Noite profunda. Uma escuridão irregular e amorfa.",
        type: "prologue",
        summary:
          "Um vulto anônimo foge pela noite, carregando pergaminhos que não lhe pertencem. Atrás de si, algo desperta.",
        heroMedia: {
          type: "video",
          src: "/assets/videos/crystal-grave-of-a-warrior-WIDE-live.mp4",
        },
      },
      {
        slug: "prologo-ii-calculo-das-sombras",
        title: "Prólogo II: O Cálculo das Sombras",
        subtitle: "No alto do Obelisco de Vidro Negro, a métrica da Lei falha.",
        type: "prologue",
        summary:
          "Dois arquitetos da Lei ajustam um icosaedro impossível enquanto fragmentos da ordem se perdem na montanha — e um espelho trincado guarda um reflexo proibido.",
        heroMedia: {
          type: "image",
          src: "/assets/illustrations/Mnveil_A_close-up_conceptual_photograph_of_a_small_antique_he_a657ea99-9a47-4e12-aa17-8d0a8f7351ce_2.png",
          alt: "Close-up de uma peça geométrica antiga e enigmática, luz suave sobre metal ou pedra escura",
        },
        heroObjectPosition: "mid",
        tags: ["Crónica", "Prólogo", "Obelisco de Vidro Negro", "Mundo de Azü"],
        narrativeOnly: true,
      },
    ],
  },
  {
    slug: "cinzas-do-primeiro-fogo",
    title: "Cinzas do Primeiro Fogo",
    subtitle: "Os ecos da criação ainda ardem",
    status: "planejada",
    world: "azu",
    summary:
      "Nos confins do deserto de Aethel, ruínas de uma era anterior despertam. Um grupo de artesãos é convocado para investigar anomalias na azü — e descobre que alguns segredos foram enterrados por boas razões.",
    chapters: [],
  },
  {
    slug: "a-cancao-que-restou",
    title: "A Canção que Restou",
    subtitle: "Quando até o silêncio esquece",
    status: "planejada",
    world: "azu",
    summary:
      "Uma melodia impossível ecoa pelos vales do norte, e todos que a ouvem perdem fragmentos de memória. Os investigadores devem encontrar a origem antes que a canção consuma o que resta.",
    chapters: [],
  },
];

export function getAllCampaigns(): Campaign[] {
  return campaigns;
}

export function getCampaignsByWorld(world: string): Campaign[] {
  return campaigns.filter((c) => c.world === world);
}

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}

export function getChapterBySlug(
  campaignSlug: string,
  chapterSlug: string
): { campaign: Campaign; chapter: CampaignChapter } | undefined {
  const campaign = getCampaignBySlug(campaignSlug);
  if (!campaign) return undefined;
  const chapter = campaign.chapters.find((ch) => ch.slug === chapterSlug);
  if (!chapter) return undefined;
  return { campaign, chapter };
}
