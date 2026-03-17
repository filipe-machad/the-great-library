# Política de Visibilidade

## Princípio

Todo conteúdo canônico possui um campo `visibility` no frontmatter que determina se ele aparece no site público ou apenas na versão GM.

---

## Critérios

### Público (`visibility: public`)

Conteúdo que jogadores podem ler sem prejudicar a experiência:

- Geografia, cidades e locais conhecidos
- Religião (face pública do culto)
- Mecânicas de jogo (criação de personagem, traços, itens)
- Azü — propriedades gerais e guia sensorial
- Lore de conhecimento comum (mitos públicos, tradição oral)
- Facções públicas

### GM-only (`visibility: gm`)

Conteúdo que revelaria segredos ou arruinaria surpresas:

- Cosmologia profunda (Inanis, a Guerra, o Sacrifício)
- A Menina-Arin e sua verdadeira natureza
- Enigmas com soluções
- Facções secretas e suas verdadeiras motivações
- Conexões ocultas entre elementos do mundo
- Material de campanha (sessões, NPCs com segredos, puzzles)

---

## Como Marcar

No frontmatter YAML de cada arquivo:

```yaml
visibility: public    # ou gm
```

## Validação

O script `scripts/validate_frontmatter.py` verifica que todo arquivo possui o campo `visibility` com valor válido.

O hook `scripts/mkdocs_hooks.py` filtra automaticamente arquivos `gm` do build público.

---

## Regra de Ouro

> Na dúvida, marque como `gm`. É mais fácil tornar algo público depois do que esconder o que já foi revelado.
