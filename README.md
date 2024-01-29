# vue_test_task

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Test with Jest

```sh
npm run test:unit
```

## Routes


```plaintext
- Home: /
  - Description: Homepage of the application.

- News: /news
  - Description: Page displaying a list of articles.

- Article Details: /article/:id
  - Description: Page showing details of a specific article.
  - Dynamic Segment: :id (Article ID)

- Login: /login
  - Description: Admin's login page.

- Dashboard: /admin/dashboard
  - Description: Admin's dashboard.

- Article change: /admin/article/:id
  - Description: Update or delete article page.
  - Dynamic Segment: :id (Article ID)

- Article add: /admin/article/add
  - Description: Add a new article.

- 404: /*/
  - Description: 404 page for unexisting routes
