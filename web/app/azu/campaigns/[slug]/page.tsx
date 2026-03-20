import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCampaigns, getCampaignBySlug } from "@/lib/campaigns";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCampaigns().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) return {};

  return {
    title: `${campaign.title} — Campanhas | A Grande Biblioteca`,
    description: campaign.summary,
  };
}

const typeLabels: Record<string, string> = {
  prologue: "Prólogo",
  chapter: "Capítulo",
  epilogue: "Epílogo",
  interlude: "Interlúdio",
};

export default async function CampaignDetailPage({ params }: Props) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  return (
    <PageLayout showBackLink backHref="/azu/campaigns" backLabel="Campanhas">
      <article>
        <h1 className="mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          {campaign.title}
        </h1>
        <p
          className="text-xl italic mb-4"
          style={{ color: "var(--accent-gold)" }}
        >
          {campaign.subtitle}
        </p>
        <p className="mb-12" style={{ color: "var(--secondary-ink)" }}>
          {campaign.summary}
        </p>

        <Divider symbol="✦" />

        <h2 className="mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Crônicas
        </h2>

        {campaign.chapters.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: "var(--secondary-ink)" }}
          >
            Os capítulos desta campanha ainda não foram transcritos.
          </p>
        ) : (
          <div className="space-y-4">
            {campaign.chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/azu/campaigns/${campaign.slug}/${chapter.slug}`}
                className="block group"
              >
                <div
                  className="relative overflow-hidden rounded-lg border transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-[var(--accent-gold)] hover:shadow-md hover:-translate-y-0.5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  {chapter.heroMedia && (
                    <div className="relative w-full aspect-[21/9] overflow-hidden">
                      {chapter.heroMedia.type === "video" ? (
                        <video
                          src={chapter.heroMedia.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={chapter.heroMedia.src}
                          alt={chapter.heroMedia.alt ?? chapter.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, var(--card) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                  )}
                  <div className="relative p-6 -mt-8 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen
                        size={16}
                        style={{ color: "var(--accent-gold)" }}
                      />
                      <span
                        className="text-xs small-caps tracking-[0.12em]"
                        style={{ color: "var(--secondary-ink)" }}
                      >
                        {typeLabels[chapter.type] ?? chapter.type}
                      </span>
                    </div>
                    <h3
                      className="text-xl mb-2"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--foreground)",
                      }}
                    >
                      {chapter.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                    >
                      {chapter.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className="text-xs uppercase tracking-wider transition-colors duration-200 group-hover:text-[var(--accent-gold)]"
                        style={{
                          color: "var(--secondary-ink)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Ler crônica
                      </span>
                      <span
                        className="text-xs transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: "var(--accent-gold)" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </article>
    </PageLayout>
  );
}
