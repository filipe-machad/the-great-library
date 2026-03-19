import { BookOpen } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SectionHeading } from "./SectionHeading";
import { MdxComponents } from "@/components/content/MdxComponents";

interface CharacterBiographyProps {
  content: string;
}

export function CharacterBiography({ content }: CharacterBiographyProps) {
  return (
    <section className="mb-20">
      <SectionHeading icon={BookOpen} title="Crônicas e Biografia" />
      <article className="drop-cap">
        <MDXRemote source={content} components={MdxComponents} />
      </article>
    </section>
  );
}
