import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/mundo", destination: "/azu/mundo", permanent: true },
      { source: "/mundo/:path*", destination: "/azu/mundo/:path*", permanent: true },
      { source: "/artefatos", destination: "/azu/artefatos", permanent: true },
      { source: "/artefatos/:path*", destination: "/azu/artefatos/:path*", permanent: true },
      { source: "/mecanicas", destination: "/azu/mecanicas", permanent: true },
      { source: "/mecanicas/:path*", destination: "/azu/mecanicas/:path*", permanent: true },
      { source: "/glossario", destination: "/azu/glossario", permanent: true },
      { source: "/glossario/:path*", destination: "/azu/glossario/:path*", permanent: true },
      { source: "/cosmologia", destination: "/azu/cosmologia", permanent: true },
      { source: "/cosmologia/:path*", destination: "/azu/cosmologia/:path*", permanent: true },
      { source: "/religiao", destination: "/azu/religiao", permanent: true },
      { source: "/religiao/:path*", destination: "/azu/religiao/:path*", permanent: true },
      { source: "/faccoes", destination: "/azu/faccoes", permanent: true },
      { source: "/faccoes/:path*", destination: "/azu/faccoes/:path*", permanent: true },
      { source: "/npcs", destination: "/azu/npcs", permanent: true },
      { source: "/npcs/:path*", destination: "/azu/npcs/:path*", permanent: true },
      { source: "/enigmas", destination: "/azu/enigmas", permanent: true },
      { source: "/enigmas/:path*", destination: "/azu/enigmas/:path*", permanent: true },
      { source: "/cronologias", destination: "/azu/cronologias", permanent: true },
      { source: "/cronologias/:path*", destination: "/azu/cronologias/:path*", permanent: true },
      // Old /azu/[slug] (energy docs) -> /azu/energia/[slug]
      { source: "/azu/azu", destination: "/azu/energia/azu", permanent: true },
      { source: "/azu/sensory-guide", destination: "/azu/energia/sensory-guide", permanent: true },
      {
        source: "/azu/campaigns/laeyla/conto",
        destination: "/contos/laeyla",
        permanent: true,
      },
      {
        source: "/azu/campaigns/laeyla",
        destination: "/contos/laeyla",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
