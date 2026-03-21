import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllContos, heroObjectPositionClass } from "@/lib/contos";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { BookMarked } from "lucide-react";

export const metadata: Metadata = {
  title: "Contos — A Grande Biblioteca",
  description:
    "Contos canónicos arquivados na Biblioteca — narrativas que não dependem de uma campanha de mesa.",
};

export default function ContosIndexPage() {
  const contos = getAllContos();

  return (
    <PageLayout showBackLink backHref="/" backLabel="Início">
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Contos
        </h1>
        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Narrativas da Biblioteca em si — tomos que existem fora das crônicas
          jogadas, mas partilham o mesmo universo de ideias.
        </p>

        <Divider symbol="✦" />

        {contos.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: "var(--secondary-ink)" }}
          >
            Nenhum conto foi catalogado ainda.
          </p>
        ) : (
          <div className="space-y-4">
            {contos.map((conto) => {
              const objectPosClass = heroObjectPositionClass(
                conto.heroObjectPosition
              );
              return (
              <Link
                key={conto.slug}
                href={`/contos/${conto.slug}`}
                className="block group"
              >
                <div
                  className="relative overflow-hidden rounded-lg border shadow-none transition duration-300 ease-out motion-reduce:transition-none group-hover:shadow-md before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  {conto.heroMedia ? (
                    <div className="relative w-full h-[220px] overflow-hidden">
                      {conto.heroMedia.type === "video" ? (
                        <video
                          src={conto.heroMedia.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={`absolute inset-0 h-full w-full object-cover ${objectPosClass}`}
                        />
                      ) : (
                        <Image
                          src={conto.heroMedia.src}
                          alt={conto.heroMedia.alt ?? conto.title}
                          fill
                          className={`object-cover ${objectPosClass}`}
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
                  ) : null}
                  <div className="relative p-6 -mt-8 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <BookMarked
                        size={16}
                        className="shrink-0"
                        style={{ color: "var(--accent-gold)" }}
                      />
                      <span
                        className="text-xs small-caps tracking-[0.12em]"
                        style={{ color: "var(--secondary-ink)" }}
                      >
                        {conto.worldLabel
                          ? `Conto · ${conto.worldLabel}`
                          : "Conto"}
                      </span>
                    </div>
                    <h3
                      className="text-xl mb-2"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--foreground)",
                      }}
                    >
                      {conto.title}
                    </h3>
                    {conto.subtitle ? (
                      <p
                        className="text-sm italic mb-3 leading-relaxed"
                        style={{ color: "var(--accent-gold)" }}
                      >
                        {conto.subtitle}
                      </p>
                    ) : null}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
                    >
                      {conto.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className="text-xs uppercase tracking-wider transition-colors duration-300 ease-out group-hover:text-[var(--accent-gold)]"
                        style={{
                          color: "var(--secondary-ink)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Ler crônica
                      </span>
                      <span
                        className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-1"
                        style={{ color: "var(--accent-gold)" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
            })}
          </div>
        )}
      </article>
    </PageLayout>
  );
}
