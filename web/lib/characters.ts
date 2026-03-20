import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CHARACTERS_DIR = path.join(process.cwd(), "..", "canon", "characters");

export interface CharacterConnection {
  name: string;
  type: string;
  relationship: string;
  icon: string;
  href?: string;
}

export interface CharacterAppearance {
  title: string;
  role: "principal" | "mention";
  href?: string;
  /** Quando true, indica que o card refere-se à página atual (estado ativo). */
  active?: boolean;
}

export interface CharacterIdentity {
  fullName: string;
  race: string;
  class: string;
  titles: string;
  origin: string;
  alignment: string;
  age: string;
}

export interface CharacterTraits {
  virtues: string;
  flaws: string;
  motivation: string;
  notableItems: string;
}

export interface CharacterFrontmatter {
  id: string;
  title: string;
  world: string;
  registryNumber: number;
  epithet: string;
  quote: string;
  status: string;
  statusDetail: string;
  portrait: string;
  summary?: string;
  identity: CharacterIdentity;
  traits: CharacterTraits;
  connections: CharacterConnection[];
  appearances: CharacterAppearance[];
}

export interface CharacterData {
  slug: string;
  frontmatter: CharacterFrontmatter;
  content: string;
}

export function getAllCharacters(): CharacterData[] {
  if (!fs.existsSync(CHARACTERS_DIR)) return [];

  const files = fs.readdirSync(CHARACTERS_DIR).filter((f) => f.endsWith(".md"));
  const characters: CharacterData[] = [];

  for (const file of files) {
    const filePath = path.join(CHARACTERS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    characters.push({
      slug: path.basename(file, ".md"),
      frontmatter: data as CharacterFrontmatter,
      content,
    });
  }

  return characters;
}

export function getCharacterBySlug(slug: string): CharacterData | undefined {
  const filePath = path.join(CHARACTERS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as CharacterFrontmatter,
    content,
  };
}

export function getCharactersByWorld(world: string): CharacterData[] {
  return getAllCharacters().filter((c) => c.frontmatter.world === world);
}
