import { Shield, HeartCrack, Target, Backpack } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { UserRound } from "lucide-react";
import type { CharacterTraits } from "@/lib/characters";

interface PersonalityCardsProps {
  traits: CharacterTraits;
}

const TRAIT_CONFIG = [
  { key: "virtues" as const, label: "Virtudes", icon: Shield },
  { key: "flaws" as const, label: "Falhas", icon: HeartCrack },
  { key: "motivation" as const, label: "Motivação", icon: Target },
  { key: "notableItems" as const, label: "Itens Notáveis", icon: Backpack },
];

export function PersonalityCards({ traits }: PersonalityCardsProps) {
  return (
    <section className="mb-20">
      <SectionHeading icon={UserRound} title="Traços e Personalidade" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRAIT_CONFIG.map(({ key, label, icon: Icon }) => {
          const value = traits[key];
          if (!value) return null;

          return (
            <div
              key={key}
              className="group relative overflow-hidden p-5 text-center flex flex-col items-center rounded-lg border transition duration-300 ease-out hover:shadow-md before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out hover:before:h-full"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <Icon
                size={24}
                className="mb-3 transition-transform duration-200 ease-out group-hover:scale-110"
                style={{ color: "var(--accent-gold)" }}
              />
              <p
                className="small-caps text-lg tracking-[0.1em] mb-2 font-medium"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--foreground)",
                }}
              >
                {label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--secondary-ink)", marginBottom: 0 }}
              >
                {value}
              </p>
            </div>
            );
          })}
      </div>
    </section>
  );
}
