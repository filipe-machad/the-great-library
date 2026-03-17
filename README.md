# The Great Library

> *"Viver é tecer. Cessar é abrir espaço. Entre os dois, tudo acontece."*

Repositório canônico do universo narrativo de fantasia medieval que servirá de base para contos, narrativas e um sistema de RPG original. Aqui está consolidado todo o conhecimento do mundo: cosmologia, mecânicas, geografia, lore oculta e material de campanha.

---

## Visão Geral do Mundo

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
