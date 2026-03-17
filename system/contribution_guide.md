# Guia de Contribuição

## Workflow

### Branches

- **`main`** — somente conteúdo canônico (status: `canon`)
- **`develop`** — rascunhos e revisões (status: `draft` / `review`)
- **`feature/{tipo}-{descricao}`** — mudanças atômicas

### Commits (Conventional Commits)

```
feat(lore): nova zona de convergência TGL-CON-0005
docs(world): revisar vitrais do santuário TGL-SITE-0001
fix(mechanics): corrigir tabela de traços TGL-MEC-0001
chore(ci): adicionar verificação de frontmatter
```

---

## Criando Novo Conteúdo

1. Escolha o template apropriado em `system/templates/`
2. Copie para a pasta correta em `canon/`
3. Renomeie usando **kebab-case** sem acentos
4. Preencha o frontmatter com todos os campos obrigatórios
5. Atribua um novo ID sequencial (consulte o último usado no tipo)
6. Escreva o conteúdo seguindo o [Guia de Estilo](style_guide.md)
7. Adicione referências cruzadas (`related`) por ID

---

## Checklist de PR

- [ ] Frontmatter completo (id, title, type, status, visibility, version, updated, tags, summary)
- [ ] ID único e sequencial
- [ ] Visibilidade correta (public/gm)
- [ ] Links internos funcionando
- [ ] Referências cruzadas por ID no campo `related`
- [ ] Conteúdo em pt-BR
- [ ] Tom narrativo consistente com o Guia de Estilo
- [ ] Tags da taxonomia oficial
- [ ] Sem contradições com canon existente

---

## Versionamento

- Cada arquivo tem seu próprio campo `version` (semver: `MAJOR.MINOR.PATCH`)
- Incrementar PATCH para correções menores
- Incrementar MINOR para adições de conteúdo
- Incrementar MAJOR para reescritas ou mudanças estruturais
