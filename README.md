# GitHub Blog

## Sobre
Projeto da trilha de React da Rocketseat focada em consumo de API e performance com o React, focando na construção de componentes respeitando os ciclos de renderização do React e reduzind renderizações desnecessárias através dos hooks `useMemo` e `useContextSelector`.



### Requisitos

**Funcionalidades base**
- [x] Busca de dados do perfil do GitHub
- [x] Listar as issues de um repositório e permitir filtrar elas por texto
- [x] Visualização dos detalhes de uma issue em uma rota dedicada

**Requisitos obrigatórios**
- Perfil
  - [x] Buscar dados na API de usuários do GitHub: `GET https://api.github.com/users/{username}`
  - [x] Exibir avatar, nome, bio, username, quantidade de seguidores e link para o GitHub.
- Lista de posts (issues) + busca
  - [x] Criar um repositório público e utilizar issues como posts.
  - [x] Fazer busca paginada pela API: 
    - `GET https://api.github.com/search/issues?q={query} repo:{username}/{repo}`
    - Quando não localizar um termo, ela deve exibir a lista das últimas issues do repositório.
  - [x] Renderizar cards com: Título, data relativa, resumo do corpo (primeiras linhas) e metadados (comentários, etc).
  - [x] Campo de busca que consuta a Search API (debounce recomendado)
- Post (issue) completo
  - [x] Rota dinâmica (ex.: `/post/:number`)
  - [x] Buscar via GitHub Issues API:
    - `GET https://api.github.com/repos/{username}/{repo}/issues/{issues}`
  - [x] Renderizar o corpo em Markdown -> HTML (ex.: `react-markdown` + plugins).
  - [x] Cabeçalho do post: título, link "ver no GitHub", data, autor, contagem de comentários.
- Limites e erros da API
  - [x] Tratar **rate limit** (mensagem amigável e fallback)
  - [x] Exibir estados de loading e erro nas requisições
- Roteamento e acessibilidade
  - [x] React Router (para rotas Home e Post)
  - [x] Links e botões com rótulos acessíveis; contraste e foco visível.
  - [x] Navegação de retorno ("Voltar") no detalhe do post.

### Tasks

- [x] Criar projeto com Vite + React + TypeScript
- [x] Criar página Home
- [x] Criar página Issue
- [x] Configurar rotas no `react-router-dom`
- [x] Buscar dados do perfil usando GitHub Users API
- [x] Listar issues de um repositório via GitHub Search API
- [x] Exibir post completo via GitHub Issues API
- [x] Tratar rate limit da API

...

## Tecnologias

- TypeScript
- React (hooks, context API, state)
- Vite
- React Router DOM

...

## Layout

-  [Layout Link](https://www.figma.com/community/file/1138814951106121051/github-blog)
