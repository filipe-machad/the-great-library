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
              className="group p-5 text-center flex flex-col items-center rounded-md border border-[color-mix(in_srgb,var(--border)_80%,var(--accent-gold)_20%)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[var(--accent-gold)] hover:shadow-[0_4px_14px_rgba(184,160,126,0.18)]"
              style={{
                backgroundColor: "var(--card)",
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
