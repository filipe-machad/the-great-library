import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getCharactersByWorld } from "@/lib/characters";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";

export const metadata: Metadata = {
  title: "Personagens — Azü | A Grande Biblioteca",
  description: "Os protagonistas e figuras centrais do mundo de Azü.",
};

export default function AzuCharactersListPage() {
  const characters = getCharactersByWorld("azu");

  return (
    <PageLayout showBackLink backHref="/azu" backLabel="Azü">
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Personagens
        </h1>
        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Os protagonistas e figuras centrais do mundo de Azü — aqueles cujas
          histórias definem eras.
        </p>

        <Divider symbol="✦" />

        {characters.length === 0 ? (
          <p
            className="text-center italic py-12"
            style={{ color: "var(--secondary-ink)" }}
          >
            Nenhum personagem registrado neste mundo ainda.
          </p>
        ) : (
          <div className="space-y-4">
            {characters.map((char) => (
              <Link
                key={char.slug}
                href={`/azu/characters/${char.slug}`}
                className="block group"
              >
                <div
                  className="relative p-6 rounded-lg flex items-center gap-6 overflow-hidden border shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 group-hover:-translate-y-0.5 group-hover:shadow-md before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  {char.frontmatter.portrait && (
                    <div
                      className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm border-2"
                      style={{
                        borderColor: "var(--accent-gold)",
                        boxShadow:
                          "inset 0 0 0 1px rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.06)",
                      }}
                    >
                      <Image
                        src={char.frontmatter.portrait}
                        alt={char.frontmatter.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="mb-1 text-lg"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--foreground)",
                      }}
                    >
                      {char.frontmatter.title}
                    </h3>
                    <p
                      className="text-sm italic leading-relaxed"
                      style={{
                        color: "var(--secondary-ink)",
                        marginBottom: 0,
                      }}
                    >
                      {char.frontmatter.epithet}
                    </p>
                  </div>
                  <span
                    className="text-xs flex-shrink-0 small-caps tracking-[0.12em] px-3 py-1"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--secondary-ink)",
                    }}
                  >
                    {char.frontmatter.status}
                  </span>
                  <span
                    className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform] duration-300 ease-out flex-shrink-0 inline-block"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </article>
    </PageLayout>
  );
}
