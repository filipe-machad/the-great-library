# A Grande Biblioteca *(The Great Library)*

> *Onde a memória vive eterna.*

**A Grande Biblioteca** é um artifício para catalogar mundos e suas histórias. Ela existe num plano fora dos acontecimentos e das épocas — santuário e arquivo ao mesmo tempo — onde ficam guardados os tomos de cada mundo: crônicas, narrativas e as verdades que os habitam. **Artêmis**, a bibliotecária, mantém os acervos e apresenta aos visitantes os mundos catalogados.

Este repositório é a base **canônica** dessa biblioteca: Markdown estruturado, sites MkDocs (público e GM) e a aplicação web em `web/`. Hoje o acervo mais desenvolvido é o mundo de **Azü** (fantasia medieval, contos, campanhas e sistema de RPG); outros mundos podem conviver no mesmo projeto à medida que forem ganhando tomos próprios.

---

## Azü — visão geral do mundo (canon principal)

O mundo é sustentado por uma energia vital chamada **azü** — uma força viva que permeia lugares e pessoas. Em certos pontos ela se adensa, tornando-se visível, tátil e manipulável. Ao longo dos séculos, **artesãos** aprenderam a extrair, purificar e tecer a azü em formas úteis: desde pequenos **orbes** condensados até **artefatos imbuídos** e, em casos raríssimos, **Arin** — Artefatos Inefáveis de poder quase inimaginável.

A maioria da população cultua a **Deusa da Vida**, cujos templos e santuários pontilham cidades e campos. Os valores pregados — autodomínio, responsabilidade e respeito aos ciclos — refletem uma civilização que aprendeu a conviver com uma força maior do que qualquer indivíduo.

A regra fundamental deste universo: **artefatos não criam poderes**. Eles funcionam como catalisadores que **amplificam aquilo que já existe** dentro de cada ser.

---

## Estrutura do Repositório

```
/
├─ canon/                    # Todo conteúdo canônico
│  ├─ world/                 # Locais, sítios, zonas de convergência
│  │  ├─ locations/          # Cidades, vilas, regiões
│  │  ├─ sites/              # Santuários, ruínas, marcos
│  │  ├─ convergence-zones/  # Fontes, Veias, Santuários de azü
│  │  └─ geography/          # Climas, biomas, rotas
│  ├─ cosmology/             # Origens do mundo
│  ├─ religion/              # Culto à Deusa da Vida
│  ├─ azu/                   # Guia sensorial e mecânicas de azü
│  ├─ artifacts/             # Arins e itens imbuídos
│  ├─ factions/              # Ordens e organizações
│  ├─ npcs/                  # Figuras notáveis
│  ├─ mechanics/             # Sistema de jogo e regras
│  ├─ enigmas/               # Mistérios e puzzles
│  ├─ timelines/             # Cronologias e eras
│  └─ glossary/              # Termos do cenário
├─ campaigns/                # Material de campanha (fora do canon)
├─ assets/                   # Referências visuais
├─ system/                   # Instruções, guias e templates
│  ├─ ai_instructions.md
│  ├─ style_guide.md
│  ├─ taxonomy.md
│  ├─ naming_conventions.md
│  ├─ visibility_policy.md
│  ├─ contribution_guide.md
│  └─ templates/             # Templates por tipo de conteúdo
├─ scripts/                  # Validação e build
├─ mkdocs.yml                # Config do site público
├─ mkdocs-gm.yml             # Config do site GM (completo)
└─ .github/                  # CI/CD e templates de issue/PR
```

---

## Canon vs. Campanha

- **`canon/`** — Conteúdo canônico com frontmatter YAML (IDs, status, visibilidade, versão). Publicado via MkDocs.
- **`campaigns/`** — Material de mesa isolado (sessões, handouts, NPCs de campanha). Não faz parte do site.

---

## Aplicação Web (Next.js)

A interface web está em `web/`. Para rodar localmente:

```bash
cd web && npm install && npm run dev
```

Acesse http://localhost:3000

### Deploy na Vercel

O app Next.js está no subdiretório `web/`. Para o deploy funcionar:

1. No **Vercel Dashboard** → seu projeto → **Settings** → **General**
2. Em **Root Directory**, clique em **Edit** e defina: `web`
3. Salve e faça um novo deploy

Sem isso, a Vercel não encontra o `package.json` com Next.js e o build falha.

---

## Publicação

O repositório gera dois sites via MkDocs:

- **Site público** (`mkdocs.yml`) — Exclui conteúdo marcado como `visibility: gm`
- **Site GM** (`mkdocs-gm.yml`) — Inclui todo o conteúdo canônico

```bash
pip install -r requirements.txt
mkdocs build --config-file mkdocs.yml      # site público → site/public/
mkdocs build --config-file mkdocs-gm.yml   # site GM → site/gm/
mkdocs serve                                # preview local
```

---

## Convenções

- **Nomes de arquivos**: kebab-case sem acentos (`vigilia-dalva.md`)
- **Conteúdo**: português (PT-BR)
- **IDs**: `TGL-{TIPO}-{NÚMERO}` (ex: `TGL-LOC-0001`)
- **Frontmatter**: YAML obrigatório com id, title, type, status, visibility, version, updated, tags, summary
- **Nomes próprios do mundo**: grafia oficial (azü, Vigília-d'Alva, Arin, etc.)
- **Personagens sem nome definido**: `[nome a definir]`
- **Conflitos não resolvidos**: `[CONTRADIÇÃO ENCONTRADA]`

---

## Referências

- [Guia de Estilo](system/style_guide.md)
- [Taxonomia de Tags](system/taxonomy.md)
- [Política de Visibilidade](system/visibility_policy.md)
- [Convenções de Nomenclatura](system/naming_conventions.md)
- [Guia de Contribuição](system/contribution_guide.md)

## Licença

[MIT](LICENSE)
