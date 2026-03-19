import { Fingerprint } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import type { CharacterIdentity } from "@/lib/characters";

interface IdentityRecordProps {
  identity: CharacterIdentity;
}

const FIELD_MAP: { key: keyof CharacterIdentity; label: string }[] = [
  { key: "fullName", label: "Nome Completo" },
  { key: "species", label: "Espécie" },
  { key: "titles", label: "Títulos" },
  { key: "class", label: "Classe" },
  { key: "origin", label: "Origem" },
  { key: "alignment", label: "Alinhamento" },
  { key: "age", label: "Idade Estimada" },
];

function shouldShowDivider(idx: number, total: number, cols: number): boolean {
  const lastRowStart = total - (total % cols || cols);
  return idx < lastRowStart;
}

export function IdentityRecord({ identity }: IdentityRecordProps) {
  const fields = FIELD_MAP.filter((f) => identity[f.key]);

  return (
    <section className="mb-20">
      <SectionHeading icon={Fingerprint} title="Registro de Identidade" />
      <div
        className="p-6 sm:p-8"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {fields.map((field, idx) => (
            <div
              key={field.key}
              className="py-3"
              style={{
                borderBottom: shouldShowDivider(idx, fields.length, 2)
                  ? "1px solid var(--divider)"
                  : undefined,
              }}
            >
              <p
                className="small-caps text-xs tracking-[0.12em] mb-1"
                style={{ color: "var(--secondary-ink)" }}
              >
                {field.label}
              </p>
              <p
                className="text-base"
                style={{
                  color: "var(--foreground)",
                  marginBottom: 0,
                }}
              >
                {identity[field.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
