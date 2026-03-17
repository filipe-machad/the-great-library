# Convenções de Nomenclatura

## Arquivos

- **kebab-case** sem acentos: `vigilia-dalva.md`, `sanctuary-of-mirrors.md`
- Extensão `.md` para todo conteúdo canônico
- `index.md` para página inicial de cada seção

## IDs Estáveis

Todo item canônico recebe um ID único no formato:

```
TGL-{TIPO}-{NÚMERO}
```

### Prefixos por tipo

| Prefixo | Tipo |
|---------|------|
| `TGL-LOC` | Location (cidade, vila, região) |
| `TGL-SITE` | Site (santuário, ruína, marco) |
| `TGL-CON` | Convergence (zona de convergência) |
| `TGL-COS` | Cosmology |
| `TGL-REL` | Religion |
| `TGL-AZU` | Azü (guias, mecânicas de azü) |
| `TGL-ARIN` | Arin (artefatos inefáveis) |
| `TGL-ART` | Artifact (artefatos imbuídos) |
| `TGL-FAC` | Faction |
| `TGL-NPC` | NPC |
| `TGL-MEC` | Mechanic |
| `TGL-ENI` | Enigma |
| `TGL-GLO` | Glossary |
| `TGL-TIM` | Timeline |

### Numeração

- Quatro dígitos com zero à esquerda: `0001`, `0002`, etc.
- Números são atribuídos sequencialmente e nunca reutilizados.

## Referências Cruzadas

- Campos `related` no frontmatter usam IDs (não nomes de arquivo).
- Links internos usam caminhos relativos ao arquivo.

## Idioma

- Nomes de pastas e arquivos: **inglês** ou **kebab-case sem acento**
- Conteúdo narrativo: **pt-BR**
- Termos próprios do cenário: grafia oficial (azü, Arin, Vigília-d'Alva)
