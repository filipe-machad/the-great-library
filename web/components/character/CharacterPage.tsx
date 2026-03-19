import type { CharacterData } from "@/lib/characters";
import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { CharacterHero } from "./CharacterHero";
import { IdentityRecord } from "./IdentityRecord";
import { CharacterBiography } from "./CharacterBiography";
import { PersonalityCards } from "./PersonalityCards";
import { ConnectionCards } from "./ConnectionCards";
import { AppearancesList } from "./AppearancesList";

interface CharacterPageProps {
  character: CharacterData;
  backHref: string;
  backLabel: string;
}

export function CharacterPage({
  character,
  backHref,
  backLabel,
}: CharacterPageProps) {
  const { frontmatter, content } = character;

  return (
    <PageLayout showBackLink backHref={backHref} backLabel={backLabel}>
      <CharacterHero frontmatter={frontmatter} />

      <Divider />

      <IdentityRecord identity={frontmatter.identity} />

      <Divider symbol="✦" />

      <CharacterBiography content={content} />

      <Divider />

      <PersonalityCards traits={frontmatter.traits} />

      <ConnectionCards connections={frontmatter.connections} />

      <AppearancesList appearances={frontmatter.appearances} />
    </PageLayout>
  );
}
