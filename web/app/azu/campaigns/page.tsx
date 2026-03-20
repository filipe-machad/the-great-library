import Link from "next/link";
import type { Metadata } from "next";
import { getCampaignsByWorld } from "@/lib/campaigns";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { Scroll } from "lucide-react";

export const metadata: Metadata = {
  title: "Campanhas — Azü | A Grande Biblioteca",
  description:
    "Campanhas e crônicas jogadas no mundo de Azü — narrativas que nascem da mesa.",
};

const statusLabels: Record<string, string> = {
  "em-andamento": "Em andamento",
  planejada: "Planejada",
  concluída: "Concluída",
};

export default function AzuCampaignsListPage() {
  const campaigns = getCampaignsByWorld("azu");

  return (
    <PageLayout showBackLink backHref="/azu" backLabel="Azü">
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Campanhas
        </h1>
        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Crônicas jogadas no mundo de Azü — narrativas que nascem da mesa e
          ganham vida nos tomos da Biblioteca.
        </p>

        <Divider symbol="✦" />

        {campaigns.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: "var(--secondary-ink)" }}
          >
            Nenhuma campanha registrada neste mundo ainda.
          </p>
        ) : (
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Link
                key={campaign.slug}
                href={`/azu/campaigns/${campaign.slug}`}
                className="block group"
              >
                <div
                  className="relative p-6 rounded-lg transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out border hover:border-[var(--accent-gold)] hover:shadow-md hover:-translate-y-0.5 hover:[background:color-mix(in_srgb,var(--card)_92%,var(--accent-gold)_8%)] overflow-hidden before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      <Scroll size={22} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3
                          className="text-lg mb-0"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--foreground)",
                          }}
                        >
                          {campaign.title}
                        </h3>
                        <span
                          className="text-xs small-caps tracking-[0.12em] px-3 py-0.5"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--secondary-ink)",
                          }}
                        >
                          {statusLabels[campaign.status] ?? campaign.status}
                        </span>
                      </div>
                      <p
                        className="text-sm italic mb-2"
                        style={{ color: "var(--accent-gold)" }}
                      >
                        {campaign.subtitle}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                      >
                        {campaign.summary}
                      </p>
                    </div>
                    <span
                      className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 inline-block mt-1"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      →
                    </span>
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
