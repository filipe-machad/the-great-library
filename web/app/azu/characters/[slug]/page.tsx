import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCharacters, getCharacterBySlug } from "@/lib/characters";
import { CharacterPage } from "@/components/character/CharacterPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const characters = getAllCharacters().filter(
    (c) => c.frontmatter.world === "azu"
  );
  return characters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) return {};

  return {
    title: `${character.frontmatter.title} — Azü | A Grande Biblioteca`,
    description:
      character.frontmatter.summary || character.frontmatter.epithet,
  };
}

export default async function AzuCharacterSlugPage({ params }: Props) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) notFound();

  return (
    <CharacterPage
      character={character}
      backHref="/azu/characters"
      backLabel="Personagens"
    />
  );
}
