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
