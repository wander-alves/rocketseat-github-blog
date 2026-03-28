# GitHub Blog

## Sobre
Projeto da trilha de React da Rocketseat focada em consumo de API e performance com o React, focando na construção de componentes respeitando os ciclos de renderização do React e reduzind renderizações desnecessárias através dos hooks `useMemo` e `useContextSelector`.



### Requisitos

**Funcionalidades base**
- [x] Busca de dados do perfil do GitHub
- [ ] Listar as issues de um repositório e permitir filtrar elas por texto
- [ ] Visualização dos detalhes de uma issue em uma rota dedicada

**Requisitos obrigatórios**
- Perfil
  - [x] Buscar dados na API de usuários do GitHub: `GET https://api.github.com/users/{username}`
  - [ ] Exibir avatar, nome, bio, username, quantidade de seguidores e link para o GitHub.
- Lista de posts (issues) + busca
  - [ ] Criar um repositório público e utilizar issues como posts.
  - [ ] Fazer busca paginada pela API: 
    - `GET https://api.github.com/search/issues?q={query}` repo:{username}/{repo}
    - `GET https://api.github.com/{username}/{repo}/issues?q={query}`
    - Quando não localizar um termo, ela deve exibir a lista das últimas issues do repositório.
  - [ ] Renderizar cards com: Título, data relativa, resumo do corpo (primeiras linhas) e metadados (comentários, etc).
  - [ ] Campo de busca que consuta a Search API (debounce recomendado)
- Post (issue) completo
  - [ ] Rota dinâmica (ex.: `/post/:number`)
  - [ ] Buscar via GitHub Issues API:
    - `GET https://api.github.com/repos/{username}/{repo}/issues/{issues}`
  - [ ] Renderizar o corpo em Markdown -> HTML (ex.: `react-markdown` + plugins).
  - [ ] Cabeçalho do post: título, link "ver no GitHub", data, autor, contagem de comentários.
- Limites e erros da API
  - [ ] Tratar **rate limit** (mensagem amigável e fallback)
  - [ ] Exibir estados de loading e erro nas requisições
  - [ ] Opcional: configurar **token pessoal** para elevar limites (header `Authorization: token`)
- Roteamento e acessibilidade
  - [ ] React Router (para rotas Home e Post)
  - [ ] Links e botões com rótulos acessíveis; contraste e foco visível.
  - [ ] Navegação de retorno ("Voltar") no detalhe do post.

### Tasks

- [x] Criar projeto com Vite + React + TypeScript
- [ ] Criar página Home
- [ ] Criar página Issue
- [ ] Configurar rotas no `react-router-dom`
- [ ] Buscar dados do perfil usando GitHub Users API
- [ ] Listar issues de um repositório via GitHub Search API
- [ ] Exibir post completo via GitHub Issues API
- [ ] Tratar rate limit da API

...

## Tecnologias

- TypeScript
- React (hooks, context API, state)
- Vite
- React Router DOM
- Zod

...

## Layout

-  [Layout Link](https://www.figma.com/community/file/1138814951106121051/github-blog)
